-- The app serves these fourteen games from the local curated bank.
-- The database fact-reuse guard should only compare the five database-backed games.
-- This keeps legacy rows for local-only games from blocking safe updates to live content.
CREATE OR REPLACE FUNCTION public.reject_recycled_game_fact()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO ''
AS $function$
DECLARE
  v_reference text;
  v_answer text;
  v_old_key text;
  v_database_games text[] := ARRAY[
    'scripture-challenge',
    'who-said-it',
    'bible-detective',
    'old-vs-new-testament',
    'bible-word-search'
  ];
BEGIN
  IF NOT (NEW.game_slug = ANY(v_database_games)) THEN
    RETURN NEW;
  END IF;

  v_reference := regexp_replace(lower(trim(coalesce(NEW.reference, ''))), '[^a-z0-9]+', '', 'g');
  v_answer := regexp_replace(lower(trim(coalesce(NEW.correct_answer, ''))), '[^a-z0-9]+', '', 'g');

  IF v_reference = '' OR v_answer = '' THEN
    RAISE EXCEPTION 'Game content must include a Bible reference and correct answer.';
  END IF;

  IF TG_OP = 'UPDATE' THEN
    v_old_key := regexp_replace(lower(trim(coalesce(OLD.reference, ''))), '[^a-z0-9]+', '', 'g')
      || '|' ||
      regexp_replace(lower(trim(coalesce(OLD.correct_answer, ''))), '[^a-z0-9]+', '', 'g');
    IF v_old_key = v_reference || '|' || v_answer THEN
      RETURN NEW;
    END IF;
  END IF;

  PERFORM pg_advisory_xact_lock(hashtextextended(v_reference || '|' || v_answer, 0));

  IF EXISTS (
    SELECT 1
    FROM public.game_content gc
    WHERE gc.id IS DISTINCT FROM NEW.id
      AND gc.game_slug = ANY(v_database_games)
      AND regexp_replace(lower(trim(coalesce(gc.reference, ''))), '[^a-z0-9]+', '', 'g') = v_reference
      AND regexp_replace(lower(trim(coalesce(gc.correct_answer, ''))), '[^a-z0-9]+', '', 'g') = v_answer
  ) THEN
    RAISE EXCEPTION 'Recycled Bible fact rejected: this reference and answer are already used by another database-backed challenge.';
  END IF;

  RETURN NEW;
END;
$function$;
