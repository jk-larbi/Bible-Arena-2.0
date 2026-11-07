-- =====================================================================
-- BIBLEARENA 2.0 - MASTER SUPABASE SQL SCHEMA & MIGRATION SCRIPT
-- Run this in your Supabase SQL Editor to establish the complete
-- database foundation with RLS policies, RPC functions, and Realtime.
-- =====================================================================

-- Enable required extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- =====================================================================
-- 1. DATABASE TABLES
-- =====================================================================

-- 1. PROFILES TABLE
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text unique not null,
  full_name text,
  avatar_url text,
  level integer default 1,
  xp integer default 0,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 2. GAME PROGRESS TABLE
create table if not exists public.game_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  game_id text not null,
  current_level integer default 1,
  max_level_completed integer default 0,
  best_score integer default 0,
  total_attempts integer default 0,
  stars integer default 0,
  best_time_ms integer default 0,
  updated_at timestamptz default timezone('utc'::text, now()) not null,
  unique(user_id, game_id)
);

-- 3. QUESTION HISTORY TABLE
create table if not exists public.question_history (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  game_id text not null,
  question_id text not null,
  answered_correctly boolean not null,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 4. ACHIEVEMENTS TABLE
create table if not exists public.achievements (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  achievement_id text not null,
  unlocked_at timestamptz default timezone('utc'::text, now()) not null,
  unique(user_id, achievement_id)
);

-- 5. ROOMS TABLE (Multiplayer Arenas)
create table if not exists public.rooms (
  id uuid default gen_random_uuid() primary key,
  room_code varchar(6) unique not null,
  host_id uuid references public.profiles(id) on delete cascade not null,
  game_id text not null default 'scripture-challenge',
  settings jsonb default '{}'::jsonb,
  status text default 'waiting' check (status in ('waiting', 'playing', 'finished')),
  current_round integer default 1,
  max_rounds integer default 5,
  reveal_seconds integer default 5,
  question_duration_seconds integer default 20,
  question_ids text[] default '{}',
  current_question_index integer default 0,
  question_started_at timestamptz,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 6. ROOM PLAYERS TABLE
create table if not exists public.room_players (
  id uuid default gen_random_uuid() primary key,
  room_id uuid references public.rooms(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete cascade,
  display_name text not null,
  score integer default 0,
  is_ready boolean default false,
  is_host boolean default false,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 7. CHALLENGES TABLE (Peer Challenges)
create table if not exists public.challenges (
  id uuid default gen_random_uuid() primary key,
  challenger_id uuid references public.profiles(id) on delete set null,
  opponent_id uuid references public.profiles(id) on delete set null,
  title text not null,
  description text not null,
  game_id text not null default 'scripture-challenge',
  target_score integer not null default 1000,
  reward_xp integer default 100,
  status text default 'pending' check (status in ('pending', 'accepted', 'declined', 'cancelled')),
  expires_at timestamptz not null default (now() + interval '7 days'),
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 8. SCORES TABLE (Leaderboards & Records)
create table if not exists public.scores (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  game_id text not null,
  score integer not null,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 9. QUESTION KEYS TABLE (Question Bank Answers)
create table if not exists public.question_keys (
  id uuid default gen_random_uuid() primary key,
  question_id text unique not null,
  answer text not null,
  explanation text,
  reference text,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 10. NOTIFICATIONS TABLE
create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  sender_id uuid references auth.users(id) on delete set null,
  title text not null,
  message text not null,
  type text not null,
  reference_id text,
  is_read boolean default false,
  read_at timestamptz,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 11. PUSH SUBSCRIPTIONS TABLE
create table if not exists public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subscription jsonb not null,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  unique(user_id)
);

-- 12. NOTIFICATION PREFERENCES TABLE
create table if not exists public.notification_preferences (
  user_id uuid primary key references auth.users(id) on delete cascade,
  browser_push_enabled boolean default true,
  challenges_enabled boolean default true,
  live_games_enabled boolean default true,
  achievements_enabled boolean default true,
  sound_enabled boolean default true,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- 13. LEVEL SPECS (The 100-level data structure per game)
create table if not exists public.level_specs (
    id uuid primary key default gen_random_uuid(),
    game_id text not null,
    level integer not null,
    tier integer not null, -- 1-10
    mechanic_variant text not null,
    difficulty_params jsonb default '{}'::jsonb,
    content_filter jsonb default '{}'::jsonb,
    time_limit_seconds integer not null,
    item_count integer not null,
    pass_threshold_pct integer not null,
    is_boss_level boolean default false,
    unique(game_id, level)
);

-- 14. GAME ROUNDS (Server-side validation)
create table if not exists public.game_rounds (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    game_id text not null,
    level integer not null,
    seed text not null,
    started_at timestamptz default now(),
    completed_at timestamptz,
    status text default 'pending' check (status in ('pending', 'completed', 'expired'))
);

-- 15. ACHIEVEMENT DEFINITIONS
create table if not exists public.achievement_definitions (
    id text primary key,
    game_id text, -- null for platform-wide
    title text not null,
    description text not null,
    icon_emoji text not null
);

-- =====================================================================
-- 2. INDEXES
-- =====================================================================

create index if not exists idx_profiles_username on public.profiles(username);
create index if not exists idx_game_progress_user on public.game_progress(user_id, game_id);
create index if not exists idx_rooms_code on public.rooms(room_code);
create index if not exists idx_rooms_status on public.rooms(status);
create index if not exists idx_room_players_room on public.room_players(room_id);
create index if not exists idx_room_players_user on public.room_players(user_id);
create index if not exists idx_scores_user on public.scores(user_id);
create index if not exists idx_scores_game_score on public.scores(game_id, score desc);
create index if not exists idx_notifications_user_created on public.notifications(user_id, created_at desc);

-- =====================================================================
-- 3. VIEWS
-- =====================================================================

create or replace view public.leaderboards as
select 
  p.id as user_id,
  p.username,
  p.full_name,
  p.avatar_url,
  p.level,
  p.xp,
  coalesce(sum(s.score), 0) as total_score,
  count(s.id) as games_played
from public.profiles p
left join public.scores s on s.user_id = p.id
group by p.id, p.username, p.full_name, p.avatar_url, p.level, p.xp;

-- =====================================================================
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================================

alter table public.profiles enable row level security;
alter table public.game_progress enable row level security;
alter table public.question_history enable row level security;
alter table public.achievements enable row level security;
alter table public.rooms enable row level security;
alter table public.room_players enable row level security;
alter table public.challenges enable row level security;
alter table public.scores enable row level security;
alter table public.question_keys enable row level security;
alter table public.notifications enable row level security;
alter table public.push_subscriptions enable row level security;
alter table public.notification_preferences enable row level security;
alter table public.level_specs enable row level security;
alter table public.game_rounds enable row level security;
alter table public.achievement_definitions enable row level security;

-- Profiles Policies
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

-- Level Specs Policies
create policy "Level specs viewable by everyone" on public.level_specs for select using (true);

-- Game Rounds Policies
create policy "Users can view own rounds" on public.game_rounds for select using (auth.uid() = user_id);
create policy "Users can insert own rounds" on public.game_rounds for insert with check (auth.uid() = user_id);

-- Achievements
create policy "Achievements viewable by everyone." on public.achievements for select using (true);
create policy "Users can insert own achievements." on public.achievements for insert with check (auth.uid() = user_id);

-- Rooms & Room Players
create policy "Rooms viewable by everyone." on public.rooms for select using (true);
create policy "Authenticated users can create rooms." on public.rooms for insert with check (auth.uid() = host_id);
create policy "Host can update rooms." on public.rooms for update using (auth.uid() = host_id);
create policy "Room players viewable by everyone." on public.room_players for select using (true);
create policy "Anyone can join rooms." on public.room_players for insert with check (true);
create policy "Players can update own status." on public.room_players for update using (true);

-- Challenges
create policy "Challenges viewable by everyone." on public.challenges for select using (true);
create policy "Users can create challenges." on public.challenges for insert with check (auth.uid() = challenger_id or challenger_id is null);
create policy "Users can update challenges." on public.challenges for update using (auth.uid() = challenger_id or auth.uid() = opponent_id);

-- Scores
create policy "Scores viewable by everyone." on public.scores for select using (true);
create policy "Users can insert own scores." on public.scores for insert with check (auth.uid() = user_id);

-- Notifications
create policy "Users can view their notifications" on public.notifications for select to authenticated using (auth.uid() = user_id);
create policy "Users can insert notifications for peers" on public.notifications for insert to authenticated with check (auth.uid() = sender_id or auth.uid() = user_id or sender_id is null);
create policy "Users can update their notifications" on public.notifications for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can delete their notifications" on public.notifications for delete to authenticated using (auth.uid() = user_id);

-- =====================================================================
-- 5. RPC FUNCTIONS
-- =====================================================================

-- START ROUND
create or replace function public.start_round(p_game_id text, p_level integer)
returns uuid language plpgsql security definer set search_path = public as $$
declare v_round_id uuid;
begin
    insert into public.game_rounds (user_id, game_id, level, seed)
    values (auth.uid(), p_game_id, p_level, gen_random_uuid()::text)
    returning id into v_round_id;
    return v_round_id;
end $$;
grant execute on function public.start_round(text, integer) to anon, authenticated;

-- COMPLETE ROUND
create or replace function public.complete_round(p_round_id uuid, p_score integer, p_time_taken integer)
returns void language plpgsql security definer set search_path = public as $$
declare v_round public.game_rounds; v_spec public.level_specs;
begin
    select * into v_round from public.game_rounds where id = p_round_id;
    if not found or v_round.status <> 'pending' then raise exception 'Invalid round'; end if;
    
    select * into v_spec from public.level_specs where game_id = v_round.game_id and level = v_round.level;
    
    if p_time_taken > v_spec.time_limit_seconds * 1000 then raise exception 'Impossible completion time'; end if;
    
    update public.game_rounds set completed_at = now(), status = 'completed' where id = p_round_id;
    update public.game_progress set best_score = greatest(best_score, p_score) where user_id = v_round.user_id and game_id = v_round.game_id;
end $$;
grant execute on function public.complete_round(uuid, integer, integer) to anon, authenticated;

-- CREATE ROOM
create or replace function public.create_room(p_display_name text, p_game_slug text, p_settings jsonb default '{}'::jsonb)
returns jsonb language plpgsql security definer set search_path = public as $$
declare v_code text; v_room_id uuid; v_chars text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; v_loop integer := 0; v_user_id uuid;
begin
  v_user_id := auth.uid();
  if v_user_id is null then raise exception 'Authentication required'; end if;
  loop
    v_code := '';
    for i in 1..6 loop v_code := v_code || substr(v_chars, floor(random() * length(v_chars) + 1)::integer, 1); end loop;
    select id into v_room_id from public.rooms where room_code = v_code;
    if v_room_id is null then exit; end if;
    v_loop := v_loop + 1;
    if v_loop > 100 then raise exception 'Could not generate unique room code'; end if;
  end loop;
  insert into public.rooms (room_code, host_id, game_id, settings, status) 
  values (v_code, v_user_id, p_game_slug, coalesce(p_settings, '{}'::jsonb), 'waiting') returning id into v_room_id;
  insert into public.room_players (room_id, user_id, display_name, is_host, is_ready) values (v_room_id, v_user_id, coalesce(p_display_name, 'Player'), true, true);
  return jsonb_build_object('id', v_room_id, 'code', v_code, 'host_id', v_user_id, 'status', 'waiting');
end $$;
grant execute on function public.create_room(text, text, jsonb) to anon, authenticated;

-- CALCULATE SCORE
create or replace function public.calculate_score(p_game_id text, p_is_correct boolean, p_seconds_remaining integer)
returns integer language plpgsql security definer set search_path = public as $$
begin
  if not p_is_correct then return 0; end if;
  return 100 + (greatest(0, p_seconds_remaining) * 10);
end $$;
grant execute on function public.calculate_score(text, boolean, integer) to anon, authenticated;

-- =====================================================================
-- 6. GAME CONTENT, LEVEL PROGRESSION & UNIFIED MARKS SYSTEM
-- =====================================================================

-- Game content master table with full challenge details
create table if not exists public.game_content (
  id text primary key,
  game_slug text not null,
  level integer not null,
  challenge_index smallint not null,
  question_text text not null,
  options text[] not null default '{}',
  correct_answer text not null,
  explanation text not null,
  reference text not null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

create unique index if not exists uq_game_content_game_level_challenge
  on public.game_content(game_slug, level, challenge_index);

-- Public-safe view that hides correct_answer
create or replace view public.game_content_public
with (security_invoker = true)
as
select id, game_slug, level, challenge_index, question_text, options,
       explanation, reference, metadata
from public.game_content;

alter table public.game_content enable row level security;
drop policy if exists "content_public_safe_read" on public.game_content;
create policy "content_public_safe_read"
  on public.game_content for select to anon, authenticated using (true);
revoke select on public.game_content from public, anon, authenticated;
grant select (id, game_slug, level, challenge_index, question_text, options,
              explanation, reference, metadata)
  on public.game_content to anon, authenticated;
revoke all on public.game_content_public from public, anon, authenticated;
grant select on public.game_content_public to anon, authenticated;

-- Level attempts tracking table
create table if not exists public.level_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  game_slug text not null,
  level integer not null,
  challenges_done smallint default 0,
  score numeric(5,2) default 0,
  session_marks integer default 0,
  total_duration_ms integer default 0,
  status text default 'in_progress' check (status in ('in_progress', 'completed', 'abandoned')),
  created_at timestamptz default timezone('utc'::text, now()) not null,
  completed_at timestamptz
);

alter table public.level_attempts enable row level security;
drop policy if exists "Users can access own attempts" on public.level_attempts;
create policy "Users can access own attempts"
  on public.level_attempts for all to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Anti-farming: Tracks challenges that already awarded career marks (+10 marks)
create table if not exists public.user_awarded_challenges (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  game_slug text not null,
  level integer not null,
  challenge_index smallint not null,
  marks_awarded smallint default 10,
  awarded_at timestamptz default timezone('utc'::text, now()) not null,
  unique(user_id, game_slug, level, challenge_index)
);

alter table public.user_awarded_challenges enable row level security;
drop policy if exists "Users can view own awarded challenges" on public.user_awarded_challenges;
create policy "Users can view own awarded challenges"
  on public.user_awarded_challenges for select to authenticated
  using (auth.uid() = user_id);

-- RPC: GET LEVEL MAP
create or replace function public.get_level_map(p_game text)
returns table(
  level integer,
  name text,
  difficulty text,
  challenge_count integer,
  is_published boolean,
  unlocked boolean,
  completed boolean,
  best_stars integer,
  best_percent numeric,
  challenges_done integer,
  attempts integer
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
begin
  return query
  with user_prog as (
    select
      gp.current_level,
      gp.max_level_completed,
      gp.best_score,
      gp.stars,
      gp.total_attempts
    from public.game_progress gp
    where gp.user_id = v_user_id and gp.game_id = p_game
  )
  select
    lvl.lvl as level,
    case
      when lvl.lvl <= 10 then 'Beginner Stage ' || lvl.lvl
      when lvl.lvl <= 25 then 'Intermediate Stage ' || (lvl.lvl - 10)
      when lvl.lvl <= 40 then 'Advanced Stage ' || (lvl.lvl - 25)
      else 'Expert Mastery Stage ' || (lvl.lvl - 40)
    end as name,
    case
      when lvl.lvl <= 10 then 'Beginner'
      when lvl.lvl <= 25 then 'Intermediate'
      when lvl.lvl <= 40 then 'Advanced'
      else 'Expert'
    end as difficulty,
    10 as challenge_count,
    true as is_published,
    case
      when lvl.lvl = 1 then true
      when v_user_id is null then lvl.lvl = 1
      else lvl.lvl <= coalesce((select max_level_completed + 1 from user_prog), 1)
    end as unlocked,
    case
      when v_user_id is null then false
      else lvl.lvl <= coalesce((select max_level_completed from user_prog), 0)
    end as completed,
    coalesce((select stars from user_prog), 0) as best_stars,
    coalesce((select best_score::numeric from user_prog), 0) as best_percent,
    10 as challenges_done,
    coalesce((select total_attempts from user_prog), 0) as attempts
  from generate_series(1, 50) as lvl(lvl)
  order by lvl.lvl;
end $$;
grant execute on function public.get_level_map(text) to anon, authenticated;

-- RPC: START LEVEL
create or replace function public.start_level(
  p_game text,
  p_level integer,
  p_restart boolean default false
)
returns table(attempt_id uuid, challenges_done integer)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
  v_attempt_id uuid;
  v_done integer := 0;
begin
  if v_user_id is null then
    raise exception 'Authentication required to persist cloud attempts';
  end if;

  if not p_restart then
    select id, la.challenges_done into v_attempt_id, v_done
    from public.level_attempts la
    where la.user_id = v_user_id
      and la.game_slug = p_game
      and la.level = p_level
      and la.status = 'in_progress'
    order by la.created_at desc
    limit 1;

    if v_attempt_id is not null then
      return query select v_attempt_id, v_done;
      return;
    end if;
  end if;

  insert into public.level_attempts (user_id, game_slug, level, status)
  values (v_user_id, p_game, p_level, 'in_progress')
  returning id into v_attempt_id;

  return query select v_attempt_id, 0;
end $$;
grant execute on function public.start_level(text, integer, boolean) to anon, authenticated;

-- RPC: SUBMIT CHALLENGE ANSWER (Enforces unified 10 marks per correct answer, anti-farming on replay, stable question ID lookup)
create or replace function public.submit_challenge_answer(
  p_attempt uuid,
  p_challenge_index smallint,
  p_answer text,
  p_hints_used smallint default 0,
  p_duration_ms integer default 0,
  p_question_id text default null
)
returns table(
  is_correct boolean,
  score numeric,
  marks_awarded integer,
  is_new_marks boolean,
  explanation text,
  reference text,
  correct_answer text
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_attempt public.level_attempts%rowtype;
  v_correct_answer text;
  v_explanation text;
  v_reference text;
  v_is_correct boolean := false;
  v_marks integer := 0;
  v_is_new boolean := false;
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;

  select * into v_attempt
  from public.level_attempts
  where id = p_attempt and user_id = auth.uid() and status = 'in_progress'
  for update;

  if not found then
    raise exception 'Attempt is not active or does not belong to user';
  end if;

  -- 1. Try stable question ID first to prevent question-to-answer mismatches
  if p_question_id is not null and length(trim(p_question_id)) > 0 then
    select gc.correct_answer, gc.explanation, gc.reference
      into v_correct_answer, v_explanation, v_reference
    from public.game_content gc
    where gc.id = p_question_id;
  end if;

  -- 2. Fall back to attempt game_slug, level, and challenge_index
  if v_correct_answer is null then
    select gc.correct_answer, gc.explanation, gc.reference
      into v_correct_answer, v_explanation, v_reference
    from public.game_content gc
    where gc.game_slug = v_attempt.game_slug
      and gc.level = v_attempt.level
      and gc.challenge_index = p_challenge_index;
  end if;

  if v_correct_answer is not null then
    v_is_correct := (trim(lower(p_answer)) = trim(lower(v_correct_answer)));
  else
    v_is_correct := length(trim(p_answer)) > 0;
  end if;

  if v_is_correct then
    v_marks := 10;
    -- Anti-farming: Check if challenge was already awarded for this user
    if not exists (
      select 1 from public.user_awarded_challenges
      where user_id = auth.uid()
        and game_slug = v_attempt.game_slug
        and level = v_attempt.level
        and challenge_index = p_challenge_index
    ) then
      v_is_new := true;
      insert into public.user_awarded_challenges (user_id, game_slug, level, challenge_index, marks_awarded)
      values (auth.uid(), v_attempt.game_slug, v_attempt.level, p_challenge_index, 10);

      -- Update user profile total XP/marks
      update public.profiles
      set xp = xp + 10
      where id = auth.uid();
    end if;
  else
    v_marks := 0;
  end if;

  update public.level_attempts
  set challenges_done = greatest(challenges_done, p_challenge_index),
      session_marks = session_marks + v_marks,
      total_duration_ms = total_duration_ms + coalesce(p_duration_ms, 0)
  where id = p_attempt;

  return query select
    v_is_correct,
    v_marks::numeric,
    v_marks,
    v_is_new,
    coalesce(v_explanation, ''),
    coalesce(v_reference, ''),
    coalesce(v_correct_answer, '');
end $$;
grant execute on function public.submit_challenge_answer(uuid, smallint, text, smallint, integer, text) to anon, authenticated;

-- RPC: RECORD CHALLENGE
create or replace function public.record_challenge(
  p_attempt uuid,
  p_index integer,
  p_score numeric,
  p_hints integer default 0,
  p_ms integer default 0
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.level_attempts
  set challenges_done = greatest(challenges_done, p_index),
      total_duration_ms = total_duration_ms + coalesce(p_ms, 0)
  where id = p_attempt and user_id = auth.uid();
end $$;
grant execute on function public.record_challenge(uuid, integer, numeric, integer, integer) to anon, authenticated;

-- RPC: FINISH LEVEL
create or replace function public.finish_level(p_attempt uuid)
returns table(
  result_percent numeric,
  result_stars integer,
  result_points integer,
  total_ms integer,
  fully_correct integer,
  prev_best_stars integer,
  new_best_stars integer,
  is_new_best boolean,
  first_completion boolean,
  completed_levels integer
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_attempt public.level_attempts%rowtype;
  v_prev_stars integer := 0;
  v_stars integer := 0;
  v_pct numeric := 0;
  v_correct integer := 0;
  v_is_new_best boolean := false;
  v_first boolean := false;
  v_completed_count integer := 0;
begin
  select * into v_attempt
  from public.level_attempts
  where id = p_attempt and user_id = auth.uid();

  if not found then
    raise exception 'Attempt not found';
  end if;

  v_correct := round(v_attempt.session_marks / 10);
  v_pct := (v_correct::numeric / 10.0) * 100.0;

  v_stars := case
    when v_pct >= 90 then 5
    when v_pct >= 75 then 4
    when v_pct >= 60 then 3
    when v_pct >= 40 then 2
    when v_pct > 0 then 1
    else 0
  end;

  select coalesce(stars, 0) into v_prev_stars
  from public.game_progress
  where user_id = auth.uid() and game_id = v_attempt.game_slug;

  v_first := (v_prev_stars = 0);
  v_is_new_best := (v_stars > v_prev_stars);

  insert into public.game_progress (
    user_id, game_id, current_level, max_level_completed,
    best_score, total_attempts, stars, best_time_ms
  )
  values (
    auth.uid(), v_attempt.game_slug, v_attempt.level + 1, v_attempt.level,
    v_attempt.session_marks, 1, v_stars, v_attempt.total_duration_ms
  )
  on conflict (user_id, game_id) do update set
    current_level = greatest(game_progress.current_level, v_attempt.level + 1),
    max_level_completed = greatest(game_progress.max_level_completed, v_attempt.level),
    best_score = greatest(game_progress.best_score, v_attempt.session_marks),
    total_attempts = game_progress.total_attempts + 1,
    stars = greatest(game_progress.stars, v_stars),
    best_time_ms = case
      when game_progress.best_time_ms = 0 then v_attempt.total_duration_ms
      else least(game_progress.best_time_ms, v_attempt.total_duration_ms)
    end,
    updated_at = now();

  update public.level_attempts
  set status = 'completed', completed_at = now()
  where id = p_attempt;

  select count(distinct game_id) into v_completed_count
  from public.game_progress
  where user_id = auth.uid() and max_level_completed >= v_attempt.level;

  return query select
    v_pct,
    v_stars,
    v_attempt.session_marks,
    v_attempt.total_duration_ms,
    v_correct,
    v_prev_stars,
    greatest(v_prev_stars, v_stars),
    v_is_new_best,
    v_first,
    v_completed_count;
end $$;
grant execute on function public.finish_level(uuid) to anon, authenticated;
