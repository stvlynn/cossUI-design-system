import React from "react";

const CSS = `
.coss-card{
  position:relative;display:flex;flex-direction:column;border-radius:var(--radius-2xl);
  border:1px solid var(--border);background:var(--card);color:var(--card-foreground);
  box-shadow:0 1px 2px 0 color-mix(in srgb,var(--color-black) 5%,transparent);
}
.coss-card::before{
  content:"";position:absolute;inset:0;pointer-events:none;
  border-radius:calc(var(--radius-2xl) - 1px);
  box-shadow:inset 0 1px 0 0 color-mix(in srgb,var(--color-black) 4%,transparent);
}
.coss-card-header{display:flex;flex-direction:column;gap:.375rem;padding:1.5rem;}
.coss-card-title{font-family:var(--font-heading);font-weight:600;font-size:1.125rem;line-height:1;}
.coss-card-description{color:var(--muted-foreground);font-size:.875rem;line-height:1.4;}
.coss-card-content{flex:1;padding:0 1.5rem 1.5rem;}
.coss-card-header + .coss-card-content{padding-top:0;}
.coss-card-footer{display:flex;align-items:center;gap:.5rem;padding:1.5rem;}
.coss-card-header ~ .coss-card-footer,.coss-card-content + .coss-card-footer{padding-top:0;}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "card");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Card({ className = "", children, ...props }) {
  inject();
  return (
    <div data-slot="card" className={`coss-card ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }) {
  return (
    <div data-slot="card-header" className={`coss-card-header ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children, ...props }) {
  return (
    <div data-slot="card-title" className={`coss-card-title ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardDescription({ className = "", children, ...props }) {
  return (
    <div data-slot="card-description" className={`coss-card-description ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div data-slot="card-content" className={`coss-card-content ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = "", children, ...props }) {
  return (
    <div data-slot="card-footer" className={`coss-card-footer ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
