-- Authoritative multiplayer gameplay hardening.
-- The host publishes the selected local content bank before a room starts.
-- Correct answers stay in game_content and are only returned after the answer timer ends.
alter table public.room_answers add column if not exists new_marks integer not null default 0;

create or replace function public.set_room_ready(p_room uuid, p_is_ready boolean)
returns void
language plpgsql
security definer
set search_path = public
as $
declare r public.rooms;
begin
  select * into r from public.rooms where id = p_room;
  if not found or r.status <> 'waiting' then raise exception 'Room is not accepting readiness changes'; end if;
  update public.room_players set is_ready = p_is_ready
    where room_id = p_room and user_id = auth.uid();
  if not found then raise exception 'You are not a member of this room'; end if;
end;
$;
grant execute on function public.set_room_ready(uuid, boolean) to authenticated;

create or replace function public.kick_room_player(p_room uuid, p_player uuid)
returns void
language plpgsql
security definer
set search_path = public
as $
declare r public.rooms;
begin
  select * into r from public.rooms where id = p_room;
  if not found then raise exception 'Room not found'; end if;
  if r.host_id <> auth.uid() then raise exception 'Only the host can remove players'; end if;
  if r.status <> 'waiting' then raise exception 'Players cannot be removed after the match starts'; end if;
  delete from public.room_players
    where id = p_player and room_id = p_room and is_host = false;
  if not found then raise exception 'Player not found or cannot be removed'; end if;
end;
$;
grant execute on function public.kick_room_player(uuid, uuid) to authenticated;

create or replace function public.publish_room_questions(p_room uuid, p_questions jsonb)
returns text[]
language plpgsql
security definer
set search_path = public
as $$
declare
  r public.rooms;
  item jsonb;
  v_id text;
  v_game_slug text;
  v_ids text[] := '{}';
  v_options text[];
  v_count integer;
  v_level integer;
  v_challenge_index smallint;
  v_rows integer;
begin
  select * into r from public.rooms where id = p_room for update;
  if not found then raise exception 'Room not found'; end if;
  if r.host_id <> auth.uid() then raise exception 'Only the host can publish match questions'; end if;
  if r.status <> 'waiting' then raise exception 'Questions can only be published before the match starts'; end if;
  if p_questions is null or jsonb_typeof(p_questions) <> 'array' then raise exception 'Questions must be provided as an array'; end if;
  v_count := jsonb_array_length(p_questions);
  if v_count < 1 or v_count > 50 then raise exception 'A match must contain between 1 and 50 questions'; end if;

  for item in select value from jsonb_array_elements(p_questions)
  loop
    v_id := nullif(trim(item->>'id'), '');
    v_game_slug := nullif(trim(item->>'game_slug'), '');
    v_level := coalesce(nullif(item->>'level', '')::integer, 1);
    v_challenge_index := coalesce(nullif(item->>'challenge_index', '')::smallint, 1);
    if v_id is null or v_game_slug is distinct from r.game_id
       or nullif(trim(item->>'question_text'), '') is null
       or nullif(trim(item->>'correct_answer'), '') is null
       or nullif(trim(item->>'reference'), '') is null then
      raise exception 'A question is missing its ID, selected game, prompt, answer key, or scripture reference';
    end if;
    v_options := array(select jsonb_array_elements_text(coalesce(item->'options', '[]'::jsonb)));
    insert into public.game_content (
      id, game_slug, level, challenge_index, question_text, options,
      correct_answer, explanation, reference, metadata
    ) values (
      v_id, r.game_id, v_level, v_challenge_index, item->>'question_text', coalesce(v_options, '{}'),
      item->>'correct_answer', coalesce(item->>'explanation', ''), item->>'reference',
      coalesce(item->'metadata', '{}'::jsonb)
    )
    on conflict (id) do update set
      level = excluded.level,
      challenge_index = excluded.challenge_index,
      question_text = excluded.question_text,
      options = excluded.options,
      correct_answer = excluded.correct_answer,
      explanation = excluded.explanation,
      reference = excluded.reference,
      metadata = excluded.metadata
    where public.game_content.game_slug = excluded.game_slug;
    get diagnostics v_rows = row_count;
    if v_rows = 0 then raise exception 'Question ID % is already registered to another game', v_id; end if;
    v_ids := array_append(v_ids, v_id);
  end loop;

  if cardinality(v_ids) <> (select count(distinct x) from unnest(v_ids) x) then
    raise exception 'Duplicate question IDs are not allowed in one match';
  end if;
  return v_ids;
end;
$$;
grant execute on function public.publish_room_questions(uuid, jsonb) to authenticated;

create or replace function public.start_game(p_room uuid, p_question_ids text[])
returns public.rooms
language plpgsql
security definer
set search_path = public
as $$
declare r public.rooms; v_count integer;
begin
  select * into r from public.rooms where id = p_room for update;
  if not found then raise exception 'Room not found'; end if;
  if r.host_id <> auth.uid() then raise exception 'Only the host can start the session'; end if;
  if r.status <> 'waiting' then raise exception 'Room is not waiting'; end if;
  if coalesce(array_length(p_question_ids, 1), 0) < 1 or array_length(p_question_ids, 1) > 50 then
    raise exception 'A match must contain between 1 and 50 questions';
  end if;
  select count(*) into v_count from public.game_content gc
    where gc.id = any(p_question_ids) and gc.game_slug = r.game_id;
  if v_count <> array_length(p_question_ids, 1) then
    raise exception 'One or more questions do not belong to the selected game';
  end if;
  update public.rooms set status = 'playing', question_ids = p_question_ids,
    current_question_index = 0, question_started_at = clock_timestamp()
    where id = p_room returning * into r;
  return r;
end;
$$;
grant execute on function public.start_game(uuid, text[]) to authenticated;

create or replace function public.submit_room_answer(
  p_room uuid, p_question_id text, p_answer text, p_duration_ms integer default 0
)
returns table(
  is_correct boolean, correct_answer text, explanation text, reference text,
  marks_awarded integer, current_score integer
)
language plpgsql
security definer
set search_path = public
as $$
declare
  r public.rooms;
  v_correct text;
  v_explanation text;
  v_reference text;
  v_is_correct boolean;
  v_marks integer := 0;
  v_score integer := 0;
  v_user uuid := auth.uid();
  v_award_rows integer := 0;
  v_answer_id uuid;
begin
  if v_user is null then raise exception 'Authentication required'; end if;
  select * into r from public.rooms where id = p_room for update;
  if not found or r.status <> 'playing' then raise exception 'Room is not currently active'; end if;
  if not exists (select 1 from public.room_players rp where rp.room_id = p_room and rp.user_id = v_user) then
    raise exception 'Player is not a member of this room';
  end if;
  if r.current_question_index < 0
     or r.current_question_index >= coalesce(array_length(r.question_ids, 1), 0)
     or r.question_ids[r.current_question_index + 1] <> p_question_id then
    raise exception 'This answer does not match the active question';
  end if;
  if r.question_started_at is null or clock_timestamp() >
     r.question_started_at + make_interval(secs => r.question_duration_seconds) then
    raise exception 'The answer period has ended';
  end if;
  if exists (select 1 from public.room_answers a
    where a.room_id = p_room and a.user_id = v_user and a.question_id = p_question_id) then
    raise exception 'Answer already submitted for this challenge';
  end if;

  select gc.correct_answer, gc.explanation, gc.reference
    into v_correct, v_explanation, v_reference
    from public.game_content gc where gc.id = p_question_id and gc.game_slug = r.game_id;
  if v_correct is null then
    select qk.answer, qk.explanation, qk.reference
      into v_correct, v_explanation, v_reference
      from public.question_keys qk where qk.question_id = p_question_id;
  end if;
  if v_correct is null then raise exception 'The answer key has not been published for this question'; end if;

  v_is_correct := lower(trim(coalesce(p_answer, ''))) = lower(trim(v_correct));
  v_marks := case when v_is_correct then 10 else 0 end;

  insert into public.room_answers(room_id, user_id, question_id, answer, is_correct, marks, duration_ms)
  values (p_room, v_user, p_question_id, coalesce(p_answer, ''), v_is_correct, v_marks, greatest(0, coalesce(p_duration_ms, 0)))
  returning id into v_answer_id;

  if v_is_correct then
    insert into public.user_awarded_challenges(user_id, game_slug, level, challenge_index, marks_awarded)
    select v_user, gc.game_slug, gc.level, gc.challenge_index, 10
      from public.game_content gc where gc.id = p_question_id
    on conflict (user_id, game_slug, level, challenge_index) do nothing;
    get diagnostics v_award_rows = row_count;
    if v_award_rows > 0 then
      update public.profiles set xp = coalesce(xp, 0) + 10 where id = v_user;
      update public.room_answers set new_marks = 10 where id = v_answer_id;
    end if;
  end if;

  update public.room_players set score = coalesce(score, 0) + v_marks
    where room_id = p_room and user_id = v_user returning score into v_score;

  return query select v_is_correct, v_correct, coalesce(v_explanation, ''),
    coalesce(v_reference, ''), v_marks, coalesce(v_score, 0);
end;
$$;
grant execute on function public.submit_room_answer(uuid, text, text, integer) to authenticated;

create or replace function public.reveal_current_question(p_room uuid)
returns table(question_id text, correct_answer text, explanation text, reference text)
language plpgsql
security definer
set search_path = public
as $$
declare r public.rooms; qid text;
begin
  if not public.is_room_member(p_room) then raise exception 'Not in this room'; end if;
  select * into r from public.rooms where id = p_room;
  if not found or r.status <> 'playing' then raise exception 'Game is not running'; end if;
  if r.current_question_index < 0
     or r.current_question_index >= coalesce(array_length(r.question_ids, 1), 0) then
    raise exception 'No active question';
  end if;
  if r.question_started_at is null or clock_timestamp() <
     r.question_started_at + make_interval(secs => r.question_duration_seconds) then
    raise exception 'The answer is not ready to be revealed';
  end if;
  qid := r.question_ids[r.current_question_index + 1];
  return query
    select gc.id, gc.correct_answer, gc.explanation, gc.reference
      from public.game_content gc where gc.id = qid and gc.game_slug = r.game_id
    union all
    select qk.question_id, qk.answer, qk.explanation, qk.reference
      from public.question_keys qk where qk.question_id = qid
    limit 1;
end;
$$;
grant execute on function public.reveal_current_question(uuid) to authenticated;

create or replace function public.advance_room_question(p_room uuid, p_from_index integer)
returns public.rooms
language plpgsql
security definer
set search_path = public
as $$
declare r public.rooms; v_total integer;
begin
  if not public.is_room_member(p_room) then raise exception 'Not in this room'; end if;
  select * into r from public.rooms where id = p_room for update;
  if not found then raise exception 'Room not found'; end if;
  if r.status <> 'playing' or r.current_question_index <> p_from_index then return r; end if;
  if r.question_started_at is null or clock_timestamp() <
     r.question_started_at + make_interval(secs => r.question_duration_seconds + r.reveal_seconds) then
    raise exception 'The round cannot advance until the answer and reveal timers finish';
  end if;
  v_total := coalesce(array_length(r.question_ids, 1), 0);
  if r.current_question_index + 1 >= v_total then
    update public.rooms set status = 'finished' where id = p_room returning * into r;
    insert into public.scores(user_id, game_id, score)
      select rp.user_id, r.game_id, coalesce(sum(ra.new_marks), 0)
      from public.room_players rp
      left join public.room_answers ra on ra.room_id = p_room and ra.user_id = rp.user_id
      where rp.room_id = p_room and rp.user_id is not null
      group by rp.user_id
      having coalesce(sum(ra.new_marks), 0) > 0;
  else
    update public.rooms set current_question_index = current_question_index + 1,
      question_started_at = clock_timestamp() where id = p_room returning * into r;
  end if;
  return r;
end;
$$;
grant execute on function public.advance_room_question(uuid, integer) to authenticated;

create or replace function public.advance_question(p_room uuid, p_from_index integer)
returns public.rooms
language sql
security definer
set search_path = public
as $$ select public.advance_room_question(p_room, p_from_index); $$;
grant execute on function public.advance_question(uuid, integer) to authenticated;

create or replace function public.finish_room_session(p_room uuid)
returns public.rooms
language plpgsql
security definer
set search_path = public
as $$
declare r public.rooms;
begin
  select * into r from public.rooms where id = p_room for update;
  if not found then raise exception 'Room not found'; end if;
  if r.host_id <> auth.uid() then raise exception 'Only host can finish the room'; end if;
  if r.status = 'finished' then return r; end if;
  if r.status <> 'playing' or r.question_started_at is null
     or clock_timestamp() < r.question_started_at + make_interval(secs => r.question_duration_seconds + r.reveal_seconds) then
    raise exception 'The match cannot finish before the active round ends';
  end if;
  return public.advance_room_question(p_room, r.current_question_index);
end;
$$;
grant execute on function public.finish_room_session(uuid) to authenticated;
