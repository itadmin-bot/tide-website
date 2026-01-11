
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
    // Accessibility: prevent scrolling on HTML as well for some mobile browsers
    document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Experience', path: '/experience' },
    { name: 'Dining', path: '/dining' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 transition-transform hover:scale-105 active:scale-95" onClick={closeMenu}>
            <img src={LOGO_URL} alt="Tidé Hotels" className="h-8 md:h-12 w-auto" />
          </Link>
          
          <div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-accent text-[11px] tracking-[0.25em] uppercase font-bold transition-all hover:text-terracotta relative group ${
                  location.pathname === link.path ? 'text-terracotta' : 'text-slate'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-[1.5px] bg-terracotta transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-terracotta text-white px-8 py-3 font-accent text-[11px] tracking-[0.2em] uppercase font-black hover:bg-slate hover:shadow-xl transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-slate p-2 focus:outline-none active:scale-90 transition-transform duration-75 relative z-[110]" 
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-ivory fixed inset-0 z-[100] animate-menu-in flex flex-col overflow-y-auto">
          <div className="p-6 flex justify-between items-center border-b border-sand/20 sticky top-0 bg-ivory z-10">
            <img src={LOGO_URL} alt="Tidé Hotels" className="h-8 w-auto" />
            <div className="w-10"></div> 
          </div>
          <div className="px-8 py-12 flex flex-col space-y-8 flex-grow justify-center">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                style={{ animationDelay: `${idx * 70}ms` }}
                className={`text-4xl tracking-tight font-serif font-bold transition-colors animate-slide-up block ${
                  location.pathname === link.path ? 'text-terracotta' : 'text-slate'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={closeMenu}
              className="w-full bg-terracotta text-white text-center py-5 font-accent text-xs tracking-widest uppercase font-black shadow-xl mt-6 animate-slide-up"
              style={{ animationDelay: '450ms' }}
            >
              Book Now
            </Link>
            
            <div className="pt-10 flex justify-center space-x-8 border-t border-sand/30 animate-fade-in mt-auto" style={{ animationDelay: '550ms' }}>
              <a href="https://www.instagram.com/tidehotelsandresorts" className="text-slate/60 hover:text-terracotta transition-colors"><Instagram size={28}/></a>
              <a href="https://web.facebook.com/people/Tidé-Hotelsandresorts" className="text-slate/60 hover:text-terracotta transition-colors"><Facebook size={28}/></a>
              <a href="https://api.whatsapp.com/send/?phone=2349111111314" className="text-slate/60 hover:text-terracotta transition-colors"><MessageCircle size={28}/></a>
            </div>
          </div>
          <div className="p-6 text-center text-[9px] uppercase tracking-[0.3em] text-slate/30 font-bold bg-ivory">
            © 2025 Tidé Hotels & Resorts
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate text-pearl pt-16 md:pt-24 pb-10 border-t-[6px] md:border-t-[12px] border-terracotta">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 mb-12 md:mb-24">
          <div className="space-y-6 md:space-y-10">
            <img src={LOGO_URL} alt="Tidé Hotels" className="h-16 md:h-20 w-auto brightness-0 invert" />
            <p className="text-sand font-serif text-xl md:text-2xl leading-relaxed font-light italic opacity-90">
              Refined comfort, genuine hospitality, and intentional design in the heart of Abuja.
            </p>
          </div>
          
          <div className="space-y-6 md:space-y-10">
            <h4 className="text-sand font-accent uppercase tracking-[0.4em] text-[10px] md:text-[11px] font-black border-b border-white/10 pb-4">Contact Us</h4>
            <div className="space-y-6 text-sm md:text-base font-medium leading-relaxed">
              <div className="flex items-start space-x-4">
                <MapPin size={20} className="text-terracotta flex-shrink-0 mt-1" />
                <address className="not-italic text-pearl/90">
                  <span className="block font-bold text-white mb-1">Tidé Hotels & Resorts</span>
                  38 S.O. Williams Street,<br />
                  Off Anthony Enahoro Street, Utako,<br />
                  Abuja, Nigeria.
                </address>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={20} className="text-terracotta flex-shrink-0" />
                <span className="text-pearl/90">+234 911 111 1314</span>
              </div>
              <div className="flex items-start space-x-4">
                <Mail size={20} className="text-terracotta flex-shrink-0 mt-1" />
                <div className="text-pearl/90">
                  <a href="mailto:hello@tidehotelgroup.com" className="hover:text-terracotta transition-colors block">hello@tidehotelgroup.com</a>
                  <a href="mailto:info@tidehotelgroup.com" className="hover:text-terracotta transition-colors block">info@tidehotelgroup.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-10">
            <h4 className="text-sand font-accent uppercase tracking-[0.4em] text-[10px] md:text-[11px] font-black border-b border-white/10 pb-4">Connect</h4>
            <div className="flex space-x-6 mb-8 md:mb-12">
              <a href="https://www.instagram.com/tidehotelsandresorts" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-transform hover:scale-110" title="Instagram"><Instagram size={24} /></a>
              <a href="https://www.linkedin.com/company/tidé-hotels/" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-transform hover:scale-110" title="LinkedIn"><Linkedin size={24} /></a>
              <a href="https://web.facebook.com/people/Tidé-Hotelsandresorts" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-transform hover:scale-110" title="Facebook"><Facebook size={24} /></a>
              <a href="https://www.tiktok.com/@tidehotelsandresorts" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-transform hover:scale-110" title="TikTok"><TikTokIcon size={24} /></a>
            </div>
            <Link to="/staff" className="inline-flex items-center space-x-4 font-accent text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-sand hover:text-white transition-all border border-white/10 rounded-sm px-6 py-4 w-full justify-center hover:bg-white/5">
              <Lock size={12} />
              <span>Staff Access Portal</span>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 text-center font-accent text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase text-white/30 font-black">
          © 2025 Tidé Hotels & Resorts. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://api.whatsapp.com/send/?phone=2349111111314&text&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
    title="Chat with us"
  >
    <MessageCircle size={28} md:size={32} fill="currentColor" />
    <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-accent text-[10px] uppercase tracking-widest font-black whitespace-nowrap">Chat With Us</span>
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
