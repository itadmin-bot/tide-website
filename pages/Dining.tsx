
import React, { useState, useMemo } from 'react';
import { UtensilsCrossed, ExternalLink, Clock, ChefHat, Search, X, Star } from 'lucide-react';
import { ZENZA_DRINKS } from '../constants.tsx';

const Dining: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(ZENZA_DRINKS[0].category);
  const [displayCategory, setDisplayCategory] = useState(ZENZA_DRINKS[0].category);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory || isTransitioning) return;
    setIsTransitioning(true);
    setActiveCategory(category);
    setSearchQuery(''); // Reset search when changing category
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

  // Filter items based on category or search query
  const filteredItems = useMemo(() => {
    if (searchQuery.trim()) {
      // Global search across all categories if searching
      const allItems = ZENZA_DRINKS.flatMap(cat => 
        cat.items.map(item => ({ ...item, category: cat.category }))
      );
      return allItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Category-based view
    return ZENZA_DRINKS.find(c => c.category === displayCategory)?.items || [];
  }, [displayCategory, searchQuery]);

  return (
    <div className="pb-10 md:pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-center justify-center py-12 md:py-20 overflow-hidden bg-slate">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1592633312328-831e670ca395?auto=format&fit=crop&q=80&w=1920" 
            alt="In-Room Dining" 
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover brightness-[0.35] transition-all duration-1000 ease-out scale-105 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-ivory/10"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl mx-auto pt-12 md:pt-20">
          <div className="stagger-reveal">
            <span className="font-accent text-[9px] md:text-[11px] font-black block mb-3 md:mb-6 tracking-[0.5em] text-sand uppercase animate-fade-in">Culinary Art</span>
            <h1 className="hero-title font-serif text-white font-bold text-shadow-premium animate-slide-up">The Tidé <span className="italic font-light text-pearl">Kitchen</span></h1>
            <p className="text-base md:text-3xl font-serif italic text-pearl leading-relaxed max-w-3xl mx-auto text-shadow-premium px-2 animate-slide-up" style={{ animationDelay: '300ms' }}>
              "At Tidé Hotels & Resorts, we treat every meal as a restorative, soulful experience delivered to your privacy."
            </p>
          </div>
        </div>
      </section>

      {/* In-Room Dining Content */}
      <div className="content-container py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div className="space-y-4 md:space-y-8 reveal-on-scroll sr-right">
            <span className="text-terracotta font-accent text-[9px] md:text-[11px] font-black block mb-2 tracking-[0.3em] uppercase">Private Service</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate">Gourmet Flavors in Private Comfort</h2>
            <div className="space-y-3 md:space-y-5">
              <p className="text-slate text-lg md:text-xl leading-relaxed font-medium">Our in-room dining service bridges high-end quality and private suite intimacy.</p>
              <p className="text-slate/60 text-sm md:text-lg leading-relaxed">Locally sourced Nigerian delicacies and international classics prepared with seasonal ingredients by our culinary team.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-sand/30">
              <div className="space-y-1.5 md:space-y-3">
                <div className="flex items-center space-x-3 text-terracotta"><Clock size={20} md:size={26} /><h4 className="font-accent font-black text-[9px] md:text-[10px] tracking-widest uppercase">Available 24/7</h4></div>
                <p className="text-slate/70 text-[13px] md:text-[15px]">Always ready for midnight cravings or early breakfast.</p>
              </div>
              <div className="space-y-1.5 md:space-y-3">
                <div className="flex items-center space-x-3 text-terracotta"><ChefHat size={20} md:size={26} /><h4 className="font-accent font-black text-[9px] md:text-[10px] tracking-widest uppercase">Chef-Led</h4></div>
                <p className="text-slate/70 text-[13px] md:text-[15px]">Seasonal menus inspired by rich local heritage.</p>
              </div>
            </div>

            <div className="pt-4 md:pt-6">
              <a href="https://www.jotform.com/app/253071477806562" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-4 md:space-x-6 bg-terracotta text-white px-8 md:px-12 py-4 md:py-6 font-accent text-[9px] md:text-[11px] font-black hover:bg-slate transition-all shadow-2xl tracking-[0.3em] w-full sm:w-auto uppercase hover:scale-105 transform">
                <UtensilsCrossed size={16} md:size={22} /><span>Explore Food Menu</span><ExternalLink size={14} md:size={18} />
              </a>
            </div>
          </div>

          <div className="relative reveal-on-scroll sr-left mt-6 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
               <div className="mt-4 md:mt-10 overflow-hidden rounded-sm shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" alt="Gourmet" className="w-full aspect-[4/5] object-cover" />
               </div>
               <div className="overflow-hidden rounded-sm shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=800" alt="Dining" className="w-full aspect-[4/5] object-cover" />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zenza Bar Section */}
      <section className="bg-slate py-12 md:py-24 text-white overflow-hidden relative border-y-[1px] border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-8 md:mb-12 reveal-on-scroll sr-up">
            <span className="text-terracotta font-accent text-[9px] md:text-[11px] font-black block mb-3 tracking-[0.4em] uppercase">Zenith of Luxury</span>
            <h2 className="text-4xl md:text-8xl font-serif mb-3 font-bold text-white leading-none">Zenza</h2>
            <p className="text-sand/70 text-base md:text-xl font-serif italic max-w-2xl mx-auto leading-relaxed px-4">
              A curated selection of world-class spirits served in an atmosphere of absolute distinction.
            </p>
          </div>

          {/* Search Bar - Brand Styling */}
          <div className="max-w-md mx-auto mb-8 reveal-on-scroll sr-up" style={{ transitionDelay: '200ms' }}>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={16} className={`transition-colors duration-300 ${searchQuery ? 'text-terracotta' : 'text-sand/40'}`} />
              </div>
              <input 
                type="text" 
                placeholder="Find your spirit..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 text-white rounded-full py-3.5 pl-12 pr-12 outline-none focus:bg-white/[0.08] focus:border-terracotta/50 transition-all font-serif italic text-base placeholder:text-sand/20"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-sand/40 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-[8px] uppercase tracking-widest text-center mt-3 text-terracotta font-black animate-fade-in">Searching across all collections</p>
            )}
          </div>

          {/* Category Tabs - Only show if not searching */}
          {!searchQuery && (
            <div className="mb-6 md:mb-12 overflow-x-auto pb-2 no-scrollbar touch-pan-x">
              <div className="flex justify-start md:justify-center space-x-5 md:space-x-10 min-w-max px-4">
                {ZENZA_DRINKS.map((cat) => (
                  <button
                    key={cat.category}
                    onClick={() => handleCategoryChange(cat.category)}
                    className={`font-accent text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-black transition-all pb-1.5 relative whitespace-nowrap py-1 ${
                      activeCategory === cat.category ? 'text-terracotta' : 'text-sand/40 hover:text-white'
                    }`}
                  >
                    {cat.category}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-terracotta transition-all duration-500 ease-out ${activeCategory === cat.category ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="max-w-4xl mx-auto min-h-[300px]">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 bg-white/[0.02] backdrop-blur-md p-6 md:p-12 border border-white/10 rounded-sm shadow-3xl transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => (
                  <div key={`${item.name}-${idx}`} className="group flex justify-between items-end border-b border-white/5 pb-3 px-1 hover:border-terracotta/40 transition-all animate-slide-up" style={{ animationDelay: `${idx * 20}ms`, animationFillMode: 'both' }}>
                    <div className="space-y-0.5">
                      <h4 className="font-serif text-base md:text-xl font-bold leading-tight">{item.name}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 text-[6px] uppercase tracking-widest text-sand/20 font-black">
                          <Star size={6} className="fill-terracotta text-terracotta" /><span>Signature</span>
                        </div>
                        {searchQuery && 'category' in item && (
                          <span className="text-[6px] uppercase tracking-widest text-terracotta/60 font-black border border-terracotta/20 px-1 rounded-sm">{(item as any).category}</span>
                        )}
                      </div>
                    </div>
                    <span className="font-accent text-[10px] md:text-sm font-black text-sand/80">{formatPrice(item.price)}</span>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center space-y-4 animate-fade-in">
                  <div className="text-sand/20"><Search size={48} className="mx-auto opacity-20" /></div>
                  <p className="font-serif italic text-xl text-sand/40">No spirits found matching "{searchQuery}"</p>
                  <button onClick={() => setSearchQuery('')} className="text-[9px] font-black uppercase tracking-widest text-terracotta border-b border-terracotta/30 pb-1">Reset Search</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dining;
