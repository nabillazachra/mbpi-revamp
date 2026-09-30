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
