
import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Facebook, MessageCircle, Phone, MapPin, Mail, Lock } from 'lucide-react';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Rooms from './pages/Rooms.tsx';
import Amenities from './pages/Amenities.tsx';
import Dining from './pages/Dining.tsx';
import Contact from './pages/Contact.tsx';
import StaffPortal from './pages/StaffPortal.tsx';
import Booking from './pages/Booking.tsx';
import { LOGO_URL } from './constants.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Compass', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Experience', path: '/experience' },
    { name: 'Dining', path: '/dining' },
    { name: 'Contact', path: '/contact' },
    { name: 'Staff Portal', path: '/staff' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-md py-1 md:py-2' : 'bg-white/95 backdrop-blur-sm py-2 md:py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10 md:h-14">
          <Link to="/" className="flex-shrink-0 transition-transform active:scale-95" onClick={closeMenu}>
            <img src={LOGO_URL} alt="Tidé Hotels" className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
          </Link>
          
          <div className="hidden xl:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-accent text-[10px] tracking-[0.2em] uppercase font-bold transition-all hover:text-terracotta relative group ${
                  location.pathname === link.path ? 'text-terracotta' : 'text-slate'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-terracotta text-white px-5 py-2 font-accent text-[10px] tracking-[0.2em] uppercase font-black hover:bg-slate hover:shadow-xl transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          <div className="xl:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-slate p-2 focus:outline-none active:scale-90 relative z-[110]" 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-ivory fixed inset-0 z-[100] animate-menu-in flex flex-col overflow-y-auto pt-safe pb-safe">
          <div className="p-4 flex justify-between items-center border-b border-sand/20 sticky top-0 bg-ivory z-10">
            <img src={LOGO_URL} alt="Tidé Hotels" className="h-7 w-auto" />
            <div className="w-10"></div> 
          </div>
          <div className="px-8 py-6 flex flex-col space-y-4 flex-grow justify-center">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                style={{ animationDelay: `${idx * 40}ms` }}
                className={`text-xl sm:text-2xl tracking-tight font-serif font-bold transition-colors animate-slide-up block ${
                  location.pathname === link.path ? 'text-terracotta' : 'text-slate'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={closeMenu}
              className="w-full bg-terracotta text-white text-center py-4 sm:py-5 font-accent text-xs tracking-widest uppercase font-black shadow-xl mt-2 animate-slide-up"
              style={{ animationDelay: '300ms' }}
            >
              Book Now
            </Link>
          </div>
          
          <div className="px-8 py-6 mt-auto border-t border-sand/10 bg-ivory/50">
             <div className="flex justify-center space-x-6">
                <a href="https://www.instagram.com/tidehotelsandresorts" className="text-slate/60 hover:text-terracotta"><Instagram size={20} /></a>
                <a href="https://api.whatsapp.com/send/?phone=2349111111314" className="text-slate/60 hover:text-terracotta"><MessageCircle size={20} /></a>
                <a href="tel:+2349111111314" className="text-slate/60 hover:text-terracotta"><Phone size={20} /></a>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate text-pearl pt-10 md:pt-16 pb-6 border-t-[4px] md:border-t-[8px] border-terracotta">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mb-8 md:mb-12">
          <div className="space-y-4">
            <img src={LOGO_URL} alt="Tidé Hotels" className="h-10 md:h-16 w-auto brightness-0 invert" />
            <p className="text-sand font-serif text-base md:text-xl leading-relaxed italic opacity-90">
              Refining the Art of Stay through intentional design and genuine Nigerian hospitality.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sand font-accent uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] font-black border-b border-white/10 pb-2">Contact Us</h4>
            <div className="space-y-3 text-sm md:text-base font-medium">
              <div className="flex items-start space-x-4">
                <MapPin size={18} className="text-terracotta flex-shrink-0 mt-1" />
                <address className="not-italic text-pearl/90">
                  <span className="block font-bold text-white mb-0.5">Tidé Hotels & Resorts</span>
                  38 S.O. Williams Street, Utako, Abuja.
                </address>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={18} className="text-terracotta flex-shrink-0" />
                <span className="text-pearl/90">+234 911 111 1314</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sand font-accent uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-[11px] font-black border-b border-white/10 pb-2">Connect</h4>
            <div className="flex flex-wrap gap-4 mb-4">
              <a href="https://www.instagram.com/tidehotelsandresorts" className="hover:text-terracotta transition-transform hover:scale-110" title="Instagram"><Instagram size={18} /></a>
              <a href="https://web.facebook.com/people/Tid%C3%A9-Hotelsandresorts/pfbid036Te83H2VyrSUEyf7S37xu5JTXPVZgwWsTsxTvVGzzSzk2AUzpDRFQ7nVNEvt5JPZl/" className="hover:text-terracotta transition-transform hover:scale-110" title="Facebook"><Facebook size={18} /></a>
              <a href="https://www.linkedin.com/company/tidé-hotels/" className="hover:text-terracotta transition-transform hover:scale-110" title="LinkedIn"><Linkedin size={18} /></a>
              <a href="https://www.tiktok.com/@tidehotelsandresorts" className="hover:text-terracotta transition-transform hover:scale-110" title="TikTok"><TikTokIcon size={18} /></a>
              <a href="https://api.whatsapp.com/send/?phone=2349111111314" className="hover:text-terracotta transition-transform hover:scale-110" title="WhatsApp"><MessageCircle size={18} /></a>
            </div>
            <Link to="/staff" className="inline-flex items-center space-x-3 font-accent text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-sand hover:text-white transition-all border border-white/10 rounded-sm px-4 py-2 w-full justify-center hover:bg-white/5">
              <Lock size={12} />
              <span>Internal Operations</span>
            </Link>
          </div>
        </div>
        <div className="pt-6 border-t border-white/5 text-center">
           <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-pearl/20 font-black">© {new Date().getFullYear()} Tidé Hotels & Resorts. Excellence as standard.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://api.whatsapp.com/send/?phone=2349111111314"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
  >
    <MessageCircle size={22} fill="currentColor" />
  </a>
);

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/experience" element={<Amenities />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/staff" element={<StaffPortal />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
}

export default App;
