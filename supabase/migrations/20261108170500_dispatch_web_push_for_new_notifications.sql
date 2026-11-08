create or replace function private.dispatch_notification_push()
returns trigger
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_cron_secret text;
begin
  select decrypted_secret into v_cron_secret
  from vault.decrypted_secrets
  where name = 'biblearena_daily_verse_cron_secret'
  limit 1;

  if v_cron_secret is not null and length(v_cron_secret) > 0 then
    perform net.http_post(
      url := 'https://cbbtqsjcsttguukfgnvw.supabase.co/functions/v1/daily-bible-verse',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || v_cron_secret
      ),
      body := jsonb_build_object(
        'action', 'dispatch_notification',
        'notification', jsonb_build_object(
          'id', new.id,
          'user_id', new.user_id,
          'title', new.title,
          'message', new.message,
          'type', new.type,
          'reference_id', new.reference_id
        )
      ),
      timeout_milliseconds := 10000
    );
  end if;
  return new;
end;
$function$;

revoke all on function private.dispatch_notification_push() from public, anon, authenticated;
drop trigger if exists dispatch_notification_push_after_insert on public.notifications;
create trigger dispatch_notification_push_after_insert
after insert on public.notifications
for each row execute function private.dispatch_notification_push();
