import React from "react";

const CSS = `
@keyframes coss-spin{to{transform:rotate(360deg);}}
.coss-spinner{display:inline-block;color:currentColor;animation:coss-spin 0.7s linear infinite;}
.coss-spinner svg{display:block;width:100%;height:100%;}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "spinner");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Spinner({ size = 16, className = "", style, ...props }) {
  inject();
  return (
    <span
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={`coss-spinner ${className}`.trim()}
      style={{ width: size, height: size, ...style }}
      {...props}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2.5" />
        <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}
