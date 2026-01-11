
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Leaf, Heart, ArrowRight, Instagram } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const galleryImages = [
    { 
      url: "https://i.ibb.co/DfHG7z0M/Exterior-Nighttime.jpg", 
      size: "col-span-2 row-span-2",
      link: "https://www.instagram.com/tidehotelsandresorts"
    },
    { 
      url: "https://i.ibb.co/hJrp4k8V/Recption-14.jpg", 
      size: "col-span-1 row-span-1",
      link: "https://www.tiktok.com/@tidehotelsandresorts"
    },
    { 
      url: "https://i.ibb.co/q30Gv19B/Exterior-view1.jpg", 
      size: "col-span-1 row-span-2",
      link: "https://www.instagram.com/tidehotelsandresorts"
    },
    { 
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800", 
      size: "col-span-1 row-span-1",
      link: "https://www.instagram.com/tidehotelsandresorts"
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-48">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/DfHG7z0M/Exterior-Nighttime.jpg" 
            alt="Tidé Hotels Exterior Night" 
            className="w-full h-full object-cover brightness-[0.35] animate-slow-zoom" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 w-full max-w-7xl mx-auto">
          <div className="mb-6 md:mb-10">
            <span className="font-accent uppercase tracking-[1em] text-[11px] md:text-sm block font-black animate-slide-up opacity-0 text-shadow-premium" style={{ animationDelay: '0.2s' }}>
              Refining the Art of Stay
            </span>
          </div>
          <div className="mb-12 md:mb-16">
            <h1 className="hero-title font-serif animate-slide-up opacity-0 text-shadow-premium pb-4" style={{ animationDelay: '0.4s' }}>
              Tidé <span className="italic font-light opacity-90">Resorts</span>
            </h1>
          </div>
          <div className="mb-16 md:mb-24">
            <p className="text-xl md:text-3xl lg:text-4xl font-medium text-pearl max-w-4xl mx-auto leading-relaxed animate-slide-up opacity-0 break-text text-shadow-premium px-4" style={{ animationDelay: '0.6s' }}>
              Luxury boutique comfort in Abuja, where intentional design meets genuine Nigerian hospitality.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center animate-fade-in opacity-0 px-4" style={{ animationDelay: '1s' }}>
            <Link 
              to="/booking"
              className="bg-terracotta text-white px-12 md:px-16 py-5 md:py-6 font-accent uppercase tracking-[0.3em] text-[12px] md:text-[13px] font-black hover:bg-white hover:text-terracotta transition-all duration-500 shadow-2xl w-full sm:w-auto text-center"
            >
              Secure Your Suite
            </Link>
            <Link 
              to="/rooms"
              className="border-2 border-white text-white px-12 md:px-16 py-5 md:py-6 font-accent uppercase tracking-[0.3em] text-[12px] md:text-[13px] font-black hover:bg-white hover:text-slate transition-all duration-500 w-full sm:w-auto text-center backdrop-blur-sm"
            >
              Explore Collection
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-4 animate-bounce opacity-70">
          <span className="font-accent uppercase text-[10px] tracking-[0.6em] text-white font-bold">Discover</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Brand Ethos */}
      <section className="bg-ivory py-32 md:py-56 px-6 sm:px-12 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-40 items-center">
            <div className="space-y-12 md:space-y-16 reveal-on-scroll sr-right">
              <div>
                <span className="text-terracotta font-accent uppercase tracking-[0.6em] text-[13px] font-black block mb-8 border-l-4 border-terracotta pl-6">The Philosophy</span>
                <h2 className="text-5xl md:text-8xl font-serif leading-[1.1] text-slate break-text">Thoughtful luxury, <br/><span className="italic font-light">not excess.</span></h2>
              </div>
              <p className="text-slate text-2xl md:text-3xl leading-relaxed break-text font-medium opacity-90">
                At Tidé, we prioritize your peace and productivity. Our spaces are curated to foster rejuvenation for the modern traveler.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
                <div className="space-y-6 reveal-on-scroll sr-up" style={{ '--sr-delay': '0.2s' } as React.CSSProperties}>
                  <div className="flex items-center space-x-6 text-terracotta">
                    <ShieldCheck size={40} strokeWidth={1.5} />
                    <h4 className="font-accent font-black text-[12px] uppercase tracking-[0.3em]">Discreet Security</h4>
                  </div>
                  <p className="text-[17px] text-slate font-semibold leading-relaxed break-text opacity-80">Safety is the ultimate luxury. Our teams provide 24/7 protection with a sophisticated touch.</p>
                </div>
                <div className="space-y-6 reveal-on-scroll sr-up" style={{ '--sr-delay': '0.4s' } as React.CSSProperties}>
                  <div className="flex items-center space-x-6 text-terracotta">
                    <Leaf size={40} strokeWidth={1.5} />
                    <h4 className="font-accent font-black text-[12px] uppercase tracking-[0.3em]">Sustainability</h4>
                  </div>
                  <p className="text-[17px] text-slate font-semibold leading-relaxed break-text opacity-80">Eco-conscious operations that honor our environment while maintaining absolute excellence.</p>
                </div>
              </div>
            </div>
            <div className="relative reveal-on-scroll sr-left">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
                <img src="https://i.ibb.co/hJrp4k8V/Recption-14.jpg" alt="Tidé Reception Area" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="absolute -bottom-16 -left-12 md:-bottom-24 md:-left-20 w-[95%] md:w-[90%] bg-slate p-1.5 text-white shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <div className="border border-white/10 w-full h-full flex flex-col justify-center p-12 md:p-20 space-y-10">
                  <Heart size={56} className="text-terracotta fill-terracotta/20" />
                  <h3 className="text-4xl md:text-5xl font-serif italic font-light break-text">Genuine Hospitality</h3>
                  <p className="text-[17px] text-pearl font-medium tracking-wide leading-relaxed break-text opacity-80">We don't just host; we care. Every stay is a personalized experience crafted with deep intention and warmth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Promo */}
      <section className="relative py-60 md:py-80 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" 
            alt="Tidé Hotels Exterior Daytime" 
            className="w-full h-full object-cover brightness-[0.4]" 
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-6 reveal-on-scroll sr-scale">
          <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-tight break-text text-shadow-premium">Your Sanctuary in the Capital</h2>
          <p className="text-2xl md:text-4xl font-medium mb-20 text-pearl leading-relaxed break-text max-w-4xl mx-auto">
            Experience the Tidé standard: where every pillow is fluffed with care and every business meeting feels like a premium retreat.
          </p>
          <Link to="/rooms" className="inline-flex items-center space-x-6 bg-white text-slate px-16 py-7 font-accent uppercase tracking-[0.4em] text-[13px] font-black hover:bg-terracotta hover:text-white transition-all shadow-2xl group">
            <span>View Guest Rooms</span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-3" />
          </Link>
        </div>
      </section>

      {/* Moments of Tidé Gallery */}
      <section className="py-32 md:py-56 bg-ivory/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 reveal-on-scroll sr-up">
            <div className="space-y-6">
              <span className="text-terracotta font-accent uppercase tracking-[0.6em] text-[13px] font-black block">@tidehotelsandresorts</span>
              <h2 className="text-5xl md:text-8xl font-serif text-slate font-bold">Moments of Tidé</h2>
            </div>
            <div className="flex space-x-8">
              <a href="https://www.instagram.com/tidehotelsandresorts" target="_blank" rel="noopener noreferrer" className="font-accent text-[12px] uppercase tracking-[0.4em] font-black border-b-2 border-terracotta pb-3 hover:text-terracotta transition-colors">Instagram</a>
              <a href="https://www.tiktok.com/@tidehotelsandresorts" target="_blank" rel="noopener noreferrer" className="font-accent text-[12px] uppercase tracking-[0.4em] font-black border-b-2 border-terracotta pb-3 hover:text-terracotta transition-colors">TikTok</a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 min-h-[600px] md:min-h-[800px]">
            {galleryImages.map((img, i) => (
              <a 
                key={i} 
                href={img.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${img.size} overflow-hidden rounded-sm group reveal-on-scroll sr-up block relative shadow-xl`} 
                style={{ '--sr-delay': `${i * 0.15}s` } as React.CSSProperties}
              >
                <img src={img.url} alt="Gallery item" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-terracotta/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="bg-white/90 p-5 rounded-full shadow-2xl transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                     <Instagram size={32} className="text-terracotta" />
                   </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 md:py-56 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 md:mb-40 reveal-on-scroll sr-up">
            <span className="text-terracotta font-accent uppercase tracking-[0.6em] text-[13px] font-black block mb-8">Voices of Tidé</span>
            <h2 className="text-5xl md:text-8xl font-serif break-text font-bold text-slate">Guest Experiences</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-24">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className="space-y-10 md:space-y-14 reveal-on-scroll sr-up" style={{ '--sr-delay': `${i * 0.2}s` } as React.CSSProperties}>
                <div className="text-8xl md:text-9xl font-serif text-terracotta/20 leading-none h-12">“</div>
                <p className="text-3xl md:text-4xl font-serif italic text-slate leading-relaxed break-text font-medium px-2">
                  {t.content}
                </p>
                <div className="pt-12 border-t border-sand/30 flex items-center space-x-6">
                  <div className="w-16 h-1px bg-terracotta"></div>
                  <div>
                    <p className="font-accent font-black text-slate uppercase tracking-[0.3em] text-[13px] break-text">{t.name}</p>
                    <p className="text-terracotta font-accent text-[11px] uppercase tracking-[0.4em] mt-3 break-text font-black">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate py-48 md:py-64 text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-8 text-center relative z-10 reveal-on-scroll sr-up">
          <h2 className="text-6xl md:text-9xl font-serif mb-12 italic font-light leading-none">Ready to enrich <br/>your life?</h2>
          <p className="mb-20 text-pearl text-2xl md:text-4xl font-medium max-w-3xl mx-auto leading-relaxed opacity-80">
            Whether for business or pleasure, your journey to restorative hospitality begins here.
          </p>
          <Link 
            to="/booking" 
            className="inline-block bg-terracotta text-white px-20 py-8 font-accent uppercase tracking-[0.5em] text-[14px] font-black hover:bg-white hover:text-slate transition-all shadow-[0_20px_60px_-15px_rgba(140,68,17,0.5)]"
          >
            Check Direct Availability
          </Link>
        </div>
        {/* Abstract shapes */}
        <div className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] bg-terracotta opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute top-0 -left-40 w-[30rem] h-[30rem] bg-white opacity-[0.02] rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default Home;
