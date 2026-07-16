import { Banknote, Car, ClipboardCheck, ShieldCheck, Clock, Sparkles, Search, Camera } from 'lucide-react';

export default function Offer() {
  return (
    <section className="offer">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Hvorfor 4 ud af 5 vælger os</span>
          <h2>Det, andre skadecentre kalder "ekstra" – det kalder vi standard.</h2>
          <p className="section-sub">Du får hele pakken, når du får din bil repareret hos Din Bilpartner Ejby. Ingen tilkøb. Ingen småt-med-småt.</p>
        </div>

        <div className="offer-grid">
          <div className="offer-card">
            <span className="offer-tag">Populær</span>
            <div className="offer-icon">
              <Banknote size={24} strokeWidth={1.5} />
            </div>
            <h3>Op til 3.000 kr. af din selvrisiko</h3>
            <p>Vi refunderer en del af din selvrisiko – så skaden reelt koster dig mindre. Gældende ved kaskoreparation.</p>
          </div>
          <div className="offer-card">
            <div className="offer-icon">
              <Car size={24} strokeWidth={1.5} />
            </div>
            <h3>Gratis lånebil samme dag</h3>
            <p>Ingen ventetid. Ingen leje. Kør videre i en klargjort lånebil, mens vi arbejder på din.</p>
          </div>
          <div className="offer-card">
            <div className="offer-icon">
              <ClipboardCheck size={24} strokeWidth={1.5} />
            </div>
            <h3>Vi klarer forsikringen 100%</h3>
            <p>Vi ringer, vi rapporterer, vi følger op. Du underskriver ét sted – vi tager resten.</p>
          </div>
          <div className="offer-card">
            <div className="offer-icon">
              <ShieldCheck size={24} strokeWidth={1.5} />
            </div>
            <h3>5 års garanti – skriftligt</h3>
            <p>Vi står 100% inde for kvaliteten. Får du problemer inden for 5 år, retter vi det gratis.</p>
          </div>
          <div className="offer-card">
            <div className="offer-icon">
              <Clock size={24} strokeWidth={1.5} />
            </div>
            <h3>Akutopstart inden for 24 timer</h3>
            <p>Ring før kl. 15, og vi starter i morgen. De fleste skader er kørende igen på 3-5 dage.</p>
          </div>
          <div className="offer-card">
            <div className="offer-icon">
              <Sparkles size={24} strokeWidth={1.5} />
            </div>
            <h3>Gratis rens ind- og udvendigt</h3>
            <p>Vi afleverer bilen som ny – støvsuget, poleret, klar til at køre. Værdi 1.495 kr.</p>
          </div>
          <div className="offer-card">
            <div className="offer-icon">
              <Search size={24} strokeWidth={1.5} />
            </div>
            <h3>Gratis synstjek oveni</h3>
            <p>Vi gennemgår hele bilen mens den er hos os – og fortæller dig, hvad der bør laves før næste syn.</p>
          </div>
          <div className="offer-card">
            <div className="offer-icon">
              <Camera size={24} strokeWidth={1.5} />
            </div>
            <h3>Send billeder, få tilbud på 60 min</h3>
            <p>Ingen grund til at køre forbi først. SMS eller mail billeder – vi vender tilbage med pris hurtigt.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
