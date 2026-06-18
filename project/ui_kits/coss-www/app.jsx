const { Button, Badge } = window.CossComDesignSystem_a96ea9;
const { useState } = React;

const PRODUCTS = [
  { label: "ui" },
  { label: "calendar", upcoming: true },
  { label: "scheduling", upcoming: true },
  { label: "auth", upcoming: true },
  { label: "email", upcoming: true },
  { label: "video", upcoming: true },
  { label: "payments", upcoming: true },
  { label: "sms", upcoming: true },
  { label: "notifications", upcoming: true },
];

function Icon({ d, paths }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths || <path d={d} />}
    </svg>
  );
}
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/>
  </svg>
);
const SunIcon = () => <Icon paths={<><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>} />;
const MoonIcon = () => <Icon d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />;

function Header({ current, onNavigate, dark, toggleDark }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site">
      <div className="container inner">
        <div className="brand">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>coss.com</a>
          <span className="plabel" onClick={() => setOpen((o) => !o)}>
            {current === "home" ? "ui" : current}
            <div className={"menu" + (open ? " open" : "")}>
              {PRODUCTS.map((p) => (
                <div key={p.label} className="mi"
                  onClick={(e) => { e.stopPropagation(); setOpen(false); onNavigate(p.label === "ui" ? "home" : p.label); }}>
                  <span>{p.label}</span>
                  {p.upcoming && <Badge variant="info" size="sm">Upcoming</Badge>}
                </div>
              ))}
            </div>
          </span>
        </div>
        <div className="hactions">
          <button className="iconbtn" aria-label="GitHub"><GitHubIcon /></button>
          <button className="iconbtn" aria-label="Toggle theme" onClick={toggleDark}>{dark ? <SunIcon /> : <MoonIcon />}</button>
        </div>
      </div>
    </header>
  );
}

function Guides() {
  return (
    <div className="guides" aria-hidden="true">
      <div className="gline"></div>
      <div className="container" style={{ position: "relative", height: 0 }}>
        <div className="corner" style={{ left: "12.5px", marginLeft: "-4px" }}></div>
        <div className="corner" style={{ right: "12.5px", marginRight: "-4px" }}></div>
      </div>
    </div>
  );
}

function CodeBlock({ title, children }) {
  return (
    <div className="codeblock">
      {title && <div className="title">{title}</div>}
      <pre>{children}</pre>
    </div>
  );
}

function Home() {
  return (
    <main className="site">
      <div className="container">
        <div className="pagehead">
          <h1>the <span className="hl">everything but AI</span> company.</h1>
        </div>
        <div className="prose">
          <p>dear friend,</p>
          <p><strong>open source</strong> is the foundation of all modern software. every app, website, and system we use today is built on open source. it is the most important driver of global GDP growth, powering innovation and businesses worldwide.</p>
          <p>but building and maintaining open source is not easy. for open source to thrive, we need a sustainable model. that's where <strong>commercial open source software (coss)</strong> can come in: one of the best ways to create open, future-proof software while ensuring long-term success.</p>
          <p><a href="#">coss.com</a> is the new holding company of <a href="#">cal.com</a>, the pioneers of open source scheduling infrastructure and cal.com continues to be the 'google search' of our alphabet.</p>
          <p>for developers we are building the coss stack, a one line <span className="ichip">npm install @coss</span> package that includes everything you need to build your application, from email, sms, calendar APIs, scheduling, video conferencing, notifications and more.</p>
          <CodeBlock title="package.json">{[
            <span key="0"><span className="tok-key">"dependencies"</span>: {"{"}{"\n"}</span>,
            "  ", <span key="1" className="tok-key">"@coss/auth"</span>, ": ", <span key="2" className="tok-str">"1.18.6"</span>, ",\n",
            "  ", <span key="3" className="tok-key">"@coss/video"</span>, ": ", <span key="4" className="tok-str">"1.18.6"</span>, ",\n",
            "  ", <span key="5" className="tok-key">"@coss/calendar"</span>, ": ", <span key="6" className="tok-str">"1.18.6"</span>, ",\n",
            "  ", <span key="7" className="tok-key">"@coss/mail"</span>, ": ", <span key="8" className="tok-str">"1.18.6"</span>, ",\n",
            "  ", <span key="9" className="tok-key">"@coss/sms"</span>, ": ", <span key="10" className="tok-str">"1.18.6"</span>, ",\n",
            "  ", <span key="11" className="tok-key">"@coss/payments"</span>, ": ", <span key="12" className="tok-str">"1.18.6"</span>, "\n",
            "}," ]}</CodeBlock>
          <p>to achieve that, we are partnering up with the best-in-class coss companies to offer a unified infrastructure API, react package and a single <span className="ichip muted">.env</span> environment key: <span className="ichip">COSS_KEY=ITSTIMETOBUILD</span></p>
          <p>think of this as <strong>react-on-rails</strong>, but with a commercial service attached. let us run the infrastructure, so you can focus on writing code.</p>
          <p>open source is the future. and with coss, we're making sure that future is bright.</p>
          <p>best,</p>
          <p>bailey &amp; peer</p>
        </div>
        <div className="cta">
          <Button variant="default">Join the waitlist</Button>
          <Button variant="outline">Join the company</Button>
        </div>
      </div>
    </main>
  );
}

function CalendarDocs() {
  const init = [
    <span key="a" className="tok-key">import</span>, " { coss } ", <span key="b" className="tok-key">from</span>, " ", <span key="c" className="tok-str">'@coss'</span>, ";\n\n",
    "coss.calendar.init({\n",
    "  apiKey: process.env.COSS_KEY,\n",
    "  environment: ", <span key="d" className="tok-str">'production'</span>, ", ", <span key="e" className="tok-com">// or 'sandbox'</span>, "\n});"
  ];
  const events = [
    <span key="f" className="tok-com">// Create an event</span>, "\n",
    "await coss.calendar.events.create({\n",
    "  provider: ", <span key="g" className="tok-str">'google'</span>, ",\n",
    "  calendarId: ", <span key="h" className="tok-str">'primary'</span>, ",\n",
    "  event: {\n",
    "    summary: ", <span key="i" className="tok-str">'Meeting with Jane'</span>, ",\n",
    "    start: { dateTime: ", <span key="j" className="tok-str">'2025-05-01T10:00:00Z'</span>, " },\n",
    "    end: { dateTime: ", <span key="k" className="tok-str">'2025-05-01T11:00:00Z'</span>, " },\n",
    "  },\n});"
  ];
  const hooks = [
    <span key="l" className="tok-com">// Webhook events</span>, "\n",
    "coss.calendar.webhooks.on(", <span key="m" className="tok-str">'event.created'</span>, ", (event) => {\n",
    "  console.log(", <span key="n" className="tok-str">'Event created:'</span>, ", event.data);\n});"
  ];
  return (
    <main className="site">
      <div className="container">
        <div style={{ height: 48 }}></div>
        <div className="prose lead">
          <h2 className="doc">Initialization</h2>
          <CodeBlock>{init}</CodeBlock>
          <h2 className="doc">Events</h2>
          <CodeBlock>{events}</CodeBlock>
          <h2 className="doc">Webhooks</h2>
          <CodeBlock>{hooks}</CodeBlock>
        </div>
        <div className="cta">
          <Button variant="default">Join the waitlist</Button>
          <Button variant="outline">Join the company</Button>
        </div>
      </div>
    </main>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(false);
  function toggleDark() {
    const next = !dark; setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }
  return (
    <div className="frame">
      <Guides />
      <Header current={page} onNavigate={setPage} dark={dark} toggleDark={toggleDark} />
      {page === "home" ? <Home /> : <CalendarDocs />}
      <footer className="site">
        <div className="container inner">
          <p>© {new Date().getFullYear()} <span className="fmark">coss.com</span> – open source, open heart, open mind.</p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
