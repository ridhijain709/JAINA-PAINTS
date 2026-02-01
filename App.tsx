
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { Portfolio } from './components/Portfolio';
import { BulkInquiry } from './components/BulkInquiry';
import { LocationSection } from './components/Location';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        {/* Added scroll-mt-20 to ensure content isn't hidden by the sticky navbar */}
        <section id="catalog" className="scroll-mt-20">
          <Categories />
        </section>
        <section id="portfolio" className="bg-slate-50 scroll-mt-20">
          <Portfolio />
        </section>
        <section id="inquiry" className="scroll-mt-20">
          <BulkInquiry />
        </section>
        <section id="location" className="scroll-mt-20">
          <LocationSection />
        </section>
      </main>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default App;
