export default function Header() {
  return (
    <header className="nav">
      <div className="wrap">
        <div className="logo">
          <div className="logo-mark">DB</div>
          <div>
            <div className="logo-txt">Din<span>Bilpartner</span></div>
            <div className="logo-sub">Ejby · Skadecenter</div>
          </div>
        </div>
        <div className="nav-cta">
          <a href="tel:+4560201818" className="btn btn-ghost">📞 60 20 18 18</a>
          <a href="#form" className="btn btn-primary">Få gratis tilbud</a>
        </div>
      </div>
    </header>
  );
}
