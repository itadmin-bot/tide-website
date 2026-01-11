import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" alt="Heritage" className="w-full h-full object-cover brightness-[0.4] scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-ivory/20"></div>
        </div>
        <div className="relative z-10 px-6 w-full max-w-5xl mx-auto text-white pt-24 md:pt-32">
          <span className="font-accent text-[10px] md:text-[11px] font-black block mb-6 md:mb-8 tracking-[0.4em] md:tracking-[0.5em] text-sand animate-fade-in uppercase">Our Heritage</span>
          <h1 className="hero-title font-serif">Philosophy of <span className="italic font-light text-sand/70">Intention</span></h1>
          <p className="text-xl md:text-3xl font-serif italic text-pearl/90 leading-relaxed max-w-3xl mx-auto animate-slide-up">
            "At Tidé Hotels & Resorts, we believe luxury isn't about excess; it's about the space to breathe and the sophistication of design."
          </p>
        </div>
      </section>

      {/* Main Story */}
      <div className="content-container px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="lg:col-span-6 space-y-8 md:space-y-10 reveal-on-scroll sr-right">
            <span className="text-terracotta font-accent text-[10px] md:text-[11px] font-black tracking-[0.3em] md:tracking-[0.4em] block uppercase">The Genesis</span>
            <h2 className="text-slate font-serif font-bold text-4xl md:text-5xl leading-[1.1]">A Sanctuary in <br className="hidden md:block"/>the Capital</h2>
            <div className="space-y-6 md:space-y-8 text-slate/80 text-lg md:text-xl leading-relaxed font-medium">
              <p>
                Located in the heart of Abuja, Tidé Hotels & Resorts was born out of a desire to create a restorative escape for both leisure and business travelers.
              </p>
              <p>
                Every corner of our boutique property is designed with purpose—from the sustainable materials used in our furniture to the curated lighting that mimics natural circadian rhythms.
              </p>
              <p className="text-slate/60 text-base md:text-lg border-l-2 border-sand pl-6 md:pl-8 py-2 italic">
                We believe that hospitality is a tool for enrichment. By providing an environment of calm and focus, we empower our guests to return to their world rejuvenated.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 reveal-on-scroll sr-left">
            <div className="relative pt-6 md:pt-12">
              <div className="absolute top-0 right-0 w-2/3 h-full bg-sand/10 -z-10 translate-x-6 md:translate-x-12"></div>
              <img src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" alt="Sanctuary" className="rounded-sm shadow-2xl w-full h-[400px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        </div>

        {/* The Pillars */}
        <div className="mt-24 md:mt-32 pt-16 md:pt-24 border-t border-sand/30">
          <div className="text-center mb-16 md:mb-24 px-4">
            <span className="text-terracotta font-accent text-[10px] md:text-[11px] font-black tracking-[0.4em] md:tracking-[0.5em] block mb-4 uppercase">The Foundation</span>
            <h2 className="text-slate font-serif italic font-light text-3xl md:text-4xl">The Pillars of Tidé Hotels & Resorts</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Mission */}
            <div className="group relative bg-slate p-10 md:p-14 overflow-hidden shadow-2xl reveal-on-scroll sr-up" style={{ transitionDelay: '100ms' }}>
              <div className="absolute -top-6 -right-6 text-[8rem] md:text-[10rem] font-serif text-white/5 select-none pointer-events-none group-hover:text-terracotta/10 transition-colors duration-700">01</div>
              <div className="relative z-10 space-y-8">
                <div className="w-10 h-[2px] bg-terracotta"></div>
                <h3 className="font-accent text-[10px] md:text-[12px] font-black text-sand tracking-[0.4em] md:tracking-[0.5em] uppercase">Our Mission</h3>
                <p className="text-pearl/90 text-xl md:text-2xl font-serif leading-tight italic font-light">
                  "Prioritizing guest well-being and environmental stewardship through operational excellence."
                </p>
                <p className="text-pearl/60 text-sm md:text-base leading-relaxed font-sans">
                  We provide an unparalleled boutique experience that empowers the modern traveler.
                </p>
              </div>
            </div>

            {/* Card 2: Values */}
            <div className="group relative bg-sand p-10 md:p-14 overflow-hidden shadow-2xl reveal-on-scroll sr-up border border-terracotta/10" style={{ transitionDelay: '200ms' }}>
              <div className="absolute -top-6 -right-6 text-[8rem] md:text-[10rem] font-serif text-slate/5 select-none pointer-events-none group-hover:text-terracotta/10 transition-colors duration-700">02</div>
              <div className="relative z-10 space-y-8">
                <div className="w-10 h-[2px] bg-slate"></div>
                <h3 className="font-accent text-[10px] md:text-[12px] font-black text-slate tracking-[0.4em] md:tracking-[0.5em] uppercase">Our Values</h3>
                <ul className="space-y-4 md:space-y-6">
                  {["Intentional Detail", "Genuine Connection", "Sustainable Luxury"].map((value, idx) => (
                    <li key={idx} className="flex items-center space-x-3 border-b border-slate/10 pb-3 last:border-0 last:pb-0">
                      <div className="w-1.5 h-1.5 bg-terracotta rotate-45"></div>
                      <span className="text-slate text-lg md:text-xl font-serif font-bold italic">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3: Sustainability */}
            <div className="group relative bg-white p-10 md:p-14 overflow-hidden shadow-2xl reveal-on-scroll sr-up border-t-[6px] md:border-t-[8px] border-olive" style={{ transitionDelay: '300ms' }}>
              <div className="absolute -top-6 -right-6 text-[8rem] md:text-[10rem] font-serif text-olive/5 select-none pointer-events-none group-hover:text-terracotta/10 transition-colors duration-700">03</div>
              <div className="relative z-10 space-y-8">
                <div className="w-10 h-[2px] bg-olive"></div>
                <h3 className="font-accent text-[10px] md:text-[12px] font-black text-olive tracking-[0.4em] md:tracking-[0.5em] uppercase">Sustainability</h3>
                <p className="text-slate/80 text-lg md:text-xl leading-relaxed font-medium italic font-serif">
                  "Aggressive waste reduction and local sourcing to ensure our footprint is as minimal as our aesthetic."
                </p>
                <div className="pt-2">
                   <div className="inline-block border border-olive/30 px-3 py-1.5 rounded-full">
                     <span className="text-[9px] font-black text-olive tracking-widest uppercase">Eco-Certified Approach</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <section className="bg-slate py-20 md:py-32 text-white overflow-hidden relative mt-16 md:mt-24">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif italic font-light text-3xl md:text-5xl mb-6 md:mb-8">Crafting Unforgettable Moments</h2>
          <p className="text-lg md:text-xl text-pearl/70 leading-relaxed font-medium px-4">
            Tidé Hotels & Resorts isn't just a place to stay—it's a commitment to enriching your life through restorative hospitality and the pursuit of operational excellence.
          </p>
        </div>
        <div className="absolute top-1/2 left-0 w-full text-[10rem] md:text-[15rem] font-serif text-white/[0.02] -translate-y-1/2 select-none pointer-events-none whitespace-nowrap hidden md:block">
          AUTHENTIC LUXURY • TIDE HOTELS • RESTORATIVE STAY
        </div>
      </section>
    </div>
  );
};

export default About;