import React from "react";

const CSS = `
.coss-btn{
  position:relative;display:inline-flex;flex-shrink:0;cursor:pointer;
  align-items:center;justify-content:center;gap:.5rem;white-space:nowrap;
  border-radius:var(--radius-lg);border:1px solid transparent;
  font-family:var(--font-sans);font-weight:500;font-size:.875rem;line-height:1;
  outline:none;transition:box-shadow .15s ease, background-color .15s ease, opacity .15s ease;
  -webkit-user-select:none;user-select:none;text-decoration:none;
}
.coss-btn:focus-visible{box-shadow:0 0 0 2px var(--background),0 0 0 4px var(--ring);}
.coss-btn:disabled,.coss-btn[aria-disabled="true"]{pointer-events:none;opacity:.64;}
.coss-btn svg{pointer-events:none;flex-shrink:0;width:1rem;height:1rem;opacity:.8;margin-inline:-.125rem;}

/* sizes */
.coss-btn[data-size="default"]{height:2rem;padding-inline:.6875rem;}
.coss-btn[data-size="sm"]{height:1.75rem;gap:.375rem;padding-inline:.5625rem;}
.coss-btn[data-size="lg"]{height:2.25rem;padding-inline:.8125rem;}
.coss-btn[data-size="xl"]{height:2.5rem;padding-inline:.9375rem;font-size:1rem;}
.coss-btn[data-size="xs"]{height:1.5rem;gap:.25rem;padding-inline:.4375rem;font-size:.75rem;border-radius:var(--radius-md);}
.coss-btn[data-size="icon"]{width:2rem;height:2rem;padding:0;}
.coss-btn[data-size="icon-sm"]{width:1.75rem;height:1.75rem;padding:0;}
.coss-btn[data-size="icon-lg"]{width:2.25rem;height:2.25rem;padding:0;}

/* default / primary */
.coss-btn[data-variant="default"]{
  background:var(--primary);color:var(--primary-foreground);border-color:var(--primary);
  box-shadow:inset 0 1px 0 0 color-mix(in srgb,var(--color-white) 16%,transparent),
    0 1px 2px 0 color-mix(in srgb,var(--primary) 24%,transparent);
}
.coss-btn[data-variant="default"]:hover{background:color-mix(in srgb,var(--primary) 90%,transparent);}
.coss-btn[data-variant="default"]:active{box-shadow:inset 0 1px 0 0 color-mix(in srgb,var(--color-black) 8%,transparent);}

/* destructive */
.coss-btn[data-variant="destructive"]{
  background:var(--destructive);color:#fff;border-color:var(--destructive);
  box-shadow:inset 0 1px 0 0 color-mix(in srgb,var(--color-white) 16%,transparent),
    0 1px 2px 0 color-mix(in srgb,var(--destructive) 24%,transparent);
}
.coss-btn[data-variant="destructive"]:hover{background:color-mix(in srgb,var(--destructive) 90%,transparent);}

/* outline */
.coss-btn[data-variant="outline"]{
  background:var(--popover);color:var(--foreground);border-color:var(--input);
  box-shadow:0 1px 2px 0 color-mix(in srgb,var(--color-black) 5%,transparent);
}
.coss-btn[data-variant="outline"]:hover{background:color-mix(in srgb,var(--accent) 50%,transparent);}

/* destructive-outline */
.coss-btn[data-variant="destructive-outline"]{
  background:var(--popover);color:var(--destructive-foreground);border-color:var(--input);
  box-shadow:0 1px 2px 0 color-mix(in srgb,var(--color-black) 5%,transparent);
}
.coss-btn[data-variant="destructive-outline"]:hover{
  border-color:color-mix(in srgb,var(--destructive) 32%,transparent);
  background:color-mix(in srgb,var(--destructive) 4%,transparent);
}

/* secondary */
.coss-btn[data-variant="secondary"]{background:var(--secondary);color:var(--secondary-foreground);border-color:transparent;}
.coss-btn[data-variant="secondary"]:hover{background:color-mix(in srgb,var(--secondary-foreground) 8%,transparent);}

/* ghost */
.coss-btn[data-variant="ghost"]{background:transparent;color:var(--foreground);border-color:transparent;}
.coss-btn[data-variant="ghost"]:hover{background:var(--accent);}

/* link */
.coss-btn[data-variant="link"]{background:transparent;color:var(--foreground);border-color:transparent;text-underline-offset:4px;}
.coss-btn[data-variant="link"]:hover{text-decoration:underline;}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "button");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Button({
  variant = "default",
  size = "default",
  className = "",
  children,
  type = "button",
  ...props
}) {
  inject();
  return (
    <button
      type={type}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={`coss-btn ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
