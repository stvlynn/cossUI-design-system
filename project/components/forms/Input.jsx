import React from "react";

const CSS = `
.coss-input-control{
  position:relative;display:inline-flex;width:100%;border-radius:var(--radius-lg);
  border:1px solid var(--input);background:var(--background);
  box-shadow:0 1px 2px 0 color-mix(in srgb,var(--color-black) 5%,transparent);
  transition:box-shadow .15s ease,border-color .15s ease;
}
.coss-input-control:has(input:focus-visible){
  border-color:var(--ring);
  box-shadow:0 0 0 3px color-mix(in srgb,var(--ring) 24%,transparent);
}
.coss-input-control:has(input[aria-invalid="true"]){border-color:color-mix(in srgb,var(--destructive) 36%,transparent);}
.coss-input-control:has(input:disabled){opacity:.64;box-shadow:none;}
.coss-input{
  width:100%;min-width:0;border:0;background:transparent;outline:none;color:var(--foreground);
  font-family:var(--font-sans);font-size:.875rem;border-radius:inherit;
}
.coss-input::placeholder{color:color-mix(in srgb,var(--muted-foreground) 72%,transparent);}
.coss-input[data-size="default"]{height:1.875rem;padding-inline:.6875rem;line-height:1.875rem;}
.coss-input[data-size="sm"]{height:1.625rem;padding-inline:.5625rem;line-height:1.625rem;}
.coss-input[data-size="lg"]{height:2.125rem;padding-inline:.6875rem;line-height:2.125rem;}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "input");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Input({ size = "default", className = "", style, ...props }) {
  inject();
  return (
    <span className="coss-input-control" data-slot="input-control">
      <input
        data-slot="input"
        data-size={size}
        className={`coss-input ${className}`.trim()}
        style={style}
        {...props}
      />
    </span>
  );
}
