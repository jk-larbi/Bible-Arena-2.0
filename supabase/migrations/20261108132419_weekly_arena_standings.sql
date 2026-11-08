-- Weekly Arena standings use each player's best score per level during the current UTC week.
-- The private function returns only public profile fields and aggregate competition stats.
create or replace function private.get_weekly_arena_standings()
returns table(
  rank integer,
  player_id uuid,
  username text,
  full_name text,
  player_level integer,
  weekly_points bigint,
  levels_played integer,
  games_played integer
)
language sql
security definer
set search_path to ''
as $function$
  with week_window as (
    select date_trunc('week', now() at time zone 'UTC') at time zone 'UTC' as week_start
  ),
  best_levels as (
    select la.user_id, la.game_slug, la.level, max(coalesce(la.points, 0))::bigint as best_points
    from public.level_attempts la
    join public.profiles p on p.id = la.user_id and p.is_guest = false
    cross join week_window w
    where la.status = 'completed' and la.completed_at >= w.week_start
    group by la.user_id, la.game_slug, la.level
  ),
  totals as (
    select bl.user_id, sum(bl.best_points)::bigint as weekly_points,
           count(*)::integer as levels_played,
           count(distinct bl.game_slug)::integer as games_played
    from best_levels bl group by bl.user_id
  )
  select row_number() over (order by t.weekly_points desc, t.levels_played desc, p.created_at asc)::integer,
         p.id, p.username, p.full_name, coalesce(p.level, 1),
         t.weekly_points, t.levels_played, t.games_played
  from totals t join public.profiles p on p.id = t.user_id
  order by t.weekly_points desc, t.levels_played desc, p.created_at asc
  limit 100;
$function$;

revoke all on function private.get_weekly_arena_standings() from public, anon;
grant usage on schema private to authenticated;
grant execute on function private.get_weekly_arena_standings() to authenticated;

create or replace function public.get_weekly_arena_standings()
returns table(
  rank integer,
  player_id uuid,
  username text,
  full_name text,
  player_level integer,
  weekly_points bigint,
  levels_played integer,
  games_played integer
)
language sql
security invoker
set search_path to ''
as $function$
  select * from private.get_weekly_arena_standings();
$function$;

revoke all on function public.get_weekly_arena_standings() from public, anon;
grant execute on function public.get_weekly_arena_standings() to authenticated;
