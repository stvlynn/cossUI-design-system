# coss.com — marketing site (UI kit)

A click-through recreation of the **coss.com** marketing site (`apps/www`), composed from the design-system components.

- **`index.html`** — the shell: app frame, container guide-lines + corner-square markers, sticky blurred header, footer.
- **`app.jsx`** — the React app (loaded as Babel; mounts components from `window.CossComDesignSystem_a96ea9`).

## What it demonstrates
- The **"dear friend" letter homepage**: lowercase manifesto prose, the `everything but AI` hero with the signature blue→purple→orange rotated highlight, an embedded `package.json` code block, inline rotated-rect code chips, and the `Join the waitlist / Join the company` CTA.
- A **product API documentation page** (calendar) reached from the product label dropdown — Title-Case section headings + syntax-tinted Paper Mono code blocks.
- Real chrome: product dropdown menu (with "Upcoming" badges), GitHub + light/dark **theme toggle** (flips `.dark` on `<html>`), and the container framing motif.

Interact: click the product label ("ui") in the header to switch products; toggle the theme with the sun/moon button.
