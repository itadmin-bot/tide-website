import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, Heart, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/DfHG7z0M/Exterior-Nighttime.jpg" 
            alt="Tidé Hotels & Resorts Exterior Night" 
            className="w-full h-full object-cover brightness-[0.35] animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto pt-24 md:pt-32">
          <div className="flex flex-col items-center">
            <span 
              className="font-accent text-[10px] md:text-[11px] font-black block mb-6 md:mb-8 text-shadow-premium tracking-[0.4em] md:tracking-[0.5em] text-sand uppercase opacity-0 animate-slide-up"
              style={{ animationDelay: '100ms' }}
            >
              Refining the Art of Stay
            </span>
            <h1 
              className="hero-title font-serif text-shadow-premium opacity-0 animate-slide-up"
              style={{ animationDelay: '250ms' }}
            >
              Tidé <span className="italic font-light text-sand/90">Hotels & Resorts</span>
            </h1>
            <p 
              className="text-lg md:text-2xl font-medium text-pearl/90 max-w-2xl md:max-w-3xl mx-auto leading-relaxed text-shadow-premium mb-10 md:mb-12 opacity-0 animate-slide-up px-4"
              style={{ animationDelay: '400ms' }}
            >
              Luxury boutique comfort in Abuja, where intentional design meets genuine Nigerian hospitality.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center opacity-0 animate-slide-up w-full px-4"
              style={{ animationDelay: '550ms' }}
            >
              <Link 
                to="/booking"
                className="bg-terracotta text-white px-8 md:px-10 py-4 md:py-5 font-accent text-[10px] md:text-[11px] font-black hover:bg-white hover:text-terracotta shadow-2xl w-full sm:w-auto tracking-[0.25em] md:tracking-[0.3em] text-center"
              >
                Secure Your Suite
              </Link>
              <Link 
                to="/rooms"
                className="border-2 border-white/40 text-white px-8 md:px-10 py-4 md:py-5 font-accent text-[10px] md:text-[11px] font-black hover:bg-white hover:text-slate backdrop-blur-md w-full sm:w-auto tracking-[0.25em] md:tracking-[0.3em] text-center"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ethos */}
      <section className="bg-ivory py-16 md:py-32 px-6">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="lg:col-span-6 space-y-8 md:space-y-12">
              <div className="reveal-on-scroll sr-right">
                <span className="text-terracotta font-accent text-[10px] md:text-[11px] font-black block mb-4 md:mb-6 pl-4 border-l-2 border-terracotta tracking-[0.3em]">THE PHILOSOPHY</span>
                <h2 className="text-slate font-serif font-bold text-4xl md:text-5xl leading-[1.1]">Thoughtful luxury, <br className="hidden md:block"/><span className="italic font-light">not excess.</span></h2>
              </div>
              
              <div className="space-y-6 reveal-on-scroll sr-up" style={{ transitionDelay: '200ms' }}>
                <p className="text-slate/80 text-xl md:text-2xl font-medium leading-relaxed">
                  At Tidé Hotels & Resorts, we prioritize your peace and productivity. Our spaces are curated to foster rejuvenation for the modern traveler.
                </p>
                <p className="text-slate/60 text-base md:text-[18px] leading-relaxed">
                  Every material choice is selected with the single goal of providing an environment that feels as intelligent as it does welcoming.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 pt-4">
                <div className="space-y-4 p-6 md:p-8 bg-white shadow-sm border border-sand/20 rounded-sm reveal-on-scroll sr-up" style={{ transitionDelay: '300ms' }}>
                  <div className="flex items-center space-x-4 text-terracotta mb-4">
                    <ShieldCheck size={28} md:size={32} strokeWidth={1.5} />
                    <h4 className="font-accent font-black text-[9px] md:text-[10px] tracking-widest uppercase">Discreet Security</h4>
                  </div>
                  <p className="text-sm md:text-[15px] text-slate/70 leading-relaxed font-medium">Safety is the ultimate luxury. Our teams provide protection with a sophisticated, invisible touch.</p>
                </div>
                <div className="space-y-4 p-6 md:p-8 bg-white shadow-sm border border-sand/20 rounded-sm reveal-on-scroll sr-up" style={{ transitionDelay: '400ms' }}>
                  <div className="flex items-center space-x-4 text-terracotta mb-4">
                    <Leaf size={28} md:size={32} strokeWidth={1.5} />
                    <h4 className="font-accent font-black text-[9px] md:text-[10px] tracking-widest uppercase">Sustainability</h4>
                  </div>
                  <p className="text-sm md:text-[15px] text-slate/70 leading-relaxed font-medium">Eco-conscious operations that honor our Nigerian environment while maintaining excellence.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex justify-center lg:justify-end reveal-on-scroll sr-left" style={{ transitionDelay: '500ms' }}>
              <div className="relative w-full max-w-sm md:max-w-md">
                <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-full h-full border border-terracotta/20 -z-10 translate-x-2 md:translate-x-4 translate-y-2 md:translate-y-4"></div>
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                  <img src="https://i.ibb.co/hJrp4k8V/Recption-14.jpg" alt="Tidé Reception" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-[105%] md:w-[110%] bg-slate p-6 md:p-10 text-white shadow-2xl border border-white/5 reveal-on-scroll sr-up" style={{ transitionDelay: '700ms' }}>
                  <Heart size={32} md:size={40} className="text-terracotta mb-4 md:mb-6" />
                  <h3 className="text-xl md:text-2xl font-serif italic font-light mb-2 md:mb-4 leading-tight">Genuine Hospitality <br/><span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-black text-pearl/50">Personalized with Intent</span></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="relative py-24 md:py-40 overflow-hidden text-center bg-slate">
        <div className="absolute inset-0 z-0">
          <img src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" alt="Sanctuary" className="w-full h-full object-cover opacity-20 scale-105" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 reveal-on-scroll sr-scale">
          <h2 className="text-white font-serif mb-6 md:mb-8 text-4xl md:text-5xl">Your Sanctuary in the Capital</h2>
          <p className="text-lg md:text-2xl text-pearl/80 mb-10 md:mb-12 leading-relaxed content-measure font-medium">
            Experience the Tidé Hotels & Resorts standard: where every pillow is fluffed with care and every business meeting feels like a premium retreat.
          </p>
          <Link to="/rooms" className="inline-flex items-center space-x-4 md:space-x-6 bg-terracotta text-white px-8 md:px-12 py-4 md:py-5 font-accent text-[10px] md:text-[11px] font-black hover:bg-white hover:text-slate transition-all shadow-2xl group tracking-[0.25em] md:tracking-[0.3em] uppercase">
            <span>EXPLORE GUEST ROOMS</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white px-6">
        <div className="content-container">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-6">
            <div className="max-w-xl reveal-on-scroll sr-up">
              <span className="text-terracotta font-accent text-[10px] md:text-[11px] font-black block mb-4 tracking-[0.3em] md:tracking-[0.4em]">VOICES OF TIDÉ</span>
              <h2 className="text-slate font-serif font-bold text-4xl md:text-5xl">Guest Experiences</h2>
            </div>
            <p className="text-slate/40 font-accent text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] font-black uppercase mb-2 reveal-on-scroll sr-up" style={{ transitionDelay: '200ms' }}>Authentic feedback from our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-sand/20 shadow-sm">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className={`p-8 md:p-12 space-y-6 md:space-y-8 reveal-on-scroll sr-up border-sand/10 ${i !== 2 ? 'md:border-r border-b md:border-b-0' : ''}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="text-5xl md:text-6xl font-serif text-terracotta/20 leading-none">“</div>
                <p className="text-lg md:text-xl font-serif italic text-slate/90 leading-relaxed font-medium">
                  {t.content}
                </p>
                <div className="pt-6 md:pt-8 flex items-center space-x-4">
                   <div className="w-6 md:w-8 h-[1px] bg-terracotta"></div>
                   <div>
                    <p className="font-accent font-black text-slate text-[9px] md:text-[10px] tracking-widest uppercase">{t.name}</p>
                    <p className="text-terracotta font-accent text-[8px] md:text-[9px] mt-1 font-black tracking-widest uppercase">{t.role}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ivory py-24 md:py-32 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-terracotta"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="reveal-on-scroll sr-up">
            <h2 className="font-serif italic font-light mb-6 md:mb-8 text-4xl md:text-7xl text-slate">Ready to enrich <br className="md:hidden"/>your life?</h2>
            <p className="text-lg md:text-xl text-slate/60 mb-10 md:mb-12 leading-relaxed font-medium">
              Whether for business or pleasure, your journey to restorative hospitality at Tidé Hotels & Resorts begins here.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 reveal-on-scroll sr-up" style={{ transitionDelay: '300ms' }}>
            <Link 
              to="/booking" 
              className="bg-slate text-white px-10 md:px-16 py-5 md:py-6 font-accent text-[10px] md:text-[12px] font-black hover:bg-terracotta transition-all shadow-2xl tracking-[0.3em] md:tracking-[0.4em] text-center"
            >
              BOOK DIRECTLY
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border border-slate text-slate px-10 md:px-16 py-5 md:py-6 font-accent text-[10px] md:text-[12px] font-black hover:bg-slate hover:text-white transition-all tracking-[0.3em] md:tracking-[0.4em] text-center"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;