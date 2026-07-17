'use server';

import { BrevoClient } from '@getbrevo/brevo';

function getFormValue(formData: FormData, fieldName: string) {
  const value = formData.get(fieldName);
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#39;';
      default:
        return character;
    }
  });
}

export async function submitContactForm(formData: FormData) {
  const name = getFormValue(formData, 'name');
  const phone = getFormValue(formData, 'phone');
  const details = getFormValue(formData, 'details');

  if (!name || !phone) {
    return { success: false, error: 'Navn og telefonnummer er påkrævet.' };
  }

  const apiKey = process.env.BREVO_API_KEY;
  const fromEmail = process.env.BREVO_FROM_EMAIL;
  const fromName = process.env.BREVO_FROM_NAME;
  const toEmail = process.env.BREVO_TO_EMAIL;
  const toName = process.env.BREVO_TO_NAME;

  if (!apiKey || !fromEmail || !fromName || !toEmail || !toName) {
    return {
      success: false,
      error: 'Serverkonfigurationsfejl (mangler Brevo miljøvariabler).',
    };
  }

  // Support multiple recipients: BREVO_TO_EMAIL may be a comma-separated list.
  const recipients = toEmail
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean)
    .map((email) => ({ email, name: toName }));

  if (recipients.length === 0) {
    return {
      success: false,
      error: 'Serverkonfigurationsfejl (ingen gyldig modtager-e-mail).',
    };
  }

  try {
    const brevo = new BrevoClient({ apiKey });
    const subjectName = name.replace(/\r?\n/g, ' ').trim();
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeDetails = details
      ? escapeHtml(details).replace(/\r?\n/g, '<br />')
      : 'Ingen beskrivelse angivet.';

    const response = await brevo.transactionalEmails.sendTransacEmail({
      sender: { name: fromName, email: fromEmail },
      to: recipients,
      subject: `Ny tilbudsanmodning - ${subjectName}`,
      htmlContent: `
        <h2>Ny tilbudsanmodning</h2>
        <p>Du har modtaget en ny henvendelse via <strong>DinBilPartner Ejbys hjemmeside.</strong></p>
        <hr />
        <p><strong>Navn:</strong> ${safeName}</p>
        <p><strong>Telefon:</strong> ${safePhone}</p>
        <p><strong>Skade:</strong> ${safeDetails}</p>
      `,
      textContent: `
Ny tilbudsanmodning

Du har modtaget en ny henvendelse via DinBilPartner Ejbys hjemmeside.

Navn: ${name}
Telefon: ${phone}
Skade: ${details || 'Ingen beskrivelse angivet.'}
`,
      tags: ['contact-form'],
    });

    if (!response.messageId) {
      console.error('Brevo transactional email response missing messageId', response);
      return {
        success: false,
        error: 'E-mailen blev ikke bekræftet af Brevo. Prøv igen om lidt.',
      };
    }

    return { success: true };
  } catch (error: unknown) {
    const brevoError = error as {
      message?: string;
      body?: unknown;
      statusCode?: number;
    };

    console.error('Brevo transactional email failed', {
      message: brevoError.message,
      body: brevoError.body,
      statusCode: brevoError.statusCode,
    });

    return {
      success: false,
      error: 'Der opstod en fejl hos vores e-mail udbyder. Prøv venligst at ringe til os i stedet.',
    };
  }
}
