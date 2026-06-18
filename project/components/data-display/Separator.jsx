import React from "react";

const CSS = `
.coss-separator{flex-shrink:0;background:var(--border);border:0;}
.coss-separator[data-orientation="horizontal"]{height:1px;width:100%;}
.coss-separator[data-orientation="vertical"]{width:1px;height:100%;align-self:stretch;}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "separator");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Separator({ orientation = "horizontal", className = "", ...props }) {
  inject();
  return (
    <div
      role="separator"
      data-slot="separator"
      data-orientation={orientation}
      className={`coss-separator ${className}`.trim()}
      {...props}
    />
  );
}
