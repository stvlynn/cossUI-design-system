import React from "react";

const CSS = `
.coss-avatar{
  display:inline-flex;width:2rem;height:2rem;flex-shrink:0;align-items:center;justify-content:center;
  overflow:hidden;border-radius:9999px;background:var(--muted);vertical-align:middle;
  font-family:var(--font-sans);font-weight:500;font-size:.75rem;color:var(--foreground);
  -webkit-user-select:none;user-select:none;
}
.coss-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
`;

let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "avatar");
  s.textContent = CSS;
  document.head.appendChild(s);
}

export function Avatar({ src, alt = "", fallback, className = "", style, children, ...props }) {
  inject();
  const [errored, setErrored] = React.useState(false);
  const showImage = src && !errored;
  return (
    <span data-slot="avatar" className={`coss-avatar ${className}`.trim()} style={style} {...props}>
      {showImage ? (
        <img src={src} alt={alt} onError={() => setErrored(true)} />
      ) : (
        fallback || children
      )}
    </span>
  );
}
