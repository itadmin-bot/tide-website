import React from 'react';
import { UtensilsCrossed, ExternalLink, Clock, ChefHat } from 'lucide-react';

const Dining: React.FC = () => {
  return (
    <div className="pb-16 md:pb-32">
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=1920" 
            alt="Dining" 
            className="w-full h-full object-cover brightness-[0.3] scale-110" 
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto pt-24 md:pt-32">
          <div className="stagger-reveal">
            <span className="font-accent text-[10px] md:text-[11px] font-black block mb-6 md:mb-8 tracking-[0.4em] md:tracking-[0.5em] text-sand uppercase">Culinary Art</span>
            <h1 className="hero-title font-serif text-white font-bold text-shadow-premium">
              In-Room <span className="italic font-light text-pearl">Dining</span>
            </h1>
            <p className="text-xl md:text-4xl font-serif italic text-pearl leading-relaxed max-w-3xl mx-auto text-shadow-premium px-4">
              "At Tidé Hotels & Resorts, we treat every meal as a restorative, soulful experience delivered to your privacy."
            </p>
          </div>
        </div>
      </section>

      <div className="content-container px-6 py-16 md:py-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="space-y-8 md:space-y-12 reveal-on-scroll sr-right">
            <span className="text-terracotta font-accent text-[10px] md:text-[12px] font-black block mb-4 tracking-[0.3em] md:tracking-[0.4em] uppercase">Excellence</span>
            <h2 className="text-slate font-serif font-bold text-4xl md:text-5xl">Gourmet Flavors in Private Comfort</h2>
            <div className="space-y-6 md:space-y-8">
              <p className="text-slate text-xl md:text-2xl leading-relaxed font-medium">
                Our in-room dining service bridges the gap between high-end restaurant quality and the intimacy of your private suite.
              </p>
              <p className="text-slate/60 text-lg md:text-xl leading-relaxed">
                From locally sourced Nigerian delicacies to international classics, every dish is prepared with seasonal ingredients and artistic flair by the Tidé Hotels & Resorts culinary team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 pt-10 md:pt-12 border-t-2 border-sand/30">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-4 md:space-x-6 text-terracotta">
                  <Clock size={28} md:size={32} />
                  <h4 className="font-accent font-black text-[10px] md:text-[11px] tracking-widest uppercase">Available 24/7</h4>
                </div>
                <p className="text-slate/70 text-sm md:text-[16px]">Midnight cravings or early breakfast, our kitchen is always ready.</p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-4 md:space-x-6 text-terracotta">
                  <ChefHat size={28} md:size={32} />
                  <h4 className="font-accent font-black text-[10px] md:text-[11px] tracking-widest uppercase">Chef-Led</h4>
                </div>
                <p className="text-slate/70 text-sm md:text-[16px]">Seasonal menus inspired by global trends and our rich local heritage.</p>
              </div>
            </div>

            <div className="pt-6 md:pt-8">
              <a 
                href="https://www.jotform.com/app/253071477806562"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-4 md:space-x-8 bg-terracotta text-white px-10 md:px-16 py-5 md:py-7 font-accent text-[10px] md:text-[12px] font-black hover:bg-slate transition-all shadow-2xl tracking-[0.3em] md:tracking-[0.4em] w-full sm:w-auto uppercase"
              >
                <UtensilsCrossed size={20} md:size={24} />
                <span>Explore Menu</span>
                <ExternalLink size={18} md:size={20} />
              </a>
            </div>
          </div>

          <div className="relative reveal-on-scroll sr-left">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
               <div className="mt-8 md:mt-16 overflow-hidden rounded-sm shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" alt="Gourmet" className="w-full aspect-[4/5] object-cover hover:scale-110 transition-transform duration-1000" />
               </div>
               <div className="overflow-hidden rounded-sm shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800" alt="Dining" className="w-full aspect-[4/5] object-cover hover:scale-110 transition-transform duration-1000" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;