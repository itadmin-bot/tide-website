
import React from 'react';
import { Coffee, Shield, Wifi, Moon, Sun, CheckCircle } from 'lucide-react';

const Amenities: React.FC = () => {
  const features = [
    { icon: <Wifi />, title: "Connectivity", desc: "Reliable, ultra-fast Wi-Fi for seamless business calls and 4K streaming." },
    { icon: <Moon />, title: "Orthopaedic", desc: "Egyptian cotton linens and curated mattresses for absolute restorative rest." },
    { icon: <Coffee />, title: "Artisan Coffee", desc: "Freshly roasted specialty coffee available in-suite and throughout the resort." },
    { icon: <Shield />, title: "Security", desc: "24/7 high-level protection and total privacy for our distinguished guests." },
    { icon: <Sun />, title: "Architectural", desc: "Expansive floor-to-ceiling windows that welcome energizing natural light." },
    { icon: <CheckCircle />, title: "Wellness", desc: "Curated wellness amenities and quiet zones designed for deep mental focus." },
  ];

  return (
    <div className="pb-16 md:pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" 
            alt="Tidé Exterior Daytime" 
            className="w-full h-full object-cover brightness-[0.35] scale-105" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 w-full max-w-6xl mx-auto pt-16 md:pt-24">
          <div className="stagger-reveal">
            <span className="text-sand font-accent uppercase tracking-[0.5em] text-[10px] md:text-[13px] font-black block mb-6 md:mb-8">THE TIDÉ STANDARD</span>
            <h1 className="hero-title font-serif mb-6 md:mb-10 leading-none text-white font-bold text-shadow-premium">
              Crafted <span className="italic font-light text-pearl">Experiences</span>
            </h1>
            <p className="text-xl md:text-3xl font-serif text-pearl leading-relaxed max-w-4xl mx-auto text-shadow-premium px-4 font-light italic">
              "We focus on the essential details that foster well-being, peak productivity, and absolute serenity at Tidé Hotels & Resorts."
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="bg-ivory py-16 md:py-32">
        <div className="content-container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-sand/30 shadow-2xl bg-white rounded-sm overflow-hidden">
            {features.map((f, i) => (
              <div key={i} className="p-8 md:p-12 text-center group border-sand/10 hover:bg-ivory/30 transition-all duration-500 border-b last:border-b-0 md:border-r md:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(5)]:border-r lg:[&:nth-child(6)]:border-r-0">
                <div className="inline-flex mb-6 md:mb-8 text-terracotta bg-pearl p-5 md:p-6 rounded-full group-hover:bg-terracotta group-hover:text-white transition-all duration-500">
                  {React.cloneElement(f.icon as React.ReactElement, { size: 30, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-lg md:text-xl font-accent mb-3 md:mb-4 tracking-[0.2em] md:tracking-[0.3em] text-slate font-black uppercase">{f.title}</h3>
                <p className="text-slate/70 text-base md:text-[17px] leading-relaxed font-medium px-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wellness Commitment */}
      <section className="content-container px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 relative reveal-on-scroll sr-right">
            <div className="hidden md:block absolute -inset-4 border border-terracotta/10 -z-10 translate-x-4 translate-y-4"></div>
            <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200" alt="Wellness Space" className="rounded-sm shadow-2xl w-full object-cover h-[350px] md:h-[500px]" />
          </div>
          <div className="lg:col-span-5 space-y-8 md:space-y-10 reveal-on-scroll sr-left">
            <span className="text-terracotta font-accent uppercase tracking-[0.4em] text-[10px] md:text-[12px] font-black block">Our Commitment</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate font-bold leading-tight">A Sanctuary of <br className="hidden md:block"/>Well-being</h2>
            <div className="space-y-4 md:space-y-6">
               {[
                 "Personalized guest itineraries",
                 "Quiet zones for deep focus",
                 "Curated wellness amenities"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center space-x-4 md:space-x-5 py-3 md:py-4 border-b border-sand/20 last:border-0">
                   <CheckCircle className="text-terracotta shrink-0" size={20} md:size={24} />
                   <span className="text-lg md:text-xl font-bold text-slate/80">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
