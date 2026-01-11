
import React from 'react';
import { UtensilsCrossed, ExternalLink, Clock, ChefHat } from 'lucide-react';

const Dining: React.FC = () => {
  return (
    <div className="pb-32">
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=1920" 
            alt="Dining" 
            className="w-full h-full object-cover brightness-[0.3] scale-105" 
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 w-full max-w-6xl mx-auto">
          <div className="stagger-reveal">
            <h1 className="hero-title font-serif mb-10 leading-none text-white font-bold text-shadow-premium">
              In-Room <span className="italic font-light text-pearl">Dining</span>
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl font-bold text-pearl leading-relaxed break-text max-w-4xl mx-auto text-shadow-premium px-4">
              Exquisite culinary experiences delivered directly to your sanctuary.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="space-y-10 md:space-y-12 reveal-on-scroll sr-right">
            <span className="text-terracotta uppercase tracking-[0.4em] text-[12px] font-black block">Culinary Excellence</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight text-slate font-bold break-text">Gourmet Flavors in Private Comfort</h2>
            <p className="text-slate text-xl md:text-2xl leading-relaxed font-bold break-text">
              Our in-room dining service bridges the gap between high-end restaurant quality and the intimacy of your private suite.
            </p>
            <p className="text-slate/80 text-lg leading-relaxed font-medium break-text">
              From locally sourced Nigerian delicacies to international classics, every dish is prepared with seasonal ingredients and artistic flair, ensuring every bite is a celebration of flavor.
            </p>
            
            <div className="space-y-8 md:space-y-10 pt-8 md:pt-10 border-t-2 border-sand/30">
              <div className="flex items-start space-x-6 md:space-x-8 group">
                <div className="bg-ivory p-4 md:p-5 rounded-full text-terracotta border-2 border-sand/30 group-hover:bg-terracotta group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
                  <Clock size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-black text-slate text-lg md:text-xl mb-2 uppercase tracking-widest">Available 24/7</h4>
                  <p className="text-slate text-[16px] md:text-[17px] font-bold break-text">Midnight cravings or early breakfast, our kitchen is always ready to serve you.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 md:space-x-8 group">
                <div className="bg-ivory p-4 md:p-5 rounded-full text-terracotta border-2 border-sand/30 group-hover:bg-terracotta group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
                  <ChefHat size={32} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-black text-slate text-lg md:text-xl mb-2 uppercase tracking-widest">Chef-Led Innovation</h4>
                  <p className="text-slate text-[16px] md:text-[17px] font-bold break-text">Seasonal menus inspired by both global trends and our rich local heritage.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 md:pt-12">
              <a 
                href="https://www.jotform.com/app/253071477806562"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-6 bg-terracotta text-white px-10 md:px-16 py-5 md:py-7 uppercase tracking-widest text-[14px] font-black hover:bg-slate transition-all shadow-2xl w-full sm:w-auto justify-center"
              >
                <UtensilsCrossed size={24} />
                <span>Explore Our Menu</span>
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-8 relative reveal-on-scroll sr-left">
            <div className="absolute -inset-4 md:-inset-6 border-4 border-sand/10 -z-10 rounded-sm"></div>
            <div className="overflow-hidden rounded-sm shadow-2xl mt-12 md:mt-20">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" alt="Gourmet Dish" className="w-full aspect-[4/5] object-cover hover:scale-110 transition-transform duration-1000" />
            </div>
            <div className="overflow-hidden rounded-sm shadow-2xl">
              <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800" alt="Private Dining" className="w-full aspect-[4/5] object-cover hover:scale-110 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-slate text-white py-24 md:py-48 mt-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-terracotta opacity-10 rounded-full -mr-32 md:-mr-48 -mt-32 md:-mt-48"></div>
        <div className="max-w-5xl mx-auto text-center px-8 relative z-10 reveal-on-scroll sr-up">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-12 italic leading-relaxed break-text font-light">
            "Food is an essential pillar of hospitality. We treat every meal as a restorative, soulful experience."
          </h3>
          <div className="w-24 md:w-32 h-2 bg-terracotta mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default Dining;
