import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Topbar from '@/components/layout/Topbar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyMobile from '@/components/layout/StickyMobile';

export const metadata: Metadata = {
  title: 'Skadet bil i Glostrup? Vi klarer alt med forsikringen – Din Bilpartner Ejby',
  description: 'Ingen forsikringspapirer. Ingen ventetid. Ingen ubehagelige overraskelser på regningen. Fra du ringer til bilen står klar – tager vi hånd om det hele.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Draw under the iPhone notch/home-indicator so safe-area insets work.
  viewportFit: 'cover',
  themeColor: '#111827',
  // Zoom stays enabled on purpose (accessibility).
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" suppressHydrationWarning>
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MHJD4H5T');`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MHJD4H5T"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Topbar />
        <Header />
        {children}
        <Footer />
        <StickyMobile />
      </body>
    </html>
  );
}
