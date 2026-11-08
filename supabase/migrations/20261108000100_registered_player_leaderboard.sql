-- Track guest vs registered Bible Arena accounts and create a public profile
-- for every newly registered Auth user. The leaderboard can then include
-- registered users with zero points while excluding guest sessions.

alter table public.profiles
  add column if not exists is_guest boolean not null default false;

update public.profiles p
set is_guest = coalesce(u.is_anonymous, false)
from auth.users u
where u.id = p.id;

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

create or replace function private.handle_new_auth_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  generated_username text;
begin
  generated_username := coalesce(
    nullif(new.raw_user_meta_data ->> 'username', ''),
    'player_' || substr(replace(new.id::text, '-', ''), 1, 8)
  );

  insert into public.profiles (id, username, full_name, level, xp, is_guest)
  values (
    new.id,
    generated_username,
    nullif(new.raw_user_meta_data ->> 'full_name', ''),
    1,
    0,
    coalesce(new.is_anonymous, false)
  )
  on conflict (id) do update
  set
    username = case
      when public.profiles.username like 'player\_%' escape '\\'
        then excluded.username
      else public.profiles.username
    end,
    full_name = coalesce(public.profiles.full_name, excluded.full_name),
    is_guest = excluded.is_guest;

  return new;
end;
$$;

revoke all on function private.handle_new_auth_user() from public, anon, authenticated;

drop trigger if exists on_auth_user_created_bible_arena on auth.users;
create trigger on_auth_user_created_bible_arena
  after insert on auth.users
  for each row execute function private.handle_new_auth_user();
