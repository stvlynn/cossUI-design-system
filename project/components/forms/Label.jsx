import React from "react";

const CSS = `
.coss-label{
  display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-sans);
  font-weight:500;font-size:.875rem;line-height:1;color:var(--foreground);
}
.coss-label[data-disabled="true"]{opacity:.64;}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "label");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Label({ className = "", disabled, children, ...props }) {
  inject();
  return (
    <label
      data-slot="label"
      data-disabled={disabled ? "true" : undefined}
      className={`coss-label ${className}`.trim()}
      {...props}
    >
      {children}
    </label>
  );
}
