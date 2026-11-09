-- Scripture Challenges & Leaderboard Enhancements Migration
-- Extends public.challenges with fair head-to-head metrics, category support, and server-side result submission.
-- Provides monthly leaderboard standings and community quest aggregate queries.

alter table public.challenges
  add column if not exists challenge_category text not null default 'quick-challenge',
  add column if not exists challenger_duration_ms integer not null default 0,
  add column if not exists opponent_duration_ms integer not null default 0,
  add column if not exists challenger_correct integer not null default 0,
  add column if not exists opponent_correct integer not null default 0,
  add column if not exists challenger_completed boolean not null default false,
  add column if not exists opponent_completed boolean not null default false,
  add column if not exists rematch_of_id uuid references public.challenges(id) on delete set null,
  add column if not exists questions_seed integer default 0;

alter table public.challenges drop constraint if exists challenges_status_check;
alter table public.challenges add constraint challenges_status_check
  check (status = any (array['pending'::text, 'accepted'::text, 'declined'::text, 'cancelled'::text, 'completed'::text, 'in_progress'::text]));

-- Submit authoritative challenge result with server-side validation and tie-breaking
create or replace function private.submit_challenge_result(
  p_challenge_id uuid,
  p_score integer,
  p_duration_ms integer,
  p_correct integer
)
returns public.challenges
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_challenge public.challenges%rowtype;
  v_is_challenger boolean;
  v_is_opponent boolean;
  v_winner_id uuid;
  v_challenger_name text;
  v_opponent_name text;
  v_challenger_score integer;
  v_opponent_score integer;
  v_challenger_dur integer;
  v_opponent_dur integer;
  v_challenger_done boolean;
  v_opponent_done boolean;
begin
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;

  select * into v_challenge
  from public.challenges
  where id = p_challenge_id for update;

  if not found then
    raise exception 'Challenge not found';
  end if;

  v_is_challenger := (v_challenge.challenger_id = auth.uid());
  v_is_opponent := (v_challenge.opponent_id = auth.uid());

  if not (v_is_challenger or v_is_opponent) then
    raise exception 'You are not a participant in this challenge';
  end if;

  if v_challenge.status not in ('accepted', 'in_progress') then
    raise exception 'This challenge is not currently in an accepted playable state';
  end if;

  -- One-attempt completion lock: Prevent replaying to overwrite score
  if (v_is_challenger and v_challenge.challenger_completed) or
     (v_is_opponent and v_challenge.opponent_completed) then
    raise exception 'You have already completed your attempt for this challenge';
  end if;

  -- Sanitize inputs
  p_score := greatest(0, p_score);
  p_duration_ms := greatest(500, p_duration_ms);
  p_correct := least(5, greatest(0, p_correct));

  -- Update participant's score and completion state
  if v_is_challenger then
    v_challenge.challenger_score := p_score;
    v_challenge.challenger_duration_ms := p_duration_ms;
    v_challenge.challenger_correct := p_correct;
    v_challenge.challenger_completed := true;
  else
    v_challenge.opponent_score := p_score;
    v_challenge.opponent_duration_ms := p_duration_ms;
    v_challenge.opponent_correct := p_correct;
    v_challenge.opponent_completed := true;
  end if;

  v_challenger_score := v_challenge.challenger_score;
  v_opponent_score := v_challenge.opponent_score;
  v_challenger_dur := v_challenge.challenger_duration_ms;
  v_opponent_dur := v_challenge.opponent_duration_ms;
  v_challenger_done := v_challenge.challenger_completed;
  v_opponent_done := v_challenge.opponent_completed;

  -- If both players have completed, determine winner using score first, then duration_ms as tie-breaker
  if v_challenger_done and v_opponent_done then
    if v_challenger_score > v_opponent_score then
      v_winner_id := v_challenge.challenger_id;
    elsif v_opponent_score > v_challenger_score then
      v_winner_id := v_challenge.opponent_id;
    else
      -- Tie on score: use faster completion time (duration_ms) as tie-breaker
      if v_challenger_dur < v_opponent_dur then
        v_winner_id := v_challenge.challenger_id;
      elsif v_opponent_dur < v_challenger_dur then
        v_winner_id := v_challenge.opponent_id;
      else
        v_winner_id := null; -- Exact tie / draw
      end if;
    end if;

    v_challenge.winner_id := v_winner_id;
    v_challenge.status := 'completed';
    v_challenge.completed_at := now();

    -- Award bonus XP to winner if not already awarded
    if v_winner_id is not null and not coalesce(v_challenge.reward_awarded, false) then
      update public.profiles
      set xp = coalesce(xp, 0) + v_challenge.reward_xp,
          level = ((coalesce(xp, 0) + v_challenge.reward_xp) / 500) + 1
      where id = v_winner_id;
      v_challenge.reward_awarded := true;
    end if;

    -- Fetch usernames for clear match notification recap
    select coalesce(username, full_name, 'Challenger') into v_challenger_name
    from public.profiles where id = v_challenge.challenger_id;

    select coalesce(username, full_name, 'Opponent') into v_opponent_name
    from public.profiles where id = v_challenge.opponent_id;

    -- Insert in-app notifications for both players
    if v_winner_id = v_challenge.challenger_id then
      insert into public.notifications(user_id, sender_id, title, message, type, reference_id)
      values
        (v_challenge.challenger_id, v_challenge.opponent_id, 'Challenge Victory! 🏆',
         'You won the ' || v_challenge.title || ' (' || v_challenger_score || ' pts vs ' || v_opponent_score || ' pts) and earned +' || v_challenge.reward_xp || ' XP!',
         'challenge_response', v_challenge.id::text),
        (v_challenge.opponent_id, v_challenge.challenger_id, 'Challenge Concluded ⚔️',
         v_challenger_name || ' won the match (' || v_challenger_score || ' pts vs ' || v_opponent_score || ' pts). Challenge them to a rematch!',
         'challenge_response', v_challenge.id::text);
    elsif v_winner_id = v_challenge.opponent_id then
      insert into public.notifications(user_id, sender_id, title, message, type, reference_id)
      values
        (v_challenge.opponent_id, v_challenge.challenger_id, 'Challenge Victory! 🏆',
         'You won the ' || v_challenge.title || ' (' || v_opponent_score || ' pts vs ' || v_challenger_score || ' pts) and earned +' || v_challenge.reward_xp || ' XP!',
         'challenge_response', v_challenge.id::text),
        (v_challenge.challenger_id, v_challenge.opponent_id, 'Challenge Concluded ⚔️',
         v_opponent_name || ' won the match (' || v_opponent_score || ' pts vs ' || v_challenger_score || ' pts). Challenge them to a rematch!',
         'challenge_response', v_challenge.id::text);
    else
      -- Draw
      insert into public.notifications(user_id, sender_id, title, message, type, reference_id)
      values
        (v_challenge.challenger_id, v_challenge.opponent_id, 'Honorable Draw! 🤝',
         'Both scholars tied with ' || v_challenger_score || ' pts in ' || v_challenge.title || '.',
         'challenge_response', v_challenge.id::text),
        (v_challenge.opponent_id, v_challenge.challenger_id, 'Honorable Draw! 🤝',
         'Both scholars tied with ' || v_opponent_score || ' pts in ' || v_challenge.title || '.',
         'challenge_response', v_challenge.id::text);
    end if;
  else
    -- Still waiting for the other player
    v_challenge.status := 'accepted';
  end if;

  update public.challenges
  set challenger_score = v_challenge.challenger_score,
      opponent_score = v_challenge.opponent_score,
      challenger_duration_ms = v_challenge.challenger_duration_ms,
      opponent_duration_ms = v_challenge.opponent_duration_ms,
      challenger_correct = v_challenge.challenger_correct,
      opponent_correct = v_challenge.opponent_correct,
      challenger_completed = v_challenge.challenger_completed,
      opponent_completed = v_challenge.opponent_completed,
      winner_id = v_challenge.winner_id,
      status = v_challenge.status,
      completed_at = v_challenge.completed_at,
      reward_awarded = v_challenge.reward_awarded
  where id = v_challenge.id;

  return v_challenge;
end;
$function$;

revoke all on function private.submit_challenge_result(uuid,integer,integer,integer) from public, anon;
grant usage on schema private to authenticated;
grant execute on function private.submit_challenge_result(uuid,integer,integer,integer) to authenticated;

create or replace function public.submit_challenge_result(
  p_challenge_id uuid,
  p_score integer,
  p_duration_ms integer,
  p_correct integer
)
returns public.challenges
language sql
security invoker
set search_path = ''
as $function$
  select private.submit_challenge_result(p_challenge_id, p_score, p_duration_ms, p_correct);
$function$;

revoke all on function public.submit_challenge_result(uuid,integer,integer,integer) from public, anon;
grant execute on function public.submit_challenge_result(uuid,integer,integer,integer) to authenticated;


-- Monthly Arena Standings
create or replace function private.get_monthly_arena_standings()
returns table(
  rank integer,
  player_id uuid,
  username text,
  full_name text,
  player_level integer,
  monthly_points bigint,
  levels_played integer,
  games_played integer
)
language sql
security definer
set search_path to ''
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
           count(*)::integer as levels_played,
           count(distinct bl.game_slug)::integer as games_played
    from best_levels bl group by bl.user_id
  )
  select row_number() over (order by t.monthly_points desc, t.levels_played desc, p.created_at asc)::integer,
         p.id, p.username, p.full_name, coalesce(p.level, 1),
         t.monthly_points, t.levels_played, t.games_played
  from totals t join public.profiles p on p.id = t.user_id
  order by t.monthly_points desc, t.levels_played desc, p.created_at asc
  limit 100;
$function$;

revoke all on function private.get_monthly_arena_standings() from public, anon;
grant usage on schema private to authenticated, anon;
grant execute on function private.get_monthly_arena_standings() to authenticated, anon;

create or replace function public.get_monthly_arena_standings()
returns table(
  rank integer,
  player_id uuid,
  username text,
  full_name text,
  player_level integer,
  monthly_points bigint,
  levels_played integer,
  games_played integer
)
language sql
security invoker
set search_path to ''
as $function$
  select * from private.get_monthly_arena_standings();
$function$;

revoke all on function public.get_monthly_arena_standings() from public, anon;
grant execute on function public.get_monthly_arena_standings() to authenticated, anon;


-- Community Quest Aggregates
create or replace function public.get_community_quest_stats()
returns jsonb
language sql
security definer
set search_path to ''
as $function$
  select jsonb_build_object(
    'total_questions_answered', coalesce((select count(*) from public.challenge_results), 0),
    'total_levels_completed', coalesce((select count(*) from public.level_attempts where status = 'completed'), 0),
    'total_challenges_played', coalesce((select count(*) from public.challenges where status = 'completed'), 0),
    'total_scholars_active', coalesce((select count(distinct user_id) from public.level_attempts where completed_at >= now() - interval '30 days'), 0)
  );
$function$;

grant execute on function public.get_community_quest_stats() to authenticated, anon;
