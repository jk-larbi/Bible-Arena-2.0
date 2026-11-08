-- Applied remotely as Supabase migration 20261107190801.
-- Prevent room hosts from overwriting a question key belonging to another game
-- or publishing a key that does not match its game/level/challenge coordinates.
create or replace function public.publish_room_questions(p_room uuid,p_questions jsonb)
returns text[]
language plpgsql security definer
set search_path=''
as $$
declare
 r public.rooms; item jsonb; v_key text; v_slug text; v_ids text[]:='{}';
 v_options text[]; v_level integer; v_index smallint; v_count integer; v_rows integer;
begin
 select * into r from public.rooms where id=p_room for update;
 if not found then raise exception 'Room not found'; end if;
 if r.host_id<>auth.uid() then raise exception 'Only the host can publish questions'; end if;
 if r.status<>'waiting' then raise exception 'Questions can only be published before the game starts'; end if;
 if p_questions is null or jsonb_typeof(p_questions)<>'array' then raise exception 'Questions must be an array'; end if;
 v_count:=jsonb_array_length(p_questions);
 if v_count<1 or v_count>50 then raise exception 'A match must contain 1 to 50 questions'; end if;
 for item in select value from jsonb_array_elements(p_questions) loop
  v_key:=nullif(btrim(item->>'id'),''); v_slug:=nullif(btrim(item->>'game_slug'),'');
  v_level:=coalesce(nullif(item->>'level','')::integer,1);
  v_index:=coalesce(nullif(item->>'challenge_index','')::smallint,1);
  if v_key is null or v_slug is distinct from r.game_id or v_level not between 1 and 100
   or v_index not between 1 and 10 or v_key<>v_slug||'-l'||v_level::text||'-c'||v_index::text
   or nullif(btrim(item->>'question_text'),'') is null
   or nullif(btrim(item->>'correct_answer'),'') is null
   or nullif(btrim(item->>'reference'),'') is null then
   raise exception 'Question key, game, level, index, prompt, answer or scripture reference is invalid';
  end if;
  v_options:=array(select jsonb_array_elements_text(coalesce(item->'options','[]'::jsonb)));
  insert into public.game_content(question_key,game_slug,level,challenge_index,question_text,options,correct_answer,explanation,reference,metadata)
  values(v_key,r.game_id,v_level,v_index,item->>'question_text',coalesce(v_options,'{}'),item->>'correct_answer',
   coalesce(item->>'explanation',''),item->>'reference',coalesce(item->'metadata','{}'::jsonb))
  on conflict(question_key) do update set level=excluded.level,challenge_index=excluded.challenge_index,
   question_text=excluded.question_text,options=excluded.options,correct_answer=excluded.correct_answer,
   explanation=excluded.explanation,reference=excluded.reference,metadata=excluded.metadata
  where public.game_content.game_slug=excluded.game_slug;
  get diagnostics v_rows=row_count;
  if v_rows=0 then raise exception 'Question key % is already assigned to another game',v_key; end if;
  v_ids:=array_append(v_ids,v_key);
 end loop;
 if cardinality(v_ids)<>(select count(distinct x) from unnest(v_ids) x) then raise exception 'Duplicate question IDs are not allowed'; end if;
 return v_ids;
end; $$;
revoke all on function public.publish_room_questions(uuid,jsonb) from public,anon;
grant execute on function public.publish_room_questions(uuid,jsonb) to authenticated;
