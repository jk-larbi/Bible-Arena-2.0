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

-- Profiles
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

-- Game progress
create policy "Users can view own progress." on public.game_progress for select using (auth.uid() = user_id);
create policy "Users can insert own progress." on public.game_progress for insert with check (auth.uid() = user_id);
create policy "Users can update own progress." on public.game_progress for update using (auth.uid() = user_id);

-- Question history
create policy "Users can view own history." on public.question_history for select using (auth.uid() = user_id);
create policy "Users can insert own history." on public.question_history for insert with check (auth.uid() = user_id);

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

-- Question Keys
create policy "Question keys viewable by authenticated users." on public.question_keys for select to authenticated using (true);

-- Notifications
create policy "Users can view their notifications" on public.notifications for select to authenticated using (auth.uid() = user_id);
create policy "Users can insert notifications for peers" on public.notifications for insert to authenticated with check (auth.uid() = sender_id or auth.uid() = user_id or sender_id is null);
create policy "Users can update their notifications" on public.notifications for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can delete their notifications" on public.notifications for delete to authenticated using (auth.uid() = user_id);

-- Push Subscriptions
create policy "Users can view their push subscription" on public.push_subscriptions for select to authenticated using (auth.uid() = user_id);
create policy "Users can manage their push subscription" on public.push_subscriptions for insert to authenticated with check (auth.uid() = user_id);
create policy "Users can update their push subscription" on public.push_subscriptions for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "Users can delete their push subscription" on public.push_subscriptions for delete to authenticated using (auth.uid() = user_id);

-- Notification Preferences
create policy "Users can view their notification preferences" on public.notification_preferences for select to authenticated using (auth.uid() = user_id);
create policy "Users can insert their notification preferences" on public.notification_preferences for insert to authenticated with check (auth.uid() = user_id);
create policy "Users can update their notification preferences" on public.notification_preferences for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Revoke direct table updates where security-definer RPCs govern state
revoke update on public.rooms from authenticated;

-- =====================================================================
-- 5. RPC FUNCTIONS
-- =====================================================================

-- Check username availability
create or replace function public.is_username_available(p_username text)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  return not exists (
    select 1 from public.profiles where lower(username) = lower(trim(p_username))
  );
end $$;
grant execute on function public.is_username_available(text) to anon, authenticated;

-- Helper to check room membership
create or replace function public.is_room_member(p_room uuid)
returns boolean language sql stable as $$
  select exists (
    select 1 from public.room_players
    where room_id = p_room and (user_id = auth.uid() or auth.uid() is not null)
  );
$$;

-- Server timestamp sync helper
create or replace function public.server_now()
returns timestamptz language sql stable as $$ select now() $$;
grant execute on function public.server_now() to anon, authenticated;

-- CREATE ROOM RPC FUNCTION
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
  v_display_name text;
  v_game_slug text;
  v_user_id uuid;
begin
  v_user_id := auth.uid();
  if v_user_id is null then
    raise exception 'Authentication required to create a room';
  end if;

  v_display_name := trim(coalesce(p_display_name, 'Player'));
  if v_display_name = '' then
    v_display_name := 'Player';
  end if;

  v_game_slug := trim(coalesce(p_game_slug, 'scripture-challenge'));

  -- Auto-provision user profile for host if missing (supports anonymous guest-hosts)
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

  -- Generate unique 6-character room PIN
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

  -- Insert room
  insert into public.rooms (
    room_code,
    host_id,
    game_id,
    settings,
    status
  ) values (
    v_code,
    v_user_id,
    v_game_slug,
    coalesce(p_settings, '{}'::jsonb),
    'waiting'
  )
  returning id into v_room_id;

  -- Add host to room_players
  insert into public.room_players (
    room_id,
    user_id,
    display_name,
    is_host,
    is_ready
  ) values (
    v_room_id,
    v_user_id,
    v_display_name,
    true,
    true
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

-- JOIN ROOM RPC FUNCTION
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
  where upper(room_code) = v_clean_code and status = 'waiting';

  if not found then
    raise exception 'Room not found or game has already started';
  end if;

  -- Auto-provision user profile if missing
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

  -- Add player to room_players
  insert into public.room_players (
    room_id,
    user_id,
    display_name,
    is_host,
    is_ready
  ) values (
    v_room.id,
    v_user_id,
    v_display_name,
    (v_room.host_id = v_user_id),
    false
  );

  update public.room_players
  set display_name = v_display_name
  where room_id = v_room.id and user_id = v_user_id;

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

-- LEAVE ROOM RPC FUNCTION
create or replace function public.leave_room(p_room uuid)
returns void language plpgsql security definer set search_path = public as $$
declare r public.rooms; new_host uuid;
begin
  select * into r from public.rooms where id = p_room for update;
  if not found then return; end if;

  if r.status <> 'waiting' then return; end if;

  delete from public.room_players where room_id = p_room and user_id = auth.uid();

  if r.host_id = auth.uid() then
    select user_id into new_host from public.room_players
      where room_id = p_room order by created_at limit 1;
    if new_host is null then
      update public.rooms set status = 'finished' where id = p_room;
    else
      update public.rooms set host_id = new_host where id = p_room;
    end if;
  end if;
end $$;
grant execute on function public.leave_room(uuid) to anon, authenticated;

-- START GAME RPC FUNCTION
create or replace function public.start_game(p_room uuid, p_question_ids text[])
returns public.rooms language plpgsql security definer set search_path = public as $$
declare r public.rooms;
begin
  select * into r from public.rooms where id = p_room for update;
  if not found or r.host_id <> auth.uid() then raise exception 'Only the host can start the game'; end if;
  if r.status <> 'waiting' then return r; end if;
  if coalesce(array_length(p_question_ids,1),0) = 0 then raise exception 'No questions selected'; end if;
  update public.rooms set status = 'playing', question_ids = p_question_ids,
    current_question_index = 0, question_started_at = now()
  where id = p_room returning * into r;
  return r;
end $$;
grant execute on function public.start_game(uuid, text[]) to anon, authenticated;

-- ADVANCE QUESTION RPC FUNCTION
create or replace function public.advance_question(p_room uuid, p_from_index integer)
returns public.rooms language plpgsql security definer set search_path = public as $$
declare r public.rooms;
begin
  if not public.is_room_member(p_room) then raise exception 'Not in this room'; end if;
  select * into r from public.rooms where id = p_room for update;
  if r.status <> 'playing' or r.current_question_index <> p_from_index then return r; end if;
  if now() < r.question_started_at + make_interval(secs => coalesce(r.question_duration_seconds, 20) + coalesce(r.reveal_seconds, 5)) then
    return r;
  end if;
  if r.current_question_index + 1 >= coalesce(array_length(r.question_ids,1),0) then
    update public.rooms set status = 'finished' where id = p_room returning * into r;
  else
    update public.rooms set current_question_index = current_question_index + 1,
      question_started_at = now() where id = p_room returning * into r;
  end if;
  return r;
end $$;
grant execute on function public.advance_question(uuid, integer) to anon, authenticated;

-- REVEAL CURRENT QUESTION RPC FUNCTION
create or replace function public.reveal_current_question(p_room uuid)
returns table(question_id text, correct_answer text, explanation text, reference text)
language plpgsql security definer set search_path = public as $$
declare r public.rooms; qid text;
begin
  if not public.is_room_member(p_room) then raise exception 'Not in this room'; end if;
  select * into r from public.rooms where id = p_room;
  if r.status <> 'playing' then raise exception 'Game is not running'; end if;
  if now() < r.question_started_at + make_interval(secs => coalesce(r.question_duration_seconds, 20)) then
    raise exception 'Question still open';
  end if;
  qid := r.question_ids[r.current_question_index + 1];
  return query select k.question_id, k.answer, k.explanation, k.reference
               from public.question_keys k where k.question_id = qid;
end $$;
grant execute on function public.reveal_current_question(uuid) to anon, authenticated;

-- CHECK ANSWER RPC FUNCTION
create or replace function public.check_answer(p_question_id text, p_answer text)
returns table(is_correct boolean, correct_answer text, explanation text, reference text)
language plpgsql security definer set search_path = public as $$
begin
  return query
  select 
    (lower(trim(k.answer)) = lower(trim(p_answer))) as is_correct,
    k.answer as correct_answer,
    k.explanation,
    k.reference
  from public.question_keys k
  where k.question_id = p_question_id;
end $$;
grant execute on function public.check_answer(text, text) to anon, authenticated;

-- =====================================================================
-- 6. REALTIME PUBLICATION
-- =====================================================================

do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime' and schemaname = 'public' and tablename = 'notifications'
  ) then
    alter publication supabase_realtime add table public.notifications;
  end if;

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
end $$;
