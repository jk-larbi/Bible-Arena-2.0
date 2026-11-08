alter table public.challenges
  add column if not exists accepted_at timestamptz,
  add column if not exists completed_at timestamptz,
  add column if not exists winner_id uuid references public.profiles(id) on delete set null,
  add column if not exists challenger_score integer not null default 0,
  add column if not exists opponent_score integer not null default 0;

drop policy if exists "Challenges viewable by authenticated users." on public.challenges;
create policy "Players can view their own challenges"
  on public.challenges for select to authenticated
  using ((select auth.uid()) = challenger_id or (select auth.uid()) = opponent_id);

drop policy if exists "Users can update challenges." on public.challenges;

create or replace function private.respond_to_challenge(p_challenge_id uuid, p_status text)
returns public.challenges
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_challenge public.challenges%rowtype;
begin
  if auth.uid() is null then raise exception 'Not authenticated'; end if;
  if p_status not in ('accepted', 'declined') then raise exception 'Invalid challenge response'; end if;
  update public.challenges c
  set status = p_status,
      accepted_at = case when p_status = 'accepted' then now() else null end
  where c.id = p_challenge_id and c.opponent_id = auth.uid()
    and c.status = 'pending' and c.expires_at > now()
  returning c.* into v_challenge;
  if not found then raise exception 'This challenge is no longer available or you are not the invited player'; end if;
  return v_challenge;
end;
$function$;

revoke all on function private.respond_to_challenge(uuid,text) from public, anon;
grant usage on schema private to authenticated;
grant execute on function private.respond_to_challenge(uuid,text) to authenticated;

create or replace function public.respond_to_challenge(p_challenge_id uuid, p_status text)
returns public.challenges
language sql
security invoker
set search_path = ''
as $function$
  select private.respond_to_challenge(p_challenge_id, p_status);
$function$;
revoke all on function public.respond_to_challenge(uuid,text) from public, anon;
grant execute on function public.respond_to_challenge(uuid,text) to authenticated;
