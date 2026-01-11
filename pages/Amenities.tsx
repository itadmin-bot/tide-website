
import React from 'react';
import { Coffee, Shield, Wifi, Wind, Moon, Sun, CheckCircle } from 'lucide-react';

const Amenities: React.FC = () => {
  const features = [
    { icon: <Wifi />, title: "High-Speed Connectivity", desc: "Reliable, ultra-fast Wi-Fi for seamless business calls and 4K streaming." },
    { icon: <Moon />, title: "Orthopaedic Comfort", desc: "Egyptian cotton linens and curated mattresses for absolute restorative rest." },
    { icon: <Coffee />, title: "Local Artisan Coffee", desc: "Freshly roasted specialty coffee available in-suite and throughout the resort." },
    { icon: <Shield />, title: "Discreet Security", desc: "24/7 high-level protection and total privacy for our distinguished guests." },
    { icon: <Wind />, title: "Pure Air Filtration", desc: "Advanced HEPA systems ensuring medical-grade indoor air quality." },
    { icon: <Sun />, title: "Architectural Light", desc: "Expansive floor-to-ceiling windows that welcome energizing natural light." },
  ];

  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" 
            alt="Tidé Exterior Daytime" 
            className="w-full h-full object-cover brightness-[0.35] scale-105" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 w-full max-w-6xl mx-auto">
          <div className="stagger-reveal">
            <span className="text-sand font-accent uppercase tracking-[0.4em] text-[11px] md:text-[13px] font-black block mb-8">The Tidé Standard</span>
            <h1 className="hero-title font-serif mb-10 leading-none text-white font-bold text-shadow-premium">
              Crafted <span className="italic font-light text-pearl">Experiences</span>
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl font-bold text-pearl leading-relaxed break-text max-w-4xl mx-auto text-shadow-premium px-4">
              We focus on the essential details that foster well-being, peak productivity, and absolute serenity.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-ivory py-32 md:py-48">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {features.map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center group reveal-on-scroll sr-up" style={{ '--sr-delay': `${i * 0.1}s` } as React.CSSProperties}>
                <div className="mb-8 text-terracotta bg-white p-6 rounded-full shadow-lg border border-sand/20 group-hover:bg-terracotta group-hover:text-white transition-all duration-500">
                  {React.cloneElement(f.icon as React.ReactElement, { size: 42, strokeWidth: 2 })}
                </div>
                <h3 className="text-2xl font-serif mb-5 uppercase tracking-widest text-slate font-bold">{f.title}</h3>
                <p className="text-slate text-lg leading-relaxed font-bold px-4 break-text">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative group reveal-on-scroll sr-right">
            <div className="absolute inset-0 bg-slate/10 rounded-sm group-hover:bg-transparent transition-all duration-700"></div>
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200" alt="Wellness Space" className="rounded-sm shadow-2xl w-full object-cover aspect-[4/3]" />
          </div>
          <div className="space-y-10 reveal-on-scroll sr-left">
            <span className="text-terracotta font-accent uppercase tracking-[0.4em] text-[12px] font-black block">Our Commitment</span>
            <h2 className="text-4xl md:text-6xl font-serif text-slate font-bold leading-tight">A Sanctuary of Well-being</h2>
            <p className="text-slate text-xl leading-relaxed font-bold break-text">
              Every moment at Tidé is designed to be a breath of fresh air. Our service is discreet yet intuitive, ensuring that your every need is met with warmth and excellence.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <CheckCircle className="text-terracotta" size={24} />
                <span className="text-lg font-bold text-slate">Personalized guest itineraries</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="text-terracotta" size={24} />
                <span className="text-lg font-bold text-slate">Quiet zones for deep focus</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="text-terracotta" size={24} />
                <span className="text-lg font-bold text-slate">Curated wellness amenities</span>
              </div>
            </div>
            <p className="text-slate text-xl leading-relaxed italic font-medium pt-4 border-l-4 border-terracotta pl-6">
              "We provide the atmosphere you need to thrive, whether you're closing a deal or closing your eyes for the night."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
