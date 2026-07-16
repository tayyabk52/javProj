import ContactForm from '@/components/forms/ContactForm';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow"><span className="dot"></span>Skadecenter i Glostrup · Åbent nu</span>
            <h1>Skadet bil? Vi klarer <span className="under">alt med forsikringen</span> – og du kører videre i en gratis lånebil <em>samme dag</em>.</h1>
            <p className="hero-sub">Ingen forsikringspapirer. Ingen ventetid. Ingen ubehagelige overraskelser på regningen. Fra du ringer til bilen står klar – tager vi hånd om det hele.</p>

            <ul className="hero-list">
              <li><span className="check">✓</span><span><b>Vi dækker op til 3.000 kr. af din selvrisiko</b> – gældende ved kaskoskader*</span></li>
              <li><span className="check">✓</span><span><b>Gratis lånebil samme dag</b> – så du ikke mister en arbejdsdag</span></li>
              <li><span className="check">✓</span><span><b>Vi kontakter dit forsikringsselskab</b> – du skal intet gøre</span></li>
              <li><span className="check">✓</span><span><b>5 års garanti</b> på alle reparationer – skriftligt</span></li>
            </ul>

            <div className="hero-ctas">
              <a href="#form" className="btn btn-primary btn-lg">Få gratis tilbud på 2 minutter →</a>
              <a href="tel:+4560201818" className="btn btn-call btn-lg">📞 Ring 60 20 18 18</a>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <span className="stars">★★★★★</span>
                <span><b>4,7</b> · 86 anmeldelser på Trustpilot</span>
              </div>
              <div className="trust-item">🛡️ <b>Godkendt af Dansk Bilbrancheråd</b></div>
              <div className="trust-item">🇩🇰 <b>2600 Glostrup</b></div>
            </div>
          </div>

          <div id="form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
