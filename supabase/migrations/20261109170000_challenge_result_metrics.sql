
-- Shared community goals with best-per-level contribution tracking and one-time rewards.
create table if not exists public.community_quests (
  id uuid primary key default gen_random_uuid(),
  created_by uuid not null references public.profiles(id) on delete cascade,
  title text not null check (char_length(title) between 3 and 80),
  description text not null default '',
  goal_points integer not null check (goal_points between 100 and 1000000),
  reward_xp integer not null default 0 check (reward_xp between 0 and 5000),
  starts_at timestamptz not null default now(),
  ends_at timestamptz not null,
  status text not null default 'active' check (status in ('active','completed')),
  reward_awarded boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  check (ends_at > starts_at)
);
create table if not exists public.community_quest_contributions (
  id uuid primary key default gen_random_uuid(),
  quest_id uuid not null references public.community_quests(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  game_slug text not null,
  level integer not null,
  best_points integer not null default 0 check (best_points >= 0),
  updated_at timestamptz not null default now(),
  unique (quest_id, user_id, game_slug, level)
);
create table if not exists public.community_quest_rewards (
  id uuid primary key default gen_random_uuid(),
  quest_id uuid not null references public.community_quests(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  reward_xp integer not null default 0,
  awarded_at timestamptz not null default now(),
  unique (quest_id, user_id)
);
create index if not exists community_quests_deadline_idx on public.community_quests(status, ends_at);
create index if not exists community_quest_contributions_quest_idx on public.community_quest_contributions(quest_id);
alter table public.community_quests enable row level security;
alter table public.community_quest_contributions enable row level security;
alter table public.community_quest_rewards enable row level security;
revoke all on public.community_quests, public.community_quest_contributions, public.community_quest_rewards from anon, authenticated;

create or replace function public.create_community_quest(
  p_title text, p_description text, p_goal_points integer, p_reward_xp integer, p_ends_at timestamptz
) returns uuid
language plpgsql security definer set search_path = ''
as $function$
declare v_id uuid;
begin
  if auth.uid() is null then raise exception 'Sign in to create a community quest'; end if;
  if p_title is null or char_length(trim(p_title)) not between 3 and 80 then raise exception 'Quest title must be 3 to 80 characters'; end if;
  if p_goal_points is null or p_goal_points not between 100 and 1000000 then raise exception 'Goal must be between 100 and 1,000,000 points'; end if;
  if p_reward_xp is null or p_reward_xp not between 0 and 5000 then raise exception 'Reward must be between 0 and 5,000 XP'; end if;
  if p_ends_at is null or p_ends_at <= now() + interval '1 hour' or p_ends_at > now() + interval '30 days' then raise exception 'Choose a deadline between 1 hour and 30 days from now'; end if;
  insert into public.community_quests(created_by,title,description,goal_points,reward_xp,ends_at)
  values(auth.uid(),trim(p_title),coalesce(trim(p_description),''),p_goal_points,p_reward_xp,p_ends_at)
  returning id into v_id;
  return v_id;
end;
$function$;
revoke all on function public.create_community_quest(text,text,integer,integer,timestamptz) from public, anon;
grant execute on function public.create_community_quest(text,text,integer,integer,timestamptz) to authenticated;

create or replace function public.list_community_quests()
returns table(
  quest_id uuid, title text, description text, goal_points integer, reward_xp integer,
  starts_at timestamptz, ends_at timestamptz, status text, progress_points bigint,
  participants bigint, my_points bigint
)
language sql security definer set search_path = ''
as $function$
  select q.id,q.title,q.description,q.goal_points,q.reward_xp,q.starts_at,q.ends_at,
    case when q.status='completed' then 'completed' when q.ends_at <= now() then 'expired' else 'active' end,
    coalesce(sum(c.best_points),0)::bigint,
    count(distinct c.user_id)::bigint,
    coalesce(sum(c.best_points) filter(where c.user_id=auth.uid()),0)::bigint
  from public.community_quests q
  left join public.community_quest_contributions c on c.quest_id=q.id
  where q.ends_at >= now()-interval '7 days'
  group by q.id
  order by case when q.status='completed' then 1 when q.ends_at <= now() then 2 else 0 end, q.ends_at asc;
$function$;
revoke all on function public.list_community_quests() from public, anon;
grant execute on function public.list_community_quests() to authenticated;

alter table public.challenges
  add column if not exists reward_awarded boolean not null default false,
  add column if not exists challenger_correct integer not null default 0,
  add column if not exists opponent_correct integer not null default 0,
  add column if not exists challenger_duration_ms bigint not null default 0,
  add column if not exists opponent_duration_ms bigint not null default 0;
alter table public.challenges drop constraint if exists challenges_status_check;
alter table public.challenges add constraint challenges_status_check
  check (status = any (array['pending'::text, 'accepted'::text, 'declined'::text, 'cancelled'::text, 'completed'::text]));

create or replace function public.finish_level(p_attempt uuid)
returns table(result_percent numeric, result_stars smallint, result_points integer, total_ms integer, fully_correct integer, prev_best_stars smallint, new_best_stars smallint, is_new_best boolean, first_completion boolean, completed_levels integer)
language plpgsql
security definer
set search_path to ''
as $function$
declare
  a public.level_attempts%rowtype;
  prev public.level_progress%rowtype;
  v_challenge public.challenges%rowtype;
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
  completed_game_levels integer;
  v_quest record;
  v_contributor record;
  v_reward_rows integer;
begin
  if auth.uid() is null then raise exception 'Not authenticated'; end if;
  select la.* into a from public.level_attempts la where la.id = p_attempt and la.user_id = auth.uid() for update;
  if not found or a.status <> 'in_progress' then raise exception 'Active attempt not found'; end if;

  select count(*)::integer, coalesce(sum(cr.score), 0), coalesce(sum(cr.duration_ms), 0)::integer,
         (count(*) filter (where cr.score >= 0.999))::integer
  into n, total, ms, ok from public.challenge_results cr where cr.attempt_id = a.id;
  if n <> 10 or a.challenges_done <> 10 then raise exception 'Complete all 10 challenges first'; end if;

  pct := round(total / 10 * 100, 2);
  st := public.stars_for_percent(pct);
  pts := round(total * 100)::integer;
  select lp.* into prev from public.level_progress lp
  where lp.user_id = auth.uid() and lp.game_slug = a.game_slug and lp.level = a.level;
  xp_award := greatest(0, pts - coalesce(prev.best_score, 0));

  update public.level_attempts la set status = 'completed', percent = pct, stars = st, points = pts,
    duration_ms = ms, completed_at = now() where la.id = a.id;

  insert into public.level_progress(user_id, game_slug, level, completed, best_stars, best_percent, best_score,
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

  update public.profiles set xp = coalesce(xp, 0) + xp_award,
    level = ((coalesce(xp, 0) + xp_award) / 500) + 1 where id = auth.uid();

  if xp_award > 0 then
    for v_challenge in
      update public.challenges c
      set challenger_score = c.challenger_score + case when c.challenger_id = auth.uid() then xp_award else 0 end,
          opponent_score = c.opponent_score + case when c.opponent_id = auth.uid() then xp_award else 0 end,
          challenger_correct = c.challenger_correct + case when c.challenger_id = auth.uid() then ok else 0 end,
          opponent_correct = c.opponent_correct + case when c.opponent_id = auth.uid() then ok else 0 end,
          challenger_duration_ms = c.challenger_duration_ms + case when c.challenger_id = auth.uid() then ms else 0 end,
          opponent_duration_ms = c.opponent_duration_ms + case when c.opponent_id = auth.uid() then ms else 0 end,
          winner_id = case
            when c.challenger_id = auth.uid() and c.challenger_score + xp_award >= c.target_score and c.opponent_score < c.target_score then c.challenger_id
            when c.opponent_id = auth.uid() and c.opponent_score + xp_award >= c.target_score and c.challenger_score < c.target_score then c.opponent_id
            else null end,
          status = case
            when (c.challenger_id = auth.uid() and c.challenger_score + xp_award >= c.target_score and c.opponent_score < c.target_score)
              or (c.opponent_id = auth.uid() and c.opponent_score + xp_award >= c.target_score and c.challenger_score < c.target_score)
            then 'completed' else c.status end,
          completed_at = case
            when (c.challenger_id = auth.uid() and c.challenger_score + xp_award >= c.target_score and c.opponent_score < c.target_score)
              or (c.opponent_id = auth.uid() and c.opponent_score + xp_award >= c.target_score and c.challenger_score < c.target_score)
            then now() else c.completed_at end
      where c.status = 'accepted' and c.game_id = a.game_slug and c.expires_at > now()
        and (c.challenger_id = auth.uid() or c.opponent_id = auth.uid())
      returning c.*
    loop
      if v_challenge.winner_id is not null and not v_challenge.reward_awarded then
        update public.profiles set xp = coalesce(xp, 0) + v_challenge.reward_xp,
          level = ((coalesce(xp, 0) + v_challenge.reward_xp) / 500) + 1
        where id = v_challenge.winner_id;
        update public.challenges set reward_awarded = true where id = v_challenge.id;
        insert into public.notifications(user_id, title, message, type, reference_id)
        values
          (v_challenge.winner_id, 'Challenge Won! 🏆', 'You reached the challenge target and earned ' || v_challenge.reward_xp || ' bonus XP.', 'challenge_response', v_challenge.id::text),
          (case when v_challenge.winner_id = v_challenge.challenger_id then v_challenge.opponent_id else v_challenge.challenger_id end,
           'Challenge Finished', 'Your Scripture Challenge has ended. Check the challenge board for the result.', 'challenge_response', v_challenge.id::text);
      end if;
    end loop;
  end if;


  -- Count each scholar's best score once per game level during each active community quest.
  insert into public.community_quest_contributions(quest_id, user_id, game_slug, level, best_points, updated_at)
  select q.id, auth.uid(), a.game_slug, a.level, pts, now()
  from public.community_quests q
  where q.status = 'active' and q.starts_at <= now() and q.ends_at > now() and pts > 0
  on conflict (quest_id, user_id, game_slug, level) do update
    set best_points = greatest(public.community_quest_contributions.best_points, excluded.best_points),
        updated_at = now();

  -- When a shared goal is reached, award each contributor once.
  for v_quest in
    select q.id, q.goal_points, q.reward_xp, q.reward_awarded,
           coalesce(sum(c.best_points), 0)::bigint as total_points
    from public.community_quests q
    left join public.community_quest_contributions c on c.quest_id = q.id
    where q.status = 'active' and q.ends_at > now()
    group by q.id
  loop
    if v_quest.total_points >= v_quest.goal_points and not v_quest.reward_awarded then
      update public.community_quests
      set status = 'completed', reward_awarded = true, completed_at = now()
      where id = v_quest.id and status = 'active' and not reward_awarded;

      for v_contributor in
        select distinct user_id from public.community_quest_contributions where quest_id = v_quest.id
      loop
        insert into public.community_quest_rewards(quest_id, user_id, reward_xp)
        values (v_quest.id, v_contributor.user_id, v_quest.reward_xp)
        on conflict (quest_id, user_id) do nothing;
        get diagnostics v_reward_rows = row_count;
        if v_reward_rows > 0 and v_quest.reward_xp > 0 then
          update public.profiles
          set xp = coalesce(xp, 0) + v_quest.reward_xp,
              level = ((coalesce(xp, 0) + v_quest.reward_xp) / 500) + 1
          where id = v_contributor.user_id;
          insert into public.notifications(user_id, title, message, type, reference_id)
          values (v_contributor.user_id, 'Community Quest Completed!', 'Your community reached its shared goal. You earned ' || v_quest.reward_xp || ' bonus XP.', 'challenge_response', v_quest.id::text);
        end if;
      end loop;
    end if;
  end loop;

  select count(*)::integer, count(distinct lp.game_slug)::integer into completed_total, completed_games
  from public.level_progress lp where lp.user_id = auth.uid() and lp.completed;
  select count(*)::integer into completed_game_levels from public.level_progress lp
  where lp.user_id = auth.uid() and lp.game_slug = a.game_slug and lp.completed;

  if completed_total >= 1 then
    insert into public.achievements(user_id, achievement_id) values (auth.uid(), 'first-clear') on conflict (user_id, achievement_id) do nothing;
  end if;
  if pct >= 100 then
    insert into public.achievements(user_id, achievement_id) values (auth.uid(), 'perfect-score') on conflict (user_id, achievement_id) do nothing;
  end if;
  if completed_total >= 10 then
    insert into public.achievements(user_id, achievement_id) values (auth.uid(), 'ten-levels') on conflict (user_id, achievement_id) do nothing;
  end if;
  if completed_games >= 5 then
    insert into public.achievements(user_id, achievement_id) values (auth.uid(), 'five-games') on conflict (user_id, achievement_id) do nothing;
  end if;
  if a.game_slug = 'bible-word-search' then
    insert into public.achievements(user_id, achievement_id) values (auth.uid(), 'word-seeker') on conflict (user_id, achievement_id) do nothing;
  elsif a.game_slug = 'bible-crossword' then
    insert into public.achievements(user_id, achievement_id) values (auth.uid(), 'crossword-solver') on conflict (user_id, achievement_id) do nothing;
  elsif a.game_slug = 'bible-memory-challenge' then
    insert into public.achievements(user_id, achievement_id) values (auth.uid(), 'memory-master') on conflict (user_id, achievement_id) do nothing;
  elsif a.game_slug = 'bible-timeline' then
    insert into public.achievements(user_id, achievement_id) values (auth.uid(), 'timeline-keeper') on conflict (user_id, achievement_id) do nothing;
  end if;

  return query select pct, st, pts, ms, ok, coalesce(prev.best_stars, 0::smallint),
    greatest(coalesce(prev.best_stars, 0::smallint), st), st > coalesce(prev.best_stars, 0::smallint),
    not coalesce(prev.completed, false), completed_game_levels;
end;
$function$;

-- Monthly Arena standings: best completed score per game level in the current UTC month.
create or replace function private.get_monthly_arena_standings()
returns table(rank integer, player_id uuid, username text, full_name text, player_level integer, weekly_points bigint, levels_played integer, games_played integer)
language sql security definer set search_path = ''
as $function$
  with month_window as (
    select date_trunc('month', now() at time zone 'UTC') at time zone 'UTC' as month_start
  ),
  best_levels as (
    select la.user_id, la.game_slug, la.level, max(coalesce(la.points, 0))::bigint as best_points
    from public.level_attempts la
    join public.profiles p on p.id = la.user_id and p.is_guest = false
    cross join month_window m
    where la.status = 'completed' and la.completed_at >= m.month_start
    group by la.user_id, la.game_slug, la.level
  ),
  totals as (
    select bl.user_id, sum(bl.best_points)::bigint as monthly_points,
      count(*)::integer as levels_played, count(distinct bl.game_slug)::integer as games_played
    from best_levels bl group by bl.user_id
  )
  select row_number() over (order by t.monthly_points desc, t.levels_played desc, p.created_at asc)::integer,
    p.id, p.username, p.full_name, coalesce(p.level, 1), t.monthly_points, t.levels_played, t.games_played
  from totals t join public.profiles p on p.id = t.user_id
  order by t.monthly_points desc, t.levels_played desc, p.created_at asc limit 100;
$function$;
revoke all on function private.get_monthly_arena_standings() from public, anon;
grant usage on schema private to authenticated;
grant execute on function private.get_monthly_arena_standings() to authenticated;

create or replace function public.get_monthly_arena_standings()
returns table(rank integer, player_id uuid, username text, full_name text, player_level integer, weekly_points bigint, levels_played integer, games_played integer)
language sql security invoker set search_path = ''
as $function$ select * from private.get_monthly_arena_standings(); $function$;
revoke all on function public.get_monthly_arena_standings() from public, anon;
grant execute on function public.get_monthly_arena_standings() to authenticated;
