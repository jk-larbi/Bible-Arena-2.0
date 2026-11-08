# Daily Bible Verse Push Setup

The scheduled Edge Function is deployed as `daily-bible-verse`. The database scheduler runs at **06:00 UTC (06:00 Ghana time)** and calls it once each day.

## Required one-time secrets

Generate a VAPID key pair locally (do not send the private key in chat):

```powershell
npx web-push generate-vapid-keys
```

- Keep the **Private Key** private. Store it in Supabase Vault under `biblearena_vapid_private_key`.
- Send the **Public Key** only to the maintainer so it can replace the public key currently in `src/services/pushNotificationService.ts` and `supabase/functions/daily-bible-verse/index.ts`.

Generate a separate scheduler token:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Store it in Supabase Vault under `biblearena_daily_verse_cron_secret`.

In the Supabase SQL Editor, run the following after replacing the placeholders with the generated values:

```sql
select vault.create_secret('PASTE_VAPID_PRIVATE_KEY_HERE', 'biblearena_vapid_private_key');
select vault.create_secret('PASTE_CRON_TOKEN_HERE', 'biblearena_daily_verse_cron_secret');
```

The function reads both values from Vault through the service-role-only RPC `get_daily_verse_secrets`. Never put either private value in frontend code, GitHub, or a public environment variable.

## Player setup

Players sign in, open **Notification Settings**, enable **Browser Push Notifications**, then save preferences. They can separately turn **Daily Bible Verse** on or off. The browser/OS must allow notifications; background delivery depends on browser and device support.

## Test

After storing both Vault secrets and updating the public VAPID key, invoke the Edge Function once from an authenticated project admin test environment using the cron token. The daily ledger prevents more than one verse delivery per user per UTC day.
