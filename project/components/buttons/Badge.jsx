import React from "react";

const CSS = `
.coss-badge{
  position:relative;display:inline-flex;flex-shrink:0;align-items:center;justify-content:center;
  gap:.25rem;white-space:nowrap;border-radius:var(--radius-sm);border:1px solid transparent;
  font-family:var(--font-sans);font-weight:500;line-height:1;
}
.coss-badge svg{width:.75rem;height:.75rem;opacity:.8;flex-shrink:0;}
.coss-badge[data-size="default"]{height:1.125rem;min-width:1.125rem;padding-inline:.1875rem;font-size:.75rem;}
.coss-badge[data-size="sm"]{height:1rem;min-width:1rem;padding-inline:.1875rem;font-size:.625rem;border-radius:.25rem;}
.coss-badge[data-size="lg"]{height:1.375rem;min-width:1.375rem;padding-inline:.3125rem;font-size:.875rem;}

.coss-badge[data-variant="default"]{background:var(--primary);color:var(--primary-foreground);}
.coss-badge[data-variant="secondary"]{background:var(--secondary);color:var(--secondary-foreground);}
.coss-badge[data-variant="destructive"]{background:var(--destructive);color:#fff;}
.coss-badge[data-variant="outline"]{border-color:var(--input);background:var(--background);color:var(--foreground);}
.coss-badge[data-variant="error"]{background:color-mix(in srgb,var(--destructive) 8%,transparent);color:var(--destructive-foreground);}
.coss-badge[data-variant="info"]{background:color-mix(in srgb,var(--info) 8%,transparent);color:var(--info-foreground);}
.coss-badge[data-variant="success"]{background:color-mix(in srgb,var(--success) 8%,transparent);color:var(--success-foreground);}
.coss-badge[data-variant="warning"]{background:color-mix(in srgb,var(--warning) 8%,transparent);color:var(--warning-foreground);}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "badge");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Badge({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}) {
  inject();
  return (
    <span
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      className={`coss-badge ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}
