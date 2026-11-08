# Bible Arena hosting

Bible Arena is prepared to use two independent static hosts with the same Supabase backend:

- **Primary:** Cloudflare Pages
- **Backup:** GitHub Pages
- **Source of truth:** this GitHub repository
- **Backend:** the existing Supabase project

Do not add service-role keys or other server secrets to either hosting provider. The browser app only needs the public Supabase URL and publishable/anon key.

## Cloudflare Pages (primary)

Create a Pages project from this repository:

- Production branch: `main`
- Framework preset: `Vite`
- Build command: `npm install && npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Environment: `NODE_VERSION=22`

Add these build environment variables in the Cloudflare Pages dashboard:

- `VITE_SUPABASE_URL` — the existing Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` — the existing project's public publishable/anon key
- `VITE_VAPID_PUBLIC_KEY` — the public VAPID key, if browser push notifications are enabled

Do not add `VITE_BASE_PATH` on Cloudflare; the default `/` is correct. The `public/_redirects` file sends app routes to the Vite entry page so React Router can handle them.

## GitHub Pages (backup)

The workflow at `.github/workflows/deploy-github-pages.yml` builds the app with the repository path `/Bible-Arena-2.0/`, creates a `404.html` fallback for React Router, and deploys the static site to GitHub Pages when changes reach `main`.

Expected backup URL:

`https://jk-larbi.github.io/Bible-Arena-2.0/`

The workflow attempts to enable GitHub Pages automatically. If GitHub requires a one-time setting, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.

GitHub Pages does not need Supabase secrets at build time because the app's public environment variables are not embedded from GitHub Actions. To make the backup fully functional, configure the same three `VITE_*` values as GitHub Actions repository variables and add them to the Pages build workflow before its first production deployment. Never put the service-role key in repository variables.

## Supabase authentication URLs

After the Cloudflare Pages project gives you its final `.pages.dev` address, add both hosted addresses to the existing Supabase project's **Authentication → URL Configuration → Redirect URLs**:

- `https://<your-cloudflare-project>.pages.dev/**`
- `https://jk-larbi.github.io/Bible-Arena-2.0/**`

Keep the existing Vercel URL in the allow-list during the migration. Change the Supabase Site URL only after the Cloudflare site has been tested.

## Release checklist

1. Confirm the GitHub Pages workflow succeeds on the main branch.
2. Connect Cloudflare Pages to the repository and add the environment variables above.
3. Add both new host URLs to Supabase Auth redirect URLs.
4. Test sign-in, sign-out, password reset, a direct game link, a multiplayer room PIN/QR join, and realtime room updates on both hosts.
5. Only after both hosts work, disconnect the Vercel Git integration. Do not delete the Supabase project or its data.
