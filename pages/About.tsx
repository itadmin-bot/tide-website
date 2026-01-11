
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-16">
      {/* Hero - Full Screen Immersive */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" alt="Heritage" className="w-full h-full object-cover brightness-[0.4] scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-ivory"></div>
        </div>
        <div className="relative z-10 px-6 w-full max-w-5xl mx-auto text-white">
          <span className="font-accent text-[12px] font-black block mb-6 tracking-[0.6em] text-sand animate-fade-in">Our Heritage</span>
          <h1 className="hero-title font-serif">Philosophy of <span className="italic font-light text-sand/70">Intention</span></h1>
          <p className="text-2xl md:text-3xl font-serif italic text-pearl/90 leading-relaxed content-measure animate-slide-up">
            "At Tidé Hotels & Resorts, we believe luxury isn't about excess; it's about the space to breathe and the sophistication of design."
          </p>
        </div>
      </section>

      {/* Main Story - Editorial Layout */}
      <div className="content-container px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6 space-y-10 reveal-on-scroll sr-right">
            <span className="text-terracotta font-accent text-[11px] font-black tracking-[0.4em] block">The Genesis</span>
            <h2 className="text-slate font-serif font-bold leading-[1.1]">A Sanctuary in <br/>the Capital</h2>
            <div className="space-y-8 text-slate/80 text-xl leading-relaxed font-medium">
              <p>
                Located in the heart of Abuja, Tidé Hotels & Resorts was born out of a desire to create a restorative escape for both leisure and business travelers.
              </p>
              <p>
                Every corner of our boutique property is designed with purpose—from the sustainable materials used in our furniture to the curated lighting that mimics natural circadian rhythms.
              </p>
              <p className="text-slate/60 text-lg border-l-2 border-sand pl-8 py-2 italic">
                We believe that hospitality is a tool for enrichment. By providing an environment of calm and focus, we empower our guests to return to their world rejuvenated.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 reveal-on-scroll sr-left">
            <div className="relative pt-12">
              <div className="absolute top-0 right-0 w-2/3 h-full bg-sand/10 -z-10 translate-x-12"></div>
              <img src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" alt="Sanctuary" className="rounded-sm shadow-2xl w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        </div>

        {/* The Pillars - Redesigned to be dense and "designed" */}
        <div className="mt-32 pt-24 border-t border-sand/30">
          <div className="text-center mb-20">
            <span className="text-terracotta font-accent text-[11px] font-black tracking-[0.5em] block mb-4 uppercase">The Foundation</span>
            <h2 className="text-slate font-serif italic font-light">The Pillars of Tidé Hotels & Resorts</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-sand/30 bg-white shadow-xl overflow-hidden rounded-sm">
            {/* Mission */}
            <div className="p-12 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-sand/20 hover:bg-ivory/50 transition-colors group">
              <div className="space-y-8">
                <div className="text-5xl font-serif text-terracotta/20 group-hover:text-terracotta/40 transition-colors">01</div>
                <h3 className="font-accent text-[12px] font-black text-slate tracking-[0.4em] uppercase">Our Mission</h3>
                <p className="text-slate/80 text-xl leading-relaxed font-medium">
                  Providing an unparalleled boutique experience prioritizing guest well-being and environmental stewardship through absolute operational excellence.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="p-12 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-sand/20 bg-ivory/30 group">
              <div className="space-y-8">
                <div className="text-5xl font-serif text-terracotta/20 group-hover:text-terracotta/40 transition-colors">02</div>
                <h3 className="font-accent text-[12px] font-black text-slate tracking-[0.4em] uppercase">Our Values</h3>
                <ul className="space-y-5">
                  {["Intentional Detail", "Genuine Connection", "Sustainable Luxury"].map((value, idx) => (
                    <li key={idx} className="flex items-center space-x-4">
                      <div className="w-1.5 h-1.5 bg-terracotta rotate-45"></div>
                      <span className="text-slate text-xl font-bold italic">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sustainability */}
            <div className="p-12 md:p-16 flex flex-col justify-between hover:bg-ivory/50 transition-colors group">
              <div className="space-y-8">
                <div className="text-5xl font-serif text-terracotta/20 group-hover:text-terracotta/40 transition-colors">03</div>
                <h3 className="font-accent text-[12px] font-black text-slate tracking-[0.4em] uppercase">Sustainability</h3>
                <p className="text-slate/80 text-xl leading-relaxed font-medium">
                  We are committed to aggressive waste reduction and local sourcing to ensure our environmental footprint is as minimal as our aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Section to fill space and add depth */}
      <section className="bg-slate py-24 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif italic font-light text-4xl md:text-5xl mb-8">Crafting Unforgettable Moments</h2>
          <p className="text-xl text-pearl/70 leading-relaxed font-medium">
            Tidé Hotels & Resorts isn't just a place to stay—it's a commitment to enriching your life through restorative hospitality and the pursuit of operational excellence.
          </p>
        </div>
        <div className="absolute top-1/2 left-0 w-full text-[15rem] font-serif text-white/[0.02] -translate-y-1/2 select-none pointer-events-none whitespace-nowrap">
          AUTHENTIC LUXURY • TIDE HOTELS • RESTORATIVE STAY
        </div>
      </section>
    </div>
  );
};

export default About;
