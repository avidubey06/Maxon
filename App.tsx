import React, { useState } from 'react';

// --- COMPONENTS DEFINED INTERNALLY TO FIX MISSING FILE ERROR ---

const Navbar = ({ onCheckEligibility }: { onCheckEligibility: () => void }) => (
  <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="text-2xl font-bold text-green-700">Maxon Electricals</div>
        <div className="hidden md:flex space-x-8">
          <a href="#benefits" className="text-slate-700 hover:text-green-600">Benefits</a>
          <a href="#subsidies" className="text-slate-700 hover:text-green-600">Subsidies</a>
          <a href="#contact" className="text-slate-700 hover:text-green-600">Contact</a>
        </div>
        <button 
          onClick={onCheckEligibility}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Check Eligibility
        </button>
      </div>
    </div>
  </nav>
);

const Hero = ({ onCheckEligibility }: { onCheckEligibility: () => void }) => (
  <div className="relative bg-slate-900 text-white py-24 px-6 overflow-hidden">
    <div className="absolute inset-0 opacity-40">
      <img 
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80" 
        alt="Solar Roof" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="relative max-w-7xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Switch to Solar in <span className="text-yellow-400">Jabalpur</span>
      </h1>
      <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
        Authorized MNRE Vendor. Save up to 80% on electricity bills with Government Subsidized Rooftop Solar.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={onCheckEligibility}
          className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition"
        >
          Calculate Subsidy
        </button>
        <a 
          href="#contact"
          className="bg-white/10 backdrop-blur border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition"
        >
          Get Free Quote
        </a>
      </div>
    </div>
  </div>
);

const Features = () => (
  <div className="py-20 max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Maxon Electricals?</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { title: "MNRE Authorized", desc: "Official vendor for PM Surya Ghar Yojana subsidies." },
        { title: "25-Year Warranty", desc: "Performance warranty on all solar panels installed." },
        { title: "Zero Cost EMI", desc: "Easy financing options available for homeowners." }
      ].map((f, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
          <h3 className="text-xl font-bold text-green-700 mb-2">{f.title}</h3>
          <p className="text-slate-600">{f.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const SubsidyTable = () => (
  <div className="py-20 bg-slate-50 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Government Subsidy Structure</h2>
      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="p-4">System Capacity</th>
              <th className="p-4">Subsidy Amount</th>
              <th className="p-4">Approx. Savings/Year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-4">1 kW</td>
              <td className="p-4">₹30,000</td>
              <td className="p-4">₹12,000</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">2 kW</td>
              <td className="p-4">₹60,000</td>
              <td className="p-4">₹24,000</td>
            </tr>
            <tr className="border-b">
              <td className="p-4">3 kW & above</td>
              <td className="p-4">₹78,000 (Max)</td>
              <td className="p-4">₹36,000+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ContactForm = () => (
  <div className="py-20 max-w-3xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-8">Get a Free Site Survey</h2>
    <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" required />
        <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg" required />
      </div>
      <input type="text" placeholder="Area / Colony in Jabalpur" className="w-full p-3 border rounded-lg" required />
      <select className="w-full p-3 border rounded-lg">
        <option>Interested in 1-3 kW (Residential)</option>
        <option>Interested in 3-10 kW (Large Home)</option>
        <option>Commercial / Office</option>
      </select>
      <button className="w-full bg-green-600 text-white font-bold py-4 rounded-lg hover:bg-green-700">
        Request Call Back
      </button>
    </form>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12 text-center">
    <p className="mb-4 text-white text-lg font-bold">Maxon Electricals</p>
    <p>Kachnar City, Vijayanagar, Jabalpur, MP</p>
    <p>Phone: +91 62645 80977</p>
    <div className="mt-8 text-sm">© 2025 Maxon Electricals. All rights reserved.</div>
  </footer>
);

// --- MAIN APP COMPONENT ---

const App: React.FC = () => {
  const [showEligibilityModal, setShowEligibilityModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Navbar onCheckEligibility={() => setShowEligibilityModal(true)} />
      
      <main className="flex-grow">
        <Hero onCheckEligibility={() => setShowEligibilityModal(true)} />
        
        <section id="benefits">
          <Features />
        </section>

        <section id="subsidies">
          <SubsidyTable />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <Footer />

      {/* Simplified Modal for Eligibility */}
      {showEligibilityModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white p-6 rounded-xl max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Check Subsidy Eligibility</h3>
            <p className="mb-4 text-slate-600">Enter your average monthly electricity bill to see how much you can save.</p>
            <input type="number" placeholder="Monthly Bill (₹)" className="w-full p-3 border rounded-lg mb-4" />
            <div className="flex justify-end gap-2">
              <button 
                onClick={() => setShowEligibilityModal(false)}
                className="px-4 py-2 text-slate-600 font-medium"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium">
                Check
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
