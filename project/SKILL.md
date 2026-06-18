---
name: coss-design
description: Use this skill to generate well-branded interfaces and assets for coss.com (the official Cal.com / coss.com ui design system), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

coss.com is "the everything but AI company" — the open-source holding company of cal.com. The aesthetic is monochrome-forward, quiet, and engineered: near-black primary on white surfaces, Cal Sans headings + Cal Sans UI body + Paper Mono code, 10px base radius, hairline borders, whisper-quiet shadows, lowercase voice. Color appears only with intent.

Key files:
- `styles.css` — link this one file to get all tokens + fonts.
- `tokens/` — palette, semantic colors (light + dark), typography, spacing/radius/elevation, fonts.
- `components/` — React primitives (Button, Badge, Card, Input, Label, Checkbox, Switch, Avatar, Kbd, Separator, Alert, Spinner, Tabs).
- `guidelines/` — visual specimen cards.
- `ui_kits/` — full-screen recreations (marketing site, component docs).
- `assets/fonts/` — Cal Sans, Cal Sans UI, Paper Mono (woff2).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Brand rules to honor: write copy in lowercase (Title Case only in API docs); never use emoji; use Lucide icons at ~2px stroke; keep gradients to the single blue→purple→orange hero-highlight motif (16% opacity, hard-light, rotated −1°); primary actions are near-black; favor borders over shadows.
