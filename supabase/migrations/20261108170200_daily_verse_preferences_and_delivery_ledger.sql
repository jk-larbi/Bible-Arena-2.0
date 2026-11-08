alter table public.notification_preferences
  add column if not exists daily_verse_enabled boolean not null default true;

create table if not exists public.daily_verse_deliveries (
  user_id uuid not null references auth.users(id) on delete cascade,
  verse_date date not null,
  verse_reference text not null,
  delivered_at timestamptz not null default now(),
  primary key (user_id, verse_date)
);
alter table public.daily_verse_deliveries enable row level security;
drop policy if exists "Users can read their daily verse delivery history" on public.daily_verse_deliveries;
create policy "Users can read their daily verse delivery history"
  on public.daily_verse_deliveries for select to authenticated
  using ((select auth.uid()) = user_id);
grant select on public.daily_verse_deliveries to authenticated;
