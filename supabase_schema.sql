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
