import Hero from '@/components/sections/Hero';
import UrgencyStrip from '@/components/sections/UrgencyStrip';
import Insurance from '@/components/sections/Insurance';
import Offer from '@/components/sections/Offer';
import Process from '@/components/sections/Process';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Conquest from '@/components/sections/Conquest';
import Testimonials from '@/components/sections/Testimonials';
import Guarantee from '@/components/sections/Guarantee';
import Faq from '@/components/sections/Faq';
import FinalCta from '@/components/sections/FinalCta';

export default function Home() {
  return (
    <main>
      <Hero />
      <UrgencyStrip />
      <Insurance />
      <Offer />
      <Process />
      <BeforeAfter />
      <Conquest />
      <Testimonials />
      <Guarantee />
      <Faq />
      <FinalCta />
    </main>
  );
}
