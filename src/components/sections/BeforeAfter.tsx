import Image from 'next/image';

export default function BeforeAfter() {
  return (
    <section className="beforeafter">
      <div className="wrap">
        <div className="section-head">
          <span className="section-eyebrow">Se resultaterne</span>
          <h2>Sådan så bilerne ud, da kunderne kørte hjem.</h2>
          <p className="section-sub">Ægte kunder. Ægte skader. Ingen photoshop. Kør gennem galleriet – find en skade der ligner din.</p>
        </div>

        <div className="ba-grid">
          <div className="ba-card">
            <div className="ba-pair">
              {/* Note: In a real Next.js app with next/image, you'd add width/height and configure domains properly, 
                  using standard img tags here to directly match the HTML as instructed without extra config */}
              <img src="https://dinbilpartnerejby.dk/wp-content/uploads/2025/08/image-2.png" alt="Før" />
              <img src="https://dinbilpartnerejby.dk/wp-content/uploads/2025/08/image-3.png" alt="Efter" />
              <span className="ba-label ba-before">Før</span>
              <span className="ba-label ba-after">Efter</span>
            </div>
            <div className="ba-caption">
              <b>Toyota Land Cruiser – sideskade</b>
              Karrosseriskade, dørudskiftning og lakering. Færdig på 4 dage.
            </div>
          </div>
          <div className="ba-card">
            <div className="ba-pair">
              <img src="https://dinbilpartnerejby.dk/wp-content/uploads/2025/08/image-8.png" alt="Før" />
              <img src="https://dinbilpartnerejby.dk/wp-content/uploads/2025/08/image-1-1.png" alt="Efter" />
              <span className="ba-label ba-before">Før</span>
              <span className="ba-label ba-after">Efter</span>
            </div>
            <div className="ba-caption">
              <b>Frontskade efter påkørsel</b>
              Kofanger, motorhjelm og lygte. Genopbygget som ny på 5 dage.
            </div>
          </div>
          <div className="ba-card">
            <div className="ba-pair">
              <img src="https://dinbilpartnerejby.dk/wp-content/uploads/2025/08/image-4.png" alt="Før" />
              <img src="https://dinbilpartnerejby.dk/wp-content/uploads/2025/08/image-5.png" alt="Efter" />
              <span className="ba-label ba-before">Før</span>
              <span className="ba-label ba-after">Efter</span>
            </div>
            <div className="ba-caption">
              <b>Totalskadet forende</b>
              Fuld genopbygning. Kunden troede den var totalskadet – vi reddede bilen.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
