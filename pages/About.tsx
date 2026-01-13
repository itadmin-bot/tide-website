
import React, { useState } from 'react';
import { Target, Eye, Sparkles, Award, Users, Heart, Leaf, ShieldCheck, ClipboardCheck, Compass } from 'lucide-react';

const About: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden text-center bg-slate">
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
        <div className="relative z-10 px-6 w-full max-w-5xl mx-auto text-white pt-24 md:pt-32">
          <span className="font-accent text-[10px] md:text-[11px] font-black block mb-6 md:mb-8 tracking-[0.4em] md:tracking-[0.5em] text-sand animate-fade-in uppercase">Our Identity</span>
          <h1 className="hero-title font-serif">The Tidé <span className="italic font-light text-sand/70">Compass</span></h1>
          <p className="text-xl md:text-3xl font-serif italic text-pearl/90 leading-relaxed max-w-4xl mx-auto animate-slide-up">
            "Redefining Hospitality for Lasting Legacies through Exceptional Service and Inclusive Experiences."
          </p>
        </div>
      </section>

      {/* Origin & Ambition */}
      <div className="content-container px-6 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-24 items-start mb-24 md:mb-48">
          <div className="lg:col-span-6 space-y-8 md:space-y-12 reveal-on-scroll sr-right">
            <span className="text-terracotta font-accent text-[10px] md:text-[11px] font-black tracking-[0.3em] md:tracking-[0.4em] block uppercase">The Genesis</span>
            <h2 className="text-slate font-serif font-bold text-5xl md:text-7xl leading-[1.1]">The Art of <br className="hidden md:block"/><span className="italic font-light">Arrival</span></h2>
            <div className="space-y-6 md:space-y-8 text-slate/80 text-lg md:text-xl leading-relaxed font-medium font-serif">
              <p>
                The name <strong>"Tidé,"</strong> inspired by the Yoruba word for <strong>"arrival,"</strong> signifies a transformative moment—a destination where every journey culminates in an unforgettable experience.
              </p>
              <p>
                Our founders envisioned more than a hotel; they dreamed of a <strong>sanctuary</strong>. A place that shatters conventions, seamlessly blending high-end luxury with the authentic warmth and intimacy of a boutique setting.
              </p>
              <p>
                They sought to build a legacy where exquisite comfort is not a privilege, but a promise available to everyone. At THR (Tidé Hotels & Resorts), we take pride in crafting experiences rich with authenticity.
              </p>
              <p className="text-slate/60 italic border-l-2 border-terracotta pl-6 py-2 bg-ivory/30">
                Our guests don't just stay with us; they immerse themselves in a narrative where every detail—from the tranquility of our spaces to the delights of our cuisine—is thoughtfully designed to foster relaxation and create lasting memories.
              </p>
              <p className="font-bold text-slate">
                We stand at the forefront of hospitality, daring to be different. Our story is still being written, and we invite you to help us write the next chapter.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6 reveal-on-scroll sr-left mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute top-0 right-0 w-full h-full border border-terracotta/10 translate-x-4 translate-y-4 -z-10"></div>
              <div className="aspect-[4/5] bg-slate overflow-hidden rounded-sm shadow-2xl">
                <img src="https://i.ibb.co/hJrp4k8V/Recption-14.jpg" alt="Tidé Reception" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-slate p-8 md:p-12 text-white shadow-2xl max-w-sm hidden md:block">
                <Compass className="text-terracotta mb-4" size={32} />
                <h4 className="font-serif text-2xl italic font-light mb-2">Empowerment</h4>
                <p className="text-xs text-pearl/50 leading-relaxed uppercase tracking-widest font-black">
                  THR is dedicated to empowering every team member to make a meaningful impact in the hospitality realm.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* THR's TENETS Section */}
        <div className="bg-slate p-10 md:p-24 shadow-3xl text-white mb-24 md:mb-48 border-t-[10px] border-terracotta">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-sand font-accent text-[10px] md:text-[11px] font-black tracking-[0.5em] block mb-4 uppercase">THR'S TENETS</span>
            <h2 className="font-serif italic font-light text-4xl md:text-6xl text-white">Our Brand Promise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24 border-b border-white/10 pb-24">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-terracotta mb-4">
                <Target size={32} />
                <h4 className="font-accent font-black tracking-widest text-xs uppercase text-sand">Our Mission</h4>
              </div>
              <p className="text-xl md:text-2xl font-serif leading-relaxed italic opacity-90">
                To build a lasting legacy by redefining the art of hospitality, blending luxury with affordability to provide an exquisite experience.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-terracotta mb-4">
                <Eye size={32} />
                <h4 className="font-accent font-black tracking-widest text-xs uppercase text-sand">Our Vision</h4>
              </div>
              <p className="text-xl md:text-2xl font-serif leading-relaxed italic opacity-90">
                To lead the hospitality industry by creating unforgettable experiences and enduring legacies, while making exquisite comfort accessible to all.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            <div className="text-center">
              <h4 className="font-accent font-black tracking-[0.4em] text-xs uppercase text-terracotta mb-12">Our Values (IQG-LLW)</h4>
              <p className="text-pearl/40 text-[10px] uppercase tracking-widest mb-10 max-w-xl mx-auto">
                These values are integral to our brand's identity and help us in defining our personality and purpose.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                {[
                  { icon: <Sparkles />, label: "Innovative" },
                  { icon: <Target />, label: "Growth Focused" },
                  { icon: <ShieldCheck />, label: "Quality Driven" },
                  { icon: <Eye />, label: "Luxury Curators" },
                  { icon: <Users />, label: "Loyal" },
                  { icon: <Heart />, label: "Welcoming" }
                ].map((val, idx) => (
                  <div key={idx} className="flex flex-col items-center space-y-4 group">
                    <div className="text-sand group-hover:text-terracotta transition-colors duration-500 transform group-hover:scale-110">
                      {React.cloneElement(val.icon as React.ReactElement, { size: 36, strokeWidth: 1.5 })}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-pearl/60">{val.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-8 md:p-12 border border-white/5 text-center mt-12">
              <p className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-black text-sand/40 mb-10">Core Service Standard</p>
              <p className="text-white font-serif italic text-lg md:text-2xl mb-12">
                "While serving every guest and in all dealings, I will exude:"
              </p>
              <div className="flex flex-wrap justify-center gap-6 md:gap-16">
                {["Professionalism", "Responsibility", "Integrity", "Shared Accountability", "Service Mindset"].map((pledge, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="font-serif italic text-lg md:text-xl text-pearl/80">{pledge}</span>
                    <div className="w-8 h-[1px] bg-terracotta/30 mt-2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brand Taglines */}
        <div className="mb-24 md:mb-48">
          <div className="bg-ivory p-12 md:p-24 shadow-inner relative overflow-hidden rounded-sm">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Compass size={200} />
            </div>
            <h4 className="text-center font-accent text-[10px] md:text-[11px] font-black tracking-[0.5em] uppercase text-terracotta mb-16">THR's TAGLINES</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                "WHERE BOLD MEETS ELEGANCE",
                "Affordable Elegance, Unforgettable Stays",
                "Where Every Stay Tells a Unique Story",
                "Luxury within reach",
                "Serenity crafted with a bold touch",
                "Curating unique moments, redefining comfort",
                "Experience the art of innovative luxury"
              ].map((tagline, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 border border-sand flex items-center justify-center shrink-0 group-hover:bg-terracotta group-hover:border-terracotta transition-all">
                    <span className="text-terracotta font-serif text-lg font-bold group-hover:text-white">{i + 1}</span>
                  </div>
                  <p className="font-serif text-xl md:text-2xl italic text-slate/80 leading-snug">{tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transformative Moments Section */}
        <div className="mb-24 md:mb-48">
           <div className="text-center mb-16 md:mb-24">
            <span className="text-terracotta font-accent text-[10px] md:text-[11px] font-black tracking-[0.5em] block mb-4 uppercase">Service Architecture</span>
            <h2 className="font-serif italic font-light text-4xl md:text-6xl text-slate">Transformative Moments</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6 reveal-on-scroll sr-up">
              <div className="w-20 h-20 bg-ivory rounded-full flex items-center justify-center mx-auto text-terracotta border border-sand">
                <span className="font-serif text-4xl">1</span>
              </div>
              <h3 className="font-serif text-2xl font-bold">Innovative Design</h3>
              <p className="text-slate/60 leading-relaxed font-serif italic">
                Our hotels integrate unique design elements that provide a luxurious yet intimate setting for guests.
              </p>
            </div>
            <div className="text-center space-y-6 reveal-on-scroll sr-up" style={{ animationDelay: '200ms' }}>
              <div className="w-20 h-20 bg-ivory rounded-full flex items-center justify-center mx-auto text-terracotta border border-sand">
                <span className="font-serif text-4xl">2</span>
              </div>
              <h3 className="font-serif text-2xl font-bold">Tailored Experiences</h3>
              <p className="text-slate/60 leading-relaxed font-serif italic">
                We pride ourselves on offering personalized services that cater to the specific needs and desires of each guest.
              </p>
            </div>
            <div className="text-center space-y-6 reveal-on-scroll sr-up" style={{ animationDelay: '400ms' }}>
              <div className="w-20 h-20 bg-ivory rounded-full flex items-center justify-center mx-auto text-terracotta border border-sand">
                <span className="font-serif text-4xl">3</span>
              </div>
              <h3 className="font-serif text-2xl font-bold">Focus on Wellbeing</h3>
              <p className="text-slate/60 leading-relaxed font-serif italic">
                Creating rejuvenating environments that promote relaxation and wellbeing is at the core of our hospitality philosophy.
              </p>
            </div>
          </div>
        </div>

        {/* Building Legacies Section (Page 8 of PDF) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="reveal-on-scroll sr-right">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-slate mb-12 leading-tight">Building lasting legacies with <br/><span className="italic font-light text-terracotta">every guest's rejuvenating experience</span></h2>
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate text-white flex items-center justify-center rounded-full shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-accent font-black text-xs tracking-widest uppercase mb-2">Commitment to Excellence</h4>
                  <p className="text-slate/60 text-lg">We continuously strive for perfection in service, ensuring every detail reflects our dedication to quality.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate text-white flex items-center justify-center rounded-full shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-accent font-black text-xs tracking-widest uppercase mb-2">Legacy of Comfort</h4>
                  <p className="text-slate/60 text-lg">Our mission is to provide a legacy of exquisite comfort, making each stay a transformative experience.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate text-white flex items-center justify-center rounded-full shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-accent font-black text-xs tracking-widest uppercase mb-2">Cultural Narrative</h4>
                  <p className="text-slate/60 text-lg">Guests immerse themselves in a rich narrative crafted from our commitment to ethical and sustainable hospitality.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-slate text-white flex items-center justify-center rounded-full shrink-0 font-bold">4</div>
                <div>
                  <h4 className="font-accent font-black text-xs tracking-widest uppercase mb-2">Community Engagement</h4>
                  <p className="text-slate/60 text-lg">We aim to build strong, lasting relationships with guests, making them feel integral to our evolving story.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal-on-scroll sr-left relative">
            <div className="absolute inset-0 bg-ivory -rotate-3 rounded-sm -z-10 shadow-inner"></div>
            <div className="bg-white p-12 md:p-20 shadow-3xl border border-sand/30">
              <h3 className="text-3xl md:text-5xl font-serif italic font-light mb-12 border-b border-sand/20 pb-8 leading-tight text-slate">Exceptional <br/>Experiences</h3>
              <p className="text-slate/60 italic font-serif text-lg leading-relaxed mb-10">
                "Available for all, not just the privileged few. We focus on the essential details that foster well-being, peak productivity, and absolute serenity."
              </p>
              <ul className="space-y-6 text-sm font-bold uppercase tracking-widest text-terracotta">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span>Accessible Luxury for All</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span>Expertly Crafted Packages</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span>Commitment to Sustainability</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                  <span>Integrating Wellness and Comfort</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Outro */}
      <section className="bg-slate py-20 md:py-32 text-white overflow-hidden relative mt-24">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif italic font-light text-3xl md:text-5xl mb-6 md:mb-10 text-sand">Inclusive Luxury defined for everyone</h2>
          <p className="text-lg md:text-2xl text-pearl/70 leading-relaxed font-light font-serif italic px-4">
            "At THR, we redefine what luxury means, ensuring it is inclusive and accessible to a broader audience. Join us in writing the next chapter of our story."
          </p>
        </div>
        <div className="absolute top-1/2 left-0 w-full text-[10rem] md:text-[15rem] font-serif text-white/[0.01] -translate-y-1/2 select-none pointer-events-none whitespace-nowrap hidden md:block uppercase">
          Tidé Hotels & Resorts • Sanctuary • Arrival
        </div>
      </section>
    </div>
  );
};

export default About;
