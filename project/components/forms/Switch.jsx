import React from "react";

const CSS = `
.coss-switch{
  --thumb:1rem;position:relative;display:inline-flex;flex-shrink:0;align-items:center;
  height:calc(var(--thumb) + 2px);width:calc(var(--thumb)*2 - 2px);
  border-radius:9999px;padding:1px;border:0;cursor:pointer;outline:none;
  background:var(--input);transition:background-color .2s ease,box-shadow .2s ease;
}
.coss-switch:focus-visible{box-shadow:0 0 0 2px var(--background),0 0 0 4px var(--ring);}
.coss-switch[data-checked="true"]{background:var(--primary);}
.coss-switch[data-disabled="true"]{cursor:not-allowed;opacity:.64;}
.coss-switch-thumb{
  display:block;height:100%;aspect-ratio:1;border-radius:9999px;background:var(--background);
  box-shadow:0 1px 2px 0 color-mix(in srgb,var(--color-black) 8%,transparent);
  transition:translate .15s ease;
}
.coss-switch[data-checked="true"] .coss-switch-thumb{translate:calc(var(--thumb) - 4px) 0;}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "switch");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Switch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled,
  className = "",
  ...props
}) {
  inject();
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked);
  const value = isControlled ? checked : internal;

  function toggle() {
    if (disabled) return;
    const next = !value;
    if (!isControlled) setInternal(next);
    onCheckedChange && onCheckedChange(next);
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      data-slot="switch"
      data-checked={value ? "true" : "false"}
      data-disabled={disabled ? "true" : undefined}
      className={`coss-switch ${className}`.trim()}
      onClick={toggle}
      disabled={disabled}
      {...props}
    >
      <span className="coss-switch-thumb" data-slot="switch-thumb" />
    </button>
  );
}
