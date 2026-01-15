
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen) {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'Escape') closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <>
      <div className="relative group overflow-hidden rounded-sm shadow-2xl h-[300px] md:h-[480px] cursor-zoom-in" onClick={openLightbox}>
        {/* Carousel Container */}
        <div 
          className="flex h-full transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="w-full h-full flex-shrink-0 relative overflow-hidden">
              <img 
                src={img} 
                alt={`${name} Gallery ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" 
              />
            </div>
          ))}
        </div>
        
        {/* Overlay with expand icon */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
          <div className="bg-white/30 backdrop-blur-lg p-5 rounded-full text-white transform scale-90 group-hover:scale-100 transition-all duration-500 border border-white/20 shadow-2xl">
            <Maximize2 size={24} />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
          <button 
            onClick={prev} 
            className="p-3 bg-white/95 backdrop-blur-md text-slate hover:bg-terracotta hover:text-white rounded-full transition-all shadow-xl pointer-events-auto transform -translate-x-4 group-hover:translate-x-0"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next} 
            className="p-3 bg-white/95 backdrop-blur-md text-slate hover:bg-terracotta hover:text-white rounded-full transition-all shadow-xl pointer-events-auto transform translate-x-4 group-hover:translate-x-0"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2.5 z-10">
          {images.map((_, idx) => (
            <button 
              key={idx} 
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }} 
              className={`h-1.5 rounded-full transition-all duration-500 border border-white/20 ${idx === currentIndex ? 'bg-terracotta w-10 shadow-[0_0_10px_rgba(140,68,17,0.5)]' : 'bg-white/40 w-1.5'}`} 
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-fade-in">
          <button 
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-all z-[210] p-3 hover:bg-white/10 rounded-full group"
            aria-label="Close Lightbox"
          >
            <X size={36} className="group-hover:rotate-90 transition-transform duration-500" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
            {/* Nav Controls */}
            <button 
              onClick={prev}
              className="absolute left-4 md:left-8 p-6 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all z-[210] hidden sm:block"
            >
              <ChevronLeft size={56} />
            </button>
            <button 
              onClick={next}
              className="absolute right-4 md:right-8 p-6 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all z-[210] hidden sm:block"
            >
              <ChevronRight size={56} />
            </button>

            {/* Image Viewport */}
            <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center animate-scale-in">
              <div className="relative group/lb w-full h-full flex items-center justify-center">
                <img 
                  src={images[currentIndex]} 
                  alt={`${name} Large View`} 
                  className="max-w-full max-h-[80vh] object-contain shadow-[0_40px_100px_rgba(0,0,0,0.8)] rounded-sm select-none"
                />
              </div>
              
              <div className="mt-10 text-center animate-slide-up" style={{ animationDelay: '400ms' }}>
                <span className="font-accent text-[11px] tracking-[0.5em] uppercase text-terracotta block mb-3 font-black">{name} Collection</span>
                <div className="flex items-center justify-center space-x-6">
                  <div className="h-[1px] w-12 bg-white/10"></div>
                  <p className="font-serif italic text-xl text-white/80">Image {currentIndex + 1} of {images.length}</p>
                  <div className="h-[1px] w-12 bg-white/10"></div>
                </div>
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
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center justify-center py-20 overflow-hidden text-center bg-slate">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Suite Collection" 
            onLoad={() => setHeroLoaded(true)}
            className={`w-full h-full object-cover brightness-[0.4] transition-all duration-[3000ms] ease-out scale-110 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-ivory/10"></div>
        </div>
        
        <div className="relative z-10 px-6 w-full max-w-6xl mx-auto text-white pt-24">
          <div className="stagger-reveal">
            <span className="font-accent text-[11px] md:text-[13px] font-black block mb-6 md:mb-10 tracking-[0.7em] text-sand uppercase animate-fade-in">Private Residences</span>
            <h1 className="hero-title font-serif animate-slide-up text-shadow-premium">Rooms & <span className="italic font-light text-pearl">Suites</span></h1>
            <p className="text-xl md:text-3xl text-pearl/90 mb-12 md:mb-16 leading-relaxed max-w-4xl mx-auto px-4 animate-slide-up text-shadow-premium italic font-serif" style={{ animationDelay: '200ms' }}>
              "Meticulously curated sanctuaries where bold architectural lines meet the softest embrace of luxury."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center px-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <a href="https://static.wixstatic.com/ugd/2b2af3_22b7b830a4af4853a65b109ed8d5ca3c.pdf" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white/50 text-white px-12 py-5 font-accent text-[11px] font-black hover:bg-white hover:text-slate tracking-[0.4em] uppercase text-center backdrop-blur-md shadow-2xl transition-all">Download Portfolio</a>
              <Link to="/booking" className="bg-terracotta text-white px-12 py-5 font-accent text-[11px] font-black hover:bg-slate tracking-[0.4em] uppercase shadow-2xl text-center transition-all hover:scale-105 active:scale-95">Personalize Stay</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Listing */}
      <div className="content-container py-24 md:py-40 space-y-32 md:space-y-52">
        {ROOMS.map((room, index) => (
          <div key={room.id} className="reveal-on-scroll sr-up">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 md:gap-28 items-center`}>
              <div className="w-full lg:w-[45%] space-y-10">
                <div className="flex justify-between items-end border-b border-sand/40 pb-8">
                  <div>
                    <span className="font-accent text-[10px] md:text-[11px] font-black text-terracotta tracking-widest uppercase mb-3 block">Boutique Selection</span>
                    <h3 className="text-4xl md:text-7xl font-serif text-slate font-bold">{room.name}</h3>
                  </div>
                  <div className="flex items-center space-x-2 text-slate/30 font-accent text-[11px] font-bold shrink-0 pb-3">
                    <Users size={18} />
                    <span>{room.occupancy}</span>
                  </div>
                </div>
                <p className="text-slate/80 text-2xl md:text-3xl leading-relaxed font-serif italic">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-[12px] font-black text-slate/50 bg-white p-10 md:p-14 border border-sand/30 shadow-3xl rounded-sm group">
                  {room.amenities.map(a => (
                    <div key={a} className="flex items-center space-x-4 group/item">
                      <CheckCircle2 size={18} className="text-terracotta shrink-0 group-hover/item:scale-125 transition-transform duration-500" />
                      <span className="tracking-[0.1em] uppercase group-hover/item:text-slate transition-colors">{a}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/booking" className="inline-flex items-center justify-center space-x-5 bg-slate text-white px-12 py-7 font-accent text-[11px] font-black hover:bg-terracotta w-full text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] tracking-[0.4em] uppercase transition-all group overflow-hidden relative">
                  <span className="relative z-10">Inquire for Stay</span>
                  <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
                </Link>
              </div>

              <div className="w-full lg:w-[55%]">
                <div className="relative reveal-on-scroll sr-left" style={{ transitionDelay: '200ms' }}>
                  <div className="absolute -inset-6 border-2 border-sand/15 -z-10 translate-x-6 translate-y-6 rounded-sm"></div>
                  <Gallery images={room.gallery} name={room.name} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Meeting Rooms Section */}
      <section id="meetings" className="bg-slate py-32 md:py-48 text-white overflow-hidden border-t-[12px] md:border-t-[20px] border-terracotta relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 md:mb-32 reveal-on-scroll sr-up">
            <span className="text-terracotta font-accent text-[12px] md:text-[14px] font-black block mb-8 tracking-[0.7em] uppercase">Corporate Excellence</span>
            <h2 className="text-6xl md:text-9xl font-serif mb-10 font-bold text-white leading-none">Meetings <span className="italic font-light text-sand/60">& Events</span></h2>
            <div className="w-24 h-[1.5px] bg-terracotta mx-auto mb-12"></div>
            <p className="text-sand/70 text-2xl md:text-4xl font-serif italic max-w-4xl mx-auto leading-relaxed">
              "Where absolute professionalism meets the architectural serenity required for peak strategic impact."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40">
            {MEETING_ROOMS.map((m, idx) => (
              <div key={m.id} className="reveal-on-scroll sr-up group" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="mb-12 overflow-hidden rounded-sm shadow-3xl relative">
                  <Gallery images={m.gallery} name={m.name} />
                </div>
                <div className="space-y-10 p-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-8 gap-6">
                    <h4 className="font-serif text-4xl md:text-6xl font-bold group-hover:text-terracotta transition-colors duration-700">{m.name}</h4>
                    <span className="font-accent text-[11px] font-black tracking-widest text-sand/40 bg-white/5 px-5 py-2.5 rounded-full border border-white/10">Capacity: {m.capacity}</span>
                  </div>
                  <p className="text-pearl/70 text-xl md:text-3xl font-serif italic leading-relaxed">{m.description}</p>
                  
                  <div className="grid grid-cols-2 gap-y-8 pt-6">
                    {m.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-5 text-white/40 group-hover:text-white transition-colors duration-700">
                        <div className="p-3 bg-white/5 rounded-sm border border-white/5 group-hover:border-terracotta/40 group-hover:bg-terracotta/5 transition-all shadow-lg">
                          {i === 0 && <Monitor size={24} />}
                          {i === 1 && <Presentation size={24} />}
                          {i === 2 && <Coffee size={24} />}
                          {i === 3 && <Wind size={24} />}
                        </div>
                        <span className="text-[11px] md:text-[13px] uppercase tracking-[0.4em] font-black">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="inline-flex items-center justify-center space-x-6 bg-white/5 border border-white/10 text-white px-12 py-7 font-accent text-[11px] font-black hover:bg-white hover:text-slate transition-all duration-700 w-full tracking-[0.5em] uppercase mt-12 shadow-2xl group overflow-hidden relative">
                    <span className="relative z-10">Reserve Event Space</span>
                    <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
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
