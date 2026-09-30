# MBPI Website Revamp - UX Research Summary

## 1. Existing content inventory

The current MBPI site contains these primary information groups:

- About Us
- Branches: Jakarta and Semarang
- Services: Container Depot, Container Repair, Warehousing, Trucking Services
- Support: Jakarta Facility, Semarang Facility, Damage Container Photos, CFS Consol, FAQ
- News
- Contact
- E-Faktur
- Indonesian and English language variants

## 2. Core user intents

1. Commercial inquiry: understand services and request a quotation.
2. Operational access: find E-Faktur, tracking, operational contacts, and working hours.
3. Service validation: understand depot, repair, warehousing, trucking, and facility coverage.
4. Recruitment: find open positions and submit an application.
5. Corporate validation: understand MBPI profile, history, values, and locations.

## 3. UX issues found in the current information structure

- High-value actions such as quotation, E-Faktur, FAQ, and operational contacts are distributed across different navigation levels.
- Indonesian pages contain some English copy, creating inconsistent localization.
- Recruitment content is mixed into News, which creates unclear content intent.
- Facility pages expose animated numeric fields as zero in crawler results, which creates an SEO/accessibility risk for capacity data.
- Contact content is useful but dense; operating hours, locations, phones, and inquiry form compete in one long page.

## 4. Design direction

Use a modern editorial design language while preserving MBPI visual identity:

- Nutech orange: #f15a29
- Ink: #171b20
- Warm off-white: #f7f7f5
- High contrast typography
- Square/low-radius UI rather than generic rounded AI cards
- Strong grid, numbered sections, thin divider lines, and operational typography\n- Red and green should be used as brand signals, not as full-screen competing backgrounds
- Minimal decoration; logistics visualization is built with CSS so the prototype does not depend on unrelated stock imagery

## 5. Proposed information architecture

Home
- About snapshot
- Four core services
- Operational strengths
- Jakarta + Semarang network
- Request quotation CTA

About
- Company profile
- Service principles
- Core values
- Vision and mission

Services
- Container Depot
- Container Repair
- Warehousing
- Trucking Services
- Operating advantages

Facilities
- Jakarta Facility
- Semarang Facility
- Equipment/capability categories
- Capacity figures withheld until verified

Support
- E-Faktur
- ShipmentLink
- FAQ
- Complaints channel
- Future placeholders for internal portals when verified URLs are available

News
- Corporate updates only

Career
- Recruitment posts migrated from legacy News

Contact
- Office/contact cards
- Operating hours
- Static-friendly inquiry form using mailto

## 6. Technical principles

- React via Next.js App Router
- Static export for GitHub Pages
- No backend secrets in the browser
- No form database on GitHub Pages
- Bilingual Indonesian/English routes
- Accessible skip link, semantic landmarks, and high-contrast UI
- Minimal runtime dependencies: Next, React, React DOM only
