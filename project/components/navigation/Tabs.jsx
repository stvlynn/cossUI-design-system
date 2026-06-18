import React from "react";

const CSS = `
.coss-tabs{display:flex;flex-direction:column;gap:.75rem;font-family:var(--font-sans);}
.coss-tabs-list{
  display:inline-flex;align-items:center;gap:.125rem;border-radius:var(--radius-lg);
  background:var(--muted);padding:.1875rem;width:fit-content;
}
.coss-tabs-trigger{
  display:inline-flex;align-items:center;justify-content:center;gap:.375rem;cursor:pointer;
  border:0;background:transparent;border-radius:var(--radius-md);padding:.3125rem .625rem;
  font-family:var(--font-sans);font-weight:500;font-size:.8125rem;color:var(--muted-foreground);
  white-space:nowrap;outline:none;transition:color .15s ease,background-color .15s ease,box-shadow .15s ease;
}
.coss-tabs-trigger:hover{color:var(--foreground);}
.coss-tabs-trigger:focus-visible{box-shadow:0 0 0 2px var(--background),0 0 0 4px var(--ring);}
.coss-tabs-trigger[data-active="true"]{
  background:var(--background);color:var(--foreground);
  box-shadow:0 1px 2px 0 color-mix(in srgb,var(--color-black) 6%,transparent),
    inset 0 1px 0 0 color-mix(in srgb,var(--color-white) 16%,transparent);
}
.coss-tabs-trigger svg{width:.875rem;height:.875rem;opacity:.8;}
.coss-tabs-content{font-size:.875rem;color:var(--foreground);outline:none;}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "tabs");
  s.textContent = CSS;
  document.head.appendChild(s);
}

const TabsCtx = React.createContext(null);

export function Tabs({ value, defaultValue, onValueChange, className = "", children, ...props }) {
  inject();
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const active = isControlled ? value : internal;
  const setActive = React.useCallback(
    (v) => {
      if (!isControlled) setInternal(v);
      onValueChange && onValueChange(v);
    },
    [isControlled, onValueChange]
  );
  return (
    <TabsCtx.Provider value={{ active, setActive }}>
      <div data-slot="tabs" className={`coss-tabs ${className}`.trim()} {...props}>
        {children}
      </div>
    </TabsCtx.Provider>
  );
}

export function TabsList({ className = "", children, ...props }) {
  return (
    <div role="tablist" data-slot="tabs-list" className={`coss-tabs-list ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className = "", children, ...props }) {
  const ctx = React.useContext(TabsCtx);
  const isActive = ctx && ctx.active === value;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive ? "true" : "false"}
      data-slot="tabs-trigger"
      data-active={isActive ? "true" : "false"}
      className={`coss-tabs-trigger ${className}`.trim()}
      onClick={() => ctx && ctx.setActive(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className = "", children, ...props }) {
  const ctx = React.useContext(TabsCtx);
  if (!ctx || ctx.active !== value) return null;
  return (
    <div role="tabpanel" data-slot="tabs-content" className={`coss-tabs-content ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
