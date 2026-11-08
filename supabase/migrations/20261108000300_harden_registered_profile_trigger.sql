-- Harden the auth profile trigger and keep account conversions in sync.
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
      when left(public.profiles.username, 7) = 'player_'
        then excluded.username
      else public.profiles.username
    end,
    full_name = coalesce(public.profiles.full_name, excluded.full_name),
    is_guest = excluded.is_guest;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created_bible_arena on auth.users;
create trigger on_auth_user_created_bible_arena
  after insert or update of is_anonymous, raw_user_meta_data on auth.users
  for each row execute function private.handle_new_auth_user();
