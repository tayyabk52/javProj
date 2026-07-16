import { Star } from 'lucide-react';

export default function Testimonials() {
  const renderStars = () => (
    <div className="tst-stars-icons">
      <Star size={16} fill="currentColor" strokeWidth={0} />
      <Star size={16} fill="currentColor" strokeWidth={0} />
      <Star size={16} fill="currentColor" strokeWidth={0} />
      <Star size={16} fill="currentColor" strokeWidth={0} />
      <Star size={16} fill="currentColor" strokeWidth={0} />
    </div>
  );

  return (
    <section className="testimonials">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Rigtige kunder</span>
          <h2>4,7 stjerner. 86 anmeldelser. Nul kompromiser.</h2>
          <p className="section-sub">Vi lader kunderne tale for os. Her er et udpluk af, hvad de siger på Trustpilot.</p>
        </div>

        <div className="tst-grid">
          <div className="tst-card">
            {renderStars()}
            <div className="tst-title">Bilen klar dagen efter</div>
            <div className="tst-body">"Tog bilen ind selvom de havde travlt. Bekræftede fejlen, lavede reparationen og bilen var klar næste dag til middag. God service, meget hjælpsomme og kompetente."</div>
            <div className="tst-author">
              <div className="tst-avatar">D</div>
              <div className="tst-meta"><b>Dennis</b><span>Verificeret · Trustpilot</span></div>
            </div>
          </div>
          <div className="tst-card">
            {renderStars()}
            <div className="tst-title">Håndterede alt med forsikringen</div>
            <div className="tst-body">"Jeg forstår intet af papirarbejde. Mustii og teamet ordnede alt med Tryg – jeg skulle bare aflevere bilen og hente den igen. Præcis som lovet."</div>
            <div className="tst-author">
              <div className="tst-avatar">B</div>
              <div className="tst-meta"><b>Bakhtiri</b><span>Verificeret · Trustpilot</span></div>
            </div>
          </div>
          <div className="tst-card">
            {renderStars()}
            <div className="tst-title">Et af Danmarks bedste værksteder</div>
            <div className="tst-body">"Jeg har håndteret mange værksteder gennem årene. Ingen har imponeret mig så meget som Din Bilpartner Ejby. Ærlig, dygtig, og de går virkelig ekstra vejen."</div>
            <div className="tst-author">
              <div className="tst-avatar">M</div>
              <div className="tst-meta"><b>M. Marker</b><span>Verificeret · Trustpilot</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
