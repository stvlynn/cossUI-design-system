import React from "react";

const CSS = `
.coss-checkbox{
  position:relative;display:inline-flex;flex-shrink:0;width:1rem;height:1rem;
  align-items:center;justify-content:center;border-radius:.25rem;
  border:1px solid var(--input);background:var(--background);cursor:pointer;
  box-shadow:0 1px 2px 0 color-mix(in srgb,var(--color-black) 5%,transparent);
  transition:box-shadow .15s ease,border-color .15s ease;padding:0;outline:none;
}
.coss-checkbox:focus-visible{box-shadow:0 0 0 2px var(--background),0 0 0 4px var(--ring);}
.coss-checkbox[data-checked="true"]{background:var(--primary);border-color:var(--primary);box-shadow:none;}
.coss-checkbox[data-disabled="true"]{cursor:not-allowed;opacity:.64;}
.coss-checkbox svg{width:.75rem;height:.75rem;color:var(--primary-foreground);
  stroke-width:3;stroke:currentColor;fill:none;stroke-linecap:round;stroke-linejoin:round;}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "checkbox");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Checkbox({
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
      role="checkbox"
      aria-checked={value}
      data-slot="checkbox"
      data-checked={value ? "true" : "false"}
      data-disabled={disabled ? "true" : undefined}
      className={`coss-checkbox ${className}`.trim()}
      onClick={toggle}
      disabled={disabled}
      {...props}
    >
      {value && (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
        </svg>
      )}
    </button>
  );
}
