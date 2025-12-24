
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { EnvironmentalImpact } from './components/EnvironmentalImpact';
import { SubsidyTable } from './components/SubsidyTable';
import { TechSpecs } from './components/TechSpecs';
import { TrustSection } from './components/TrustSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { AIEligibilityChecker } from './components/AIEligibilityChecker';
import { FloatingContact } from './components/FloatingContact';
import { ChatBot } from './components/ChatBot';

const App: React.FC = () => {
  const [showEligibilityModal, setShowEligibilityModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCheckEligibility={() => setShowEligibilityModal(true)} />
      
      <main className="flex-grow">
        <Hero onCheckEligibility={() => setShowEligibilityModal(true)} />
        
        <section id="benefits">
          <Features />
        </section>

        <section id="environment" className="bg-white">
          <EnvironmentalImpact />
        </section>

        <section id="subsidies" className="bg-slate-50">
          <SubsidyTable />
        </section>

        <section id="technical">
          <TechSpecs />
        </section>

        <section id="trust" className="bg-white">
          <TrustSection />
        </section>

        <section id="contact" className="bg-slate-50">
          <ContactForm />
        </section>
      </main>

      <Footer />
      <FloatingContact />
      <ChatBot />

      {showEligibilityModal && (
        <AIEligibilityChecker onClose={() => setShowEligibilityModal(false)} />
      )}
    </div>
  );
};

export default App;
