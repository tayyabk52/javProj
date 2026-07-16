import type { Metadata } from 'next';
import './globals.css';
import Topbar from '@/components/layout/Topbar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyMobile from '@/components/layout/StickyMobile';

export const metadata: Metadata = {
  title: 'Skadet bil i Glostrup? Vi klarer alt med forsikringen – Din Bilpartner Ejby',
  description: 'Ingen forsikringspapirer. Ingen ventetid. Ingen ubehagelige overraskelser på regningen. Fra du ringer til bilen står klar – tager vi hånd om det hele.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Topbar />
        <Header />
        {children}
        <Footer />
        <StickyMobile />
      </body>
    </html>
  );
}
