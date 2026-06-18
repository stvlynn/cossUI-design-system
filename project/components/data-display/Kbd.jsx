import React from "react";

const CSS = `
.coss-kbd{
  pointer-events:none;display:inline-flex;height:1.25rem;min-width:1.25rem;
  -webkit-user-select:none;user-select:none;align-items:center;justify-content:center;gap:.25rem;
  border-radius:.25rem;background:var(--muted);padding-inline:.25rem;
  font-family:var(--font-sans);font-weight:500;font-size:.75rem;color:var(--muted-foreground);
}
.coss-kbd svg{width:.75rem;height:.75rem;}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "kbd");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Kbd({ className = "", children, ...props }) {
  inject();
  return (
    <kbd data-slot="kbd" className={`coss-kbd ${className}`.trim()} {...props}>
      {children}
    </kbd>
  );
}
