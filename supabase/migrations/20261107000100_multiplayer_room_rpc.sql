-- =====================================================================
-- BIBLE ARENA 2.0: MULTIPLAYER ROOM RPCs & REAL-TIME SYNC
-- File: supabase/migrations/20261107000100_multiplayer_room_rpc.sql
-- =====================================================================

-- 1. Ensure room_answers table exists for enforcing 1 submission per question & auditing
create table if not exists public.room_answers (
  id uuid default gen_random_uuid() primary key,
  room_id uuid references public.rooms(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  question_id text not null,
  answer text not null,
  is_correct boolean not null,
  marks integer default 0,
  duration_ms integer default 0,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  unique(room_id, user_id, question_id)
);

alter table public.room_answers add column if not exists new_marks integer not null default 0;
alter table public.room_answers enable row level security;
drop policy if exists "room_answers_select" on public.room_answers;
drop policy if exists "room_answers_insert" on public.room_answers;
revoke all on public.room_answers from anon, authenticated;

create table if not exists public.user_awarded_challenges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  game_slug text not null,
  level integer not null,
  challenge_index smallint not null,
  marks_awarded smallint not null default 10 check (marks_awarded = 10),
  awarded_at timestamptz not null default now(),
  unique(user_id, game_slug, level, challenge_index)
);
alter table public.user_awarded_challenges enable row level security;
revoke all on public.user_awarded_challenges from anon, authenticated;

-- Server time endpoint for high-precision multiplayer clock synchronization
create or replace function public.server_now()
returns timestamptz language sql security definer set search_path = public as $$
  select clock_timestamp();
$$;
grant execute on function public.server_now() to anon, authenticated;

-- Fast unified polling endpoint for room state, timer synchronization, and player rankings
create or replace function public.get_room_sync(p_room uuid)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  v_room public.rooms;
  v_players jsonb;
begin
  select * into v_room from public.rooms where id = p_room;
  if not found then return null; end if;

  select coalesce(jsonb_agg(
    jsonb_build_object(
      'id', rp.id,
      'room_id', rp.room_id,
      'user_id', rp.user_id,
      'display_name', rp.display_name,
      'is_ready', rp.is_ready,
      'is_host', rp.is_host,
      'score', rp.score
    ) order by rp.score desc, rp.created_at asc
  ), '[]'::jsonb)
  into v_players
  from public.room_players rp
  where rp.room_id = p_room;

  return jsonb_build_object(
    'room', jsonb_build_object(
      'id', v_room.id,
      'code', v_room.room_code,
      'room_code', v_room.room_code,
      'host_id', v_room.host_id,
      'game_slug', v_room.game_id,
      'game_id', v_room.game_id,
      'status', v_room.status,
      'current_question_index', coalesce(v_room.current_question_index, 0),
      'question_started_at', v_room.question_started_at,
      'question_duration_seconds', coalesce(v_room.question_duration_seconds, 20),
      'reveal_seconds', coalesce(v_room.reveal_seconds, 5),
      'question_ids', coalesce(v_room.question_ids, '{}'),
      'settings', coalesce(v_room.settings, '{}'::jsonb)
    ),
    'players', v_players,
    'server_time', clock_timestamp()
  );
end $$;
grant execute on function public.get_room_sync(uuid) to anon, authenticated;

-- Helper: verify if calling user is member of room
create or replace function public.is_room_member(p_room uuid)
returns boolean language sql security definer set search_path = public as $$
  select exists (
    select 1 from public.room_players
    where room_id = p_room and user_id = auth.uid()
  );
$$;
grant execute on function public.is_room_member(uuid) to anon, authenticated;

-- Helper: verify if calling user is host of room
create or replace function public.is_room_host(p_room uuid)
returns boolean language sql security definer set search_path = public as $$
  select exists (
    select 1 from public.rooms
    where id = p_room and host_id = auth.uid()
  );
$$;
grant execute on function public.is_room_host(uuid) to anon, authenticated;

-- 2. CREATE ROOM RPC
create or replace function public.create_room(
  p_display_name text,
  p_game_slug text,
  p_settings jsonb default '{}'::jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code text;
  v_room_id uuid;
  v_chars text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  v_loop integer := 0;
  v_user_id uuid;
  v_game_slug text;
  v_display_name text;
  v_time_limit integer;
begin
  v_user_id := auth.uid();
  if v_user_id is null then
    raise exception 'Authentication required to create a room';
  end if;

  v_game_slug := coalesce(nullif(trim(p_game_slug), ''), 'scripture-challenge');
  v_display_name := coalesce(nullif(trim(p_display_name), ''), 'Host');
  v_time_limit := coalesce((p_settings->>'timeLimit')::integer, 20);

  -- Generate collision-free 6-char PIN
  loop
    v_code := '';
    for i in 1..6 loop
      v_code := v_code || substr(v_chars, floor(random() * length(v_chars) + 1)::integer, 1);
    end loop;
    select id into v_room_id from public.rooms where room_code = v_code;
    if v_room_id is null then exit; end if;
    v_loop := v_loop + 1;
    if v_loop > 100 then
      raise exception 'Could not generate unique room code';
    end if;
  end loop;

  -- Ensure profile exists
  insert into public.profiles (id, username, full_name)
  values (
    v_user_id,
    'host_' || substring(v_user_id::text, 1, 8),
    v_display_name
  )
  on conflict (id) do update set
    full_name = case
      when public.profiles.full_name is null or public.profiles.full_name = '' then excluded.full_name
      else public.profiles.full_name
    end;

  -- Insert room
  insert into public.rooms (
    room_code,
    host_id,
    game_id,
    settings,
    status,
    question_duration_seconds,
    reveal_seconds,
    current_question_index
  ) values (
    v_code,
    v_user_id,
    v_game_slug,
    coalesce(p_settings, '{}'::jsonb),
    'waiting',
    v_time_limit,
    5,
    0
  )
  returning id into v_room_id;

  -- Add host to room_players
  insert into public.room_players (
    room_id,
    user_id,
    display_name,
    is_host,
    is_ready,
    score
  ) values (
    v_room_id,
    v_user_id,
    v_display_name,
    true,
    true,
    0
  );

  return jsonb_build_object(
    'id', v_room_id,
    'code', v_code,
    'room_code', v_code,
    'host_id', v_user_id,
    'game_slug', v_game_slug,
    'game_id', v_game_slug,
    'settings', coalesce(p_settings, '{}'::jsonb),
    'status', 'waiting'
  );
end $$;
grant execute on function public.create_room(text, text, jsonb) to anon, authenticated;

-- 3. JOIN ROOM RPC
create or replace function public.join_room(
  p_code text,
  p_display_name text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_room public.rooms;
  v_display_name text;
  v_user_id uuid;
  v_clean_code text;
begin
  v_user_id := auth.uid();
  if v_user_id is null then
    raise exception 'Authentication required to join a room';
  end if;

  v_clean_code := upper(trim(coalesce(p_code, '')));
  v_display_name := trim(coalesce(p_display_name, 'Player'));
  if v_display_name = '' then
    v_display_name := 'Player';
  end if;

  select * into v_room from public.rooms
  where upper(room_code) = v_clean_code;

  if not found then
    raise exception 'Room not found with PIN %', v_clean_code;
  end if;

  if v_room.status <> 'waiting' then
    raise exception 'This match has already started or ended';
  end if;

  -- Ensure profile exists
  insert into public.profiles (id, username, full_name)
  values (
    v_user_id,
    'player_' || substring(v_user_id::text, 1, 8),
    v_display_name
  )
  on conflict (id) do update set
    full_name = case
      when public.profiles.full_name is null or public.profiles.full_name = '' then excluded.full_name
      else public.profiles.full_name
    end;

  -- Add player if not already in room
  if not exists (
    select 1 from public.room_players
    where room_id = v_room.id and user_id = v_user_id
  ) then
    insert into public.room_players (
      room_id,
      user_id,
      display_name,
      is_host,
      is_ready,
      score
    ) values (
      v_room.id,
      v_user_id,
      v_display_name,
      (v_room.host_id = v_user_id),
      false,
      0
    );
  else
    update public.room_players
    set display_name = v_display_name
    where room_id = v_room.id and user_id = v_user_id;
  end if;

  return jsonb_build_object(
    'id', v_room.id,
    'code', v_room.room_code,
    'room_code', v_room.room_code,
    'host_id', v_room.host_id,
    'game_slug', v_room.game_id,
    'game_id', v_room.game_id,
    'status', v_room.status
  );
end $$;
grant execute on function public.join_room(text, text) to anon, authenticated;

-- 4. LEAVE ROOM RPC
create or replace function public.leave_room(p_room uuid)
returns void language plpgsql security definer set search_path = public as $$
declare
  r public.rooms;
  new_host uuid;
begin
  select * into r from public.rooms where id = p_room for update;
  if not found then return; end if;

  delete from public.room_players where room_id = p_room and user_id = auth.uid();

  -- If host left while waiting, appoint next player as host or close room
  if r.host_id = auth.uid() then
    select user_id into new_host from public.room_players
      where room_id = p_room order by created_at limit 1;
    if new_host is null then
      update public.rooms set status = 'finished' where id = p_room;
    else
      update public.rooms set host_id = new_host where id = p_room;
      update public.room_players set is_host = true where room_id = p_room and user_id = new_host;
    end if;
  end if;
end $$;
grant execute on function public.leave_room(uuid) to anon, authenticated;

-- 5. START GAME RPC (Hosts only)
create or replace function public.start_game(p_room uuid, p_question_ids text[])
returns public.rooms language plpgsql security definer set search_path = public as $$
declare
  r public.rooms;
begin
  select * into r from public.rooms where id = p_room for update;
  if not found then raise exception 'Room not found'; end if;
  if r.host_id <> auth.uid() then raise exception 'Only the host can start the session'; end if;
  if coalesce(array_length(p_question_ids, 1), 0) = 0 then
    raise exception 'No questions provided for the match';
  end if;

  update public.rooms
  set status = 'playing',
      question_ids = p_question_ids,
      current_question_index = 0,
      question_started_at = now()
  where id = p_room
  returning * into r;

  return r;
end $$;
grant execute on function public.start_game(uuid, text[]) to anon, authenticated;

-- 6. SUBMIT ROOM ANSWER (One submission per question, +10 marks for correct, 0 for incorrect)
create or replace function public.submit_room_answer(
  p_room uuid,
  p_question_id text,
  p_answer text,
  p_duration_ms integer default 0
)
returns table(
  is_correct boolean,
  correct_answer text,
  explanation text,
  reference text,
  marks_awarded integer,
  current_score integer
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_room public.rooms;
  v_correct_answer text;
  v_explanation text;
  v_reference text;
  v_is_correct boolean := false;
  v_marks integer := 0;
  v_current_score integer := 0;
  v_user_id uuid;
begin
  v_user_id := auth.uid();
  if v_user_id is null then raise exception 'Authentication required'; end if;

  select * into v_room from public.rooms where id = p_room;
  if not found then raise exception 'Room not found'; end if;
  if v_room.status <> 'playing' then raise exception 'Room is not currently active'; end if;

  -- Verify player membership
  if not exists (select 1 from public.room_players where room_id = p_room and user_id = v_user_id) then
    raise exception 'Player is not a member of this room';
  end if;

  -- Enforce 1 submission per question per player
  if exists (
    select 1 from public.room_answers
    where room_id = p_room and user_id = v_user_id and question_id = p_question_id
  ) then
    raise exception 'Answer already submitted for this challenge';
  end if;

  -- Retrieve correct answer & scripture reference from game_content or question_keys
  select gc.correct_answer, gc.explanation, gc.reference
  into v_correct_answer, v_explanation, v_reference
  from public.game_content gc
  where gc.id = p_question_id;

  if v_correct_answer is null then
    select qk.answer, qk.explanation, qk.reference
    into v_correct_answer, v_explanation, v_reference
    from public.question_keys qk
    where qk.question_id = p_question_id;
  end if;

  if v_correct_answer is not null then
    v_is_correct := (lower(trim(p_answer)) = lower(trim(v_correct_answer)));
  else
    v_is_correct := false;
  end if;

  -- Scoring rule: exactly 10 marks per correct answer, 0 marks for incorrect
  v_marks := case when v_is_correct then 10 else 0 end;

  -- Record answer submission
  insert into public.room_answers (
    room_id, user_id, question_id, answer, is_correct, marks, duration_ms
  ) values (
    p_room, v_user_id, p_question_id, p_answer, v_is_correct, v_marks, coalesce(p_duration_ms, 0)
  );

  -- Update player room score
  update public.room_players
  set score = score + v_marks
  where room_id = p_room and user_id = v_user_id
  returning score into v_current_score;

  return query select
    v_is_correct,
    coalesce(v_correct_answer, ''),
    coalesce(v_explanation, ''),
    coalesce(v_reference, ''),
    v_marks,
    coalesce(v_current_score, 0);
end $$;
grant execute on function public.submit_room_answer(uuid, text, text, integer) to anon, authenticated;

-- 7. ADVANCE QUESTION RPC
create or replace function public.advance_room_question(p_room uuid, p_from_index integer)
returns public.rooms language plpgsql security definer set search_path = public as $$
declare
  r public.rooms;
  v_total_questions integer;
begin
  if not public.is_room_member(p_room) then raise exception 'Not in this room'; end if;
  select * into r from public.rooms where id = p_room for update;
  if r.status <> 'playing' or r.current_question_index <> p_from_index then
    return r;
  end if;

  v_total_questions := coalesce(array_length(r.question_ids, 1), 0);

  if r.current_question_index + 1 >= v_total_questions then
    update public.rooms
    set status = 'finished'
    where id = p_room
    returning * into r;

    -- Record final scores into scores table
    insert into public.scores (user_id, game_id, score)
    select rp.user_id, r.game_id, rp.score
    from public.room_players rp
    where rp.room_id = p_room;
  else
    update public.rooms
    set current_question_index = current_question_index + 1,
        question_started_at = now()
    where id = p_room
    returning * into r;
  end if;

  return r;
end $$;
grant execute on function public.advance_room_question(uuid, integer) to anon, authenticated;

-- 8. REVEAL CURRENT QUESTION RPC
create or replace function public.reveal_current_question(p_room uuid)
returns table(question_id text, correct_answer text, explanation text, reference text)
language plpgsql security definer set search_path = public as $$
declare
  r public.rooms;
  qid text;
begin
  if not public.is_room_member(p_room) then raise exception 'Not in this room'; end if;
  select * into r from public.rooms where id = p_room;
  if r.status <> 'playing' then raise exception 'Game is not running'; end if;

  qid := r.question_ids[r.current_question_index + 1];

  return query
  select gc.id, gc.correct_answer, gc.explanation, gc.reference
  from public.game_content gc where gc.id = qid
  union all
  select qk.question_id, qk.answer, qk.explanation, qk.reference
  from public.question_keys qk where qk.question_id = qid
  limit 1;
end $$;
grant execute on function public.reveal_current_question(uuid) to anon, authenticated;

-- 9. FINISH ROOM SESSION RPC
create or replace function public.finish_room_session(p_room uuid)
returns public.rooms language plpgsql security definer set search_path = public as $$
declare
  r public.rooms;
begin
  select * into r from public.rooms where id = p_room for update;
  if not found then raise exception 'Room not found'; end if;
  if r.host_id <> auth.uid() then raise exception 'Only host can finish the room'; end if;

  update public.rooms
  set status = 'finished'
  where id = p_room
  returning * into r;

  -- Record final scores into scores table
  insert into public.scores (user_id, game_id, score)
  select rp.user_id, r.game_id, rp.score
  from public.room_players rp
  where rp.room_id = p_room;

  return r;
end $$;
grant execute on function public.finish_room_session(uuid) to anon, authenticated;

-- 10. REALTIME PUBLICATIONS
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'rooms'
  ) then
    alter publication supabase_realtime add table public.rooms;
  end if;

  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'room_players'
  ) then
    alter publication supabase_realtime add table public.room_players;
  end if;

  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'room_answers'
  ) then
    alter publication supabase_realtime add table public.room_answers;
  end if;
end $$;
