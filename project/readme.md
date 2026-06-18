# coss.com Design System

> open source, open heart, open mind.

This is the design system for **coss.com** — *"the everything but AI company."* coss.com is the holding company of [cal.com](https://cal.com), the pioneers of open source scheduling, and is building the **coss stack**: a one-line `npm install @coss` package bundling email, SMS, calendar, scheduling, video, payments and notifications APIs behind a single environment key. Its philosophy is **commercial open source software (COSS)** — a sustainable model for the open source that underpins all modern software.

The visual system is **coss.com/ui** (formerly Origin UI), the official Cal.com Design System: a collection of accessible, composable React components built on [Base UI](https://base-ui.com) and styled with Tailwind CSS. It is monochrome-forward, quiet, and engineered — built "for developers and AI."

This project is a faithful port of that system into framework-free CSS + React so any agent can design on-brand coss.com artifacts.

## Sources

Everything here was derived from the official monorepo. Explore it for deeper fidelity:

- **GitHub — [github.com/cosscom/coss](https://github.com/cosscom/coss)** — the public monorepo. Key paths read to build this system:
  - `packages/ui/src/styles/globals.css` — the canonical token definitions (ported into `tokens/`)
  - `packages/ui/src/components/*` — Base-UI-backed component sources (Button, Badge, Card, Input, Alert, Checkbox, Switch, Avatar, Kbd, …)
  - `packages/ui/src/fonts/*` — Cal Sans, Cal Sans UI, Paper Mono (the actual woff2 files are imported into `assets/fonts/`)
  - `packages/ui/src/shared/*` — site chrome (header, footer, CTA, page-header, products dropdown)
  - `apps/www/app/*` — the coss.com marketing site (the "dear friend" letter homepage + product API doc pages)
  - `apps/ui/app/*` — the coss ui component-library docs site

The components in `packages/ui` use Base UI + Tailwind v4 + `class-variance-authority`. The recreations here resolve all Tailwind utilities and `--alpha()` / `color-mix()` math into plain CSS so they ship without a build step.

---

## Content fundamentals

**Casing — lowercase, almost always.** The brand voice is set in lowercase, even at the start of sentences and in headings: *"the everything but AI company."*, *"dear friend,"*, *"open source is the future."* Product names are lowercase too (`calendar`, `scheduling`, `auth`, `email`, `video`, `payments`, `sms`, `notifications`, `ui`). The one exception is **API documentation**, where section headings use Title Case ("Initialization", "Authorization", "Webhooks") and code follows normal JS/TS casing.

**Person — first person plural, second person singular.** coss speaks as "we" ("we are building the coss stack", "let us run the infrastructure") and addresses the reader as "you" / "friend". The flagship homepage is literally a signed letter ("best, bailey & peer").

**Tone — earnest, plain, manifesto-adjacent.** Short declarative sentences. Big claims stated calmly ("open source is the foundation of all modern software"). Occasional dry humor ("think of this as react-on-rails, but with a commercial service attached"; "$COSS on your favourite ~~stack~~ stock exchange"). Never hype-y, never emoji-driven.

**Tagline & signoffs.** Footer: *"© {year} coss.com – open source, open heart, open mind."* Recurring CTAs: *"Join the waitlist" / "Join the company"*. Marketing claim: *"the everything but AI company."*

**Emoji — none.** The brand does not use emoji in product or marketing copy. Do not introduce them.

**Technical voice.** Code is first-class content. The homepage embeds a real `package.json` snippet; product pages are essentially API references. The env key `COSS_KEY=ITSTIMETOBUILD` and `npm install @coss` are recurring brand motifs — treat code as part of the visual identity, set in Paper Mono.

---

## Visual foundations

**Overall mood.** Minimal, monochrome, engineered, quiet. Lots of white (light) / near-black (dark) space. Colour is rare and intentional. The system reads like precise developer tooling, not a consumer app.

**Color.** The spine is the **neutral** ramp. `--primary` and `--foreground` are both **neutral-800** (a near-black, not pure black); `--primary-foreground` is neutral-50. Surfaces are pure white (`--background`, `--card`, `--popover`) sitting on a faintly-grey `--sidebar` (neutral-50) page base. Semantic accents — `destructive` (red-500), `info` (blue-500), `success` (emerald-500), `warning` (amber-500) — appear only with intent, usually as a solid fill *or* an 8% tint with a darker (700) foreground. Full light + dark themes are defined; dark mode inverts to a near-black background with neutral-100 text and slightly desaturated accents. Borders and fills are built from **alpha-black/alpha-white** (`--border` = black 8%, `--input` = black 10%, `--muted` = black 4%) so they adapt to any surface.

**Type.** Three families. **Cal Sans** (`--font-heading`, 400–600) — a rounded geometric display cut — for headings and hero copy. **Cal Sans UI** (`--font-sans`, variable 300–700) for body and all UI. **Paper Mono** (`--font-mono`) for code, keyboard keys and technical detail. Headings track slightly tight; body runs at 1.5–1.6 line-height. Hero sizes reach 36–48px; UI text sits at 13–14px.

**Spacing & layout.** 4px base grid. A fixed **1416px max-width container** centers content, and the marketing site draws faint vertical guide-lines down both container edges with small 8px **corner-square markers** where they meet the header/footer rules — a signature framing motif. Header height is a constant 4rem.

**Radius.** Base radius is **0.625rem (10px)**. Controls (buttons, inputs) use `--radius-lg` (10px); badges/checkboxes use sm (~6px); **cards step up to 2xl (16px)**. Corners are consistently soft but never pill-round except for switches, avatars and full-round badges.

**Borders, shadows & the "top-light".** Elevation is whisper-quiet — a hairline border plus a barely-there shadow (`shadow-xs` ≈ black 5%) does almost all the work. Raised filled controls (primary buttons, the active tab) add a signature **inner top-light**: `inset 0 1px white/16%`, with a matching `inset black/8%` on press. Cards carry a `::before` inner hairline highlight. Dark mode flips the top-light to a faint white bottom-edge inset.

**Hover / press states.** Filled buttons darken to 90% opacity on hover; ghost/outline fill with the 4–50% accent tint. On **press** (and on touch `:active`), controls drop their shadow and dim to ~72% opacity (reverting at ≥768px). The switch thumb squashes horizontally (scale-x 1.1) while pressed. No scale-up bounces on buttons.

**Animation.** Restrained. Color/shadow transitions ~150ms ease; the switch thumb slides 150ms. Toasts get tiny purpose-built keyframes (a 0.32s success "pop" scale, a 0.28s error horizontal shake). A skeleton shimmer and a caret blink exist. All decorative motion is gated behind `prefers-reduced-motion`. No infinite ambient loops on content.

**Transparency & blur.** The sticky header uses `bg-sidebar/80` + `backdrop-blur-sm`. Tints throughout are alpha-composited (`color-mix`/alpha) rather than opaque so they layer cleanly.

**Imagery & backgrounds.** Backgrounds are flat solid surfaces — no photographic hero imagery, no full-bleed gradients, no textures. The **only** gradient in the system is the hero highlight behind "everything but AI": a blue→purple→orange linear gradient at **16% opacity, `mix-blend-mode: hard-light`, rotated −1°**. Inline code and emphasis spans reuse this rotated-rectangle highlight motif (a solid `--primary` or `--muted` block rotated −1° behind the text). Use gradients *only* in this specific highlight context.

**Cards.** Rounded-2xl, 1px `--border`, `shadow-xs`, white `--card` fill, inner top-light hairline. Header (Cal Sans title + muted description) / content / footer composition with auto-collapsing padding between regions.

---

## Iconography

- **Libraries.** The product uses **[Lucide](https://lucide.dev)** (`lucide-react`) as its primary icon set, with **[Hugeicons](https://hugeicons.com)** (`@hugeicons/react` free icons) as a secondary set. Both are line icons with a consistent ~2px stroke, round caps and round joins.
- **In this system.** Components inherit `currentColor` and render SVGs at **1rem** (icons in buttons/badges) at **80% opacity** by default. To stay faithful, **use Lucide** for any icon need. The fastest path in a static HTML artifact is the Lucide CDN (`https://unpkg.com/lucide-static` SVGs, or `lucide@latest` UMD) — or inline a Lucide SVG path with `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`. The component cards in this project inline Lucide paths exactly this way (see `components/feedback/feedback.card.html`).
- **Substitution note.** No icon binaries were copied from the repo (the source imports them from npm packages). Lucide is therefore referenced by CDN rather than vendored. If you need pixel-exact parity with a specific product screen, pull the exact icon names from the Lucide/Hugeicons sets.
- **Emoji & unicode.** Not used as iconography. A few real glyphs appear intentionally as *content* — the `⌘` command symbol inside `Kbd`, the `©` in the footer, the `$` shell prompt and `~~strikethrough~~` in prose — but never as decorative icons.
- **Logo.** There is no SVG logo mark. The brand mark is the **wordmark** "coss.com" set in Cal Sans, lowercase, optionally followed by a product label in muted/64% (e.g. "coss.com ui"). `assets/favicon.ico` is the only bitmap brand asset.

---

## Index — what's in this system

**Foundations**
- `styles.css` — global entry point. Link this one file; it `@import`s everything below.
- `tokens/palette.css` — raw Tailwind-derived palette (neutral ramp + accents) as oklch.
- `tokens/colors.css` — semantic light + `.dark` tokens (primary, surfaces, semantic, sidebar, code).
- `tokens/typography.css` — font families + type scale + weights.
- `tokens/spacing.css` — radius scale, 4px spacing grid, layout vars, elevation.
- `tokens/fonts.css` — `@font-face` for Cal Sans, Cal Sans UI, Paper Mono.
- `tokens/base.css` — resets + brand body defaults.
- `assets/fonts/*` — the three webfonts (woff2). `assets/favicon.ico`.

**Components** (`components/<group>/` — React, exposed on `window.CossComDesignSystem_a96ea9`)
- `buttons/` — **Button** (7 variants × 8 sizes), **Badge** (8 variants).
- `forms/` — **Input**, **Label**, **Checkbox**, **Switch**.
- `data-display/` — **Card** (+ Header/Title/Description/Content/Footer), **Avatar**, **Kbd**, **Separator**.
- `feedback/` — **Alert** (+ Title/Description, 5 variants), **Spinner**.
- `navigation/` — **Tabs** (+ List/Trigger/Content).

**Specimen cards** (`guidelines/*.html`) — Type, Colors, Spacing, Brand cards rendered in the Design System tab.

**UI kits** (`ui_kits/<product>/`)
- `coss-www/` — the coss.com marketing site: the "dear friend" letter homepage + a product API documentation page, with the real site header/footer chrome and container guide-lines.
- `coss-ui/` — the coss ui component-library docs site: sidebar nav + component preview + code/usage tabs.

**Skill**
- `SKILL.md` — makes this system usable as a downloadable Agent Skill.

---

*Built for developers and AI. To go deeper than this port, read the source at [github.com/cosscom/coss](https://github.com/cosscom/coss).*
