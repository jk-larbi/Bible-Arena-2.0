-- Keep challenge marks separate from cumulative XP.
-- Correct answers create idempotent mark-ledger entries; XP is awarded once
-- when finish_level calculates the player's new personal-best level score.
create or replace function public.submit_challenge_answer(
  p_attempt uuid,
  p_challenge_index smallint,
  p_answer text,
  p_hints_used smallint,
  p_duration_ms integer,
  p_question_id text,
  p_expected_answer text
)
returns table(
  is_correct boolean,
  score numeric,
  marks_awarded integer,
  is_new_marks boolean,
  explanation text,
  reference text,
  correct_answer text
)
language plpgsql
security definer
set search_path = ''
as $function$
declare
  a public.level_attempts;
  v_content public.game_content;
  v_correct boolean;
  v_new_award integer := 0;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  if p_challenge_index is null or p_challenge_index not between 1 and 10
     or p_answer is null or char_length(p_answer)>500
     or p_hints_used is null or p_hints_used<0
     or p_duration_ms is null or p_duration_ms<0 then
    raise exception 'Invalid answer submission';
  end if;

  select * into a from public.level_attempts
    where id=p_attempt and user_id=auth.uid() and status='in_progress' for update;
  if not found then raise exception 'Attempt is not active or does not belong to user'; end if;
  if p_challenge_index<>a.challenges_done+1 then raise exception 'Challenge already submitted or out of order'; end if;
  if p_question_id is null or btrim(p_question_id)='' then raise exception 'Stable question key is required'; end if;

  select * into v_content from public.game_content gc
    where gc.question_key=p_question_id and gc.game_slug=a.game_slug
      and gc.level=a.level and gc.challenge_index=p_challenge_index;
  if not found then raise exception 'Question content is not published for this exact question key'; end if;
  if p_expected_answer is null or lower(btrim(p_expected_answer))<>lower(btrim(v_content.correct_answer)) then
    raise exception 'Question bank mismatch: refresh before submitting';
  end if;

  v_correct:=lower(btrim(p_answer))=lower(btrim(v_content.correct_answer));
  insert into public.challenge_results(attempt_id,challenge_index,score,hints_used,duration_ms)
  values(a.id,p_challenge_index,case when v_correct then 1.000 else 0.000 end,p_hints_used,p_duration_ms);

  if v_correct then
    insert into public.user_awarded_challenges(user_id,game_slug,level,challenge_index,marks_awarded)
    values(auth.uid(),a.game_slug,a.level,p_challenge_index,10)
    on conflict(user_id,game_slug,level,challenge_index) do nothing;
    get diagnostics v_new_award=row_count;
  end if;

  update public.level_attempts set challenges_done=p_challenge_index
    where id=a.id;

  return query select v_correct,
    case when v_correct then 10::numeric else 0::numeric end,
    case when v_correct then 10 else 0 end,
    (v_new_award>0),
    coalesce(v_content.explanation,''),
    coalesce(v_content.reference,''),
    v_content.correct_answer;
end;
$function$;

revoke execute on function public.submit_challenge_answer(uuid,smallint,text,smallint,integer,text,text) from public, anon;
grant execute on function public.submit_challenge_answer(uuid,smallint,text,smallint,integer,text,text) to authenticated, service_role;
