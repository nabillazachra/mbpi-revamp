# Security

## Scope

This repository is a static website prototype. It must not contain production credentials, API keys, or private operational data.

## Rules

- Keep all secrets out of source control.
- Do not embed backend credentials in `NEXT_PUBLIC_*` variables.
- Keep user-submitted form data out of the static build.
- The current inquiry flow opens the user email client and does not persist data.
- Validate any future API endpoint server-side and add rate limiting, input validation, CSRF protections where applicable, and appropriate logging.
- Review dependencies before upgrading and run `npm audit --omit=dev`.

## Reporting

Use the organization approved internal security channel before exposing vulnerability details publicly.


## Legacy-site migration note

During the September 2026 content audit, a legacy MBPI page rendered a large volume of unrelated gambling/spam links before the legitimate page content. Treat the existing production website as an untrusted migration source for executable assets.

Migration rules:
- Do not copy JavaScript bundles, WordPress plugins, themes, injected HTML, or third-party scripts from the legacy host into this repository.
- Migrate business copy only after validating it against visible MBPI service/contact/career content.
- Obtain the approved logo and brand assets from an internal/original source rather than copying files from the legacy web server.
- Review and rotate credentials associated with the legacy CMS/hosting separately from this static revamp project.
