
import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, ExternalLink, Clock, ChefHat, Wine, GlassWater, Beer, Star } from 'lucide-react';
import { ZENZA_DRINKS } from '../constants.tsx';

const Dining: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(ZENZA_DRINKS[0].category);
  const [displayCategory, setDisplayCategory] = useState(ZENZA_DRINKS[0].category);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory || isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveCategory(category);
    
    setTimeout(() => {
      setDisplayCategory(category);
      setIsTransitioning(false);
    }, 300);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const currentItems = ZENZA_DRINKS.find(c => c.category === displayCategory)?.items || [];

  return (
    <div className="pb-12 md:pb-32">
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center justify-center py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=1920" 
            alt="Dining" 
            className="w-full h-full object-cover brightness-[0.3] scale-110" 
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto pt-20 md:pt-32">
          <div className="stagger-reveal">
            <span className="font-accent text-[9px] md:text-[11px] font-black block mb-4 md:mb-8 tracking-[0.4em] md:tracking-[0.5em] text-sand uppercase animate-fade-in">Culinary Art</span>
            <h1 className="hero-title font-serif text-white font-bold text-shadow-premium animate-slide-up">
              The Tidé <span className="italic font-light text-pearl">Kitchen</span>
            </h1>
            <p className="text-lg md:text-4xl font-serif italic text-pearl leading-relaxed max-w-3xl mx-auto text-shadow-premium px-2 animate-slide-up" style={{ animationDelay: '300ms' }}>
              "At Tidé Hotels & Resorts, we treat every meal as a restorative, soulful experience delivered to your privacy."
            </p>
          </div>
        </div>
      </section>

      {/* In-Room Dining Content */}
      <div className="content-container py-12 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">
          <div className="space-y-6 md:space-y-12 reveal-on-scroll sr-right">
            <span className="text-terracotta font-accent text-[9px] md:text-[12px] font-black block mb-2 md:mb-4 tracking-[0.3em] uppercase">Private Service</span>
            <h2 className="text-slate font-serif font-bold text-3xl md:text-5xl">Gourmet Flavors in Private Comfort</h2>
            <div className="space-y-4 md:space-y-8">
              <p className="text-slate text-lg md:text-2xl leading-relaxed font-medium">
                Our in-room dining service bridges the gap between high-end restaurant quality and the intimacy of your private suite.
              </p>
              <p className="text-slate/60 text-base md:text-xl leading-relaxed">
                From locally sourced Nigerian delicacies to international classics, every dish is prepared with seasonal ingredients and artistic flair by our culinary team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 pt-8 md:pt-12 border-t-2 border-sand/30">
              <div className="space-y-2 md:space-y-4">
                <div className="flex items-center space-x-3 md:space-x-6 text-terracotta">
                  <Clock size={24} md:size={32} />
                  <h4 className="font-accent font-black text-[9px] md:text-[11px] tracking-widest uppercase">Available 24/7</h4>
                </div>
                <p className="text-slate/70 text-xs md:text-[16px]">Midnight cravings or early breakfast, our kitchen is always ready.</p>
              </div>
              <div className="space-y-2 md:space-y-4">
                <div className="flex items-center space-x-3 md:space-x-6 text-terracotta">
                  <ChefHat size={24} md:size={32} />
                  <h4 className="font-accent font-black text-[9px] md:text-[11px] tracking-widest uppercase">Chef-Led</h4>
                </div>
                <p className="text-slate/70 text-xs md:text-[16px]">Seasonal menus inspired by global trends and our rich local heritage.</p>
              </div>
            </div>

            <div className="pt-4 md:pt-8">
              <a 
                href="https://www.jotform.com/app/253071477806562"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-4 md:space-x-8 bg-terracotta text-white px-8 md:px-16 py-4 md:py-7 font-accent text-[9px] md:text-[12px] font-black hover:bg-slate transition-all shadow-2xl tracking-[0.2em] md:tracking-[0.4em] w-full sm:w-auto uppercase"
              >
                <UtensilsCrossed size={18} md:size={24} />
                <span>Explore Food Menu</span>
                <ExternalLink size={16} md:size={20} />
              </a>
            </div>
          </div>

          <div className="relative reveal-on-scroll sr-left mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
               <div className="mt-6 md:mt-16 overflow-hidden rounded-sm shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" alt="Gourmet" className="w-full aspect-[4/5] object-cover hover:scale-110 transition-transform duration-1000" />
               </div>
               <div className="overflow-hidden rounded-sm shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800" alt="Dining" className="w-full aspect-[4/5] object-cover hover:scale-110 transition-transform duration-1000" />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zenza Bar Section */}
      <section className="bg-slate py-16 md:py-40 text-white overflow-hidden relative border-y-[1px] border-white/5">
        <div className="absolute top-0 right-0 p-10 md:p-20 opacity-[0.02] pointer-events-none rotate-12">
          <GlassWater size={600} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-24 reveal-on-scroll sr-up">
            <span className="text-terracotta font-accent text-[9px] md:text-[11px] font-black block mb-4 md:mb-6 tracking-[0.4em] uppercase">Zenith of Luxury</span>
            <h2 className="text-5xl md:text-9xl font-serif mb-4 md:mb-8 font-bold text-white leading-none">Zenza</h2>
            <p className="text-sand/70 text-base md:text-2xl font-serif italic max-w-2xl mx-auto leading-relaxed px-4">
              A meticulously curated selection of world-class spirits and rare vintages, served in an atmosphere of absolute distinction.
            </p>
          </div>

          {/* Drink Menu Tabs */}
          <div className="mb-8 md:mb-20 overflow-x-auto pb-4 no-scrollbar touch-pan-x" style={{ transitionDelay: '200ms' }}>
            <div className="flex justify-start md:justify-center space-x-6 md:space-x-12 min-w-max px-4">
              {ZENZA_DRINKS.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => handleCategoryChange(cat.category)}
                  className={`group font-accent text-[9px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-black transition-all pb-2 relative whitespace-nowrap py-2 ${
                    activeCategory === cat.category ? 'text-terracotta' : 'text-sand/40 hover:text-white'
                  }`}
                >
                  {cat.category}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-terracotta transition-all duration-500 ease-out ${activeCategory === cat.category ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-1/2'}`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Drink List - Stabilized */}
          <div className="max-w-4xl mx-auto min-h-[350px]">
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 bg-white/[0.03] backdrop-blur-md p-6 md:p-16 border border-white/10 rounded-sm shadow-3xl transition-all duration-300 ease-in-out ${
                isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {currentItems.map((item, idx) => (
                <div 
                  key={`${displayCategory}-${item.name}`}
                  className="group flex flex-wrap sm:flex-nowrap justify-between items-end border-b border-white/5 pb-4 px-1 hover:bg-white/[0.02] hover:border-terracotta/40 transition-all duration-300 animate-slide-up"
                  style={{ 
                    animationDelay: `${idx * 30}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="space-y-1 w-full sm:w-auto">
                    <h4 className="font-serif text-lg md:text-2xl font-bold group-hover:text-terracotta transition-colors leading-tight">{item.name}</h4>
                    <div className="flex items-center space-x-2 text-[6px] md:text-[7px] uppercase tracking-widest text-sand/20 font-black">
                      <Star size={6} className="fill-terracotta text-terracotta" />
                      <span>Signature Collection</span>
                    </div>
                  </div>
                  <span className="font-accent text-[10px] md:text-sm font-black text-sand/80 group-hover:text-white transition-colors mt-2 sm:mt-0">
                    {formatPrice(item.price)}
                  </span>
                </div>
              ))}
              
              <div className="md:col-span-2 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center opacity-30">
                <p className="text-sand text-[7px] md:text-[9px] uppercase tracking-[0.4em] font-black italic">
                  Private Lounge Access • Absolute Discretion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sommelier Highlight */}
      <section className="bg-ivory py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: <Wine />, title: "Vintage Vault", body: "Explore our cellar's diverse range, from approachable Carlo Rossi labels to sophisticated Nederburg selections." },
              { icon: <GlassWater />, title: "The Cognac Room", body: "A tribute to fine craftsmanship, featuring Hennessy XO and Remy Martins XO for those who appreciate intensity." },
              { icon: <Beer />, title: "Chilled Spirits", body: "Perfectly served local and international brews, including Guinness Stout and Heineken, kept at optimal temperatures." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 md:p-12 border border-sand/30 shadow-xl group hover:bg-slate hover:text-white transition-all duration-700 reveal-on-scroll sr-up" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-terracotta mb-6 group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 36, strokeWidth: 1.2 })}
                </div>
                <h4 className="font-serif text-xl md:text-3xl font-bold mb-3 italic leading-tight">{feature.title}</h4>
                <p className="text-slate/60 text-sm md:text-base leading-relaxed group-hover:text-pearl/60 font-medium transition-colors duration-500">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dining;
