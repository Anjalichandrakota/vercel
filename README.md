# Ascendiq — Phase 1

Ascendiq is an AI-powered student analytics and success platform concept for students, faculty, academic administrators, and placement teams. Phase 1 establishes the visual foundation and page scaffolds; it does **not** claim to provide live analytics or authentication.

## Problem statement
Student progress information can be spread across academic performance, attendance, learning engagement, skills, and placement preparation. Ascendiq's goal is to bring those signals into a clearer, explainable view so institutions can support students thoughtfully.

## Objectives
- Create a premium, responsive public landing page.
- Explain product value to students and institutional teams.
- Demonstrate the product concept with clearly labelled illustrative UI.
- Provide visual scaffolds for login, registration, and password recovery.
- Keep accessibility, privacy, and honest product claims in mind.

## Target users and roles
- **Students:** understand progress, strengths, and areas to improve.
- **Faculty and mentors:** support assigned students.
- **College administrators:** understand institution-level trends and data quality.
- **Placement officers:** coordinate skill development and career preparation.

## Features in Phase 1
- Landing page at `/` with navigation, hero, dashboard preview, features, workflow, role cards, trust principles, CTA, and footer.
- Responsive mobile navigation.
- `/login`, `/register`, and `/forgot-password` form scaffolds with clear non-connected states.
- Reusable analytics illustration and design tokens.
- Reduced-motion support and visible focus states.
- Demo metrics are labelled as illustrative data.

## Technology stack
- React + TypeScript + Vite
- React Router
- Lucide React icons
- CSS design tokens and responsive styles
- Supabase project reserved for Phase 2

## Design system
- Midnight navy `#0B102B`, deep navy `#111735`
- Deep cobalt `#244FC3`, dark cobalt `#173A94`
- Metallic silver `#C8D0DE`
- Warm ivory `#FFFBF5`, white `#FFFFFF`
- Soft peach `#F5D5C8`, pale lavender `#E9E3FA`, ice blue `#EDF3FF`
- Text `#171923`, secondary `#687080`, borders `#E6E8EF`
- Manrope headings and Inter body text

## Project structure
```text
src/
  components/
    analytics/AnalyticsPreview.tsx
    layout/Footer.tsx
    navigation/Navbar.tsx
    ui/Brand.tsx
  pages/
    LandingPage.tsx
    AuthPages.tsx
  styles/
    global.css
  App.tsx
  main.tsx
public/
  assets/
    README.md
    ascendiq-logo.jpeg (place your original logo here)
.env.example
```

## Run locally
Install Node.js LTS, then open this folder in VS Code and run:
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually `http://localhost:5173`).

For a production build:
```bash
npm run build
npm run preview
```

## Environment variables
`.env.example` documents the public Supabase URL and publishable key intended for Phase 2. Rename/copy it to `.env` only when Phase 2 integration begins. Never expose a Supabase service-role key in browser code or commit secrets.

## Planned Supabase integration
A Supabase project named **Ascendiq** has been created in the Mumbai region (`ap-south-1`) on the Free plan. Phase 1 does not connect to it. Phase 2 will introduce real authentication, role-aware access, database tables, and row-level security only after the app structure and policies are reviewed.

## Privacy and security
- No student records are connected in Phase 1.
- No sensitive documents are uploaded.
- Forms do not create accounts, authenticate users, or claim successful verification.
- Future database tables must use row-level security and least-privilege policies.
- Use only a publishable key in client code; never use service-role credentials in the frontend.
- Student-support decisions should retain human review and explainable indicators.

## Six-phase roadmap
1. **Phase 1 — Visual foundation:** landing page, design system, and public form scaffolds. *(This package.)*
2. **Phase 2 — Authentication and access:** Supabase auth, roles, profiles, and security policies.
3. **Phase 3 — Core data model:** approved student/institution records and safe data access.
4. **Phase 4 — Analytics experience:** data-backed dashboards and explainable indicators.
5. **Phase 5 — Integrations and workflows:** validated data imports and role-specific support workflows.
6. **Phase 6 — Validation and deployment:** tests, accessibility/security review, performance checks, and release preparation.

## Implemented vs planned
**Implemented:** Phase 1 frontend routes and interactions described above.

**Planned, not implemented:** Supabase auth, user verification, role management, live analytics, database schema, student record import, file upload, and production deployment.

## Known limitations
- The original logo image was not included in the code-generation request. Place it at `public/assets/ascendiq-logo.jpeg`; until then, the site uses a typographic wordmark with a simple CSS brand mark, not a replacement logo.
- Dashboard metrics and charts are illustrative demo data only.
- Login, registration, and password recovery are visual scaffolds and do not submit data to a backend.
- Google Fonts requires an internet connection; system font fallbacks are provided.
