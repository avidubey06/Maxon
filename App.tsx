import React, { useState, useEffect } from 'react';

// --- BUSINESS CONTACT DETAILS ---
const BUSINESS = {
  name: 'MAXON ELECTRICALS',
  phone: '+91 6264580977',
  phoneClean: '916264580977',
  email: 'brijeshvindhyanagar@gmail.com',
  location: 'Jabalpur, Madhya Pradesh',
  address: 'Kachnar City, Vijayanagar, Jabalpur, MP 482002',
  whatsappMessage: 'Hello, I am interested in a rooftop solar site survey in Jabalpur.',
};

// --- 1. ICONS (Built-in SVGs so you don't need to install anything) ---
const Icons = {
  Sun: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
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
};

// --- 2. GLOBAL STYLES & ANIMATIONS ---
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
    

    .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
    .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .glass-card { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); }
    .glass-dark { background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(12px); }

    /* Safe area for mobile devices with notches */
    .safe-area-inset-bottom {
      padding-bottom: env(safe-area-inset-bottom, 0px);
    }

    /* Ensure content doesn't get hidden behind sticky mobile bar */
    @media (max-width: 767px) {
      #contact { scroll-margin-bottom: 80px; }
    }
  `}</style>
);

  <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80" 
        alt="Solar Roof" 
      <img
        src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
        alt="Rooftop Solar Installation in Jabalpur by MAXON ELECTRICALS"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>

    <div className="relative z-10 text-center max-w-5xl mx-auto px-6 mt-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 font-semibold mb-8 animate-fade-in backdrop-blur-sm">
        <Icons.Sun /> <span>Official PM Surya Ghar Vendor</span>
        <Icons.Sun /> <span>MNRE & MPPKVVCL Approved Solar Vendor</span>
      </div>
      

      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
        Turn Your Roof Into a <br/>
        Best Rooftop Solar Installation <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">
          Power Plant
          in Jabalpur, MP
        </span>
      </h1>
      

      <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
        Jabalpur's trusted solar experts. Zero electricity bills, 100% peace of mind, and instant government subsidies directly to your bank.
        <strong>MAXON ELECTRICALS</strong> - Jabalpur's trusted solar experts. Get up to <strong>₹78,000 PM Surya Ghar subsidy</strong>. Zero electricity bills, 25-year warranty. Serving Vijayanagar, Kachnar City & all Jabalpur areas.
      </p>
      

      <div className="flex flex-col sm:flex-row gap-5 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <button 
        <button
          onClick={onOpenCalculator}
          className="group relative bg-yellow-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.5)]"
        >
          <span className="relative z-10">Calculate Savings</span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
        <a 
        <a
          href="#contact"
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition hover:border-white/50"
        >
          Get Free Quote
          Get Free Site Survey
        </a>
      </div>

      {/* Trust badges */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        {['MNRE Approved', 'MPPKVVCL Registered', '500+ Installations', '25 Year Warranty'].map((badge, i) => (
          <span key={i} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/10">
            {badge}
          </span>
        ))}
      </div>
    </div>

    {/* Scroll Indicator */}
  <section id="services" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Maxon?</h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose MAXON ELECTRICALS for Solar in Jabalpur?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Trusted by 500+ homeowners across Jabalpur, Madhya Pradesh for reliable rooftop solar installation with maximum government subsidy.</p>
        <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full mt-6"></div>
      </div>
      

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Icons.Bolt />, title: "High Efficiency", desc: "We use latest Mono-PERC panels that work even in low light conditions.", color: "text-yellow-600 bg-yellow-50" },
          { icon: <Icons.Rupee />, title: "Max Subsidy", desc: "Authorized vendor ensures you get the maximum ₹78,000 subsidy.", color: "text-green-600 bg-green-50" },
          { icon: <Icons.Sun />, title: "25 Year Warranty", desc: "Complete peace of mind with 25-year performance warranty on panels.", color: "text-blue-600 bg-blue-50" }
          { icon: <Icons.Bolt />, title: "High Efficiency Mono-PERC Panels", desc: "Latest technology panels that work efficiently even in Jabalpur's varying weather conditions, generating maximum power year-round.", color: "text-yellow-600 bg-yellow-50" },
          { icon: <Icons.Rupee />, title: "Maximum ₹78,000 Subsidy", desc: "As MNRE & MPPKVVCL approved vendor, we ensure you receive the complete PM Surya Ghar subsidy directly to your bank account.", color: "text-green-600 bg-green-50" },
          { icon: <Icons.Sun />, title: "25-Year Performance Warranty", desc: "Complete peace of mind with 25-year performance warranty on panels and 5-year warranty on inverter and installation.", color: "text-blue-600 bg-blue-50" }
        ].map((f, i) => (
          <div key={i} className="group bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className={`w-14 h-14 rounded-xl ${f.color} flex items-center justify-center mb-6 text-3xl transition-transform group-hover:scale-110`}>
      <div className="bg-gradient-to-br from-green-900 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Government Subsidy Scheme 2025</h2>
            <p className="text-slate-300 mb-8 text-lg">PM Surya Ghar Muft Bijli Yojana offers huge subsidies for residential rooftop solar. Install today and start saving immediately.</p>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">PM Surya Ghar Subsidy in Madhya Pradesh 2025</h2>
            <p className="text-slate-300 mb-8 text-lg">Under the PM Surya Ghar Muft Bijli Yojana, Jabalpur residents can avail substantial central government subsidies for residential rooftop solar. Install today and start saving immediately with MAXON ELECTRICALS.</p>

            <div className="space-y-4">
              {[
                { kw: "1 kW System", sub: "₹30,000 Subsidy" },
                { kw: "2 kW System", sub: "₹60,000 Subsidy" },
                { kw: "3 kW+ System", sub: "₹78,000 Subsidy (Max)" }
                { kw: "1 kW System", sub: "₹30,000 Subsidy", desc: "Ideal for small homes" },
                { kw: "2 kW System", sub: "₹60,000 Subsidy", desc: "Perfect for medium homes" },
                { kw: "3 kW+ System", sub: "₹78,000 Subsidy (Max)", desc: "Best for large homes" }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                  <span className="font-semibold">{row.kw}</span>
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
            <h3 className="text-2xl font-bold mb-6 text-center">Your Estimated Savings</h3>
            <h3 className="text-2xl font-bold mb-6 text-center">Your Estimated Solar Savings in Jabalpur</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b pb-2">
                <span className="text-slate-600">Daily Production</span>
                <span className="text-slate-600">Daily Production (3kW)</span>
                <span className="text-2xl font-bold">12-15 Units</span>
              </div>
              <div className="flex justify-between items-end border-b pb-2">
                <span className="text-2xl font-bold text-green-600">₹36,000+</span>
              </div>
              <div className="flex justify-between items-end pb-2">
                <span className="text-slate-600">ROI Period</span>
                <span className="text-slate-600">Payback Period</span>
                <span className="text-2xl font-bold text-yellow-600">3-4 Years</span>
              </div>
              <a href="#contact" className="block w-full text-center bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition">
                Get This System
                Get Free Quote in Jabalpur
              </a>
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
// --- FAQ SECTION ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much subsidy can I get for solar installation in Jabalpur?",
      answer: "Under the PM Surya Ghar Muft Bijli Yojana, you can get up to ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW or larger residential rooftop solar systems in Jabalpur. MAXON ELECTRICALS handles all subsidy paperwork for you."
    },
    {
      question: "Is MAXON ELECTRICALS an MNRE approved solar vendor in Jabalpur?",
      answer: "Yes, MAXON ELECTRICALS is both MNRE (Ministry of New and Renewable Energy) and MPPKVVCL (MP Electricity Board) approved solar vendor in Jabalpur. This ensures you qualify for all government subsidies and net metering benefits."
    },
    {
      question: "How long does solar panel installation take in Jabalpur?",
      answer: "A typical residential solar installation (1-3 kW) takes just 1-2 days. The complete process including free site survey, documentation, installation, and net metering approval takes about 2-4 weeks. We handle everything from start to finish."
    },
    {
      question: "What is the payback period for rooftop solar in Jabalpur?",
      answer: "With government subsidies and electricity savings, most homeowners in Jabalpur see a payback period of 3-4 years. After that, you enjoy virtually free electricity for the remaining 20+ years of panel life - that's over ₹5 lakhs in lifetime savings!"
    },
    {
      question: "Which areas in Jabalpur do you provide solar installation services?",
      answer: "MAXON ELECTRICALS provides solar installation services across all areas of Jabalpur including Vijayanagar, Kachnar City, Adhartal, Napier Town, Civil Lines, Gorakhpur, Madan Mahal, Wright Town, and all nearby localities in Madhya Pradesh."
    },
    {
      question: "What warranty do you provide on solar panels?",
      answer: "We provide 25-year performance warranty on solar panels, 5-year warranty on inverter, and 5-year warranty on installation workmanship. Our panels are from top-tier manufacturers ensuring long-term reliability."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions About Solar in Jabalpur</h2>
          <p className="text-slate-600">Everything you need to know about rooftop solar installation and government subsidies in Madhya Pradesh</p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-100 transition"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <Icons.ChevronDown />
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CONTACT FORM WITH NETLIFY FORMS ---
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    requirement: 'Home (1-3 kW)'
  });
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validatePhone = (phone: string): boolean => {
    // Remove any spaces or dashes
    const cleanPhone = phone.replace(/[\s-]/g, '');

    // Must be exactly 10 digits
    if (!/^\d{10}$/.test(cleanPhone)) {
      setPhoneError('Phone number must be exactly 10 digits');
      return false;
    }

    // Must start with 6, 7, 8, or 9
    if (!/^[6-9]/.test(cleanPhone)) {
      setPhoneError('Phone number must start with 6, 7, 8, or 9');
      return false;
    }

    // Must not be all same digits (e.g., 0000000000, 9999999999)
    if (/^(\d)\1{9}$/.test(cleanPhone)) {
      setPhoneError('Please enter a valid phone number');
      return false;
    }

    setPhoneError('');
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setFormData({ ...formData, phone: value });
    if (value.length === 10) {
      validatePhone(value);
    } else {
      setPhoneError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validatePhone(formData.phone)) {
      e.preventDefault();
      return;
    }
    // Let the form submit naturally to Netlify
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icons.Check />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
            <p className="text-slate-600 mb-6">We've received your request. Our team will contact you within 24 hours to schedule your free site survey in Jabalpur.</p>
            <button onClick={() => setSubmitted(false)} className="text-yellow-600 font-semibold hover:underline">Submit Another Request</button>
          </div>
        </div>
      </section>
    );
  }

      <form className="bg-white p-8 md:p-10 rounded-3xl shadow-xl space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-6">
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
            <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition" placeholder="John Doe" />
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact MAXON ELECTRICALS</h2>
            <p className="text-slate-600 mb-8">Get in touch for a free solar site survey in Jabalpur. Our engineers will assess your rooftop and provide a customized quote.</p>

            <div className="space-y-6">
              {/* Phone - Visible for SEO */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                  <Icons.Phone />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Phone / WhatsApp</h3>
                  <a href={`tel:${BUSINESS.phoneClean}`} className="text-xl font-bold text-green-600 hover:text-green-700">{BUSINESS.phone}</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Icons.Mail />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Email</h3>
                  <a href={`mailto:${BUSINESS.email}`} className="text-slate-600 hover:text-slate-900">{BUSINESS.email}</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 flex-shrink-0">
                  <Icons.Location />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Service Area</h3>
                  <p className="text-slate-600">{BUSINESS.address}</p>
                  <p className="text-sm text-slate-500 mt-1">Serving all areas in Jabalpur & nearby</p>
                </div>
              </div>

              {/* Call & WhatsApp Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`tel:${BUSINESS.phoneClean}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg"
                >
                  <Icons.Phone />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#1da851] transition shadow-lg"
                >
                  <Icons.WhatsApp />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Lead Form */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
            <input type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition" placeholder="+91 99999..." />
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to Switch?</h3>
                <p className="text-slate-600">Book a free site survey. Our engineers will visit your location in Jabalpur.</p>
              </div>

              <form
                name="solar-inquiry"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify form detection */}
                <input type="hidden" name="form-name" value="solar-inquiry" />
                {/* Honeypot field for spam prevention */}
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[6-9][0-9]{9}"
                    title="Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full p-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition ${phoneError ? 'border-red-400' : 'border-slate-200'}`}
                    placeholder="10-digit mobile number"
                  />
                  {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Area / Colony *</label>
                  <input
                    type="text"
                    name="area"
                    required
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                    placeholder="e.g. Vijayanagar, Kachnar City, Adhartal..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Requirement *</label>
                  <select
                    name="requirement"
                    required
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition appearance-none cursor-pointer"
                  >
                    <option value="Home (1-3 kW)">Home (1-3 kW)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-slate-900 font-bold text-lg py-4 rounded-xl hover:bg-yellow-400 transition shadow-lg hover:shadow-yellow-500/30 transform hover:-translate-y-1"
                >
                  Request Free Site Visit
                </button>
                <p className="text-xs text-center text-slate-400">We respect your privacy. No spam.</p>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Area / Colony</label>
          <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition" placeholder="e.g. Vijaynagar, Kachnar City..." />
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-yellow-500 text-white p-2 rounded-lg"><Icons.Bolt /></div>
            <span className="text-2xl font-bold text-white">{BUSINESS.name.split(' ')[0]}<span className="text-yellow-500">Solar</span></span>
          </div>
          <p className="mb-4">Jabalpur's trusted MNRE & MPPKVVCL approved solar installation company. Making clean energy accessible to every home.</p>
          <p className="text-sm text-slate-500">MNRE Approved | MPPKVVCL Registered</p>
        </div>

        {/* NAP - Name Address Phone for Local SEO */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Requirement</label>
          <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition appearance-none cursor-pointer">
            <option>Home (1-3 kW)</option>
            <option>Large Home (4-10 kW)</option>
            <option>Commercial / Office</option>
            <option>Just need a Quote</option>
          </select>
          <h3 className="text-white font-semibold mb-4">Contact Information</h3>
          <address className="not-italic space-y-2">
            <p className="font-semibold text-white">{BUSINESS.name}</p>
            <p>{BUSINESS.address}</p>
            <p>
              <span className="text-slate-500">Phone: </span>
              <a href={`tel:${BUSINESS.phoneClean}`} className="text-yellow-500 hover:text-yellow-400">{BUSINESS.phone}</a>
            </p>
            <p>
              <span className="text-slate-500">Email: </span>
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-white">{BUSINESS.email}</a>
            </p>
          </address>
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
        {/* Service Areas */}
        <div>
          <h3 className="text-white font-semibold mb-4">Service Areas in Jabalpur</h3>
          <p className="text-sm">Vijayanagar, Kachnar City, Adhartal, Napier Town, Civil Lines, Gorakhpur, Madan Mahal, Wright Town, Garha, Tilhari, and all nearby localities.</p>
          <div className="flex gap-4 mt-6">
            <a
              href={`https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white p-3 rounded-lg hover:bg-[#1da851] transition"
              aria-label="WhatsApp"
            >
              <Icons.WhatsApp />
            </a>
            <a
              href={`tel:${BUSINESS.phoneClean}`}
              className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
              aria-label="Call us"
            >
              <Icons.Phone />
            </a>
          </div>
        </div>
      </div>
      <div className="text-sm pt-8 border-t border-slate-900">
        © 2025 Maxon Electricals. All rights reserved.

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-900">
        <div className="flex justify-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#savings" className="hover:text-white transition">Subsidy</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <div className="text-sm">
          © 2025 {BUSINESS.name}. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/916264580977" 
  <a
    href={`https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group hidden md:flex"
    aria-label="Chat on WhatsApp"
  >
    <div className="absolute -top-12 right-0 bg-white text-slate-900 text-xs py-1 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      Chat with us!
  </a>
);

// Sticky mobile buttons for Call and WhatsApp
const StickyMobileButtons = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 shadow-lg safe-area-inset-bottom">
    <div className="flex">
      <a
        href={`tel:${BUSINESS.phoneClean}`}
        className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-4 font-bold hover:bg-green-700 transition"
      >
        <Icons.Phone />
        <span>Call Now</span>
      </a>
      <a
        href={`https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-bold hover:bg-[#1da851] transition"
      >
        <Icons.WhatsApp />
        <span>WhatsApp</span>
      </a>
    </div>
  </div>
);

// --- 5. MAIN APP ---

const App: React.FC = () => {
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-yellow-200 selection:text-yellow-900">
      <GlobalStyles />
      <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />
      
      <main>

      <main className="pb-16 md:pb-0">
        <Hero onOpenCalculator={() => setCalculatorOpen(true)} />
        <Stats />
        <Features />
        <SubsidyCalculator />
        <FAQSection />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
      <StickyMobileButtons />
      <CalculatorModal isOpen={isCalculatorOpen} onClose={() => setCalculatorOpen(false)} />
    </div>
  );
