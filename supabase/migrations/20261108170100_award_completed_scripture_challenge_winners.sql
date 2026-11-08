alter table public.challenges add column if not exists reward_awarded boolean not null default false;
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

  if a.game_slug = 'scripture-challenge' and xp_award > 0 then
    for v_challenge in
      update public.challenges c
      set challenger_score = c.challenger_score + case when c.challenger_id = auth.uid() then xp_award else 0 end,
          opponent_score = c.opponent_score + case when c.opponent_id = auth.uid() then xp_award else 0 end,
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
      where c.status = 'accepted' and c.game_id = 'scripture-challenge' and c.expires_at > now()
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
