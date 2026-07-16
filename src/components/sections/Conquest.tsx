export default function Conquest() {
  return (
    <section className="conquest">
      <div className="wrap">
        <div className="conquest-grid">
          <div>
            <span className="eyebrow"><span className="dot"></span>Har du fået tilbud fra en anden?</span>
            <h2>Vi matcher – eller slår – ethvert skriftligt tilbud fra et andet skadecenter i Storkøbenhavn.</h2>
            <p className="lead">Har du allerede en pris fra Carglass, Autoteam, eller et andet værksted? Send os tilbuddet – vi kigger på det gratis og siger ærligt, om vi kan gøre det billigere, hurtigere eller bedre.</p>
            <ul className="conquest-list">
              <li><b>Prismatch garanti</b> – vi matcher ethvert skriftligt tilbud på tilsvarende reparation</li>
              <li><b>1.000 kr. skift-bonus</b> – vælger du os frem for konkurrenten, giver vi 1.000 kr. i rabat</li>
              <li><b>Gratis second opinion</b> – vi gennemgår andres tilbud og fortæller, hvad der mangler</li>
              <li><b>Hurtigere start</b> – typisk 24-48 timer før andre værksteder i Glostrup-området</li>
            </ul>
          </div>
          <div className="conquest-box">
            <h3>🎯 Skift-bonus juli 2026</h3>
            <div className="price-strike">Normal pris: fra 4.995 kr.</div>
            <div className="price-new">3.995 kr. <b>–1.000 kr.</b></div>
            <div className="price-sub">Ved fremvisning af skriftligt tilbud fra anden aktør. Gældende t.o.m. 31. juli.</div>
            <a href="#form" className="btn btn-primary">Send dit tilbud – få vores modbud →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
