const C = window.CossComDesignSystem_a96ea9;
const { Button, Badge, Card, Input, Checkbox, Switch, Label, Alert, AlertTitle, AlertDescription,
        Tabs, TabsList, TabsTrigger, TabsContent, Spinner } = C;
const { useState } = React;

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
  </svg>
);
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/></svg>
);

const NAV = {
  "Getting Started": [
    { label: "Introduction" }, { label: "Installation" }, { label: "Theming" },
  ],
  Components: [
    { label: "Button", on: true }, { label: "Badge" }, { label: "Card" },
    { label: "Input" }, { label: "Checkbox" }, { label: "Switch" },
    { label: "Alert", isNew: true }, { label: "Tabs" }, { label: "Spinner" },
  ],
};

// Demo registry — each entry: { desc, preview, code }
const DEMOS = {
  Button: {
    desc: "Displays a button or a component that looks like a button. The default is the near-black primary action; lower-emphasis work uses outline, secondary, ghost or link.",
    preview: () => (
      <>
        <Button variant="default">Get started</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Delete</Button>
      </>
    ),
    code: [
      <span key="0" className="tok-key">import</span>, " { Button } ", <span key="1" className="tok-key">from</span>, " ", <span key="2" className="tok-str">"@coss/ui/components/button"</span>, ";\n\n",
      "<", <span key="3" className="tok-tag">Button</span>, " variant=", <span key="4" className="tok-str">"default"</span>, ">Get started</", <span key="5" className="tok-tag">Button</span>, ">"
    ],
    examples: [
      ["default", <Button variant="default">Button</Button>],
      ["secondary", <Button variant="secondary">Button</Button>],
      ["outline", <Button variant="outline">Button</Button>],
      ["ghost", <Button variant="ghost">Button</Button>],
      ["link", <Button variant="link">Button</Button>],
      ["destructive", <Button variant="destructive">Button</Button>],
      ["loading", <Button variant="default"><Spinner size={14}/> Saving</Button>],
      ["disabled", <Button variant="default" disabled>Button</Button>],
    ],
  },
  Badge: {
    desc: "A small status descriptor. Tinted semantic variants read as informative; default is solid near-black.",
    preview: () => (<><Badge>Default</Badge><Badge variant="info">Upcoming</Badge><Badge variant="success">Live</Badge><Badge variant="warning">Beta</Badge><Badge variant="outline">v1.18.6</Badge></>),
    code: ["<", <span key="3" className="tok-tag">Badge</span>, " variant=", <span key="4" className="tok-str">"info"</span>, ">Upcoming</", <span key="5" className="tok-tag">Badge</span>, ">"],
    examples: [["default", <Badge>New</Badge>], ["info", <Badge variant="info">Upcoming</Badge>], ["success", <Badge variant="success">Live</Badge>], ["warning", <Badge variant="warning">Beta</Badge>], ["error", <Badge variant="error">Down</Badge>], ["outline", <Badge variant="outline">npm</Badge>]],
  },
  Input: {
    desc: "A text field wrapped in a bordered control surface that owns the focus ring and the hairline top-light.",
    preview: () => (<div style={{ width: 280, display: "flex", flexDirection: "column", gap: 10 }}>
      <Label htmlFor="x">Work email</Label><Input id="x" type="email" placeholder="you@company.com" /></div>),
    code: ["<", <span key="3" className="tok-tag">Input</span>, " type=", <span key="4" className="tok-str">"email"</span>, " placeholder=", <span key="5" className="tok-str">"you@company.com"</span>, " />"],
    examples: [["default", <Input placeholder="Placeholder" style={{ maxWidth: 160 }} />], ["small", <Input size="sm" placeholder="Small" style={{ maxWidth: 160 }} />], ["invalid", <Input aria-invalid="true" defaultValue="bad" style={{ maxWidth: 160 }} />], ["disabled", <Input disabled placeholder="Disabled" style={{ maxWidth: 160 }} />]],
  },
  Alert: {
    desc: "Displays a callout for user attention. Semantic variants use a quiet 4% fill so they inform rather than alarm.",
    preview: () => (<div style={{ width: 420 }}><Alert variant="info" icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>}>
      <AlertTitle>Upcoming product</AlertTitle><AlertDescription>coss calendar is in early access.</AlertDescription></Alert></div>),
    code: ["<", <span key="3" className="tok-tag">Alert</span>, " variant=", <span key="4" className="tok-str">"info"</span>, ">…</", <span key="5" className="tok-tag">Alert</span>, ">"],
    examples: [["info", <div style={{width:'100%'}}><Alert variant="info"><AlertTitle>Heads up</AlertTitle></Alert></div>], ["success", <div style={{width:'100%'}}><Alert variant="success"><AlertTitle>Deployed</AlertTitle></Alert></div>], ["warning", <div style={{width:'100%'}}><Alert variant="warning"><AlertTitle>Careful</AlertTitle></Alert></div>], ["error", <div style={{width:'100%'}}><Alert variant="error"><AlertTitle>Failed</AlertTitle></Alert></div>]],
  },
  Switch: {
    desc: "A control that toggles between on and off. The track fills with the near-black primary when checked.",
    preview: () => (<div style={{ display: "flex", gap: 24 }}><Label><Switch defaultChecked /> Production</Label><Label><Switch /> Sandbox</Label></div>),
    code: ["<", <span key="3" className="tok-tag">Switch</span>, " defaultChecked />"],
    examples: [["on", <Switch defaultChecked />], ["off", <Switch />], ["disabled", <Switch disabled />], ["disabled on", <Switch disabled defaultChecked />]],
  },
  Tabs: {
    desc: "A set of layered sections of content. The active trigger lifts onto the background surface with a quiet shadow.",
    preview: () => (<div style={{ width: 360 }}><Tabs defaultValue="a"><TabsList><TabsTrigger value="a">CLI</TabsTrigger><TabsTrigger value="b">Manual</TabsTrigger></TabsList>
      <TabsContent value="a"><div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--muted-foreground)", marginTop: 8 }}>npx coss add button</div></TabsContent>
      <TabsContent value="b"><div style={{ fontSize: 13, color: "var(--muted-foreground)", marginTop: 8 }}>Copy the source into your project.</div></TabsContent></Tabs></div>),
    code: ["<", <span key="3" className="tok-tag">Tabs</span>, " defaultValue=", <span key="4" className="tok-str">"a"</span>, ">…</", <span key="5" className="tok-tag">Tabs</span>, ">"],
    examples: [],
  },
};
// Fallbacks for nav items without a dedicated demo
["Card","Checkbox","Spinner","Introduction","Installation","Theming"].forEach((k) => {
  if (!DEMOS[k]) DEMOS[k] = DEMOS.Button;
});

function Header({ dark, toggleDark }) {
  return (
    <header className="site">
      <div className="container inner">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="brand"><a href="#">coss.com</a><span className="plabel">ui</span></div>
          <nav className="hnav">
            <a className="on">Docs</a><a>Components</a><a>Particles</a>
          </nav>
        </div>
        <div className="hactions">
          <button className="iconbtn" aria-label="GitHub"><GitHubIcon /></button>
          <button className="iconbtn" aria-label="Toggle theme" onClick={toggleDark}>{dark ? <SunIcon /> : <MoonIcon />}</button>
        </div>
      </div>
    </header>
  );
}

function Sidebar({ current, onSelect }) {
  return (
    <aside>
      {Object.entries(NAV).map(([group, items]) => (
        <div className="navgroup" key={group}>
          <div className="gh">{group}</div>
          {items.map((it) => (
            <a key={it.label} className={current === it.label ? "on" : ""}
               onClick={() => onSelect(it.label)}>
              <span>{it.label}</span>
              {it.isNew && <Badge variant="info" size="sm">New</Badge>}
            </a>
          ))}
        </div>
      ))}
    </aside>
  );
}

function PreviewShell({ demo }) {
  const [tab, setTab] = useState("preview");
  return (
    <div className="preview-shell">
      <div className="preview-bar">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </Tabs>
        <Badge variant="outline">Base UI</Badge>
      </div>
      {tab === "preview"
        ? <div className="preview-canvas">{demo.preview()}</div>
        : <pre className="code">{demo.code}</pre>}
    </div>
  );
}

function App() {
  const [current, setCurrent] = useState("Button");
  const [dark, setDark] = useState(false);
  const demo = DEMOS[current] || DEMOS.Button;
  function toggleDark() { const n = !dark; setDark(n); document.documentElement.classList.toggle("dark", n); }
  return (
    <div className="frame">
      <Header dark={dark} toggleDark={toggleDark} />
      <div className="container body">
        <Sidebar current={current} onSelect={setCurrent} />
        <main className="doc">
          <div className="crumb">Docs <span>/</span> Components <span>/</span> <b>{current}</b></div>
          <h1>{current}</h1>
          <p className="desc">{demo.desc}</p>
          <PreviewShell demo={demo} key={current} />
          {demo.examples && demo.examples.length > 0 && (
            <>
              <div className="section-h">Examples</div>
              <div className="section-sub">Every variant, rendered live from the design-system bundle.</div>
              <div className="variant-grid">
                {demo.examples.map(([label, node], i) => (
                  <div className="variant-cell" key={i}>
                    {node}
                    <span className="vl">{label}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
