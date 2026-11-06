export const SUPABASE_SQL_SCHEMA = 
`-- =====================================================================
-- BIBLEARENA 2.0 - SUPABASE SQL SCHEMA & RLS POLICIES
-- Run this in your Supabase SQL Editor to set up the complete database.
-- =====================================================================

-- 1. PROFILES TABLE
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  full_name text,
  avatar_url text,
  level integer default 1,
  xp integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
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
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, game_id)
);

-- 3. QUESTION HISTORY TABLE
create table if not exists public.question_history (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  game_id text not null,
  question_id text not null,
  answered_correctly boolean not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. ACHIEVEMENTS TABLE
create table if not exists public.achievements (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  achievement_id text not null,
  unlocked_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, achievement_id)
);

-- 5. ROOMS TABLE (Multiplayer)
create table if not exists public.rooms (
  id uuid default gen_random_uuid() primary key,
  room_code varchar(6) unique not null,
  host_id uuid references public.profiles(id) on delete cascade not null,
  game_id text not null,
  status text default 'waiting',
  current_round integer default 1,
  max_rounds integer default 5,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
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
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 7. CHALLENGES TABLE
create table if not exists public.challenges (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  game_id text not null,
  target_score integer not null,
  reward_xp integer default 100,
  expires_at timestamp with time zone not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 8. SCORES TABLE
create table if not exists public.scores (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  game_id text not null,
  score integer not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ROW LEVEL SECURITY
alter table public.profiles enable row level security;
alter table public.game_progress enable row level security;
alter table public.question_history enable row level security;
alter table public.achievements enable row level security;
alter table public.rooms enable row level security;
alter table public.room_players enable row level security;
alter table public.challenges enable row level security;
alter table public.scores enable row level security;

create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

create policy "Users can view own progress." on public.game_progress for select using (auth.uid() = user_id);
create policy "Users can insert own progress." on public.game_progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress." on public.game_progress for update using (auth.uid() = user_id);

create policy "Scores are viewable by everyone." on public.scores for select using (true);
create policy "Users can insert own scores." on public.scores for insert with check (auth.uid() = user_id);

create policy "Rooms are viewable by everyone." on public.rooms for select using (true);
create policy "Authenticated users can create rooms." on public.rooms for insert with check (auth.uid() = host_id);
create policy "Host can update rooms." on public.rooms for update using (auth.uid() = host_id);

create policy "Room players viewable by everyone." on public.room_players for select using (true);
create policy "Anyone can join rooms." on public.room_players for insert with check (true);
create policy "Players can update own status." on public.room_players for update using (true);

create policy "Challenges viewable by everyone." on public.challenges for select using (true);
`;
