-- Multiplayer uses all 150 published questions per game (30 levels × 5 questions).
-- Keep the database validation aligned with the full published bank.
create or replace function public.start_game(p_room uuid, p_question_ids text[])
returns public.rooms
language plpgsql
security definer
set search_path to ''
as $function$
declare
  r public.rooms;
  v_count integer;
begin
  if auth.uid() is null then raise exception 'Authentication required'; end if;
  select * into r from public.rooms where id = p_room for update;
  if not found then raise exception 'Room not found'; end if;
  if r.host_id is distinct from auth.uid() then raise exception 'Only the host can start the game'; end if;
  if r.status <> 'waiting' then raise exception 'Room is not waiting'; end if;
  if coalesce(array_length(p_question_ids, 1), 0) not between 1 and 150 then
    raise exception 'A match must contain 1 to 150 questions';
  end if;
  select count(*) into v_count
  from public.game_content gc
  where gc.question_key = any(p_question_ids) and gc.game_slug = r.game_id;
  if v_count <> array_length(p_question_ids, 1) then
    raise exception 'One or more questions are not published for this game';
  end if;
  update public.rooms
  set status = 'playing', question_ids = p_question_ids,
      current_question_index = 0, question_started_at = clock_timestamp()
  where id = p_room returning * into r;
  return r;
end;
$function$;

create or replace function public.publish_room_questions(p_room uuid, p_questions jsonb)
returns text[]
language plpgsql
security definer
set search_path to ''
as $function$
declare
 r public.rooms;
 item jsonb;
 v_key text;
 v_slug text;
 v_ids text[] := '{}';
 v_options text[];
 v_level integer;
 v_index smallint;
 v_count integer;
begin
 if auth.uid() is null then raise exception 'Authentication required'; end if;
 select * into r from public.rooms where id=p_room for update;
 if not found then raise exception 'Room not found'; end if;
 if r.host_id<>auth.uid() then raise exception 'Only the host can publish questions'; end if;
 if r.status<>'waiting' then raise exception 'Questions can only be published before the game starts'; end if;
 if p_questions is null or jsonb_typeof(p_questions)<>'array' then raise exception 'Questions must be an array'; end if;
 v_count:=jsonb_array_length(p_questions);
 if v_count<1 or v_count>150 then raise exception 'A match must contain 1 to 150 questions'; end if;

 for item in select value from jsonb_array_elements(p_questions) loop
  v_key:=nullif(btrim(item->>'id'),'');
  v_slug:=nullif(btrim(item->>'game_slug'),'');
  v_level:=coalesce(nullif(item->>'level','')::integer,1);
  v_index:=coalesce(nullif(item->>'challenge_index','')::smallint,1);
  if v_key is null or v_slug is distinct from r.game_id
    or v_level not between 1 and 100 or v_index not between 1 and 10
    or v_key<>v_slug||'-l'||v_level::text||'-c'||v_index::text then
   raise exception 'Invalid question key, game, level or challenge index'; end if;
  v_options:=array(select jsonb_array_elements_text(coalesce(item->'options','[]'::jsonb)));
  if not exists (
    select 1 from public.game_content gc
    where gc.question_key=v_key and gc.game_slug=r.game_id
      and gc.level=v_level and gc.challenge_index=v_index
      and gc.question_text=item->>'question_text'
      and gc.correct_answer=item->>'correct_answer'
      and gc.reference=item->>'reference'
      and coalesce(gc.options,'{}'::text[])=coalesce(v_options,'{}'::text[])
  ) then
   raise exception 'Question % is not an exact match for the published Bible question bank',v_key; end if;
  v_ids:=array_append(v_ids,v_key);
 end loop;
 if cardinality(v_ids)<>(select count(distinct x) from unnest(v_ids) x) then
  raise exception 'Duplicate question IDs are not allowed'; end if;
 return v_ids;
end;
$function$;

grant execute on function public.start_game(uuid, text[]) to anon, authenticated;
grant execute on function public.publish_room_questions(uuid, jsonb) to anon, authenticated;
