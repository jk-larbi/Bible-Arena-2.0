-- Applied remotely as Supabase migration 20261107190151.
-- Compatibility layer for the existing UUID game_content schema and
-- challenge_results / level_progress solo scoring model.

alter table public.game_content add column if not exists question_key text;
update public.game_content set question_key=game_slug||'-l'||level::text||'-c'||challenge_index::text where question_key is null;
create unique index if not exists game_content_question_key_uidx on public.game_content(question_key);
create index if not exists game_content_game_level_challenge_idx on public.game_content(game_slug,level,challenge_index);

create table if not exists public.room_answers(
 id uuid primary key default gen_random_uuid(),
 room_id uuid not null references public.rooms(id) on delete cascade,
 user_id uuid not null references auth.users(id) on delete cascade,
 question_id text not null, answer text not null default '',
 is_correct boolean not null default false,
 marks integer not null default 0 check(marks in (0,10)),
 new_marks integer not null default 0 check(new_marks in (0,10)),
 duration_ms integer not null default 0 check(duration_ms>=0),
 created_at timestamptz not null default now(),
 constraint room_answers_room_user_question_key unique(room_id,user_id,question_id)
);
alter table public.room_answers add column if not exists new_marks integer not null default 0;
create table if not exists public.user_awarded_challenges(
 id uuid primary key default gen_random_uuid(),
 user_id uuid not null references auth.users(id) on delete cascade,
 game_slug text not null,level integer not null,challenge_index smallint not null,
 marks_awarded smallint not null default 10 check(marks_awarded=10),
 awarded_at timestamptz not null default now(),
 constraint user_awarded_challenges_user_game_level_challenge_key unique(user_id,game_slug,level,challenge_index)
);
alter table public.game_content enable row level security;
revoke all on public.game_content from anon,authenticated;
alter table public.room_answers enable row level security;
revoke all on public.room_answers from anon,authenticated;
alter table public.user_awarded_challenges enable row level security;
revoke all on public.user_awarded_challenges from anon,authenticated;
alter table public.room_players enable row level security;
revoke insert,update,delete on public.room_players from anon,authenticated;
grant select on public.room_players to authenticated;
create or replace view public.game_content_public as
select id,game_slug,level,challenge_index,question_text,options,explanation,reference,
 null::jsonb as metadata,question_key from public.game_content;
grant select on public.game_content_public to anon,authenticated;

create or replace function public.is_room_member(p_room uuid) returns boolean
language sql stable security definer set search_path=''
as $$ select exists(select 1 from public.room_players rp where rp.room_id=p_room and rp.user_id=auth.uid()); $$;
grant execute on function public.is_room_member(uuid) to authenticated;
create or replace function public.is_room_host(p_room uuid) returns boolean
language sql stable security definer set search_path=''
as $$ select exists(select 1 from public.rooms r where r.id=p_room and r.host_id=auth.uid()); $$;
grant execute on function public.is_room_host(uuid) to authenticated;

create or replace function public.publish_room_questions(p_room uuid,p_questions jsonb) returns text[]
language plpgsql security definer set search_path=''
as $$
declare r public.rooms; item jsonb; v_key text; v_slug text; v_ids text[]:='{}'; v_options text[];
 v_level integer; v_index smallint; v_count integer;
begin
 select * into r from public.rooms where id=p_room for update;
 if not found then raise exception 'Room not found'; end if;
 if r.host_id<>auth.uid() then raise exception 'Only the host can publish questions'; end if;
 if r.status<>'waiting' then raise exception 'Questions can only be published before the game starts'; end if;
 if p_questions is null or jsonb_typeof(p_questions)<>'array' then raise exception 'Questions must be an array'; end if;
 v_count:=jsonb_array_length(p_questions);
 if v_count<1 or v_count>50 then raise exception 'A match must contain 1 to 50 questions'; end if;
 for item in select value from jsonb_array_elements(p_questions) loop
  v_key:=nullif(btrim(item->>'id'),''); v_slug:=nullif(btrim(item->>'game_slug'),'');
  v_level:=coalesce(nullif(item->>'level','')::integer,1);
  v_index:=coalesce(nullif(item->>'challenge_index','')::smallint,1);
  if v_key is null or v_slug is distinct from r.game_id or nullif(btrim(item->>'question_text'),'') is null
    or nullif(btrim(item->>'correct_answer'),'') is null or nullif(btrim(item->>'reference'),'') is null then
   raise exception 'Question is missing its stable ID, selected game, prompt, answer or scripture reference';
  end if;
  v_options:=array(select jsonb_array_elements_text(coalesce(item->'options','[]'::jsonb)));
  insert into public.game_content(question_key,game_slug,level,challenge_index,question_text,options,correct_answer,explanation,reference,metadata)
  values(v_key,r.game_id,v_level,v_index,item->>'question_text',coalesce(v_options,'{}'),item->>'correct_answer',
   coalesce(item->>'explanation',''),item->>'reference',coalesce(item->'metadata','{}'::jsonb))
  on conflict(question_key) do update set game_slug=excluded.game_slug,level=excluded.level,challenge_index=excluded.challenge_index,
   question_text=excluded.question_text,options=excluded.options,correct_answer=excluded.correct_answer,
   explanation=excluded.explanation,reference=excluded.reference,metadata=excluded.metadata;
  v_ids:=array_append(v_ids,v_key);
 end loop;
 if cardinality(v_ids)<>(select count(distinct x) from unnest(v_ids) x) then raise exception 'Duplicate question IDs are not allowed'; end if;
 return v_ids;
end; $$;
grant execute on function public.publish_room_questions(uuid,jsonb) to authenticated;

create or replace function public.start_game(p_room uuid,p_question_ids text[]) returns public.rooms
language plpgsql security definer set search_path=''
as $$
declare r public.rooms; v_count integer;
begin
 select * into r from public.rooms where id=p_room for update;
 if not found then raise exception 'Room not found'; end if;
 if r.host_id<>auth.uid() then raise exception 'Only the host can start the game'; end if;
 if r.status<>'waiting' then raise exception 'Room is not waiting'; end if;
 if coalesce(array_length(p_question_ids,1),0) not between 1 and 50 then raise exception 'A match must contain 1 to 50 questions'; end if;
 select count(*) into v_count from public.game_content gc where gc.question_key=any(p_question_ids) and gc.game_slug=r.game_id;
 if v_count<>array_length(p_question_ids,1) then raise exception 'One or more questions are not published for this game'; end if;
 update public.rooms set status='playing',question_ids=p_question_ids,current_question_index=0,question_started_at=clock_timestamp()
  where id=p_room returning * into r;
 return r;
end; $$;
grant execute on function public.start_game(uuid,text[]) to authenticated;

create or replace function public.submit_room_answer(p_room uuid,p_question_id text,p_answer text,p_duration_ms integer default 0)
returns table(is_correct boolean,correct_answer text,explanation text,reference text,marks_awarded integer,current_score integer)
language plpgsql security definer set search_path=''
as $$
declare r public.rooms; v_correct text; v_explanation text; v_reference text; v_correct_now boolean; v_marks integer;
 v_score integer; v_award_rows integer:=0; v_answer_id uuid; v_user uuid:=auth.uid(); v_content public.game_content;
begin
 if v_user is null then raise exception 'Authentication required'; end if;
 select * into r from public.rooms where id=p_room for update;
 if not found or r.status<>'playing' then raise exception 'Room is not active'; end if;
 if not exists(select 1 from public.room_players rp where rp.room_id=p_room and rp.user_id=v_user) then raise exception 'Player is not a member of this room'; end if;
 if r.current_question_index<0 or r.current_question_index>=coalesce(array_length(r.question_ids,1),0)
   or r.question_ids[r.current_question_index+1]<>p_question_id then raise exception 'Answer does not match the active question'; end if;
 if r.question_started_at is null or clock_timestamp()>r.question_started_at+make_interval(secs=>coalesce(r.question_duration_seconds,20)) then raise exception 'Answer period has ended'; end if;
 if exists(select 1 from public.room_answers a where a.room_id=p_room and a.user_id=v_user and a.question_id=p_question_id) then raise exception 'Answer already submitted'; end if;
 select * into v_content from public.game_content gc where gc.question_key=p_question_id and gc.game_slug=r.game_id;
 if not found then raise exception 'Question key is not published for this game'; end if;
 v_correct:=v_content.correct_answer; v_explanation:=v_content.explanation; v_reference:=v_content.reference;
 v_correct_now:=lower(btrim(coalesce(p_answer,'')))=lower(btrim(v_correct)); v_marks:=case when v_correct_now then 10 else 0 end;
 insert into public.room_answers(room_id,user_id,question_id,answer,is_correct,marks,duration_ms)
 values(p_room,v_user,p_question_id,coalesce(p_answer,''),v_correct_now,v_marks,greatest(0,coalesce(p_duration_ms,0))) returning id into v_answer_id;
 if v_correct_now then
  insert into public.user_awarded_challenges(user_id,game_slug,level,challenge_index,marks_awarded)
  values(v_user,v_content.game_slug,v_content.level,v_content.challenge_index,10)
  on conflict(user_id,game_slug,level,challenge_index) do nothing;
  get diagnostics v_award_rows=row_count;
  if v_award_rows>0 then update public.profiles set xp=coalesce(xp,0)+10 where id=v_user;
   update public.room_answers set new_marks=10 where id=v_answer_id; end if;
 end if;
 update public.room_players set score=coalesce(score,0)+v_marks where room_id=p_room and user_id=v_user returning score into v_score;
 return query select v_correct_now,v_correct,coalesce(v_explanation,''),coalesce(v_reference,''),v_marks,coalesce(v_score,0);
end; $$;
grant execute on function public.submit_room_answer(uuid,text,text,integer) to authenticated;

create or replace function public.reveal_current_question(p_room uuid)
returns table(question_id text,correct_answer text,explanation text,reference text)
language plpgsql security definer set search_path=''
as $$
declare r public.rooms; v_key text;
begin
 if not public.is_room_member(p_room) then raise exception 'Not in this room'; end if;
 select * into r from public.rooms where id=p_room;
 if not found or r.status<>'playing' then raise exception 'Game is not running'; end if;
 if r.question_started_at is null or clock_timestamp()<r.question_started_at+make_interval(secs=>coalesce(r.question_duration_seconds,20)) then raise exception 'Question is not ready to reveal'; end if;
 v_key:=r.question_ids[r.current_question_index+1];
 return query select gc.question_key,gc.correct_answer,gc.explanation,gc.reference from public.game_content gc
  where gc.question_key=v_key and gc.game_slug=r.game_id;
end; $$;
grant execute on function public.reveal_current_question(uuid) to authenticated;

create or replace function public.advance_room_question(p_room uuid,p_from_index integer) returns public.rooms
language plpgsql security definer set search_path=''
as $$
declare r public.rooms; v_total integer;
begin
 if not public.is_room_member(p_room) then raise exception 'Not in this room'; end if;
 select * into r from public.rooms where id=p_room for update;
 if not found then raise exception 'Room not found'; end if;
 if r.status<>'playing' or r.current_question_index<>p_from_index then return r; end if;
 if r.question_started_at is null or clock_timestamp()<r.question_started_at+make_interval(secs=>coalesce(r.question_duration_seconds,20)+coalesce(r.reveal_seconds,5)) then raise exception 'Round timers have not finished'; end if;
 v_total:=coalesce(array_length(r.question_ids,1),0);
 if r.current_question_index+1>=v_total then
  update public.rooms set status='finished' where id=p_room returning * into r;
  insert into public.scores(user_id,game_id,score)
  select rp.user_id,r.game_id,coalesce(sum(ra.new_marks),0) from public.room_players rp
   left join public.room_answers ra on ra.room_id=p_room and ra.user_id=rp.user_id
   where rp.room_id=p_room and rp.user_id is not null group by rp.user_id
   having coalesce(sum(ra.new_marks),0)>0;
 else
  update public.rooms set current_question_index=current_question_index+1,question_started_at=clock_timestamp()
   where id=p_room returning * into r;
 end if;
 return r;
end; $$;
grant execute on function public.advance_room_question(uuid,integer) to authenticated;

create or replace function public.finish_room_session(p_room uuid) returns public.rooms
language plpgsql security definer set search_path=''
as $$
declare r public.rooms;
begin
 select * into r from public.rooms where id=p_room for update;
 if not found then raise exception 'Room not found'; end if;
 if r.host_id<>auth.uid() then raise exception 'Only host can finish the room'; end if;
 if r.status='finished' then return r; end if;
 if r.status<>'playing' then raise exception 'Room is not playing'; end if;
 if r.question_started_at is null or clock_timestamp()<r.question_started_at+make_interval(secs=>coalesce(r.question_duration_seconds,20)+coalesce(r.reveal_seconds,5)) then raise exception 'Current round has not finished'; end if;
 return public.advance_room_question(p_room,r.current_question_index);
end; $$;
grant execute on function public.finish_room_session(uuid) to authenticated;

-- Preserve the original challenge_results (0..1) and finish_level aggregation.
drop function if exists public.submit_challenge_answer(uuid,smallint,text,smallint,integer);
drop function if exists public.submit_challenge_answer(uuid,smallint,text,smallint,integer,text);
create or replace function public.submit_challenge_answer(p_attempt uuid,p_challenge_index smallint,p_answer text,
 p_hints_used smallint,p_duration_ms integer,p_question_id text,p_expected_answer text)
returns table(is_correct boolean,score numeric,marks_awarded integer,is_new_marks boolean,explanation text,reference text,correct_answer text)
language plpgsql security definer set search_path=''
as $$
declare a public.level_attempts; v_content public.game_content; v_correct boolean; v_new_award integer:=0;
begin
 if auth.uid() is null then raise exception 'Authentication required'; end if;
 if p_challenge_index is null or p_challenge_index not between 1 and 10 or p_answer is null or char_length(p_answer)>500
  or p_hints_used is null or p_hints_used<0 or p_duration_ms is null or p_duration_ms<0 then raise exception 'Invalid answer submission'; end if;
 select * into a from public.level_attempts where id=p_attempt and user_id=auth.uid() and status='in_progress' for update;
 if not found then raise exception 'Attempt is not active or does not belong to user'; end if;
 if p_challenge_index<>a.challenges_done+1 then raise exception 'Challenge already submitted or out of order'; end if;
 if p_question_id is null or btrim(p_question_id)='' then raise exception 'Stable question key is required'; end if;
 select * into v_content from public.game_content gc where gc.question_key=p_question_id and gc.game_slug=a.game_slug
  and gc.level=a.level and gc.challenge_index=p_challenge_index;
 if not found then raise exception 'Question content is not published for this exact question key'; end if;
 if p_expected_answer is null or lower(btrim(p_expected_answer))<>lower(btrim(v_content.correct_answer)) then raise exception 'Question bank mismatch: refresh before submitting'; end if;
 v_correct:=lower(btrim(p_answer))=lower(btrim(v_content.correct_answer));
 insert into public.challenge_results(attempt_id,challenge_index,score,hints_used,duration_ms)
 values(a.id,p_challenge_index,case when v_correct then 1.000 else 0.000 end,p_hints_used,p_duration_ms);
 if v_correct then
  insert into public.user_awarded_challenges(user_id,game_slug,level,challenge_index,marks_awarded)
  values(auth.uid(),a.game_slug,a.level,p_challenge_index,10) on conflict(user_id,game_slug,level,challenge_index) do nothing;
  get diagnostics v_new_award=row_count;
  if v_new_award>0 then update public.profiles set xp=coalesce(xp,0)+10 where id=auth.uid(); end if;
 end if;
 update public.level_attempts set challenges_done=p_challenge_index where id=a.id;
 return query select v_correct,case when v_correct then 10::numeric else 0::numeric end,
  case when v_correct then 10 else 0 end,(v_new_award>0),coalesce(v_content.explanation,''),coalesce(v_content.reference,''),v_content.correct_answer;
end; $$;
grant execute on function public.submit_challenge_answer(uuid,smallint,text,smallint,integer,text,text) to authenticated;

revoke all on function public.publish_room_questions(uuid,jsonb) from public,anon;
revoke all on function public.start_game(uuid,text[]) from public,anon;
revoke all on function public.submit_room_answer(uuid,text,text,integer) from public,anon;
revoke all on function public.reveal_current_question(uuid) from public,anon;
revoke all on function public.advance_room_question(uuid,integer) from public,anon;
revoke all on function public.finish_room_session(uuid) from public,anon;
revoke all on function public.submit_challenge_answer(uuid,smallint,text,smallint,integer,text,text) from public,anon;
grant execute on function public.publish_room_questions(uuid,jsonb) to authenticated;
grant execute on function public.start_game(uuid,text[]) to authenticated;
grant execute on function public.submit_room_answer(uuid,text,text,integer) to authenticated;
grant execute on function public.reveal_current_question(uuid) to authenticated;
grant execute on function public.advance_room_question(uuid,integer) to authenticated;
grant execute on function public.finish_room_session(uuid) to authenticated;
grant execute on function public.submit_challenge_answer(uuid,smallint,text,smallint,integer,text,text) to authenticated;
