import React from "react";

const CSS = `
.coss-alert{
  position:relative;display:grid;width:100%;align-items:start;
  gap:.125rem 0.5rem;border-radius:var(--radius-xl);border:1px solid var(--border);
  padding:.75rem .875rem;color:var(--card-foreground);font-family:var(--font-sans);font-size:.875rem;
  grid-template-columns:1fr;
}
.coss-alert:has(.coss-alert-icon){grid-template-columns:1rem 1fr;}
.coss-alert-icon{grid-row:span 2;display:flex;align-items:center;height:1.25rem;}
.coss-alert-icon svg{width:1rem;height:1rem;}
.coss-alert-title{font-weight:500;}
.coss-alert-description{color:var(--muted-foreground);line-height:1.45;}
.coss-alert:has(.coss-alert-icon) .coss-alert-title,
.coss-alert:has(.coss-alert-icon) .coss-alert-description{grid-column:2;}

.coss-alert[data-variant="default"]{background:transparent;}
.coss-alert[data-variant="default"] .coss-alert-icon{color:var(--muted-foreground);}
.coss-alert[data-variant="error"]{border-color:color-mix(in srgb,var(--destructive) 32%,transparent);background:color-mix(in srgb,var(--destructive) 4%,transparent);}
.coss-alert[data-variant="error"] .coss-alert-icon{color:var(--destructive);}
.coss-alert[data-variant="info"]{border-color:color-mix(in srgb,var(--info) 32%,transparent);background:color-mix(in srgb,var(--info) 4%,transparent);}
.coss-alert[data-variant="info"] .coss-alert-icon{color:var(--info);}
.coss-alert[data-variant="success"]{border-color:color-mix(in srgb,var(--success) 32%,transparent);background:color-mix(in srgb,var(--success) 4%,transparent);}
.coss-alert[data-variant="success"] .coss-alert-icon{color:var(--success);}
.coss-alert[data-variant="warning"]{border-color:color-mix(in srgb,var(--warning) 32%,transparent);background:color-mix(in srgb,var(--warning) 4%,transparent);}
.coss-alert[data-variant="warning"] .coss-alert-icon{color:var(--warning);}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "alert");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Alert({ variant = "default", icon, className = "", children, ...props }) {
  inject();
  return (
    <div role="alert" data-slot="alert" data-variant={variant} className={`coss-alert ${className}`.trim()} {...props}>
      {icon && <span className="coss-alert-icon" data-slot="alert-icon">{icon}</span>}
      {children}
    </div>
  );
}

export function AlertTitle({ className = "", children, ...props }) {
  return (
    <div data-slot="alert-title" className={`coss-alert-title ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function AlertDescription({ className = "", children, ...props }) {
  return (
    <div data-slot="alert-description" className={`coss-alert-description ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
