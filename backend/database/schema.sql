-- BibleArena custom backend schema for Neon PostgreSQL.
-- Run once against a NEW Neon database. Back up any existing database first.
create extension if not exists pgcrypto;

create table if not exists app_users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  username text not null unique,
  password_hash text not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  last_login_at timestamptz
);

create table if not exists profiles (
  user_id uuid primary key references app_users(id) on delete cascade,
  username text not null unique,
  full_name text,
  avatar_url text,
  level integer not null default 1 check(level >= 1),
  xp bigint not null default 0 check(xp >= 0),
  created_at timestamptz not null default now()
);

create table if not exists game_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references app_users(id) on delete cascade,
  game_id text not null,
  current_level integer not null default 1,
  max_level_completed integer not null default 0,
  best_score integer not null default 0,
  total_attempts integer not null default 0,
  stars integer not null default 0,
  best_time_ms integer not null default 0,
  updated_at timestamptz not null default now(),
  unique(user_id,game_id)
);

create table if not exists scores (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references app_users(id) on delete cascade,
  game_id text not null,
  score integer not null check(score >= 0),
  created_at timestamptz not null default now()
);

create table if not exists rooms (
  id uuid primary key default gen_random_uuid(),
  room_code varchar(6) not null unique,
  host_id uuid not null references app_users(id) on delete cascade,
  game_id text not null,
  settings jsonb not null default '{}'::jsonb,
  status text not null default 'waiting' check(status in ('waiting','playing','finished')),
  current_round integer not null default 1,
  max_rounds integer not null default 5,
  reveal_seconds integer not null default 5,
  question_duration_seconds integer not null default 20,
  question_ids text[] not null default '{}',
  current_question_index integer not null default 0,
  question_started_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists room_players (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references rooms(id) on delete cascade,
  user_id uuid references app_users(id) on delete set null,
  display_name text not null,
  score integer not null default 0,
  is_ready boolean not null default false,
  is_host boolean not null default false,
  created_at timestamptz not null default now(),
  unique(room_id,user_id)
);

create table if not exists challenges (
  id uuid primary key default gen_random_uuid(),
  challenger_id uuid references app_users(id) on delete set null,
  opponent_id uuid references app_users(id) on delete set null,
  title text not null,
  description text not null default '',
  game_id text not null,
  target_score integer not null default 1000,
  reward_xp integer not null default 100,
  status text not null default 'pending' check(status in ('pending','accepted','declined','cancelled')),
  expires_at timestamptz not null default now()+interval '7 days',
  created_at timestamptz not null default now()
);

create table if not exists achievements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references app_users(id) on delete cascade,
  achievement_id text not null,
  unlocked_at timestamptz not null default now(),
  unique(user_id,achievement_id)
);

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references app_users(id) on delete cascade,
  sender_id uuid references app_users(id) on delete set null,
  title text not null,
  message text not null,
  type text not null,
  reference_id text,
  is_read boolean not null default false,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists question_bank (
  id text primary key,
  game_id text not null,
  question text not null,
  options jsonb not null default '[]'::jsonb,
  correct_answer text not null,
  explanation text,
  bible_reference text,
  created_at timestamptz not null default now()
);

create table if not exists game_rounds (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references app_users(id) on delete cascade,
  game_id text not null,
  level integer not null,
  seed text not null,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  status text not null default 'pending' check(status in ('pending','completed','expired'))
);

create index if not exists idx_progress_user on game_progress(user_id,game_id);
create index if not exists idx_scores_game on scores(game_id,score desc);
create index if not exists idx_rooms_status on rooms(status);
create index if not exists idx_room_players_room on room_players(room_id);
create index if not exists idx_notifications_user on notifications(user_id,created_at desc);
create index if not exists idx_challenges_opponent on challenges(opponent_id,status);

create or replace view leaderboards as
select p.user_id,p.username,p.full_name,p.avatar_url,p.level,p.xp,
       coalesce(sum(s.score),0)::bigint total_score,count(s.id)::int games_played
from profiles p left join scores s on s.user_id=p.user_id
group by p.user_id,p.username,p.full_name,p.avatar_url,p.level,p.xp;
