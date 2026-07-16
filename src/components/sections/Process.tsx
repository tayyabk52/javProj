import { Smartphone, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export default function Process() {
  return (
    <section className="process">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Fra skade til færdig bil</span>
          <h2>4 skridt. Nul besvær. Vi tager hånd om det hele.</h2>
          <p className="section-sub">De fleste kunder er overraskede over, hvor lidt de selv skal gøre. Sådan foregår det:</p>
        </div>

        <div className="process-grid">
          <div className="process-step">
            <div className="step-bg-num">1</div>
            <div className="step-icon"><Smartphone size={24} strokeWidth={1.5} /></div>
            <h4>Ring eller send billeder</h4>
            <p>Fortæl kort hvad der er sket – gerne med 2-3 billeder af skaden. Vi vender tilbage med tilbud.</p>
            <span className="time">⏱️ 2 min. af din tid</span>
          </div>
          <div className="process-step">
            <div className="step-bg-num">2</div>
            <div className="step-icon"><ShieldCheck size={24} strokeWidth={1.5} /></div>
            <h4>Vi kontakter forsikringen</h4>
            <p>Vi håndterer al kommunikation med dit forsikringsselskab. Du får en kopi af aftalen.</p>
            <span className="time">⏱️ 0 min. af din tid</span>
          </div>
          <div className="process-step">
            <div className="step-bg-num">3</div>
            <div className="step-icon"><MapPin size={24} strokeWidth={1.5} /></div>
            <h4>Aflever bilen – kør i lånebil</h4>
            <p>Aflever bilen på vores værksted i Glostrup, eller book gratis afhentning. Lånebil klar.</p>
            <span className="time">⏱️ 15 min. af din tid</span>
          </div>
          <div className="process-step">
            <div className="step-bg-num">4</div>
            <div className="step-icon"><Sparkles size={24} strokeWidth={1.5} /></div>
            <h4>Hent bilen – renset og som ny</h4>
            <p>Reparation, kvalitetskontrol, indvendig rens og udvendig polering. Du henter en bil, der ser bedre ud end før.</p>
            <span className="time">⏱️ 3-5 dage typisk</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a href="#form" className="btn btn-primary btn-lg">Start processen nu – få tilbud gratis →</a>
        </div>
      </div>
    </section>
  );
}
