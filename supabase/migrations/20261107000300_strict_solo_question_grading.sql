-- Reject stale or mismatched solo answer keys before recording any score.
drop function if exists public.submit_challenge_answer(uuid, smallint, text, smallint, integer, text);
create or replace function public.submit_challenge_answer(
  p_attempt uuid, p_challenge_index smallint, p_answer text,
  p_hints_used smallint default 0, p_duration_ms integer default 0,
  p_question_id text default null, p_expected_answer text default null
)
returns table(is_correct boolean, score numeric, marks_awarded integer, is_new_marks boolean,
  explanation text, reference text, correct_answer text)
language plpgsql security definer set search_path = public as $$
declare
  v_attempt public.level_attempts%rowtype;
  v_correct_answer text;
  v_explanation text;
  v_reference text;
  v_is_correct boolean := false;
  v_marks integer := 0;
  v_is_new boolean := false;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into v_attempt from public.level_attempts
    where id = p_attempt and user_id = auth.uid() and status = 'in_progress' for update;
  if not found then raise exception 'Attempt is not active or does not belong to user'; end if;
  if p_question_id is null or trim(p_question_id) = '' then raise exception 'A stable question ID is required'; end if;
  select gc.correct_answer, gc.explanation, gc.reference into v_correct_answer, v_explanation, v_reference
    from public.game_content gc
    where gc.id = p_question_id and gc.game_slug = v_attempt.game_slug
      and gc.level = v_attempt.level and gc.challenge_index = p_challenge_index;
  if v_correct_answer is null then raise exception 'Question content is not published for this exact question ID'; end if;
  if p_expected_answer is null or lower(trim(p_expected_answer)) <> lower(trim(v_correct_answer)) then
    raise exception 'Question bank mismatch: refresh the quiz before submitting';
  end if;
  v_is_correct := lower(trim(coalesce(p_answer, ''))) = lower(trim(v_correct_answer));
  v_marks := case when v_is_correct then 10 else 0 end;
  if v_is_correct and not exists (
    select 1 from public.user_awarded_challenges
    where user_id = auth.uid() and game_slug = v_attempt.game_slug
      and level = v_attempt.level and challenge_index = p_challenge_index
  ) then
    insert into public.user_awarded_challenges(user_id, game_slug, level, challenge_index, marks_awarded)
    values (auth.uid(), v_attempt.game_slug, v_attempt.level, p_challenge_index, 10)
    on conflict (user_id, game_slug, level, challenge_index) do nothing;
    if found then
      v_is_new := true;
      update public.profiles set xp = coalesce(xp, 0) + 10 where id = auth.uid();
    end if;
  end if;
  update public.level_attempts
    set challenges_done = greatest(challenges_done, p_challenge_index),
        session_marks = session_marks + v_marks,
        total_duration_ms = total_duration_ms + coalesce(p_duration_ms, 0)
    where id = p_attempt;
  return query select v_is_correct, v_marks::numeric, v_marks, v_is_new,
    coalesce(v_explanation, ''), coalesce(v_reference, ''), v_correct_answer;
end;
$$;
grant execute on function public.submit_challenge_answer(uuid, smallint, text, smallint, integer, text, text) to authenticated;
