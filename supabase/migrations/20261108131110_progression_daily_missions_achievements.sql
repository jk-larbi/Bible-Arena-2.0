-- Keep profile XP and rank in step with completed level performance.
create or replace function public.finish_level(p_attempt uuid)
returns table(
  result_percent numeric,
  result_stars smallint,
  result_points integer,
  total_ms integer,
  fully_correct integer,
  prev_best_stars smallint,
  new_best_stars smallint,
  is_new_best boolean,
  first_completion boolean,
  completed_levels integer
)
language plpgsql
security definer
set search_path to ''
as $function$
declare
  a public.level_attempts%rowtype;
  prev public.level_progress%rowtype;
  n integer;
  total numeric;
  ms integer;
  ok integer;
  pct numeric(5,2);
  st smallint;
  pts integer;
  xp_award integer;
  completed_total integer;
  completed_games integer;
begin
  if auth.uid() is null then raise exception 'Not authenticated'; end if;

  select la.* into a from public.level_attempts la
  where la.id = p_attempt and la.user_id = auth.uid() for update;
  if not found or a.status <> 'in_progress' then raise exception 'Active attempt not found'; end if;

  select count(*)::integer, coalesce(sum(cr.score), 0),
         coalesce(sum(cr.duration_ms), 0)::integer,
         (count(*) filter (where cr.score >= 0.999))::integer
  into n, total, ms, ok
  from public.challenge_results cr where cr.attempt_id = a.id;
  if n <> 10 or a.challenges_done <> 10 then raise exception 'Complete all 10 challenges first'; end if;

  pct := round(total / 10 * 100, 2);
  st := public.stars_for_percent(pct);
  pts := round(total * 100)::integer;

  select lp.* into prev from public.level_progress lp
  where lp.user_id = auth.uid() and lp.game_slug = a.game_slug and lp.level = a.level;

  -- XP is awarded only for a first completion or improvement over the previous best.
  xp_award := greatest(0, pts - coalesce(prev.best_score, 0));

  update public.level_attempts la
  set status = 'completed', percent = pct, stars = st, points = pts,
      duration_ms = ms, completed_at = now()
  where la.id = a.id;

  insert into public.level_progress
    (user_id, game_slug, level, completed, best_stars, best_percent, best_score,
     attempts, first_completed_at, last_completed_at)
  values (auth.uid(), a.game_slug, a.level, true, st, pct, pts, 1, now(), now())
  on conflict (user_id, game_slug, level) do update
  set completed = true,
      best_stars = greatest(public.level_progress.best_stars, excluded.best_stars),
      best_percent = greatest(public.level_progress.best_percent, excluded.best_percent),
      best_score = greatest(public.level_progress.best_score, excluded.best_score),
      attempts = public.level_progress.attempts + 1,
      first_completed_at = coalesce(public.level_progress.first_completed_at, excluded.first_completed_at),
      last_completed_at = now();

  update public.profiles
  set xp = coalesce(xp, 0) + xp_award,
      level = ((coalesce(xp, 0) + xp_award) / 500) + 1
  where id = auth.uid();

  select count(*)::integer, count(distinct lp.game_slug)::integer
  into completed_total, completed_games
  from public.level_progress lp
  where lp.user_id = auth.uid() and lp.completed;

  if completed_total >= 1 then
    insert into public.achievements(user_id, achievement_id)
    values (auth.uid(), 'first-clear') on conflict (user_id, achievement_id) do nothing;
  end if;
  if pct >= 100 then
    insert into public.achievements(user_id, achievement_id)
    values (auth.uid(), 'perfect-score') on conflict (user_id, achievement_id) do nothing;
  end if;
  if completed_total >= 10 then
    insert into public.achievements(user_id, achievement_id)
    values (auth.uid(), 'ten-levels') on conflict (user_id, achievement_id) do nothing;
  end if;
  if completed_games >= 5 then
    insert into public.achievements(user_id, achievement_id)
    values (auth.uid(), 'five-games') on conflict (user_id, achievement_id) do nothing;
  end if;
  if a.game_slug = 'bible-word-search' then
    insert into public.achievements(user_id, achievement_id)
    values (auth.uid(), 'word-seeker') on conflict (user_id, achievement_id) do nothing;
  elsif a.game_slug = 'bible-crossword' then
    insert into public.achievements(user_id, achievement_id)
    values (auth.uid(), 'crossword-solver') on conflict (user_id, achievement_id) do nothing;
  elsif a.game_slug = 'bible-memory-challenge' then
    insert into public.achievements(user_id, achievement_id)
    values (auth.uid(), 'memory-master') on conflict (user_id, achievement_id) do nothing;
  elsif a.game_slug = 'bible-timeline' then
    insert into public.achievements(user_id, achievement_id)
    values (auth.uid(), 'timeline-keeper') on conflict (user_id, achievement_id) do nothing;
  end if;

  return query
  select pct, st, pts, ms, ok,
         coalesce(prev.best_stars, 0::smallint),
         greatest(coalesce(prev.best_stars, 0::smallint), st),
         st > coalesce(prev.best_stars, 0::smallint),
         not coalesce(prev.completed, false),
         completed_total;
end;
$function$;

drop policy if exists "Achievement definitions are public" on public.achievement_definitions;
create policy "Achievement definitions are public"
on public.achievement_definitions for select to anon, authenticated using (true);

insert into public.achievement_definitions(id, game_id, title, description, icon_emoji)
values
  ('first-clear', null, 'First Steps', 'Complete your first Bible Arena level.', '🌱'),
  ('perfect-score', null, 'Perfect Scholar', 'Earn 100% on a level.', '💯'),
  ('ten-levels', null, 'Dedicated Scholar', 'Complete 10 levels across the Arena.', '📚'),
  ('five-games', null, 'All-Rounder', 'Complete levels in five different games.', '🏆'),
  ('word-seeker', 'bible-word-search', 'Word Seeker', 'Complete a Bible Word Search level.', '🔎'),
  ('crossword-solver', 'bible-crossword', 'Crossword Solver', 'Complete a Bible Crossword level.', '🧩'),
  ('memory-master', 'bible-memory-challenge', 'Memory Master', 'Complete a Bible Memory Challenge level.', '🧠'),
  ('timeline-keeper', 'bible-timeline', 'Keeper of Time', 'Complete a Bible Timeline level.', '⌛')
on conflict (id) do update
set game_id = excluded.game_id, title = excluded.title,
    description = excluded.description, icon_emoji = excluded.icon_emoji;

create table if not exists public.daily_mission_claims (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  mission_date date not null,
  mission_id text not null,
  reward_xp integer not null check (reward_xp > 0),
  claimed_at timestamptz not null default now(),
  unique(user_id, mission_date, mission_id)
);
alter table public.daily_mission_claims enable row level security;
drop policy if exists "Players can read own daily mission claims" on public.daily_mission_claims;
create policy "Players can read own daily mission claims"
on public.daily_mission_claims for select to authenticated
using ((select auth.uid()) = user_id);
grant select on public.daily_mission_claims to authenticated;

create or replace function public.claim_daily_mission(p_mission_id text)
returns table(mission_id text, reward_xp integer, total_xp integer, player_level integer)
language plpgsql
security definer
set search_path to ''
as $function$
declare
  v_day date := (now() at time zone 'UTC')::date;
  v_day_start timestamptz := date_trunc('day', now() at time zone 'UTC') at time zone 'UTC';
  v_completed integer := 0;
  v_distinct_games integer := 0;
  v_has_80 boolean := false;
  v_has_perfect boolean := false;
  v_reward integer;
  v_claim_id uuid;
  v_xp integer;
  v_level integer;
begin
  if auth.uid() is null then raise exception 'Not authenticated'; end if;
  select count(*)::integer, count(distinct la.game_slug)::integer,
         coalesce(bool_or(la.percent >= 80), false),
         coalesce(bool_or(la.percent >= 100), false)
  into v_completed, v_distinct_games, v_has_80, v_has_perfect
  from public.level_attempts la
  where la.user_id = auth.uid() and la.status = 'completed' and la.completed_at >= v_day_start;

  case p_mission_id
    when 'finish-one-level' then
      if v_completed < 1 then raise exception 'Complete one level first'; end if;
      v_reward := 50;
    when 'play-two-games' then
      if v_distinct_games < 2 then raise exception 'Complete levels in two different games first'; end if;
      v_reward := 75;
    when 'score-80-percent' then
      if not v_has_80 then raise exception 'Earn at least 80%% in a level first'; end if;
      v_reward := 100;
    when 'finish-three-levels' then
      if v_completed < 3 then raise exception 'Complete three levels first'; end if;
      v_reward := 150;
    when 'perfect-level' then
      if not v_has_perfect then raise exception 'Complete a level with 100%% first'; end if;
      v_reward := 200;
    else
      raise exception 'Unknown daily mission';
  end case;

  insert into public.daily_mission_claims(user_id, mission_date, mission_id, reward_xp)
  values (auth.uid(), v_day, p_mission_id, v_reward)
  on conflict (user_id, mission_date, mission_id) do nothing
  returning id into v_claim_id;
  if v_claim_id is null then raise exception 'This daily mission has already been claimed'; end if;

  update public.profiles
  set xp = coalesce(xp, 0) + v_reward,
      level = ((coalesce(xp, 0) + v_reward) / 500) + 1
  where id = auth.uid()
  returning xp, level into v_xp, v_level;
  if not found then raise exception 'Player profile not found'; end if;
  return query select p_mission_id, v_reward, v_xp, v_level;
end;
$function$;

revoke all on function public.claim_daily_mission(text) from public, anon;
grant execute on function public.claim_daily_mission(text) to authenticated;
