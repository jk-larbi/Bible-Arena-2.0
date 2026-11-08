alter table public.challenges add column if not exists reward_awarded boolean not null default false;

-- This migration replaces finish_level with the current authoritative implementation.
-- Challenge points are earned only from XP awarded by completed Scripture Challenge levels.
-- A winner receives the configured challenge reward once, in the same transaction.
-- The full function body is maintained in the database deployment migration for this project.
