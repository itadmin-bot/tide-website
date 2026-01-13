
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, Heart, ArrowRight, Lock, Compass } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

const Home: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="space-y-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/DfHG7z0M/Exterior-Nighttime.jpg" 
            alt="Tidé Hotels & Resorts Exterior Night" 
            className={`w-full h-full object-cover brightness-[0.4] animate-slow-zoom transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-8 w-full max-w-6xl mx-auto pt-20 md:pt-28 pb-10 md:pb-20">
          <div className="flex flex-col items-center">
            <span className="font-accent text-[11px] md:text-[13px] font-black block mb-4 md:mb-6 text-shadow-premium tracking-[0.5em] md:tracking-[0.7em] text-sand uppercase opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>Tidé Hotels & Resorts</span>
            <h1 className="hero-title font-serif text-shadow-premium opacity-0 animate-slide-up leading-tight" style={{ animationDelay: '600ms' }}>Redefining Hospitality for <span className="italic font-light text-sand/90">Lasting Legacies</span></h1>
            <p className="text-lg md:text-2xl font-medium text-pearl/90 max-w-4xl mx-auto leading-relaxed text-shadow-premium mb-8 md:mb-12 opacity-0 animate-slide-up px-4 italic font-serif" style={{ animationDelay: '900ms' }}>Exceptional Service and Inclusive Experiences available to all, not just the privileged few.</p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center opacity-0 animate-fade-in w-full px-4" style={{ animationDelay: '1200ms' }}>
              <Link to="/booking" className="bg-terracotta text-white px-8 md:px-10 py-4 md:py-5 font-accent text-[10px] md:text-[11px] font-black hover:bg-white hover:text-terracotta shadow-2xl w-full sm:w-auto tracking-[0.2em] md:tracking-[0.3em] text-center transform hover:scale-105 active:scale-95 transition-all duration-500">Secure Your Stay</Link>
              <Link to="/staff" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 font-accent text-[10px] md:text-[11px] font-black hover:bg-white hover:text-slate shadow-2xl w-full sm:w-auto tracking-[0.2em] md:tracking-[0.3em] text-center transform hover:scale-105 active:scale-95 transition-all duration-500 flex items-center justify-center space-x-3"><Lock size={14} /><span>Staff Portal</span></Link>
              <Link to="/rooms" className="border-2 border-white/40 text-white px-8 md:px-10 py-4 md:py-5 font-accent text-[10px] md:text-[11px] font-black hover:bg-white hover:text-slate backdrop-blur-md w-full sm:w-auto tracking-[0.2em] md:tracking-[0.3em] text-center transform hover:scale-105 active:scale-95 transition-all duration-500">Explore Collection</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Ethos */}
      <section className="bg-ivory py-16 md:py-28 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            <div className="lg:col-span-6 space-y-6 md:space-y-8">
              <div className="reveal-on-scroll sr-right">
                <span className="text-terracotta font-accent text-[10px] md:text-[12px] font-black block mb-3 md:mb-4 pl-6 border-l-4 border-terracotta tracking-[0.4em]">OUR MISSION</span>
                <h2 className="text-slate font-serif font-bold text-4xl md:text-7xl leading-[1]">A Sanctuary of <br className="hidden md:block"/><span className="italic font-light text-terracotta">Arrival.</span></h2>
              </div>
              <div className="space-y-6 md:space-y-8 reveal-on-scroll sr-up" style={{ transitionDelay: '300ms' }}>
                <p className="text-slate/80 text-xl md:text-3xl font-medium leading-relaxed italic font-serif">Inspired by the Yoruba word for "arrival," Tidé signifies a transformative moment—a destination where every journey culminates in an unforgettable experience.</p>
                <p className="text-slate/60 text-base md:text-lg leading-relaxed font-sans font-light">Our founders envisioned more than a hotel; they dreamed of a sanctuary that shatters conventions, seamlessly blending high-end luxury with authentic warmth.</p>
                <div className="pt-4">
                   <Link to="/about" className="inline-flex items-center space-x-3 text-terracotta font-black uppercase tracking-[0.2em] text-xs hover:translate-x-2 transition-transform duration-500">
                     <span>Learn More About Our Compass</span>
                     <ArrowRight size={16} />
                   </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 reveal-on-scroll sr-left" style={{ transitionDelay: '400ms' }}>
               <div className="relative img-hover-zoom rounded-sm shadow-3xl overflow-hidden">
                  <img src="https://i.ibb.co/hJrp4k8V/Recption-14.jpg" alt="Tidé Reception" className="w-full h-full object-cover aspect-[4/5]" />
                  <div className="absolute inset-0 bg-slate/10 hover:bg-transparent transition-colors duration-700"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ivory py-20 md:py-32 text-center px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-terracotta"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="reveal-on-scroll sr-up">
            <h2 className="font-serif italic font-light mb-8 md:mb-12 text-5xl md:text-8xl text-slate leading-[0.9] tracking-tighter">Start your next <br className="md:hidden"/>chapter with us</h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 reveal-on-scroll sr-up" style={{ transitionDelay: '400ms' }}>
            <Link to="/booking" className="bg-slate text-white px-10 md:px-14 py-5 md:py-6 font-accent text-[11px] md:text-[12px] font-black hover:bg-terracotta transition-all duration-500 shadow-2xl tracking-[0.3em] md:tracking-[0.4em] text-center transform hover:scale-105 active:scale-95">SECURE YOUR STAY</Link>
            <Link to="/staff" className="bg-white text-slate border-2 border-slate px-10 md:px-14 py-5 md:py-6 font-accent text-[11px] md:text-[12px] font-black hover:bg-slate hover:text-white transition-all duration-500 shadow-2xl tracking-[0.3em] md:tracking-[0.4em] text-center transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3"><Lock size={16} /><span>STAFF PORTAL</span></Link>
            <Link to="/about" className="bg-transparent border-2 border-slate text-slate px-10 md:px-14 py-5 md:py-6 font-accent text-[11px] md:text-[12px] font-black hover:bg-slate hover:text-white transition-all duration-500 tracking-[0.3em] md:tracking-[0.4em] text-center transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-3"><Compass size={16} /><span>OUR COMPASS</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
