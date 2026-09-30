# MBPI Revamp

Modern React/Next.js revamp concept for PT Multi Bina Pura International, prepared for static hosting on GitHub Pages.

## Stack

- Next.js 16
- React 19
- App Router
- Static export (`output: export`)
- GitHub Actions deployment to GitHub Pages
- No third-party runtime UI library

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages

1. Push this repository to GitHub.
2. Open repository Settings -> Pages.
3. Under Build and deployment, choose GitHub Actions.
4. Push to `main`; `.github/workflows/pages.yml` builds and deploys the static export.

The config automatically applies the repository name as `basePath` for project pages. If the repository is named `<username>.github.io`, it deploys at the root without a base path.

## Routes

English:
- `/`
- `/about-us/`
- `/services/`
- `/facilities/`
- `/support/`
- `/news/`
- `/career/`
- `/contact/`

Indonesian:
- `/id/`
- `/id/about-us/`
- `/id/services/`
- `/id/facilities/`
- `/id/support/`
- `/id/news/`
- `/id/career/`
- `/id/contact/`

## Important content validation before production go-live

- Replace text wordmark with the approved MBPI logo asset.
- Verify facility capacity/equipment numeric figures; crawler-accessible legacy pages currently expose several counters as `0`.
- Verify URLs for Damage Container Photos and CFS Consol before adding them to the new Support quick-access area.
- Confirm whether Surveyor and Container Repair vacancies are still active.
- Replace static mailto inquiry with an approved backend/API endpoint if form submissions must be captured centrally.

## Research docs

- `docs/UX-RESEARCH.md`
- `docs/LO-FI.md`
