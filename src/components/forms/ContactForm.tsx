'use client';

import { useState } from 'react';
import { submitContactForm } from '@/actions/submitForm';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus('success');
      setMessage('Tak for din henvendelse! Vi vender tilbage hurtigst muligt.');
      // Auto-reset message state after 5 seconds but keep the form locked or cleared
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setMessage(result.error || 'Noget gik galt.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form className="hero-form" onSubmit={handleSubmit}>
      <span className="form-eyebrow">⚡ Svar inden for 60 minutter</span>
      <h3>Få dit gratis, uforpligtende tilbud</h3>
      <p className="form-sub">Ring, eller udfyld – vi vender tilbage med pris, tidsplan og lånebil klar.</p>

      <div className="field">
        <label htmlFor="name">Navn *</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Dit fulde navn" 
          required 
          disabled={status === 'loading'} 
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Telefon *</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder="F.eks. 60 20 18 18" 
          required 
          disabled={status === 'loading'} 
        />
      </div>
      <div className="field">
        <label htmlFor="details">Beskriv kort skaden <span style={{ color: 'var(--grey)', fontWeight: 400 }}>(valgfrit)</span></label>
        <textarea 
          id="details" 
          name="details" 
          placeholder="F.eks. bule i bagkofanger efter påkørsel bagfra" 
          disabled={status === 'loading'}
        ></textarea>
      </div>

      <button type="submit" className="form-btn" disabled={status === 'loading' || status === 'success'}>
        {status === 'loading' ? '⏳ Sender henvendelse...' : 
         status === 'success' ? '✓ Modtaget' : 
         'Send – få tilbud på 60 min ⚡'}
      </button>

      {status === 'error' && (
        <div style={{ color: '#D32F2F', fontSize: '13.5px', marginTop: '12px', textAlign: 'center', fontWeight: 600 }}>
          {message}
        </div>
      )}

      {status === 'success' && (
        <div style={{ color: '#10B981', fontSize: '13.5px', marginTop: '12px', textAlign: 'center', fontWeight: 600 }}>
          {message}
        </div>
      )}

      <div className="form-foot">Vi ringer inden for 60 minutter · Ingen forpligtelser</div>

      <div className="form-badges">
        <span>Gratis vurdering</span>
        <span>Gratis lånebil</span>
        <span>5 års garanti</span>
      </div>
    </form>
  );
}
