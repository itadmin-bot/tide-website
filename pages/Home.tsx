
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, Heart, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/DfHG7z0M/Exterior-Nighttime.jpg" 
            alt="Tidé Hotels & Resorts Exterior Night" 
            className="w-full h-full object-cover brightness-[0.4] animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-8 w-full max-w-6xl mx-auto pt-24 md:pt-32">
          <div className="flex flex-col items-center">
            <span 
              className="font-accent text-[11px] md:text-[13px] font-black block mb-8 md:mb-10 text-shadow-premium tracking-[0.5em] md:tracking-[0.7em] text-sand uppercase opacity-0 animate-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              Refining the Art of Stay
            </span>
            <h1 
              className="hero-title font-serif text-shadow-premium opacity-0 animate-slide-up"
              style={{ animationDelay: '600ms' }}
            >
              Tidé <span className="italic font-light text-sand/90">Hotels & Resorts</span>
            </h1>
            <p 
              className="text-xl md:text-3xl font-medium text-pearl/90 max-w-3xl md:max-w-4xl mx-auto leading-relaxed text-shadow-premium mb-12 md:mb-16 opacity-0 animate-slide-up px-4 italic font-serif"
              style={{ animationDelay: '900ms' }}
            >
              Luxury boutique comfort in Abuja, where intentional design meets genuine Nigerian hospitality.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center opacity-0 animate-fade-in w-full px-4"
              style={{ animationDelay: '1200ms' }}
            >
              <Link 
                to="/staff"
                className="bg-terracotta text-white px-10 md:px-14 py-5 md:py-6 font-accent text-[11px] md:text-[12px] font-black hover:bg-white hover:text-terracotta shadow-2xl w-full sm:w-auto tracking-[0.3em] md:tracking-[0.4em] text-center transform hover:scale-105 transition-all duration-500"
              >
                Staff Access Portal
              </Link>
              <Link 
                to="/rooms"
                className="border-2 border-white/40 text-white px-10 md:px-14 py-5 md:py-6 font-accent text-[11px] md:text-[12px] font-black hover:bg-white hover:text-slate backdrop-blur-md w-full sm:w-auto tracking-[0.3em] md:tracking-[0.4em] text-center transform hover:scale-105 transition-all duration-500"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ethos */}
      <section className="bg-ivory py-24 md:py-48 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <div className="lg:col-span-6 space-y-12 md:space-y-16">
              <div className="reveal-on-scroll sr-right">
                <span className="text-terracotta font-accent text-[11px] md:text-[12px] font-black block mb-6 md:mb-8 pl-6 border-l-4 border-terracotta tracking-[0.4em]">THE PHILOSOPHY</span>
                <h2 className="text-slate font-serif font-bold text-5xl md:text-7xl leading-[1]">Thoughtful luxury, <br className="hidden md:block"/><span className="italic font-light">not excess.</span></h2>
              </div>
              
              <div className="space-y-8 reveal-on-scroll sr-up" style={{ transitionDelay: '300ms' }}>
                <p className="text-slate/80 text-2xl md:text-3xl font-medium leading-relaxed italic font-serif">
                  At Tidé Hotels & Resorts, we prioritize your peace and productivity. Our spaces are curated to foster rejuvenation for the modern traveler.
                </p>
                <p className="text-slate/60 text-lg md:text-xl leading-relaxed font-sans font-light">
                  Every material choice is selected with the single goal of providing an environment that feels as intelligent as it does welcoming.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-4">
                <div className="space-y-6 p-8 md:p-12 bg-white shadow-xl border border-sand/10 rounded-sm reveal-on-scroll sr-up transition-all duration-700 hover:shadow-2xl hover:-translate-y-2" style={{ transitionDelay: '450ms' }}>
                  <div className="flex items-center space-x-5 text-terracotta mb-6">
                    <ShieldCheck size={36} md:size={42} strokeWidth={1} />
                    <h4 className="font-accent font-black text-[10px] md:text-[11px] tracking-widest uppercase">Discreet Security</h4>
                  </div>
                  <p className="text-base md:text-lg text-slate/70 leading-relaxed font-medium">Safety is the ultimate luxury. Our teams provide protection with a sophisticated, invisible touch.</p>
                </div>
                <div className="space-y-6 p-8 md:p-12 bg-white shadow-xl border border-sand/10 rounded-sm reveal-on-scroll sr-up transition-all duration-700 hover:shadow-2xl hover:-translate-y-2" style={{ transitionDelay: '600ms' }}>
                  <div className="flex items-center space-x-5 text-terracotta mb-6">
                    <Leaf size={36} md:size={42} strokeWidth={1} />
                    <h4 className="font-accent font-black text-[10px] md:text-[11px] tracking-widest uppercase">Sustainability</h4>
                  </div>
                  <p className="text-base md:text-lg text-slate/70 leading-relaxed font-medium">Eco-conscious operations that honor our Nigerian environment while maintaining excellence.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex justify-center lg:justify-end reveal-on-scroll sr-left" style={{ transitionDelay: '700ms' }}>
              <div className="relative w-full max-w-lg md:max-w-xl">
                <div className="absolute -top-10 -right-10 md:-top-16 md:-right-16 w-full h-full border border-terracotta/10 -z-10 translate-x-4 md:translate-x-6 translate-y-4 md:translate-y-6"></div>
                <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative group">
                  <div className="absolute inset-0 bg-terracotta/5 group-hover:bg-transparent transition-all duration-1000 z-10"></div>
                  <img 
                    src="https://i.ibb.co/hJrp4k8V/Recption-14.jpg" 
                    alt="Tidé Reception" 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[3s] ease-out" 
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 w-[105%] md:w-[115%] bg-slate p-10 md:p-14 text-white shadow-3xl border border-white/5 reveal-on-scroll sr-up" style={{ transitionDelay: '1000ms' }}>
                  <Heart size={48} md:size={56} className="text-terracotta mb-8 md:mb-10 animate-pulse" style={{ animationDuration: '4s' }} />
                  <h3 className="text-2xl md:text-4xl font-serif italic font-light mb-4 md:mb-6 leading-tight">Genuine Hospitality <br/><span className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-black text-pearl/40">Personalized with Intent</span></h3>
                  <div className="w-16 h-1 bg-terracotta/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="relative py-32 md:py-56 overflow-hidden text-center bg-slate">
        <div className="absolute inset-0 z-0">
          <img src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" alt="Sanctuary" className="w-full h-full object-cover opacity-15 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate via-transparent to-slate opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-8 reveal-on-scroll sr-scale">
          <h2 className="text-white font-serif mb-8 md:mb-12 text-5xl md:text-7xl font-bold tracking-tight">Your Sanctuary in the Capital</h2>
          <p className="text-xl md:text-3xl text-pearl/80 mb-14 md:mb-20 leading-relaxed font-serif italic font-light px-4">
            "Experience the Tidé Hotels & Resorts standard: where every pillow is fluffed with care and every business meeting feels like a premium retreat."
          </p>
          <Link to="/rooms" className="inline-flex items-center space-x-6 md:space-x-10 bg-terracotta text-white px-10 md:px-16 py-5 md:py-7 font-accent text-[11px] md:text-[13px] font-black hover:bg-white hover:text-slate transition-all duration-500 shadow-2xl group tracking-[0.4em] md:tracking-[0.5em] uppercase active:scale-95">
            <span>EXPLORE GUEST ROOMS</span>
            <ArrowRight size={24} className="transition-transform duration-500 group-hover:translate-x-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-48 bg-white px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-8">
            <div className="max-w-2xl reveal-on-scroll sr-up">
              <span className="text-terracotta font-accent text-[11px] md:text-[12px] font-black block mb-6 tracking-[0.4em] md:tracking-[0.6em]">VOICES OF TIDÉ</span>
              <h2 className="text-slate font-serif font-bold text-5xl md:text-7xl leading-none">Guest Experiences</h2>
            </div>
            <p className="text-slate/30 font-accent text-[9px] md:text-[11px] tracking-[0.3em] md:tracking-[0.5em] font-black uppercase mb-4 reveal-on-scroll sr-up" style={{ transitionDelay: '300ms' }}>Authentic feedback from our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-sand/10 shadow-3xl bg-white">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className={`p-10 md:p-16 space-y-8 md:space-y-12 reveal-on-scroll sr-up border-sand/5 transition-all duration-700 hover:bg-ivory/20 ${i !== 2 ? 'md:border-r border-b md:border-b-0' : ''}`} style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="text-7xl md:text-8xl font-serif text-terracotta/10 leading-none select-none">“</div>
                <p className="text-xl md:text-2xl font-serif italic text-slate/90 leading-relaxed font-light">
                  {t.content}
                </p>
                <div className="pt-10 md:pt-14 flex items-center space-x-6">
                   <div className="w-10 md:w-14 h-[1px] bg-terracotta/30"></div>
                   <div>
                    <p className="font-accent font-black text-slate text-[10px] md:text-[12px] tracking-[0.3em] uppercase">{t.name}</p>
                    <p className="text-terracotta font-accent text-[9px] md:text-[10px] mt-2 font-black tracking-[0.4em] uppercase opacity-70">{t.role}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ivory py-32 md:py-56 text-center px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[4px] bg-terracotta"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="reveal-on-scroll sr-up">
            <h2 className="font-serif italic font-light mb-8 md:mb-12 text-5xl md:text-8xl text-slate leading-[0.9] tracking-tighter">Ready to enrich <br className="md:hidden"/>your life?</h2>
            <p className="text-xl md:text-2xl text-slate/60 mb-14 md:mb-20 leading-relaxed font-serif italic px-4">
              Whether for business or pleasure, your journey to restorative hospitality at Tidé Hotels & Resorts begins here.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10 reveal-on-scroll sr-up" style={{ transitionDelay: '400ms' }}>
            <Link 
              to="/booking" 
              className="bg-slate text-white px-12 md:px-20 py-6 md:py-8 font-accent text-[11px] md:text-[13px] font-black hover:bg-terracotta transition-all duration-500 shadow-2xl tracking-[0.4em] md:tracking-[0.5em] text-center transform hover:scale-105 active:scale-95"
            >
              BOOK DIRECTLY
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-slate text-slate px-12 md:px-20 py-6 md:py-8 font-accent text-[11px] md:text-[13px] font-black hover:bg-slate hover:text-white transition-all duration-500 tracking-[0.4em] md:tracking-[0.5em] text-center transform hover:scale-105 active:scale-95"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        {/* Subtle decorative background text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-serif font-black text-slate/[0.02] select-none pointer-events-none whitespace-nowrap -mb-10">
          ENRICHING LIVES
        </div>
      </section>
    </div>
  );
};

export default Home;
