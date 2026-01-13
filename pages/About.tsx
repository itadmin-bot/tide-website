
import React, { useState } from 'react';
import { Target, Eye, Sparkles, Award, Users, Heart, Leaf, ShieldCheck, ClipboardCheck, Compass } from 'lucide-react';

const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="pb-10">
      {/* Hero */}
      <section className="relative h-[55vh] md:h-[70vh] flex items-center justify-center overflow-hidden text-center bg-slate">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/q30Gv19B/Exterior-view1.jpg" 
            alt="Compass" 
            className={`w-full h-full object-cover brightness-[0.4] scale-110 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-ivory/20"></div>
        </div>
        <div className="relative z-10 px-6 w-full max-w-5xl mx-auto text-white pt-16 md:pt-24">
          <span className="font-accent text-[10px] md:text-[11px] font-black block mb-4 md:mb-6 tracking-[0.4em] md:tracking-[0.5em] text-sand animate-fade-in uppercase">Our Identity</span>
          <h1 className="hero-title font-serif">The Tidé <span className="italic font-light text-sand/70">Compass</span></h1>
          <p className="text-lg md:text-2xl font-serif italic text-pearl/90 leading-relaxed max-w-4xl mx-auto animate-slide-up">
            "Redefining Hospitality for Lasting Legacies through Exceptional Service and Inclusive Experiences."
          </p>
        </div>
      </section>

      {/* Origin & Ambition */}
      <div className="content-container px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start mb-16 md:mb-24">
          <div className="lg:col-span-6 space-y-6 md:space-y-8 reveal-on-scroll sr-right">
            <span className="text-terracotta font-accent text-[10px] md:text-[11px] font-black tracking-[0.3em] md:tracking-[0.4em] block uppercase">The Genesis</span>
            <h2 className="text-slate font-serif font-bold text-4xl md:text-6xl leading-[1.1]">The Art of <br className="hidden md:block"/><span className="italic font-light">Arrival</span></h2>
            <div className="space-y-4 md:space-y-6 text-slate/80 text-lg md:text-xl leading-relaxed font-medium font-serif">
              <p>
                The name <strong>"Tidé,"</strong> inspired by the Yoruba word for <strong>"arrival,"</strong> signifies a transformative moment—a destination where every journey culminates in an unforgettable experience.
              </p>
              <p>
                Our founders envisioned more than a hotel; they dreamed of a <strong>sanctuary</strong>. A place that shatters conventions, seamlessly blending high-end luxury with the authentic warmth and intimacy of a boutique setting.
              </p>
              <p>
                They sought to build a legacy where exquisite comfort is not a privilege, but a promise available to everyone. At THR (Tidé Hotels & Resorts), we take pride in crafting experiences rich with authenticity.
              </p>
              <p className="text-slate/60 italic border-l-2 border-terracotta pl-6 py-1.5 bg-ivory/30">
                Our guests don't just stay with us; they immerse themselves in a narrative where every detail—from the tranquility of our spaces to the delights of our cuisine—is thoughtfully designed to foster relaxation and create lasting memories.
              </p>
              <p className="font-bold text-slate">
                We stand at the forefront of hospitality, daring to be different. Our story is still being written, and we invite you to help us write the next chapter.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 reveal-on-scroll sr-left mt-8 lg:mt-0">
            <div className="relative">
              <div className="absolute top-0 right-0 w-full h-full border border-terracotta/10 translate-x-4 translate-y-4 -z-10"></div>
              <div className="aspect-[4/5] bg-slate overflow-hidden rounded-sm shadow-2xl">
                <img src="https://i.ibb.co/hJrp4k8V/Recption-14.jpg" alt="Tidé Reception" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate p-6 md:p-10 text-white shadow-2xl max-w-sm hidden md:block">
                <Compass className="text-terracotta mb-3" size={28} />
                <h4 className="font-serif text-xl italic font-light mb-1.5">Empowerment</h4>
                <p className="text-[10px] text-pearl/50 leading-relaxed uppercase tracking-widest font-black">
                  THR is dedicated to empowering every team member to make a meaningful impact in the hospitality realm.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* THR's TENETS Section */}
        <div className="bg-slate p-8 md:p-16 shadow-3xl text-white mb-16 md:mb-24 border-t-[8px] border-terracotta">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-sand font-accent text-[10px] md:text-[11px] font-black tracking-[0.5em] block mb-3 uppercase">THR'S TENETS</span>
            <h2 className="font-serif italic font-light text-3xl md:text-5xl text-white">Our Brand Promise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-16 border-b border-white/10 pb-16">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-terracotta mb-2">
                <Target size={28} />
                <h4 className="font-accent font-black tracking-widest text-[10px] uppercase text-sand">Our Mission</h4>
              </div>
              <p className="text-lg md:text-xl font-serif leading-relaxed italic opacity-90">
                To build a lasting legacy by redefining the art of hospitality, blending luxury with affordability to provide an exquisite experience.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-terracotta mb-2">
                <Eye size={28} />
                <h4 className="font-accent font-black tracking-widest text-[10px] uppercase text-sand">Our Vision</h4>
              </div>
              <p className="text-lg md:text-xl font-serif leading-relaxed italic opacity-90">
                To lead the hospitality industry by creating unforgettable experiences and enduring legacies, while making exquisite comfort accessible to all.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="text-center">
              <h4 className="font-accent font-black tracking-[0.4em] text-[10px] uppercase text-terracotta mb-8">Our Values (IQG-LLW)</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                {[
                  { icon: <Sparkles />, label: "Innovative" },
                  { icon: <Target />, label: "Growth Focused" },
                  { icon: <ShieldCheck />, label: "Quality Driven" },
                  { icon: <Eye />, label: "Luxury Curators" },
                  { icon: <Users />, label: "Loyal" },
                  { icon: <Heart />, label: "Welcoming" }
                ].map((val, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-3 group">
                    <div className="text-sand group-hover:text-terracotta transition-colors duration-500 transform group-hover:scale-110">
                      {React.cloneElement(val.icon as React.ReactElement, { size: 30, strokeWidth: 1.5 })}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-pearl/60">{val.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-6 md:p-10 border border-white/5 text-center mt-8">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-black text-sand/40 mb-6">Core Service Standard</p>
              <p className="text-white font-serif italic text-base md:text-xl mb-8">
                "While serving every guest and in all dealings, I will exude:"
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                {["Professionalism", "Responsibility", "Integrity", "Accountability", "Service Mindset"].map((pledge, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="font-serif italic text-base md:text-lg text-pearl/80">{pledge}</span>
                    <div className="w-6 h-[1px] bg-terracotta/30 mt-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brand Taglines */}
        <div className="mb-16 md:mb-24">
          <div className="bg-ivory p-8 md:p-16 shadow-inner relative overflow-hidden rounded-sm">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <Compass size={150} />
            </div>
            <h4 className="text-center font-accent text-[10px] md:text-[11px] font-black tracking-[0.5em] uppercase text-terracotta mb-10">THR's TAGLINES</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "WHERE BOLD MEETS ELEGANCE",
                "Affordable Elegance, Unforgettable Stays",
                "Where Every Stay Tells a Unique Story",
                "Luxury within reach",
                "Serenity crafted with a bold touch",
                "Curating unique moments, redefining comfort",
                "Experience the art of innovative luxury"
              ].map((tagline, i) => (
                <div key={i} className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 border border-sand flex items-center justify-center shrink-0 group-hover:bg-terracotta group-hover:border-terracotta transition-all">
                    <span className="text-terracotta font-serif text-base font-bold group-hover:text-white">{i + 1}</span>
                  </div>
                  <p className="font-serif text-lg md:text-xl italic text-slate/80 leading-snug">{tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transformative Moments Section */}
        <div className="mb-16 md:mb-24">
           <div className="text-center mb-10 md:mb-16">
            <span className="text-terracotta font-accent text-[10px] md:text-[11px] font-black tracking-[0.5em] block mb-3 uppercase">Service Architecture</span>
            <h2 className="font-serif italic font-light text-3xl md:text-5xl text-slate">Transformative Moments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 reveal-on-scroll sr-up">
              <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center mx-auto text-terracotta border border-sand">
                <span className="font-serif text-3xl">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold">Innovative Design</h3>
              <p className="text-slate/60 leading-relaxed font-serif italic text-sm">
                Our hotels integrate unique design elements that provide a luxurious yet intimate setting for guests.
              </p>
            </div>
            <div className="text-center space-y-4 reveal-on-scroll sr-up" style={{ animationDelay: '150ms' }}>
              <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center mx-auto text-terracotta border border-sand">
                <span className="font-serif text-3xl">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold">Tailored Experiences</h3>
              <p className="text-slate/60 leading-relaxed font-serif italic text-sm">
                We pride ourselves on offering personalized services that cater to the specific needs and desires of each guest.
              </p>
            </div>
            <div className="text-center space-y-4 reveal-on-scroll sr-up" style={{ animationDelay: '300ms' }}>
              <div className="w-16 h-16 bg-ivory rounded-full flex items-center justify-center mx-auto text-terracotta border border-sand">
                <span className="font-serif text-3xl">3</span>
              </div>
              <h3 className="font-serif text-xl font-bold">Focus on Wellbeing</h3>
              <p className="text-slate/60 leading-relaxed font-serif italic text-sm">
                Creating rejuvenating environments that promote relaxation and wellbeing is at the core of our hospitality philosophy.
              </p>
            </div>
          </div>
        </div>

        {/* Building Legacies Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="reveal-on-scroll sr-right">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate mb-8 leading-tight">Building lasting legacies with <br/><span className="italic font-light text-terracotta">every guest experience</span></h2>
            <div className="space-y-8">
              {[
                { n: "1", t: "Commitment to Excellence", d: "We continuously strive for perfection in service details." },
                { n: "2", t: "Legacy of Comfort", d: "Our mission is to provide a legacy of exquisite comfort." },
                { n: "3", t: "Cultural Narrative", d: "Guests immerse themselves in a rich narrative of hospitality." },
                { n: "4", t: "Community Engagement", d: "We aim to build strong, lasting relationships with guests." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-slate text-white flex items-center justify-center rounded-full shrink-0 font-bold text-sm">{item.n}</div>
                  <div>
                    <h4 className="font-accent font-black text-[10px] tracking-widest uppercase mb-1">{item.t}</h4>
                    <p className="text-slate/60 text-base">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-on-scroll sr-left relative">
            <div className="absolute inset-0 bg-ivory -rotate-3 rounded-sm -z-10 shadow-inner"></div>
            <div className="bg-white p-8 md:p-14 shadow-3xl border border-sand/30">
              <h3 className="text-2xl md:text-4xl font-serif italic font-light mb-8 border-b border-sand/20 pb-6 leading-tight text-slate">Exceptional <br/>Experiences</h3>
              <p className="text-slate/60 italic font-serif text-base leading-relaxed mb-8">
                "Available for all, not just the privileged few. We focus on the essential details that foster well-being and absolute serenity."
              </p>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-terracotta">
                {["Accessible Luxury for All", "Expertly Crafted Packages", "Commitment to Sustainability", "Wellness and Comfort"].map((li, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-terracotta rounded-full"></div>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Outro */}
      <section className="bg-slate py-16 md:py-24 text-white overflow-hidden relative mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif italic font-light text-2xl md:text-4xl mb-6 text-sand">Inclusive Luxury defined for everyone</h2>
          <p className="text-base md:text-xl text-pearl/70 leading-relaxed font-light font-serif italic px-4">
            "At THR, we redefine what luxury means, ensuring it is inclusive and accessible to a broader audience. Join us in writing the next chapter of our story."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
