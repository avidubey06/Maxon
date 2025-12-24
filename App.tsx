import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { injectSpeedInsights } from '@vercel/speed-insights';

// --- BUSINESS CONTACT DETAILS ---
const BUSINESS = {
  name: 'MAXON ELECTRICALS',
  phone: '+91 62645 80977',
  phoneClean: '916264580977',
  email: 'brijeshvindhyanagar@gmail.com',
  location: 'Jabalpur, Madhya Pradesh',
  address: 'Kachnar City, Vijayanagar, Jabalpur, MP 482002',
  whatsappMessage: 'Hello, I am interested in a rooftop solar site survey in Jabalpur.',
};

// --- 1. ICONS (Built-in SVGs) ---
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
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  ),
  Location: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  ChevronDown: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
    .safe-area-inset-bottom { padding-bottom: env(safe-area-inset-bottom, 0px); }
    
    @media (max-width: 767px) {
      #contact { scroll-margin-bottom: 80px; }
    }
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
          {['Services', 'Savings', 'FAQ', 'Contact'].map((item) => (
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
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80" 
        alt="Rooftop Solar Installation in Jabalpur by MAXON ELECTRICALS" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
    </div>

    <div className="relative z-10 text-center max-w-5xl mx-auto px-6 mt-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-semibold mb-8 animate-fade-in backdrop-blur-sm">
        <Icons.Sun /> <span>MNRE & MPPKVVCL Approved Vendor</span>
      </div>
      
      <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
        Best Rooftop Solar <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">
          Installation in Jabalpur
        </span>
      </h1>
      
      <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <strong>MAXON ELECTRICALS</strong> - Jabalpur's trusted solar experts. Get up to <strong>₹78,000 PM Surya Ghar subsidy</strong>. Zero electricity bills, 25-year warranty. Serving Vijayanagar, Kachnar City & all Jabalpur areas.
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
          Get Free Site Survey
        </a>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        {['MNRE Approved', 'MPPKVVCL Registered', '500+ Installations', '25 Year Warranty'].map((badge, i) => (
          <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10">
            {badge}
          </span>
        ))}
      </div>
    </div>
  </div>
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

const Features = () => (
  <section id="services" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose MAXON for Solar in Jabalpur?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Trusted by 500+ homeowners across Madhya Pradesh for reliable rooftop solar installation.</p>
        <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full mt-6"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Icons.Bolt />, title: "High Efficiency Panels", desc: "Latest Mono-PERC technology panels that work efficiently even in Jabalpur's varying weather conditions.", color: "text-yellow-600 bg-yellow-50" },
          { icon: <Icons.Rupee />, title: "Maximum Subsidy", desc: "As MNRE & MPPKVVCL approved vendor, we ensure you receive the complete PM Surya Ghar subsidy.", color: "text-green-600 bg-green-50" },
          { icon: <Icons.Sun />, title: "25-Year Warranty", desc: "Complete peace of mind with 25-year performance warranty on panels and 5-year warranty on inverter.", color: "text-blue-600 bg-blue-50" }
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

const SubsidyCalculator = () => (
  <section id="savings" className="py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-gradient-to-br from-green-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">PM Surya Ghar Subsidy 2025</h2>
            <p className="text-slate-300 mb-8 text-lg">Jabalpur residents can avail substantial central government subsidies. Install today and start saving immediately.</p>
            
            <div className="space-y-4">
              {[
                { kw: "1 kW System", sub: "₹30,000 Subsidy", desc: "Ideal for small homes" },
                { kw: "2 kW System", sub: "₹60,000 Subsidy", desc: "Perfect for medium homes" },
                { kw: "3 kW+ System", sub: "₹78,000 Subsidy (Max)", desc: "Best for large homes" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <div>
                    <span className="font-semibold block">{row.kw}</span>
                    <span className="text-sm text-slate-400">{row.desc}</span>
                  </div>
                  <span className="font-bold text-green-400">{row.sub}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Estimated Solar Savings</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b pb-2">
                <span className="text-slate-600">Daily Production (3kW)</span>
                <span className="text-2xl font-bold">12-15 Units</span>
              </div>
              <div className="flex justify-between items-end border-b pb-2">
                <span className="text-slate-600">Yearly Savings</span>
                <span className="text-2xl font-bold text-green-600">₹36,000+</span>
              </div>
              <div className="flex justify-between items-end pb-2">
                <span className="text-slate-600">Payback Period</span>
                <span className="text-2xl font-bold text-yellow-600">3-4 Years</span>
              </div>
              <a href="#contact" className="block w-full text-center bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition">
                Get Free Quote in Jabalpur
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    { question: "How much subsidy can I get in Jabalpur?", answer: "Under PM Surya Ghar Muft Bijli Yojana, you get ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW+ systems." },
    { question: "Is MAXON ELECTRICALS MNRE approved?", answer: "Yes, we are MNRE and MPPKVVCL approved vendors in Jabalpur, ensuring you get full subsidy benefits." },
    { question: "What areas do you serve?", answer: "We serve all of Jabalpur including Vijayanagar, Kachnar City, Adhartal, Civil Lines, and nearby MP regions." },
    { question: "What is the warranty?", answer: "25-year performance warranty on panels and 5-year warranty on inverters." }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <button className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-100 transition" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}><Icons.ChevronDown /></span>
              </button>
              {openIndex === index && <div className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', area: '', requirement: 'Home (1-3 kW)' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // In a real Netlify deployment, the form handles itself via the 'data-netlify' attribute.
    // This state is just for visual feedback in this demo.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-slate-50 text-center">
        <div className="max-w-md mx-auto bg-white p-12 rounded-3xl shadow-xl">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600"><Icons.Check /></div>
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-slate-600">Our team will contact you shortly.</p>
          <button onClick={() => setSubmitted(false)} className="text-yellow-600 font-bold mt-4">Send Another</button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact MAXON ELECTRICALS</h2>
          <p className="text-slate-600 mb-8">Get a free solar site survey in Jabalpur.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600"><Icons.Phone /></div>
              <div><h3 className="font-bold">Phone</h3><a href={`tel:${BUSINESS.phoneClean}`} className="text-lg text-green-700">{BUSINESS.phone}</a></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600"><Icons.Location /></div>
              <div><h3 className="font-bold">Address</h3><p className="text-slate-600">{BUSINESS.address}</p></div>
            </div>
          </div>
        </div>

        <form name="solar-inquiry" method="POST" data-netlify="true" onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl space-y-6">
          <input type="hidden" name="form-name" value="solar-inquiry" />
          <input type="text" name="name" required placeholder="Your Name" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" onChange={e => setFormData({...formData, name: e.target.value})} />
          <input type="tel" name="phone" required placeholder="Phone Number" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" onChange={e => setFormData({...formData, phone: e.target.value})} />
          <input type="text" name="area" required placeholder="Area (e.g. Vijaynagar)" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" onChange={e => setFormData({...formData, area: e.target.value})} />
          <button className="w-full bg-yellow-500 text-slate-900 font-bold text-lg py-4 rounded-xl hover:bg-yellow-400 shadow-lg">Request Free Site Visit</button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 mb-16 md:mb-0">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="bg-yellow-500 text-white p-2 rounded-lg"><Icons.Bolt /></div>
        <span className="text-2xl font-bold text-white">Maxon<span className="text-yellow-500">Solar</span></span>
      </div>
      <p className="mb-6 max-w-md mx-auto">MNRE Approved Solar Vendor in Jabalpur. Vijayanagar, Kachnar City, Adhartal, and all nearby areas.</p>
      <div className="text-sm border-t border-slate-900 pt-8">© 2025 Maxon Electricals. All rights reserved.</div>
    </div>
  </footer>
);

const StickyMobileButtons = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 shadow-lg flex safe-area-inset-bottom">
    <a href={`tel:${BUSINESS.phoneClean}`} className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-4 font-bold">
      <Icons.Phone /> Call Now
    </a>
    <a href={`https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`} className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-bold">
      <Icons.WhatsApp /> WhatsApp
    </a>
  </div>
);

const WhatsAppFloating = () => (
  <a href={`https://wa.me/${BUSINESS.phoneClean}`} target="_blank" className="fixed bottom-24 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hidden md:flex">
    <Icons.WhatsApp />
  </a>
);

const CalculatorModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  const [bill, setBill] = useState('');
  const [result, setResult] = useState<{ size: string; subsidy: string } | null>(null);

  const calculate = () => {
    const b = parseInt(bill);
    if (!b) return;
    setResult({
      size: b > 3000 ? "3 kW+" : b > 1500 ? "2 kW" : "1 kW",
      subsidy: b > 3000 ? "₹78,000" : b > 1500 ? "₹60,000" : "₹30,000"
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative z-10 p-8 animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4"><Icons.Close /></button>
        <h3 className="text-xl font-bold mb-4">Subsidy Calculator</h3>
        {!result ? (
          <>
            <input type="number" placeholder="Monthly Bill (₹)" className="w-full p-4 border rounded-xl mb-4" onChange={e => setBill(e.target.value)} />
            <button onClick={calculate} className="w-full bg-green-600 text-white font-bold py-4 rounded-xl">Check Now</button>
          </>
        ) : (
          <div className="text-center">
            <div className="text-green-600 text-3xl font-bold mb-2">{result.subsidy}</div>
            <p className="mb-6">Estimated Govt Subsidy</p>
            <button onClick={() => setResult(null)} className="text-slate-500">Check Again</button>
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isCalculatorOpen, setCalculatorOpen] = useState(false);
  
  useEffect(() => {
    injectSpeedInsights();
  }, []);
  
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-yellow-200 selection:text-yellow-900">
      <GlobalStyles />
      <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />
      <main>
        <Hero onOpenCalculator={() => setCalculatorOpen(true)} />
        <Stats />
        <Features />
        <SubsidyCalculator />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloating />
      <StickyMobileButtons />
      <CalculatorModal isOpen={isCalculatorOpen} onClose={() => setCalculatorOpen(false)} />
      <Analytics />
    </div>
  );
};

export default App;
