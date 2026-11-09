-- Keep unpublished levels out of the public challenge feed.
-- The frontend also blocks starts above MAX_PUBLISHED_LEVELS; this view
-- makes the database publication boundary authoritative as well.
create or replace view public.game_content_public as
select
  gc.id,
  gc.game_slug,
  gc.level,
  gc.challenge_index,
  gc.question_text,
  gc.options,
  gc.explanation,
  gc.reference,
  null::jsonb as metadata,
  gc.question_key,
  gc.correct_answer
from public.game_content gc
join public.game_levels gl
  on gl.game_slug = gc.game_slug
 and gl.level = gc.level
where gl.is_published = true;

comment on view public.game_content_public is
  'Public game challenge bank limited to levels marked published in public.game_levels.';
