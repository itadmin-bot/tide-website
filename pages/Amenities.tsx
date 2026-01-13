
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Shield, Wifi, Moon, Sun, CheckCircle } from 'lucide-react';

const Amenities: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const features = [
    { icon: <Wifi />, title: "Connectivity", desc: "Reliable, ultra-fast Wi-Fi for seamless business calls." },
    { icon: <Moon />, title: "Restorative", desc: "Egyptian cotton linens and curated mattresses for deep rest." },
    { icon: <Coffee />, title: "Artisan Coffee", desc: "Freshly roasted specialty coffee available in-suite." },
    { icon: <Shield />, title: "Security", desc: "24/7 high-level protection and total privacy for guests." },
    { icon: <Sun />, title: "Architectural", desc: "Expansive windows that welcome energizing natural light." },
    { icon: <CheckCircle />, title: "Wellness", desc: "Curated amenities designed for deep mental focus." },
  ];

  return (
    <div className="pb-10 md:pb-16">
      {/* Hero Section */}
      <section className="relative h-[55vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-slate">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1920" 
            alt="Wellness & Experience" 
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover brightness-[0.45] transition-all duration-1000 ease-out scale-105 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-ivory/10"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 w-full max-w-6xl mx-auto pt-12 md:pt-16">
          <div className="stagger-reveal">
            <span className="text-sand font-accent uppercase tracking-[0.5em] text-[10px] md:text-[12px] font-black block mb-4 md:mb-6 animate-fade-in">The Tidé Standard</span>
            <h1 className="hero-title font-serif mb-4 md:mb-8 leading-none text-white font-bold text-shadow-premium animate-slide-up">Crafted <span className="italic font-light text-pearl">Experiences</span></h1>
            <p className="text-lg md:text-2xl font-serif text-pearl leading-relaxed max-w-4xl mx-auto text-shadow-premium px-4 font-light italic animate-slide-up" style={{ animationDelay: '300ms' }}>
              "We focus on the essential details that foster well-being, peak productivity, and absolute serenity at Tidé Hotels & Resorts."
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="bg-ivory py-12 md:py-20">
        <div className="content-container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-sand/30 shadow-2xl bg-white rounded-sm overflow-hidden reveal-on-scroll sr-up">
            {features.map((f, i) => (
              <div key={i} className="p-6 md:p-10 text-center group border-sand/10 hover:bg-ivory/30 transition-all duration-500 border-b last:border-b-0 md:border-r md:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r-0 lg:[&:nth-child(5)]:border-r lg:[&:nth-child(6)]:border-r-0">
                <div className="inline-flex mb-4 md:mb-6 text-terracotta bg-pearl p-4 md:p-5 rounded-full group-hover:bg-terracotta group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                  {React.cloneElement(f.icon as React.ReactElement, { size: 24, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-base md:text-lg font-accent mb-2 md:mb-3 tracking-[0.2em] md:tracking-[0.3em] text-slate font-black uppercase">{f.title}</h3>
                <p className="text-slate/70 text-sm md:text-base leading-relaxed font-medium px-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wellness Commitment */}
      <section className="content-container px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative reveal-on-scroll sr-right">
            <div className="hidden md:block absolute -inset-3 border border-terracotta/10 -z-10 translate-x-3 translate-y-3"></div>
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200" alt="Wellness Space" className="rounded-sm shadow-2xl w-full object-cover h-[300px] md:h-[450px]" />
          </div>
          <div className="lg:col-span-5 space-y-6 md:space-y-8 reveal-on-scroll sr-left">
            <span className="text-terracotta font-accent uppercase tracking-[0.4em] text-[10px] md:text-[11px] font-black block">Our Commitment</span>
            <h2 className="text-3xl md:text-5xl font-serif text-slate font-bold leading-tight">A Sanctuary of <br className="hidden md:block"/>Well-being</h2>
            <div className="space-y-3 md:space-y-4">
               {[
                 "Personalized guest itineraries",
                 "Quiet zones for deep focus",
                 "Curated wellness amenities"
               ].map((item, idx) => (
                 <div key={idx} className="flex items-center space-x-3 md:space-x-4 py-2 md:py-3 border-b border-sand/20 last:border-0 group">
                   <CheckCircle className="text-terracotta shrink-0 transition-transform group-hover:scale-125" size={18} md:size={22} />
                   <span className="text-base md:text-lg font-bold text-slate/80">{item}</span>
                 </div>
               ))}
            </div>
            <div className="pt-4">
              <Link to="/booking" className="inline-block bg-terracotta text-white px-8 py-4 font-accent text-[10px] font-black tracking-[0.3em] uppercase shadow-xl hover:bg-slate transform hover:scale-105 transition-all">Experience Tidé</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Amenities;
