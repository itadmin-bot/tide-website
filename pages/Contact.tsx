
import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Send } from 'lucide-react';
import L from 'leaflet';

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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  const hotelCoords: [number, number] = [9.0685, 7.4452];

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Enhanced Map Options for full exploration
      mapInstance.current = L.map(mapRef.current, {
        scrollWheelZoom: true, // Enabled for exploration
        zoomControl: true,      // Enabled for exploration
        dragging: true,        // Always enabled for exploration
        touchZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true
      }).setView(hotelCoords, 16);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO'
      }).addTo(mapInstance.current);

      const tideIcon = L.divIcon({
        className: 'custom-tide-marker',
        html: `<div class="relative flex items-center justify-center"><div class="absolute w-12 h-12 bg-terracotta/20 rounded-full animate-ping"></div><div class="relative w-8 h-8 bg-terracotta text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-white transition-transform hover:scale-125 duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      L.marker(hotelCoords, { icon: tideIcon }).addTo(mapInstance.current)
        .bindPopup(`<div class="p-2 text-center"><h4 class="font-serif text-lg font-bold text-slate mb-1">Tidé Hotels & Resorts</h4><p class="text-[11px] text-slate/70 font-sans italic">38 S.O. Williams Street, Utako, Abuja.</p><a href="https://www.google.com/maps/dir/?api=1&destination=9.0685,7.4452" target="_blank" class="mt-2 inline-block text-[10px] text-terracotta font-black uppercase tracking-widest border-b border-terracotta">Get Directions</a></div>`);
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 reveal-on-scroll sr-up">
          <span className="text-terracotta font-accent text-[10px] md:text-[12px] font-black block mb-4 md:mb-6 tracking-[0.5em] uppercase">CONNECT WITH US</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-4 font-bold text-slate">Get In <span className="italic font-light text-terracotta">Touch</span></h1>
          <p className="text-slate/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-serif italic">Whether you have a reservation query or a corporate request, our team is dedicated to providing an exceptional experience from your first inquiry.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-16 md:mb-24">
          <div className="space-y-10 md:space-y-12">
            <div className="reveal-on-scroll sr-right">
              <h3 className="text-2xl font-serif mb-8 text-slate font-bold border-b border-sand/30 pb-4">Contact Details</h3>
              <div className="space-y-8">
                {[
                  { icon: <MapPin size={24} />, label: "Our Sanctuary", text: "38 S.O. Williams Street, Utako, Abuja, Nigeria." },
                  { icon: <Phone size={24} />, label: "Concierge Line", text: "+234 911 111 1314" },
                  { icon: <Mail size={24} />, label: "Digital Correspondence", text: "hello@tidehotelgroup.com" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="bg-ivory p-3.5 text-terracotta shrink-0 shadow-sm rounded-sm group-hover:bg-terracotta group-hover:text-white transition-all duration-500">{item.icon}</div>
                    <div>
                      <h5 className="font-accent font-black text-[10px] tracking-widest text-slate/40 mb-1 uppercase">{item.label}</h5>
                      <p className="text-slate text-lg font-serif italic">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-on-scroll sr-right" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-serif mb-6 text-slate font-bold">Social Concierge</h3>
              <div className="flex space-x-5">
                {[
                  { icon: <Instagram size={22} />, url: "https://www.instagram.com/tidehotelsandresorts", color: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-purple-600" },
                  { icon: <TikTokIcon size={22} />, url: "https://www.tiktok.com/@tidehotelsandresorts", color: "hover:bg-black" },
                  { icon: <MessageCircle size={22} />, url: "https://api.whatsapp.com/send/?phone=2349111111314", color: "hover:bg-[#25D366]" }
                ].map((social, i) => (
                  <a key={i} href={social.url} target="_blank" className={`p-4 bg-white text-slate/70 rounded-full transition-all shadow-lg hover:text-white hover:-translate-y-1 ${social.color}`}><span className="sr-only">Social</span>{social.icon}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border border-sand/30 rounded-sm reveal-on-scroll sr-left">
            {submitted ? (
              <div className="h-full py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-terracotta text-white rounded-full flex items-center justify-center mb-4 shadow-xl"><Send size={32} /></div>
                <h3 className="text-2xl font-serif font-bold text-slate">Message Received</h3>
                <p className="text-slate/60 text-base font-serif italic px-8">Thank you for reaching out. A guest relations representative will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-slate/40 mb-2">Full Name</label>
                    <input type="text" required className="w-full bg-ivory/20 border-b border-sand focus:border-terracotta outline-none py-3 px-1 text-base transition-colors font-serif italic" />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-slate/40 mb-2">Email Address</label>
                    <input type="email" required className="w-full bg-ivory/20 border-b border-sand focus:border-terracotta outline-none py-3 px-1 text-base transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-slate/40 mb-2">Subject</label>
                  <input type="text" required className="w-full bg-ivory/20 border-b border-sand focus:border-terracotta outline-none py-3 px-1 text-base transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-black text-slate/40 mb-2">Message</label>
                  <textarea rows={4} required className="w-full bg-ivory/20 border-b border-sand focus:border-terracotta outline-none py-3 px-1 resize-none text-base transition-colors font-serif italic"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate text-white py-5 uppercase tracking-[0.4em] text-[11px] font-black hover:bg-terracotta transition-all shadow-2xl active:scale-[0.98]">
                  Dispatch Message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="w-full h-[400px] md:h-[600px] bg-sand/20 rounded-sm shadow-inner overflow-hidden relative border border-sand/40 reveal-on-scroll sr-up">
          <div ref={mapRef} className="w-full h-full z-10"></div>
          <div className="absolute top-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 shadow-2xl max-w-sm border border-sand/20 z-20 pointer-events-none md:block hidden animate-fade-in" style={{ animationDelay: '1s' }}>
            <h4 className="font-serif text-xl font-bold mb-2 text-slate">Visit Tidé Hotels & Resorts</h4>
            <p className="text-[13px] text-slate/70 font-serif italic mb-4">Centrally located in Utako, providing seamless access to Abuja's business and government districts.</p>
            <div className="flex items-center space-x-2 text-[10px] font-black text-terracotta tracking-widest uppercase">
              <div className="w-1.5 h-1.5 bg-terracotta rounded-full animate-pulse"></div>
              <span>Open for Exploration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
