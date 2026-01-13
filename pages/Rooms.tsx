
import React, { useState, useEffect } from 'react';
import { Download, Users, CheckCircle2, ChevronLeft, ChevronRight, Presentation, Monitor, Coffee, Wind, Star, ArrowRight, X, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROOMS, MEETING_ROOMS } from '../constants.tsx';

const Gallery = ({ images, name }: { images: string[], name: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  
  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <>
      <div className="relative group overflow-hidden rounded-sm shadow-2xl h-[300px] md:h-[450px] img-hover-zoom cursor-zoom-in" onClick={openLightbox}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img src={img} alt={`${name} Gallery ${idx}`} className="w-full h-full object-cover" />
          </div>
        ))}
        
        {/* Overlay with icon */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white transform scale-90 group-hover:scale-100 transition-transform duration-500">
            <Maximize2 size={24} />
          </div>
        </div>

        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
          <button onClick={prev} className="p-3 bg-black/40 backdrop-blur-md text-white hover:bg-terracotta rounded-full transition-all"><ChevronLeft size={24} /></button>
          <button onClick={next} className="p-3 bg-black/40 backdrop-blur-md text-white hover:bg-terracotta rounded-full transition-all"><ChevronRight size={24} /></button>
        </div>

        <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-10">
          {images.map((_, idx) => (
            <button key={idx} onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }} className={`w-2 h-2 rounded-full transition-all duration-700 ${idx === currentIndex ? 'bg-terracotta w-8' : 'bg-white/40'}`} />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in p-4 md:p-12">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-[210] p-2 hover:bg-white/10 rounded-full"
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center">
            {/* Nav Controls */}
            <button 
              onClick={prev}
              className="absolute left-0 md:left-4 p-4 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all z-[210]"
            >
              <ChevronLeft size={48} />
            </button>
            <button 
              onClick={next}
              className="absolute right-0 md:right-4 p-4 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all z-[210]"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image Container */}
            <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center animate-scale-in">
              <img 
                src={images[currentIndex]} 
                alt={`${name} Large View`} 
                className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
              />
              <div className="mt-8 text-center text-white">
                <span className="font-accent text-[10px] tracking-[0.4em] uppercase text-terracotta block mb-2">{name}</span>
                <p className="font-serif italic text-lg opacity-60">View {currentIndex + 1} of {images.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Rooms: React.FC = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  return (
    <div className="pb-16 md:pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[75vh] flex items-center justify-center py-16 md:py-24 overflow-hidden text-center bg-sand">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Suite" 
            onLoad={() => setHeroLoaded(true)}
            className={`w-full h-full object-cover brightness-[0.5] transition-all duration-[2000ms] ease-out scale-110 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-ivory/20"></div>
        </div>
        
        <div className="relative z-10 px-6 w-full max-w-5xl mx-auto text-white pt-16 md:pt-28">
          <div className="stagger-reveal">
            <span className="font-accent text-[10px] md:text-[12px] font-black block mb-4 md:mb-8 tracking-[0.6em] text-sand uppercase animate-fade-in">Accommodation</span>
            <h1 className="hero-title font-serif animate-slide-up text-shadow-premium">Rooms & <span className="italic font-light text-pearl">Suites</span></h1>
            <p className="text-xl md:text-3xl text-pearl/90 mb-10 md:mb-14 leading-relaxed max-w-3xl mx-auto px-4 animate-slide-up text-shadow-premium italic font-serif" style={{ animationDelay: '200ms' }}>
              "Each sanctuary is a curated blend of intentional minimalist design and absolute luxury."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center px-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <a href="https://static.wixstatic.com/ugd/2b2af3_22b7b830a4af4853a65b109ed8d5ca3c.pdf" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white/50 text-white px-10 md:px-12 py-4 md:py-5 font-accent text-[11px] font-black hover:bg-white hover:text-slate tracking-[0.4em] uppercase text-center backdrop-blur-md">Download Album</a>
              <Link to="/booking" className="bg-terracotta text-white px-10 md:px-12 py-4 md:py-5 font-accent text-[11px] font-black hover:bg-slate tracking-[0.4em] uppercase shadow-2xl text-center transition-all hover:scale-105 active:scale-95">Personalize Stay</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Listing */}
      <div className="content-container py-20 md:py-32 space-y-24 md:space-y-40">
        {ROOMS.map((room, index) => (
          <div key={room.id} className="reveal-on-scroll sr-up">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
              <div className="w-full lg:w-[45%] space-y-8">
                <div className="flex justify-between items-end border-b border-sand/40 pb-6">
                  <div>
                    <span className="font-accent text-[9px] md:text-[10px] font-black text-terracotta tracking-widest uppercase mb-2 block">Suite Selection</span>
                    <h3 className="text-3xl md:text-6xl font-serif text-slate font-bold">{room.name}</h3>
                  </div>
                  <div className="flex items-center space-x-2 text-slate/30 font-accent text-[10px] font-bold shrink-0 pb-2">
                    <Users size={16} />
                    <span>{room.occupancy}</span>
                  </div>
                </div>
                <p className="text-slate/80 text-xl md:text-2xl leading-relaxed font-serif italic">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[11px] font-black text-slate/50 bg-white p-8 md:p-12 border border-sand/30 shadow-2xl rounded-sm">
                  {room.amenities.map(a => (
                    <div key={a} className="flex items-center space-x-3 group">
                      <CheckCircle2 size={16} className="text-terracotta shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="tracking-[0.1em] uppercase group-hover:text-slate transition-colors">{a}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/booking" className="inline-flex items-center justify-center space-x-4 bg-slate text-white px-10 py-6 font-accent text-[11px] font-black hover:bg-terracotta w-full text-center shadow-3xl tracking-[0.4em] uppercase transition-all group overflow-hidden relative">
                  <span className="relative z-10">Inquire for Stay</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </Link>
              </div>

              <div className="w-full lg:w-[55%]">
                <div className="relative reveal-on-scroll sr-left" style={{ transitionDelay: '200ms' }}>
                  <div className="absolute -inset-4 border-2 border-sand/20 -z-10 translate-x-4 translate-y-4"></div>
                  <Gallery images={room.gallery} name={room.name} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Meeting Rooms Section */}
      <section id="meetings" className="bg-slate py-24 md:py-40 text-white overflow-hidden border-t-[10px] md:border-t-[15px] border-terracotta relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-28 reveal-on-scroll sr-up">
            <span className="text-terracotta font-accent text-[11px] md:text-[13px] font-black block mb-6 tracking-[0.6em] uppercase">Corporate Excellence</span>
            <h2 className="text-5xl md:text-8xl font-serif mb-8 font-bold text-white leading-none">Meetings <span className="italic font-light text-sand/60">& Events</span></h2>
            <div className="w-20 h-[1.5px] bg-terracotta mx-auto mb-10"></div>
            <p className="text-sand/70 text-xl md:text-3xl font-serif italic max-w-3xl mx-auto leading-relaxed">
              Professionalism meets architectural serenity. Our meeting spaces are designed for focus, clarity, and impactful collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
            {MEETING_ROOMS.map((m, idx) => (
              <div key={m.id} className="reveal-on-scroll sr-up group" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="mb-10 overflow-hidden rounded-sm shadow-3xl relative">
                  <Gallery images={m.gallery} name={m.name} />
                </div>
                <div className="space-y-8 p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-6 gap-4">
                    <h4 className="font-serif text-3xl md:text-5xl font-bold group-hover:text-terracotta transition-colors duration-500">{m.name}</h4>
                    <span className="font-accent text-[10px] font-black tracking-widest text-sand/40 bg-white/5 px-4 py-2 rounded-full border border-white/10">Capacity: {m.capacity}</span>
                  </div>
                  <p className="text-pearl/70 text-lg md:text-2xl font-serif italic leading-relaxed">{m.description}</p>
                  
                  <div className="grid grid-cols-2 gap-y-6 pt-4">
                    {m.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-4 text-white/40 group-hover:text-white transition-colors duration-500">
                        <div className="p-2.5 bg-white/5 rounded-sm border border-white/5 group-hover:border-terracotta/30 group-hover:bg-terracotta/5 transition-all">
                          {i === 0 && <Monitor size={20} />}
                          {i === 1 && <Presentation size={20} />}
                          {i === 2 && <Coffee size={20} />}
                          {i === 3 && <Wind size={20} />}
                        </div>
                        <span className="text-[10px] md:text-[12px] uppercase tracking-[0.3em] font-black">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="inline-flex items-center justify-center space-x-5 bg-white/5 border border-white/10 text-white px-10 py-6 font-accent text-[11px] font-black hover:bg-white hover:text-slate transition-all duration-500 w-full tracking-[0.4em] uppercase mt-10 shadow-2xl group overflow-hidden relative">
                    <span className="relative z-10">Reserve Event Space</span>
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
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
