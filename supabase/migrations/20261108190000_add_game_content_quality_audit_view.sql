create or replace view public.game_content_quality_audit as
with normalized as (
  select
    game_slug,
    level,
    challenge_index,
    question_text,
    reference,
    correct_answer,
    regexp_replace(lower(trim(coalesce(question_text,''))), '[^a-z0-9]+', ' ', 'g') as question_key,
    regexp_replace(lower(trim(coalesce(reference,''))), '[^a-z0-9]+', '', 'g') || '|' ||
    regexp_replace(lower(trim(coalesce(correct_answer,''))), '[^a-z0-9]+', '', 'g') as fact_key
  from public.game_content
),
fact_groups as (
  select fact_key, count(*) as n
  from normalized
  where fact_key not in ('|')
  group by fact_key
  having count(*) > 1
),
question_groups as (
  select question_key, count(*) as n
  from normalized
  where question_key <> ''
  group by question_key
  having count(*) > 1
)
select
  (select count(*) from normalized) as total_rows,
  (select count(distinct game_slug) from normalized) as games,
  (select count(distinct question_key) from normalized where question_key <> '') as unique_question_wordings,
  (select count(distinct fact_key) from normalized where fact_key <> '|') as unique_reference_answer_facts,
  (select count(*) from fact_groups) as duplicate_fact_groups,
  (select coalesce(sum(n - 1),0) from fact_groups) as excess_duplicate_fact_rows,
  (select count(*) from question_groups) as duplicate_wording_groups,
  (select coalesce(sum(n - 1),0) from question_groups) as excess_duplicate_wording_rows,
  (select count(*) from normalized where trim(coalesce(reference,'')) = '') as missing_references,
  (select count(*) from normalized where trim(coalesce(correct_answer,'')) = '') as missing_answers;

grant select on public.game_content_quality_audit to authenticated;
grant select on public.game_content_quality_audit to service_role;
