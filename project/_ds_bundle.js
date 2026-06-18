/* @ds-bundle: {"format":3,"namespace":"CossComDesignSystem_a96ea9","components":[{"name":"Badge","sourcePath":"components/buttons/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"CardHeader","sourcePath":"components/data-display/Card.jsx"},{"name":"CardTitle","sourcePath":"components/data-display/Card.jsx"},{"name":"CardDescription","sourcePath":"components/data-display/Card.jsx"},{"name":"CardContent","sourcePath":"components/data-display/Card.jsx"},{"name":"CardFooter","sourcePath":"components/data-display/Card.jsx"},{"name":"Kbd","sourcePath":"components/data-display/Kbd.jsx"},{"name":"Separator","sourcePath":"components/data-display/Separator.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"AlertTitle","sourcePath":"components/feedback/Alert.jsx"},{"name":"AlertDescription","sourcePath":"components/feedback/Alert.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsList","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsTrigger","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TabsContent","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Badge.jsx":"a56910b1bd28","components/buttons/Button.jsx":"bb8aae7bdada","components/data-display/Avatar.jsx":"f5a4eb82f4f3","components/data-display/Card.jsx":"78558323c8a5","components/data-display/Kbd.jsx":"746c3849d0f1","components/data-display/Separator.jsx":"e25063fcf3ee","components/feedback/Alert.jsx":"9faa0152196e","components/feedback/Spinner.jsx":"c073bc0a8aef","components/forms/Checkbox.jsx":"2a6b99e0f4a1","components/forms/Input.jsx":"7c47172b79be","components/forms/Label.jsx":"2d6acb88ef97","components/forms/Switch.jsx":"24a913e886bc","components/navigation/Tabs.jsx":"49a1dbc83f64","ui_kits/coss-ui/app.jsx":"a4f45834e6a7","ui_kits/coss-www/app.jsx":"5fddcf518684"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CossComDesignSystem_a96ea9 = window.CossComDesignSystem_a96ea9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Badge({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}) {
  inject();
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-slot": "badge",
    "data-variant": variant,
    "data-size": size,
    className: `coss-badge ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Badge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
  variant = "default",
  size = "default",
  className = "",
  children,
  type = "button",
  ...props
}) {
  inject();
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    "data-slot": "button",
    "data-variant": variant,
    "data-size": size,
    className: `coss-btn ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Avatar({
  src,
  alt = "",
  fallback,
  className = "",
  style,
  children,
  ...props
}) {
  inject();
  const [errored, setErrored] = React.useState(false);
  const showImage = src && !errored;
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-slot": "avatar",
    className: `coss-avatar ${className}`.trim(),
    style: style
  }, props), showImage ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setErrored(true)
  }) : fallback || children);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  className = "",
  children,
  ...props
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card",
    className: `coss-card ${className}`.trim()
  }, props), children);
}
function CardHeader({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-header",
    className: `coss-card-header ${className}`.trim()
  }, props), children);
}
function CardTitle({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-title",
    className: `coss-card-title ${className}`.trim()
  }, props), children);
}
function CardDescription({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-description",
    className: `coss-card-description ${className}`.trim()
  }, props), children);
}
function CardContent({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-content",
    className: `coss-card-content ${className}`.trim()
  }, props), children);
}
function CardFooter({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "card-footer",
    className: `coss-card-footer ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Kbd.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.coss-kbd{
  pointer-events:none;display:inline-flex;height:1.25rem;min-width:1.25rem;
  -webkit-user-select:none;user-select:none;align-items:center;justify-content:center;gap:.25rem;
  border-radius:.25rem;background:var(--muted);padding-inline:.25rem;
  font-family:var(--font-sans);font-weight:500;font-size:.75rem;color:var(--muted-foreground);
}
.coss-kbd svg{width:.75rem;height:.75rem;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "kbd");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Kbd({
  className = "",
  children,
  ...props
}) {
  inject();
  return /*#__PURE__*/React.createElement("kbd", _extends({
    "data-slot": "kbd",
    className: `coss-kbd ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.coss-separator{flex-shrink:0;background:var(--border);border:0;}
.coss-separator[data-orientation="horizontal"]{height:1px;width:100%;}
.coss-separator[data-orientation="vertical"]{width:1px;height:100%;align-self:stretch;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "separator");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Separator({
  orientation = "horizontal",
  className = "",
  ...props
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "data-slot": "separator",
    "data-orientation": orientation,
    className: `coss-separator ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Separator.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Alert({
  variant = "default",
  icon,
  className = "",
  children,
  ...props
}) {
  inject();
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    "data-slot": "alert",
    "data-variant": variant,
    className: `coss-alert ${className}`.trim()
  }, props), icon && /*#__PURE__*/React.createElement("span", {
    className: "coss-alert-icon",
    "data-slot": "alert-icon"
  }, icon), children);
}
function AlertTitle({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "alert-title",
    className: `coss-alert-title ${className}`.trim()
  }, props), children);
}
function AlertDescription({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "alert-description",
    className: `coss-alert-description ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Alert, AlertTitle, AlertDescription });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Spinner({
  size = 16,
  className = "",
  style,
  ...props
}) {
  inject();
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-slot": "spinner",
    role: "status",
    "aria-label": "Loading",
    className: `coss-spinner ${className}`.trim(),
    style: {
      width: size,
      height: size,
      ...style
    }
  }, props), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    stroke: "currentColor",
    strokeOpacity: "0.2",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  })));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Checkbox({
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
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    "aria-checked": value,
    "data-slot": "checkbox",
    "data-checked": value ? "true" : "false",
    "data-disabled": disabled ? "true" : undefined,
    className: `coss-checkbox ${className}`.trim(),
    onClick: toggle,
    disabled: disabled
  }, props), value && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.252 12.7 10.2 18.63 18.748 5.37"
  })));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Input({
  size = "default",
  className = "",
  style,
  ...props
}) {
  inject();
  return /*#__PURE__*/React.createElement("span", {
    className: "coss-input-control",
    "data-slot": "input-control"
  }, /*#__PURE__*/React.createElement("input", _extends({
    "data-slot": "input",
    "data-size": size,
    className: `coss-input ${className}`.trim(),
    style: style
  }, props)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.coss-label{
  display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-sans);
  font-weight:500;font-size:.875rem;line-height:1;color:var(--foreground);
}
.coss-label[data-disabled="true"]{opacity:.64;}
`;
let injected = false;
function inject() {
  if (injected || typeof document === "undefined") return;
  injected = true;
  const s = document.createElement("style");
  s.setAttribute("data-coss", "label");
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Label({
  className = "",
  disabled,
  children,
  ...props
}) {
  inject();
  return /*#__PURE__*/React.createElement("label", _extends({
    "data-slot": "label",
    "data-disabled": disabled ? "true" : undefined,
    className: `coss-label ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Switch({
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
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": value,
    "data-slot": "switch",
    "data-checked": value ? "true" : "false",
    "data-disabled": disabled ? "true" : undefined,
    className: `coss-switch ${className}`.trim(),
    onClick: toggle,
    disabled: disabled
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "coss-switch-thumb",
    "data-slot": "switch-thumb"
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Tabs({
  value,
  defaultValue,
  onValueChange,
  className = "",
  children,
  ...props
}) {
  inject();
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const active = isControlled ? value : internal;
  const setActive = React.useCallback(v => {
    if (!isControlled) setInternal(v);
    onValueChange && onValueChange(v);
  }, [isControlled, onValueChange]);
  return /*#__PURE__*/React.createElement(TabsCtx.Provider, {
    value: {
      active,
      setActive
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    "data-slot": "tabs",
    className: `coss-tabs ${className}`.trim()
  }, props), children));
}
function TabsList({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    "data-slot": "tabs-list",
    className: `coss-tabs-list ${className}`.trim()
  }, props), children);
}
function TabsTrigger({
  value,
  className = "",
  children,
  ...props
}) {
  const ctx = React.useContext(TabsCtx);
  const isActive = ctx && ctx.active === value;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "tab",
    "aria-selected": isActive ? "true" : "false",
    "data-slot": "tabs-trigger",
    "data-active": isActive ? "true" : "false",
    className: `coss-tabs-trigger ${className}`.trim(),
    onClick: () => ctx && ctx.setActive(value)
  }, props), children);
}
function TabsContent({
  value,
  className = "",
  children,
  ...props
}) {
  const ctx = React.useContext(TabsCtx);
  if (!ctx || ctx.active !== value) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tabpanel",
    "data-slot": "tabs-content",
    className: `coss-tabs-content ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Tabs, TabsList, TabsTrigger, TabsContent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coss-ui/app.jsx
try { (() => {
const C = window.CossComDesignSystem_a96ea9;
const {
  Button,
  Badge,
  Card,
  Input,
  Checkbox,
  Switch,
  Label,
  Alert,
  AlertTitle,
  AlertDescription,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Spinner
} = C;
const {
  useState
} = React;
const SunIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
}));
const MoonIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
}));
const GitHubIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"
}));
const NAV = {
  "Getting Started": [{
    label: "Introduction"
  }, {
    label: "Installation"
  }, {
    label: "Theming"
  }],
  Components: [{
    label: "Button",
    on: true
  }, {
    label: "Badge"
  }, {
    label: "Card"
  }, {
    label: "Input"
  }, {
    label: "Checkbox"
  }, {
    label: "Switch"
  }, {
    label: "Alert",
    isNew: true
  }, {
    label: "Tabs"
  }, {
    label: "Spinner"
  }]
};

// Demo registry — each entry: { desc, preview, code }
const DEMOS = {
  Button: {
    desc: "Displays a button or a component that looks like a button. The default is the near-black primary action; lower-emphasis work uses outline, secondary, ghost or link.",
    preview: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "default"
    }, "Get started"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline"
    }, "Outline"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Ghost"), /*#__PURE__*/React.createElement(Button, {
      variant: "destructive"
    }, "Delete")),
    code: [/*#__PURE__*/React.createElement("span", {
      key: "0",
      className: "tok-key"
    }, "import"), " { Button } ", /*#__PURE__*/React.createElement("span", {
      key: "1",
      className: "tok-key"
    }, "from"), " ", /*#__PURE__*/React.createElement("span", {
      key: "2",
      className: "tok-str"
    }, "\"@coss/ui/components/button\""), ";\n\n", "<", /*#__PURE__*/React.createElement("span", {
      key: "3",
      className: "tok-tag"
    }, "Button"), " variant=", /*#__PURE__*/React.createElement("span", {
      key: "4",
      className: "tok-str"
    }, "\"default\""), ">Get started</", /*#__PURE__*/React.createElement("span", {
      key: "5",
      className: "tok-tag"
    }, "Button"), ">"],
    examples: [["default", /*#__PURE__*/React.createElement(Button, {
      variant: "default"
    }, "Button")], ["secondary", /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Button")], ["outline", /*#__PURE__*/React.createElement(Button, {
      variant: "outline"
    }, "Button")], ["ghost", /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Button")], ["link", /*#__PURE__*/React.createElement(Button, {
      variant: "link"
    }, "Button")], ["destructive", /*#__PURE__*/React.createElement(Button, {
      variant: "destructive"
    }, "Button")], ["loading", /*#__PURE__*/React.createElement(Button, {
      variant: "default"
    }, /*#__PURE__*/React.createElement(Spinner, {
      size: 14
    }), " Saving")], ["disabled", /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      disabled: true
    }, "Button")]]
  },
  Badge: {
    desc: "A small status descriptor. Tinted semantic variants read as informative; default is solid near-black.",
    preview: () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, null, "Default"), /*#__PURE__*/React.createElement(Badge, {
      variant: "info"
    }, "Upcoming"), /*#__PURE__*/React.createElement(Badge, {
      variant: "success"
    }, "Live"), /*#__PURE__*/React.createElement(Badge, {
      variant: "warning"
    }, "Beta"), /*#__PURE__*/React.createElement(Badge, {
      variant: "outline"
    }, "v1.18.6")),
    code: ["<", /*#__PURE__*/React.createElement("span", {
      key: "3",
      className: "tok-tag"
    }, "Badge"), " variant=", /*#__PURE__*/React.createElement("span", {
      key: "4",
      className: "tok-str"
    }, "\"info\""), ">Upcoming</", /*#__PURE__*/React.createElement("span", {
      key: "5",
      className: "tok-tag"
    }, "Badge"), ">"],
    examples: [["default", /*#__PURE__*/React.createElement(Badge, null, "New")], ["info", /*#__PURE__*/React.createElement(Badge, {
      variant: "info"
    }, "Upcoming")], ["success", /*#__PURE__*/React.createElement(Badge, {
      variant: "success"
    }, "Live")], ["warning", /*#__PURE__*/React.createElement(Badge, {
      variant: "warning"
    }, "Beta")], ["error", /*#__PURE__*/React.createElement(Badge, {
      variant: "error"
    }, "Down")], ["outline", /*#__PURE__*/React.createElement(Badge, {
      variant: "outline"
    }, "npm")]]
  },
  Input: {
    desc: "A text field wrapped in a bordered control surface that owns the focus ring and the hairline top-light.",
    preview: () => /*#__PURE__*/React.createElement("div", {
      style: {
        width: 280,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Label, {
      htmlFor: "x"
    }, "Work email"), /*#__PURE__*/React.createElement(Input, {
      id: "x",
      type: "email",
      placeholder: "you@company.com"
    })),
    code: ["<", /*#__PURE__*/React.createElement("span", {
      key: "3",
      className: "tok-tag"
    }, "Input"), " type=", /*#__PURE__*/React.createElement("span", {
      key: "4",
      className: "tok-str"
    }, "\"email\""), " placeholder=", /*#__PURE__*/React.createElement("span", {
      key: "5",
      className: "tok-str"
    }, "\"you@company.com\""), " />"],
    examples: [["default", /*#__PURE__*/React.createElement(Input, {
      placeholder: "Placeholder",
      style: {
        maxWidth: 160
      }
    })], ["small", /*#__PURE__*/React.createElement(Input, {
      size: "sm",
      placeholder: "Small",
      style: {
        maxWidth: 160
      }
    })], ["invalid", /*#__PURE__*/React.createElement(Input, {
      "aria-invalid": "true",
      defaultValue: "bad",
      style: {
        maxWidth: 160
      }
    })], ["disabled", /*#__PURE__*/React.createElement(Input, {
      disabled: true,
      placeholder: "Disabled",
      style: {
        maxWidth: 160
      }
    })]]
  },
  Alert: {
    desc: "Displays a callout for user attention. Semantic variants use a quiet 4% fill so they inform rather than alarm.",
    preview: () => /*#__PURE__*/React.createElement("div", {
      style: {
        width: 420
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: "info",
      icon: /*#__PURE__*/React.createElement("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 16v-4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M12 8h.01"
      }))
    }, /*#__PURE__*/React.createElement(AlertTitle, null, "Upcoming product"), /*#__PURE__*/React.createElement(AlertDescription, null, "coss calendar is in early access."))),
    code: ["<", /*#__PURE__*/React.createElement("span", {
      key: "3",
      className: "tok-tag"
    }, "Alert"), " variant=", /*#__PURE__*/React.createElement("span", {
      key: "4",
      className: "tok-str"
    }, "\"info\""), ">…</", /*#__PURE__*/React.createElement("span", {
      key: "5",
      className: "tok-tag"
    }, "Alert"), ">"],
    examples: [["info", /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: "info"
    }, /*#__PURE__*/React.createElement(AlertTitle, null, "Heads up")))], ["success", /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: "success"
    }, /*#__PURE__*/React.createElement(AlertTitle, null, "Deployed")))], ["warning", /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: "warning"
    }, /*#__PURE__*/React.createElement(AlertTitle, null, "Careful")))], ["error", /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      variant: "error"
    }, /*#__PURE__*/React.createElement(AlertTitle, null, "Failed")))]]
  },
  Switch: {
    desc: "A control that toggles between on and off. The track fills with the near-black primary when checked.",
    preview: () => /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true
    }), " Production"), /*#__PURE__*/React.createElement(Label, null, /*#__PURE__*/React.createElement(Switch, null), " Sandbox")),
    code: ["<", /*#__PURE__*/React.createElement("span", {
      key: "3",
      className: "tok-tag"
    }, "Switch"), " defaultChecked />"],
    examples: [["on", /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true
    })], ["off", /*#__PURE__*/React.createElement(Switch, null)], ["disabled", /*#__PURE__*/React.createElement(Switch, {
      disabled: true
    })], ["disabled on", /*#__PURE__*/React.createElement(Switch, {
      disabled: true,
      defaultChecked: true
    })]]
  },
  Tabs: {
    desc: "A set of layered sections of content. The active trigger lifts onto the background surface with a quiet shadow.",
    preview: () => /*#__PURE__*/React.createElement("div", {
      style: {
        width: 360
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      defaultValue: "a"
    }, /*#__PURE__*/React.createElement(TabsList, null, /*#__PURE__*/React.createElement(TabsTrigger, {
      value: "a"
    }, "CLI"), /*#__PURE__*/React.createElement(TabsTrigger, {
      value: "b"
    }, "Manual")), /*#__PURE__*/React.createElement(TabsContent, {
      value: "a"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--muted-foreground)",
        marginTop: 8
      }
    }, "npx coss add button")), /*#__PURE__*/React.createElement(TabsContent, {
      value: "b"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--muted-foreground)",
        marginTop: 8
      }
    }, "Copy the source into your project.")))),
    code: ["<", /*#__PURE__*/React.createElement("span", {
      key: "3",
      className: "tok-tag"
    }, "Tabs"), " defaultValue=", /*#__PURE__*/React.createElement("span", {
      key: "4",
      className: "tok-str"
    }, "\"a\""), ">…</", /*#__PURE__*/React.createElement("span", {
      key: "5",
      className: "tok-tag"
    }, "Tabs"), ">"],
    examples: []
  }
};
// Fallbacks for nav items without a dedicated demo
["Card", "Checkbox", "Spinner", "Introduction", "Installation", "Theming"].forEach(k => {
  if (!DEMOS[k]) DEMOS[k] = DEMOS.Button;
});
function Header({
  dark,
  toggleDark
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "site"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "coss.com"), /*#__PURE__*/React.createElement("span", {
    className: "plabel"
  }, "ui")), /*#__PURE__*/React.createElement("nav", {
    className: "hnav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "on"
  }, "Docs"), /*#__PURE__*/React.createElement("a", null, "Components"), /*#__PURE__*/React.createElement("a", null, "Particles"))), /*#__PURE__*/React.createElement("div", {
    className: "hactions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    "aria-label": "GitHub"
  }, /*#__PURE__*/React.createElement(GitHubIcon, null)), /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    "aria-label": "Toggle theme",
    onClick: toggleDark
  }, dark ? /*#__PURE__*/React.createElement(SunIcon, null) : /*#__PURE__*/React.createElement(MoonIcon, null)))));
}
function Sidebar({
  current,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("aside", null, Object.entries(NAV).map(([group, items]) => /*#__PURE__*/React.createElement("div", {
    className: "navgroup",
    key: group
  }, /*#__PURE__*/React.createElement("div", {
    className: "gh"
  }, group), items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.label,
    className: current === it.label ? "on" : "",
    onClick: () => onSelect(it.label)
  }, /*#__PURE__*/React.createElement("span", null, it.label), it.isNew && /*#__PURE__*/React.createElement(Badge, {
    variant: "info",
    size: "sm"
  }, "New"))))));
}
function PreviewShell({
  demo
}) {
  const [tab, setTab] = useState("preview");
  return /*#__PURE__*/React.createElement("div", {
    className: "preview-shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "preview-bar"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onValueChange: setTab
  }, /*#__PURE__*/React.createElement(TabsList, null, /*#__PURE__*/React.createElement(TabsTrigger, {
    value: "preview"
  }, "Preview"), /*#__PURE__*/React.createElement(TabsTrigger, {
    value: "code"
  }, "Code"))), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Base UI")), tab === "preview" ? /*#__PURE__*/React.createElement("div", {
    className: "preview-canvas"
  }, demo.preview()) : /*#__PURE__*/React.createElement("pre", {
    className: "code"
  }, demo.code));
}
function App() {
  const [current, setCurrent] = useState("Button");
  const [dark, setDark] = useState(false);
  const demo = DEMOS[current] || DEMOS.Button;
  function toggleDark() {
    const n = !dark;
    setDark(n);
    document.documentElement.classList.toggle("dark", n);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "frame"
  }, /*#__PURE__*/React.createElement(Header, {
    dark: dark,
    toggleDark: toggleDark
  }), /*#__PURE__*/React.createElement("div", {
    className: "container body"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    current: current,
    onSelect: setCurrent
  }), /*#__PURE__*/React.createElement("main", {
    className: "doc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, "Docs ", /*#__PURE__*/React.createElement("span", null, "/"), " Components ", /*#__PURE__*/React.createElement("span", null, "/"), " ", /*#__PURE__*/React.createElement("b", null, current)), /*#__PURE__*/React.createElement("h1", null, current), /*#__PURE__*/React.createElement("p", {
    className: "desc"
  }, demo.desc), /*#__PURE__*/React.createElement(PreviewShell, {
    demo: demo,
    key: current
  }), demo.examples && demo.examples.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "section-h"
  }, "Examples"), /*#__PURE__*/React.createElement("div", {
    className: "section-sub"
  }, "Every variant, rendered live from the design-system bundle."), /*#__PURE__*/React.createElement("div", {
    className: "variant-grid"
  }, demo.examples.map(([label, node], i) => /*#__PURE__*/React.createElement("div", {
    className: "variant-cell",
    key: i
  }, node, /*#__PURE__*/React.createElement("span", {
    className: "vl"
  }, label))))))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coss-ui/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/coss-www/app.jsx
try { (() => {
const {
  Button,
  Badge
} = window.CossComDesignSystem_a96ea9;
const {
  useState
} = React;
const PRODUCTS = [{
  label: "ui"
}, {
  label: "calendar",
  upcoming: true
}, {
  label: "scheduling",
  upcoming: true
}, {
  label: "auth",
  upcoming: true
}, {
  label: "email",
  upcoming: true
}, {
  label: "video",
  upcoming: true
}, {
  label: "payments",
  upcoming: true
}, {
  label: "sms",
  upcoming: true
}, {
  label: "notifications",
  upcoming: true
}];
function Icon({
  d,
  paths
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, paths || /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const GitHubIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"
}));
const SunIcon = () => /*#__PURE__*/React.createElement(Icon, {
  paths: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  }))
});
const MoonIcon = () => /*#__PURE__*/React.createElement(Icon, {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
});
function Header({
  current,
  onNavigate,
  dark,
  toggleDark
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "site"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    }
  }, "coss.com"), /*#__PURE__*/React.createElement("span", {
    className: "plabel",
    onClick: () => setOpen(o => !o)
  }, current === "home" ? "ui" : current, /*#__PURE__*/React.createElement("div", {
    className: "menu" + (open ? " open" : "")
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.label,
    className: "mi",
    onClick: e => {
      e.stopPropagation();
      setOpen(false);
      onNavigate(p.label === "ui" ? "home" : p.label);
    }
  }, /*#__PURE__*/React.createElement("span", null, p.label), p.upcoming && /*#__PURE__*/React.createElement(Badge, {
    variant: "info",
    size: "sm"
  }, "Upcoming")))))), /*#__PURE__*/React.createElement("div", {
    className: "hactions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    "aria-label": "GitHub"
  }, /*#__PURE__*/React.createElement(GitHubIcon, null)), /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    "aria-label": "Toggle theme",
    onClick: toggleDark
  }, dark ? /*#__PURE__*/React.createElement(SunIcon, null) : /*#__PURE__*/React.createElement(MoonIcon, null)))));
}
function Guides() {
  return /*#__PURE__*/React.createElement("div", {
    className: "guides",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "gline"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: "relative",
      height: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "corner",
    style: {
      left: "12.5px",
      marginLeft: "-4px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "corner",
    style: {
      right: "12.5px",
      marginRight: "-4px"
    }
  })));
}
function CodeBlock({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "codeblock"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, title), /*#__PURE__*/React.createElement("pre", null, children));
}
function Home() {
  return /*#__PURE__*/React.createElement("main", {
    className: "site"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pagehead"
  }, /*#__PURE__*/React.createElement("h1", null, "the ", /*#__PURE__*/React.createElement("span", {
    className: "hl"
  }, "everything but AI"), " company.")), /*#__PURE__*/React.createElement("div", {
    className: "prose"
  }, /*#__PURE__*/React.createElement("p", null, "dear friend,"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "open source"), " is the foundation of all modern software. every app, website, and system we use today is built on open source. it is the most important driver of global GDP growth, powering innovation and businesses worldwide."), /*#__PURE__*/React.createElement("p", null, "but building and maintaining open source is not easy. for open source to thrive, we need a sustainable model. that's where ", /*#__PURE__*/React.createElement("strong", null, "commercial open source software (coss)"), " can come in: one of the best ways to create open, future-proof software while ensuring long-term success."), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "coss.com"), " is the new holding company of ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "cal.com"), ", the pioneers of open source scheduling infrastructure and cal.com continues to be the 'google search' of our alphabet."), /*#__PURE__*/React.createElement("p", null, "for developers we are building the coss stack, a one line ", /*#__PURE__*/React.createElement("span", {
    className: "ichip"
  }, "npm install @coss"), " package that includes everything you need to build your application, from email, sms, calendar APIs, scheduling, video conferencing, notifications and more."), /*#__PURE__*/React.createElement(CodeBlock, {
    title: "package.json"
  }, [/*#__PURE__*/React.createElement("span", {
    key: "0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tok-key"
  }, "\"dependencies\""), ": ", "{", "\n"), "  ", /*#__PURE__*/React.createElement("span", {
    key: "1",
    className: "tok-key"
  }, "\"@coss/auth\""), ": ", /*#__PURE__*/React.createElement("span", {
    key: "2",
    className: "tok-str"
  }, "\"1.18.6\""), ",\n", "  ", /*#__PURE__*/React.createElement("span", {
    key: "3",
    className: "tok-key"
  }, "\"@coss/video\""), ": ", /*#__PURE__*/React.createElement("span", {
    key: "4",
    className: "tok-str"
  }, "\"1.18.6\""), ",\n", "  ", /*#__PURE__*/React.createElement("span", {
    key: "5",
    className: "tok-key"
  }, "\"@coss/calendar\""), ": ", /*#__PURE__*/React.createElement("span", {
    key: "6",
    className: "tok-str"
  }, "\"1.18.6\""), ",\n", "  ", /*#__PURE__*/React.createElement("span", {
    key: "7",
    className: "tok-key"
  }, "\"@coss/mail\""), ": ", /*#__PURE__*/React.createElement("span", {
    key: "8",
    className: "tok-str"
  }, "\"1.18.6\""), ",\n", "  ", /*#__PURE__*/React.createElement("span", {
    key: "9",
    className: "tok-key"
  }, "\"@coss/sms\""), ": ", /*#__PURE__*/React.createElement("span", {
    key: "10",
    className: "tok-str"
  }, "\"1.18.6\""), ",\n", "  ", /*#__PURE__*/React.createElement("span", {
    key: "11",
    className: "tok-key"
  }, "\"@coss/payments\""), ": ", /*#__PURE__*/React.createElement("span", {
    key: "12",
    className: "tok-str"
  }, "\"1.18.6\""), "\n", "},"]), /*#__PURE__*/React.createElement("p", null, "to achieve that, we are partnering up with the best-in-class coss companies to offer a unified infrastructure API, react package and a single ", /*#__PURE__*/React.createElement("span", {
    className: "ichip muted"
  }, ".env"), " environment key: ", /*#__PURE__*/React.createElement("span", {
    className: "ichip"
  }, "COSS_KEY=ITSTIMETOBUILD")), /*#__PURE__*/React.createElement("p", null, "think of this as ", /*#__PURE__*/React.createElement("strong", null, "react-on-rails"), ", but with a commercial service attached. let us run the infrastructure, so you can focus on writing code."), /*#__PURE__*/React.createElement("p", null, "open source is the future. and with coss, we're making sure that future is bright."), /*#__PURE__*/React.createElement("p", null, "best,"), /*#__PURE__*/React.createElement("p", null, "bailey & peer")), /*#__PURE__*/React.createElement("div", {
    className: "cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "default"
  }, "Join the waitlist"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Join the company"))));
}
function CalendarDocs() {
  const init = [/*#__PURE__*/React.createElement("span", {
    key: "a",
    className: "tok-key"
  }, "import"), " { coss } ", /*#__PURE__*/React.createElement("span", {
    key: "b",
    className: "tok-key"
  }, "from"), " ", /*#__PURE__*/React.createElement("span", {
    key: "c",
    className: "tok-str"
  }, "'@coss'"), ";\n\n", "coss.calendar.init({\n", "  apiKey: process.env.COSS_KEY,\n", "  environment: ", /*#__PURE__*/React.createElement("span", {
    key: "d",
    className: "tok-str"
  }, "'production'"), ", ", /*#__PURE__*/React.createElement("span", {
    key: "e",
    className: "tok-com"
  }, "// or 'sandbox'"), "\n});"];
  const events = [/*#__PURE__*/React.createElement("span", {
    key: "f",
    className: "tok-com"
  }, "// Create an event"), "\n", "await coss.calendar.events.create({\n", "  provider: ", /*#__PURE__*/React.createElement("span", {
    key: "g",
    className: "tok-str"
  }, "'google'"), ",\n", "  calendarId: ", /*#__PURE__*/React.createElement("span", {
    key: "h",
    className: "tok-str"
  }, "'primary'"), ",\n", "  event: {\n", "    summary: ", /*#__PURE__*/React.createElement("span", {
    key: "i",
    className: "tok-str"
  }, "'Meeting with Jane'"), ",\n", "    start: { dateTime: ", /*#__PURE__*/React.createElement("span", {
    key: "j",
    className: "tok-str"
  }, "'2025-05-01T10:00:00Z'"), " },\n", "    end: { dateTime: ", /*#__PURE__*/React.createElement("span", {
    key: "k",
    className: "tok-str"
  }, "'2025-05-01T11:00:00Z'"), " },\n", "  },\n});"];
  const hooks = [/*#__PURE__*/React.createElement("span", {
    key: "l",
    className: "tok-com"
  }, "// Webhook events"), "\n", "coss.calendar.webhooks.on(", /*#__PURE__*/React.createElement("span", {
    key: "m",
    className: "tok-str"
  }, "'event.created'"), ", (event) => {\n", "  console.log(", /*#__PURE__*/React.createElement("span", {
    key: "n",
    className: "tok-str"
  }, "'Event created:'"), ", event.data);\n});"];
  return /*#__PURE__*/React.createElement("main", {
    className: "site"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "prose lead"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "doc"
  }, "Initialization"), /*#__PURE__*/React.createElement(CodeBlock, null, init), /*#__PURE__*/React.createElement("h2", {
    className: "doc"
  }, "Events"), /*#__PURE__*/React.createElement(CodeBlock, null, events), /*#__PURE__*/React.createElement("h2", {
    className: "doc"
  }, "Webhooks"), /*#__PURE__*/React.createElement(CodeBlock, null, hooks)), /*#__PURE__*/React.createElement("div", {
    className: "cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "default"
  }, "Join the waitlist"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Join the company"))));
}
function App() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(false);
  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "frame"
  }, /*#__PURE__*/React.createElement(Guides, null), /*#__PURE__*/React.createElement(Header, {
    current: page,
    onNavigate: setPage,
    dark: dark,
    toggleDark: toggleDark
  }), page === "home" ? /*#__PURE__*/React.createElement(Home, null) : /*#__PURE__*/React.createElement(CalendarDocs, null), /*#__PURE__*/React.createElement("footer", {
    className: "site"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container inner"
  }, /*#__PURE__*/React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/React.createElement("span", {
    className: "fmark"
  }, "coss.com"), " \u2013 open source, open heart, open mind."))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/coss-www/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.AlertTitle = __ds_scope.AlertTitle;

__ds_ns.AlertDescription = __ds_scope.AlertDescription;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TabsList = __ds_scope.TabsList;

__ds_ns.TabsTrigger = __ds_scope.TabsTrigger;

__ds_ns.TabsContent = __ds_scope.TabsContent;

})();
