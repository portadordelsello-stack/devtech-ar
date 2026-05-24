/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import MediFlex from './components/MediFlex';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <MediFlex />
        <Workshop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
