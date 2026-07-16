export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo-txt">Din<span style={{ color: 'var(--red)' }}>Bilpartner</span> Ejby</div>
            <p>Skadecenter i Glostrup med over 15 års erfaring. Vi hjælper bilister i Storkøbenhavn, Hvidovre, Ballerup og Albertslund med hurtig og pålidelig skadereparation.</p>
          </div>
          <div>
            <h5>Kontakt</h5>
            <a>Ejby Industrivej 28F</a>
            <a>2600 Glostrup</a>
            <a href="tel:+4560201818">📞 60 20 18 18</a>
            <a href="mailto:Ejby@dinbilpartner.nu">✉️ Ejby@dinbilpartner.nu</a>
            <a style={{ marginTop: '8px', fontSize: '12px', opacity: 0.6 }}>CVR: 44465639</a>
          </div>
          <div>
            <h5>Vi tilbyder</h5>
            <a>Reparation af skade</a>
            <a>Reparation af stenslag</a>
            <a>Forsikringsskader</a>
            <a>Restaurering af bil</a>
            <a>Skift af forrude</a>
          </div>
        </div>
        <div className="foot-bar">
          * Selvrisiko-refusion gældende ved kaskoskader over 4.995 kr. Se fulde vilkår ved henvendelse.<br />
          © 2026 Din Bilpartner Ejby ApS. Alle rettigheder forbeholdes.
        </div>
      </div>
    </footer>
  );
}
