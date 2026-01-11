
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, Heart, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section - Static Animation (On Load) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/DfHG7z0M/Exterior-Nighttime.jpg" 
            alt="Tidé Hotels & Resorts Exterior Night" 
            className="w-full h-full object-cover brightness-[0.35] animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto pt-32">
          <div className="stagger-reveal">
            <span className="font-accent text-[11px] font-black block mb-8 text-shadow-premium tracking-[0.5em] text-sand uppercase">
              Refining the Art of Stay
            </span>
            <h1 className="hero-title font-serif text-shadow-premium">
              Tidé <span className="italic font-light text-sand/90">Hotels & Resorts</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-pearl/90 max-w-3xl mx-auto leading-relaxed text-shadow-premium mb-12">
              Luxury boutique comfort in Abuja, where intentional design meets genuine Nigerian hospitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/booking"
                className="bg-terracotta text-white px-10 py-5 font-accent text-[11px] font-black hover:bg-white hover:text-terracotta shadow-2xl w-full sm:w-auto tracking-[0.3em]"
              >
                Secure Your Suite
              </Link>
              <Link 
                to="/rooms"
                className="border-2 border-white/40 text-white px-10 py-5 font-accent text-[11px] font-black hover:bg-white hover:text-slate backdrop-blur-md w-full sm:w-auto tracking-[0.3em]"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ethos - Granular Reveal */}
      <section className="bg-ivory py-24 md:py-32 px-6">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-12">
              <div className="reveal-on-scroll sr-right">
                <span className="text-terracotta font-accent text-[11px] font-black block mb-6 pl-4 border-l-2 border-terracotta tracking-[0.3em]">THE PHILOSOPHY</span>
                <h2 className="text-slate font-serif font-bold text-5xl leading-[1.1]">Thoughtful luxury, <br/><span className="italic font-light">not excess.</span></h2>
              </div>
              
              <div className="space-y-6 reveal-on-scroll sr-up" style={{ transitionDelay: '200ms' }}>
                <p className="text-slate/80 text-2xl font-medium leading-relaxed">
                  At Tidé Hotels & Resorts, we prioritize your peace and productivity. Our spaces are curated to foster rejuvenation for the modern traveler.
                </p>
                <p className="text-slate/60 text-[18px] leading-relaxed">
                  Every material choice is selected with the single goal of providing an environment that feels as intelligent as it does welcoming.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
                <div className="space-y-4 p-8 bg-white shadow-sm border border-sand/20 rounded-sm reveal-on-scroll sr-up" style={{ transitionDelay: '300ms' }}>
                  <div className="flex items-center space-x-4 text-terracotta mb-4">
                    <ShieldCheck size={32} strokeWidth={1.5} />
                    <h4 className="font-accent font-black text-[10px] tracking-widest">Discreet Security</h4>
                  </div>
                  <p className="text-[15px] text-slate/70 leading-relaxed font-medium">Safety is the ultimate luxury. Our teams provide protection with a sophisticated, invisible touch.</p>
                </div>
                <div className="space-y-4 p-8 bg-white shadow-sm border border-sand/20 rounded-sm reveal-on-scroll sr-up" style={{ transitionDelay: '400ms' }}>
                  <div className="flex items-center space-x-4 text-terracotta mb-4">
                    <Leaf size={32} strokeWidth={1.5} />
                    <h4 className="font-accent font-black text-[10px] tracking-widest">Sustainability</h4>
                  </div>
                  <p className="text-[15px] text-slate/70 leading-relaxed font-medium">Eco-conscious operations that honor our Nigerian environment while maintaining excellence.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex justify-center lg:justify-end reveal-on-scroll sr-left" style={{ transitionDelay: '500ms' }}>
              <div className="relative w-full max-w-md">
                <div className="absolute -top-10 -right-10 w-full h-full border border-terracotta/20 -z-10 translate-x-4 translate-y-4"></div>
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                  <img src="https://i.ibb.co/hJrp4k8V/Recption-14.jpg" alt="Tidé Reception" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="absolute -bottom-10 -left-10 w-[110%] bg-slate p-10 text-white shadow-2xl border border-white/5 reveal-on-scroll sr-up" style={{ transitionDelay: '700ms' }}>
                  <Heart size={40} className="text-terracotta mb-6" />
                  <h3 className="text-2xl font-serif italic font-light mb-4 leading-tight">Genuine Hospitality <br/><span className="text-xs uppercase tracking-[0.4em] font-black text-pearl/50">Personalized with Intent</span></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Scale Entrance */}
      <section className="relative py-32 md:py-40 overflow-hidden text-center bg-slate">
        <div className="absolute inset-0 z-0">
          <img src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" alt="Sanctuary" className="w-full h-full object-cover opacity-20 scale-105" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 reveal-on-scroll sr-scale">
          <h2 className="text-white font-serif mb-8 text-5xl">Your Sanctuary in the Capital</h2>
          <p className="text-xl md:text-2xl text-pearl/80 mb-12 leading-relaxed content-measure font-medium">
            Experience the Tidé Hotels & Resorts standard: where every pillow is fluffed with care and every business meeting feels like a premium retreat.
          </p>
          <Link to="/rooms" className="inline-flex items-center space-x-6 bg-terracotta text-white px-12 py-5 font-accent text-[11px] font-black hover:bg-white hover:text-slate transition-all shadow-2xl group tracking-[0.3em]">
            <span>EXPLORE GUEST ROOMS</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      {/* Testimonials - Staggered Cards */}
      <section className="py-24 bg-white px-6">
        <div className="content-container">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8 reveal-on-scroll sr-up">
            <div className="max-w-xl">
              <span className="text-terracotta font-accent text-[11px] font-black block mb-4 tracking-[0.4em]">VOICES OF TIDÉ</span>
              <h2 className="text-slate font-serif font-bold text-5xl">Guest Experiences</h2>
            </div>
            <p className="text-slate/40 font-accent text-[10px] tracking-[0.3em] font-black uppercase mb-2">Authentic feedback from our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-sand/20 shadow-sm">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className={`p-12 space-y-8 reveal-on-scroll sr-up border-sand/10 ${i !== 2 ? 'md:border-r' : ''}`} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="text-6xl font-serif text-terracotta/20 leading-none">“</div>
                <p className="text-xl font-serif italic text-slate/90 leading-relaxed font-medium">
                  {t.content}
                </p>
                <div className="pt-8 flex items-center space-x-4">
                   <div className="w-8 h-[1px] bg-terracotta"></div>
                   <div>
                    <p className="font-accent font-black text-slate text-[10px] tracking-widest">{t.name}</p>
                    <p className="text-terracotta font-accent text-[9px] mt-1 font-black tracking-widest uppercase">{t.role}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Sequential Reveal */}
      <section className="bg-ivory py-32 text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-terracotta"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="reveal-on-scroll sr-up">
            <h2 className="font-serif italic font-light mb-8 text-5xl md:text-7xl text-slate">Ready to enrich <br/>your life?</h2>
            <p className="text-xl text-slate/60 mb-12 leading-relaxed font-medium">
              Whether for business or pleasure, your journey to restorative hospitality at Tidé Hotels & Resorts begins here.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 reveal-on-scroll sr-up" style={{ transitionDelay: '300ms' }}>
            <Link 
              to="/booking" 
              className="bg-slate text-white px-16 py-6 font-accent text-[12px] font-black hover:bg-terracotta transition-all shadow-2xl tracking-[0.4em]"
            >
              BOOK DIRECTLY
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border border-slate text-slate px-16 py-6 font-accent text-[12px] font-black hover:bg-slate hover:text-white transition-all tracking-[0.4em]"
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
