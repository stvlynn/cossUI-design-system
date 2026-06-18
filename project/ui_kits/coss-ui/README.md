# coss ui — component docs (UI kit)

A click-through recreation of the **coss ui** documentation site (`apps/ui`), composed from the design-system components.

- **`index.html`** — shell: header chrome, two-column docs layout (sticky sidebar + content).
- **`app.jsx`** — the React app; every preview renders **live** from `window.CossComDesignSystem_a96ea9`.

## What it demonstrates
- A docs **sidebar** with grouped navigation (Getting Started / Components) and active + "New" states.
- A component doc page: breadcrumb, Cal Sans title, description, and a **Preview / Code** shell built on the real `Tabs` component — Preview shows the component live on the muted canvas; Code shows a syntax-tinted usage snippet.
- An **Examples** grid rendering every variant of the selected component live.
- Header light/dark **theme toggle** (flips `.dark` on `<html>`), GitHub link, "Base UI" badge.

Interact: pick a component in the sidebar (Button, Badge, Input, Alert, Switch, Tabs…); switch the Preview/Code tabs; toggle the theme.
