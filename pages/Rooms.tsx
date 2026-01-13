
import React, { useState, useEffect } from 'react';
import { Download, Users, CheckCircle2, ChevronLeft, ChevronRight, Presentation, Monitor, Coffee, Wind, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROOMS, MEETING_ROOMS } from '../constants.tsx';

const Gallery = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group overflow-hidden rounded-sm shadow-2xl h-[350px] md:h-[500px]">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2s]" />
        </div>
      ))}
      
      {/* Navigation Buttons */}
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
        <button 
          onClick={prev}
          className="p-3 bg-black/20 backdrop-blur-md text-white hover:bg-terracotta rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next}
          className="p-3 bg-black/20 backdrop-blur-md text-white hover:bg-terracotta rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              idx === currentIndex ? 'bg-terracotta w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Rooms: React.FC = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <div className="pb-16 md:pb-32">
      {/* Hero Section - Restored with Brighter Visuals */}
      <section className="relative min-h-[65vh] md:min-h-[90vh] flex items-center justify-center py-20 md:py-32 overflow-hidden text-center bg-sand">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Suite" 
            onLoad={() => setHeroLoaded(true)}
            className={`w-full h-full object-cover brightness-[0.55] transition-all duration-1000 ease-out scale-105 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-ivory"></div>
        </div>
        
        <div className="relative z-10 px-6 w-full max-w-5xl mx-auto text-white pt-24 md:pt-32">
          <div className="stagger-reveal">
            <span className="font-accent text-[10px] md:text-[11px] font-black block mb-6 md:mb-8 tracking-[0.5em] text-sand uppercase animate-fade-in">Accommodation</span>
            <h1 className="hero-title font-serif animate-slide-up text-shadow-premium">
              Rooms & <span className="italic font-light text-pearl">Suites</span>
            </h1>
            <p className="text-lg md:text-2xl text-pearl/90 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto px-4 animate-slide-up text-shadow-premium" style={{ animationDelay: '200ms' }}>
              A collection of restorative spaces, blending intentional minimalist design with high-end luxury.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <a href="https://static.wixstatic.com/ugd/2b2af3_22b7b830a4af4853a65b109ed8d5ca3c.pdf" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white/40 text-white px-8 md:px-12 py-4 md:py-5 font-accent text-[10px] font-black hover:bg-white hover:text-slate tracking-[0.3em] uppercase text-center backdrop-blur-md">Download Album</a>
              <Link to="/booking" className="bg-terracotta text-white px-8 md:px-12 py-4 md:py-5 font-accent text-[10px] font-black hover:bg-slate tracking-[0.3em] uppercase shadow-2xl text-center transition-all hover:scale-105 active:scale-95">Personalize Stay</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Listing */}
      <div className="content-container py-16 md:py-32 space-y-32 md:space-y-48">
        {ROOMS.map((room, index) => (
          <div key={room.id} className="reveal-on-scroll sr-up">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
              <div className="w-full lg:w-[45%] space-y-8">
                <div className="flex justify-between items-end border-b border-sand/30 pb-6">
                  <div>
                    <span className="font-accent text-[8px] md:text-[9px] font-black text-terracotta tracking-widest uppercase mb-2 block">Suite Selection</span>
                    <h3 className="text-3xl md:text-6xl font-serif text-slate font-bold">{room.name}</h3>
                  </div>
                  <div className="flex items-center space-x-2 text-slate/40 font-accent text-[10px] font-bold shrink-0 pb-2">
                    <Users size={16} />
                    <span>{room.occupancy}</span>
                  </div>
                </div>
                <p className="text-slate/70 text-lg md:text-2xl leading-relaxed font-serif italic">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[10px] md:text-[11px] font-bold text-slate/60 bg-white p-8 md:p-10 border border-sand/20 shadow-xl rounded-sm">
                  {room.amenities.map(a => (
                    <div key={a} className="flex items-center space-x-3">
                      <CheckCircle2 size={14} className="text-terracotta shrink-0" />
                      <span className="tracking-[0.1em] uppercase">{a}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/booking" className="inline-flex items-center justify-center space-x-4 bg-slate text-white px-10 py-6 font-accent text-[10px] font-black hover:bg-terracotta w-full text-center shadow-2xl tracking-[0.3em] uppercase transition-all group">
                  <span>Inquire for Stay</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="w-full lg:w-[55%]">
                <div className="relative">
                  <div className="absolute -inset-4 border border-sand/20 -z-10 translate-x-4 translate-y-4"></div>
                  <Gallery images={room.gallery} />
                </div>
                <p className="mt-6 text-[8px] uppercase tracking-[0.5em] text-slate/30 font-black text-center">Touch to explore interior details</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Meeting Rooms Section */}
      <section id="meetings" className="bg-slate py-24 md:py-48 text-white overflow-hidden border-t-[8px] md:border-t-[16px] border-terracotta relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-32 reveal-on-scroll sr-up">
            <span className="text-terracotta font-accent text-[10px] md:text-[11px] font-black block mb-6 tracking-[0.5em] uppercase">Corporate Excellence</span>
            <h2 className="text-5xl md:text-9xl font-serif mb-8 font-bold text-white leading-none">Meetings <span className="italic font-light text-sand/60">& Events</span></h2>
            <div className="w-24 h-[1px] bg-terracotta mx-auto mb-10"></div>
            <p className="text-sand/70 text-lg md:text-2xl font-serif italic max-w-2xl mx-auto leading-relaxed">
              Professionalism meets architectural serenity. Our meeting spaces are designed for focus, clarity, and impactful collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {MEETING_ROOMS.map((m, idx) => (
              <div key={m.id} className="reveal-on-scroll sr-up group" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="mb-10 overflow-hidden rounded-sm shadow-3xl relative">
                  <Gallery images={m.gallery} />
                  <div className="absolute top-6 left-6 z-20">
                     <div className="flex items-center space-x-2 bg-terracotta text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest shadow-lg">
                       <Star size={10} className="fill-white" />
                       <span>Executive Class</span>
                     </div>
                  </div>
                </div>
                <div className="space-y-8 p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-6 gap-4">
                    <h4 className="font-serif text-3xl md:text-5xl font-bold group-hover:text-terracotta transition-colors">{m.name}</h4>
                    <span className="font-accent text-[10px] font-black tracking-widest text-sand/40 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                      Capacity: {m.capacity}
                    </span>
                  </div>
                  <p className="text-pearl/60 text-lg md:text-2xl font-serif italic leading-relaxed">{m.description}</p>
                  
                  <div className="grid grid-cols-2 gap-y-6 pt-4">
                    {m.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-4 text-white/50 group-hover:text-white transition-colors">
                        <div className="p-2 bg-white/5 rounded-sm">
                          {i === 0 && <Monitor size={18} />}
                          {i === 1 && <Presentation size={18} />}
                          {i === 2 && <Coffee size={18} />}
                          {i === 3 && <Wind size={18} />}
                        </div>
                        <span className="text-[10px] md:text-[12px] uppercase tracking-[0.2em] font-black">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="inline-flex items-center justify-center space-x-6 bg-white/5 border border-white/10 text-white px-10 py-6 font-accent text-[10px] font-black hover:bg-white hover:text-slate transition-all w-full tracking-[0.4em] uppercase mt-10 shadow-xl group">
                    <span>Reserve Event Space</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
