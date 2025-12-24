import React, { useState, useEffect } from 'react';

// --- 1. ICONS (Built-in SVGs so you don't need to install anything) ---
const Icons = {
  Sun: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  Bolt: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  Rupee: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  WhatsApp: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
};

// --- 2. GLOBAL STYLES & ANIMATIONS ---
const GlobalStyles = () => (
  <style>{`
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
    
    .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
    .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .glass-card { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); }
    .glass-dark { background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(12px); }
  `}</style>
);

// --- 3. COMPONENTS ---

const Navbar = ({ onOpenCalculator }: { onOpenCalculator: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-500 text-white p-2 rounded-lg shadow-lg">
            <Icons.Bolt />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Maxon<span className="text-yellow-500">Solar</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Services', 'Savings', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`font-medium transition-colors hover:text-yellow-500 ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {item}
            </a>
          ))}
          <button 
            onClick={onOpenCalculator}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-green-500/40 transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            Check Subsidy
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onOpenCalculator }: { onOpenCalculator: () => void }) => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80" 
        alt="Solar Roof" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
    </div>

    <div className="relative z-10 text-center max-w-5xl mx-auto px-6 mt-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-semibold mb-8 animate-fade-in backdrop-blur-sm">
        <Icons.Sun /> <span>Official PM Surya Ghar Vendor</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
        Turn Your Roof Into a <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">
          Power Plant
        </span>
      </h1>
      
      <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
        Jabalpur's trusted solar experts. Zero electricity bills, 100% peace of mind, and instant government subsidies directly to your bank.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <button 
          onClick={onOpenCalculator}
          className="group relative bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.5)]"
        >
          <span className="relative z-10">Calculate Savings</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
        <a 
          href="#contact"
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition hover:border-white/50"
        >
          Get Free Quote
        </a>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float text-white/50">
      <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-2">
        <div className="w-1 h-2 bg-current rounded-full animate-bounce"></div>
      </div>
    </div>
  </div>
);

const Features = () => (
  <section id="services" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Maxon?</h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Icons.Bolt />, title: "High Efficiency", desc: "We use latest Mono-PERC panels that work even in low light conditions.", color: "text-yellow-600 bg-yellow-50" },
          { icon: <Icons.Rupee />, title: "Max Subsidy", desc: "Authorized vendor ensures you get the maximum ₹78,000 subsidy.", color: "text-green-600 bg-green-50" },
          { icon: <Icons.Sun />, title: "25 Year Warranty", desc: "Complete peace of mind with 25-year performance warranty on panels.", color: "text-blue-600 bg-blue-50" }
        ].map((f, i) => (
          <div key={i} className="group bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className={`w-14 h-14 rounded-xl ${f.color} flex items-center justify-center mb-6 text-3xl transition-transform group-hover:scale-110`}>
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{f.title}</h3>
            <p className="text-slate-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => (
  <div className="bg-slate-900 py-16 text-white border-y border-slate-800">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { num: "500+", label: "Homes Solarized" },
        { num: "2 MW+", label: "Power Installed" },
        { num: "₹5 Cr", label: "Client Savings" },
        { num: "100%", label: "Subsidy Success" }
      ].map((s, i) => (
        <div key={i} className="space-y-2">
          <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-500">{s.num}</div>
          <div className="text-slate-400 font-medium">{s.label}</div>
        </div>
      ))}
    </div>
  </div>
);

const SubsidyCalculator = () => (
  <section id="savings" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-gradient-to-br from-green-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Government Subsidy Scheme 2025</h2>
            <p className="text-slate-300 mb-8 text-lg">PM Surya Ghar Muft Bijli Yojana offers huge subsidies for residential rooftop solar. Install today and start saving immediately.</p>
            
            <div className="space-y-4">
              {[
                { kw: "1 kW System", sub: "₹30,000 Subsidy" },
                { kw: "2 kW System", sub: "₹60,000 Subsidy" },
                { kw: "3 kW+ System", sub: "₹78,000 Subsidy (Max)" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <span className="font-semibold">{row.kw}</span>
                  <span className="font-bold text-green-400">{row.sub}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Your Estimated Savings</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b pb-2">
                <span className="text-slate-600">Daily Production</span>
                <span className="text-2xl font-bold">12-15 Units</span>
              </div>
              <div className="flex justify-between items-end border-b pb-2">
                <span className="text-slate-600">Monthly Savings</span>
                <span className="text-2xl font-bold text-green-600">₹3,000+</span>
              </div>
              <div className="flex justify-between items-end border-b pb-2">
                <span className="text-slate-600">Yearly Savings</span>
                <span className="text-2xl font-bold text-green-600">₹36,000+</span>
              </div>
              <div className="flex justify-between items-end pb-2">
                <span className="text-slate-600">ROI Period</span>
                <span className="text-2xl font-bold text-yellow-600">3-4 Years</span>
              </div>
              <a href="#contact" className="block w-full text-center bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition">
                Get This System
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactForm = () => (
  <section id="contact" className="py-24 bg-slate-50">
    <div className="max-w-3xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Ready to Switch?</h2>
        <p className="text-slate-600">Book a free site survey. Our engineers will visit your location in Jabalpur.</p>
      </div>

      <form className="bg-white p-8 md:p-10 rounded-3xl shadow-xl space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
            <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
            <input type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition" placeholder="+91 99999..." />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Area / Colony</label>
          <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition" placeholder="e.g. Vijaynagar, Kachnar City..." />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Requirement</label>
          <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition appearance-none cursor-pointer">
            <option>Home (1-3 kW)</option>
            <option>Large Home (4-10 kW)</option>
            <option>Commercial / Office</option>
            <option>Just need a Quote</option>
          </select>
        </div>

        <button className="w-full bg-yellow-500 text-slate-900 font-bold text-lg py-4 rounded-xl hover:bg-yellow-400 transition shadow-lg hover:shadow-yellow-500/30 transform hover:-translate-y-1">
          Request Free Site Visit
        </button>
        <p className="text-xs text-center text-slate-400 mt-4">We respect your privacy. No spam.</p>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="bg-yellow-500 text-white p-2 rounded-lg"><Icons.Bolt /></div>
        <span className="text-2xl font-bold text-white">Maxon<span className="text-yellow-500">Solar</span></span>
      </div>
      <p className="mb-8 max-w-md mx-auto">Empowering Jabalpur with clean, renewable energy. Expert installation, lifetime support.</p>
      <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#savings" className="hover:text-white transition">Subsidy</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
      <div className="text-sm pt-8 border-t border-slate-900">
        © 2025 Maxon Electricals. All rights reserved.
      </div>
    </div>
  </footer>
);

// --- 4. INTERACTIVE WIDGETS ---

const CalculatorModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  
  const [bill, setBill] = useState('');
  const [result, setResult] = useState<{ size: string; subsidy: string; savings: string } | null>(null);

  const calculate = () => {
    const billAmount = parseInt(bill);
    if (!billAmount) return;

    let size = "1 kW";
    let subsidy = "₹30,000";
    let savings = "₹12,000";

    if (billAmount > 1500 && billAmount <= 3000) {
      size = "2 kW";
      subsidy = "₹60,000";
      savings = "₹24,000";
    } else if (billAmount > 3000) {
      size = "3 kW+";
      subsidy = "₹78,000";
      savings = "₹36,000+";
    }
    setResult({ size, subsidy, savings });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in">
        <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold flex items-center gap-2"><Icons.Rupee /> Subsidy Calculator</h3>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full"><Icons.Close /></button>
        </div>
        
        <div className="p-8">
          {!result ? (
            <div className="space-y-6">
              <p className="text-slate-600">Enter your average monthly electricity bill amount to see your eligibility.</p>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Bill (₹)</label>
                <input 
                  type="number" 
                  value={bill}
                  onChange={(e) => setBill(e.target.value)}
                  className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 text-xl font-semibold outline-none"
                  placeholder="2500" 
                />
              </div>
              <button 
                onClick={calculate}
                className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition"
              >
                Calculate Now
              </button>
            </div>
          ) : (
            <div className="text-center space-y-6 animate-slide-up">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-3xl">🎉</div>
              <h3 className="text-2xl font-bold text-slate-900">Great News!</h3>
              <div className="bg-slate-50 p-4 rounded-xl space-y-3 text-left">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Recommended System</span>
                  <span className="font-bold">{result.size}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-slate-600">Govt. Subsidy</span>
                  <span className="font-bold text-green-600">{result.subsidy}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Yearly Savings</span>
                  <span className="font-bold text-green-600">{result.savings}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setResult(null)} className="flex-1 py-3 text-slate-500 hover:bg-slate-50 rounded-lg">Back</button>
                <a href="#contact" onClick={onClose} className="flex-1 py-3 bg-yellow-500 text-slate-900 font-bold rounded-lg hover:bg-yellow-400 flex items-center justify-center">Get Quote</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/916264580977" 
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
  >
    <div className="absolute -top-12 right-0 bg-white text-slate-900 text-xs py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      Chat with us!
    </div>
    <Icons.WhatsApp />
  </a>
);

// --- 5. MAIN APP ---

const App: React.FC = () => {
  const [isCalculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-yellow-200 selection:text-yellow-900">
      <GlobalStyles />
      <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />
      
      <main>
        <Hero onOpenCalculator={() => setCalculatorOpen(true)} />
        <Stats />
        <Features />
        <SubsidyCalculator />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
      <CalculatorModal isOpen={isCalculatorOpen} onClose={() => setCalculatorOpen(false)} />
    </div>
  );
};

export default App;
