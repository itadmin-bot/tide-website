
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" 
            alt="Tidé Hotels Daytime Exterior" 
            className="w-full h-full object-cover brightness-[0.35] scale-105" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 w-full max-w-6xl mx-auto">
          <div className="stagger-reveal">
            <span className="text-sand font-accent uppercase tracking-[0.4em] text-[11px] md:text-[13px] font-black block mb-8">Our Heritage</span>
            <h1 className="hero-title font-serif mb-10 leading-none text-white font-bold text-shadow-premium">
              Philosophy of <span className="italic font-light text-pearl">Intention</span>
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl font-serif italic font-medium text-pearl leading-relaxed break-text max-w-4xl mx-auto text-shadow-premium px-4">
              "At Tidé, we believe luxury isn't about excess; it's about the space to breathe and the sophistication of design."
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="space-y-10 reveal-on-scroll sr-right">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate leading-tight">A Sanctuary in the Capital</h2>
            <p className="text-slate text-xl leading-relaxed font-medium break-text">
              Located in the heart of Abuja, Tidé Hotels & Resorts was born out of a desire to create a restorative escape for both leisure and business travelers. We recognized that modern travel often demands high performance, leaving little room for rejuvenation.
            </p>
            <p className="text-slate text-xl leading-relaxed font-medium break-text">
              Every corner of our boutique property is designed with purpose—from the sustainable materials used in our furniture to the curated lighting that mimics the natural rhythms of the day. Our goal is to enrich lives through hospitality that heals and inspires.
            </p>
          </div>
          <div className="relative group reveal-on-scroll sr-left">
            <div className="absolute inset-0 bg-terracotta/10 rounded-sm group-hover:bg-transparent transition-colors duration-500"></div>
            <img 
              src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" 
              alt="Tidé Hotels Daytime Exterior" 
              className="rounded-sm shadow-2xl w-full h-[600px] object-cover" 
            />
          </div>
        </div>

        <div className="bg-slate -mx-6 sm:-mx-10 lg:-mx-12 px-6 sm:px-10 lg:px-12 py-32 mb-40 shadow-inner">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="bg-white/5 p-8 border border-white/10 reveal-on-scroll sr-up" style={{ '--sr-delay': '0s' } as React.CSSProperties}>
                <h3 className="text-sand font-accent uppercase tracking-[0.3em] text-[12px] font-black mb-6 border-b border-white/10 pb-4">Our Mission</h3>
                <p className="text-white text-[17px] leading-relaxed font-medium break-text">To provide an unparalleled boutique experience that prioritizes guest well-being and environmental stewardship through operational excellence.</p>
              </div>
              <div className="bg-white/5 p-8 border border-white/10 reveal-on-scroll sr-up" style={{ '--sr-delay': '0.2s' } as React.CSSProperties}>
                <h3 className="text-sand font-accent uppercase tracking-[0.3em] text-[12px] font-black mb-6 border-b border-white/10 pb-4">Our Values</h3>
                <ul className="space-y-4 text-white text-[17px] font-bold">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full"></span>
                    <span>Intentional detail</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full"></span>
                    <span>Genuine human connection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full"></span>
                    <span>Sustainable luxury</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-terracotta rounded-full"></span>
                    <span>Operational transparency</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 p-8 border border-white/10 reveal-on-scroll sr-up" style={{ '--sr-delay': '0.4s' } as React.CSSProperties}>
                <h3 className="text-sand font-accent uppercase tracking-[0.3em] text-[12px] font-black mb-6 border-b border-white/10 pb-4">Sustainability</h3>
                <p className="text-white text-[17px] leading-relaxed font-medium break-text">We are committed to reducing our carbon footprint through eco-conscious practices, local sourcing, and aggressive waste reduction programs.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-serif mb-16 text-slate reveal-on-scroll sr-up">Experience the Tidé Standard</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="w-full md:w-[45%] lg:w-1/3 group reveal-on-scroll sr-right">
               <div className="overflow-hidden rounded-sm mb-6 shadow-xl">
                 <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800" alt="About" className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
               </div>
               <p className="font-accent text-[12px] uppercase tracking-[0.4em] font-black text-slate group-hover:text-terracotta transition-colors">Thoughtful Service</p>
            </div>
            <div className="w-full md:w-[45%] lg:w-1/3 group reveal-on-scroll sr-left">
               <div className="overflow-hidden rounded-sm mb-6 shadow-xl">
                 <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800" alt="About" className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" />
               </div>
               <p className="font-accent text-[12px] uppercase tracking-[0.4em] font-black text-slate group-hover:text-terracotta transition-colors">Restorative Space</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
