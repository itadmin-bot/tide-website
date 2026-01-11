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
      mapInstance.current = L.map(mapRef.current, {
        scrollWheelZoom: false,
        zoomControl: false,
        dragging: !L.Browser.mobile,
        tap: !L.Browser.mobile
      }).setView(hotelCoords, 16);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap'
      }).addTo(mapInstance.current);

      if (!L.Browser.mobile) {
        L.control.zoom({ position: 'bottomright' }).addTo(mapInstance.current);
      }

      const tideIcon = L.divIcon({
        className: 'custom-tide-marker',
        html: `
          <div class="relative flex items-center justify-center">
            <div class="absolute w-12 h-12 bg-terracotta/20 rounded-full animate-ping"></div>
            <div class="relative w-8 h-8 bg-terracotta text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });

      const marker = L.marker(hotelCoords, { icon: tideIcon }).addTo(mapInstance.current);
      
      marker.bindPopup(`
        <div class="p-2">
          <h4 class="font-serif text-lg font-bold text-slate mb-1">Tidé Hotels & Resorts</h4>
          <p class="text-xs text-slate/70 font-sans">Utako, Abuja.</p>
        </div>
      `);
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
    <div className="pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <div className="text-center mb-12 md:mb-20 reveal-on-scroll sr-up">
          <span className="text-terracotta font-accent text-[10px] md:text-[11px] font-black block mb-6 md:mb-8 tracking-[0.4em] md:tracking-[0.5em] uppercase">CONNECT WITH US</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-4 md:mb-6 font-bold text-slate">Get In Touch</h1>
          <p className="text-slate/60 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Whether you have a reservation query or a corporate request, the Tidé Hotels & Resorts team is here to assist you with genuine warmth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-24">
          {/* Info Side */}
          <div className="space-y-10 md:space-y-12 reveal-on-scroll sr-right">
            <div>
              <h3 className="text-2xl font-serif mb-6 md:mb-8 text-terracotta font-bold">Contact Details</h3>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-ivory p-3 text-terracotta shrink-0">
                    <MapPin size={22} md:size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm md:text-base mb-1">Our Location</h5>
                    <p className="text-slate/70 text-sm md:text-base">38 S.O. Williams Street, Utako, Abuja, Nigeria.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-ivory p-3 text-terracotta shrink-0">
                    <Phone size={22} md:size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm md:text-base mb-1">Call Us</h5>
                    <p className="text-slate/70 text-sm md:text-base">+234 911 111 1314<br />+234 201 330 3327</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-ivory p-3 text-terracotta shrink-0">
                    <Mail size={22} md:size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm md:text-base mb-1">Email Us</h5>
                    <p className="text-slate/70 text-sm md:text-base break-all">hello@tidehotelgroup.com<br />info@tidehotelgroup.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif mb-6 text-terracotta font-bold">Social Concierge</h3>
              <div className="flex space-x-4 md:space-x-6">
                <a href="https://www.instagram.com/tidehotelsandresorts" target="_blank" rel="noopener noreferrer" className="p-4 bg-pearl rounded-full hover:bg-terracotta hover:text-white transition-all shadow-sm" title="Instagram"><Instagram size={22} /></a>
                <a href="https://www.tiktok.com/@tidehotelsandresorts" target="_blank" rel="noopener noreferrer" className="p-4 bg-pearl rounded-full hover:bg-black hover:text-white transition-all shadow-sm" title="TikTok"><TikTokIcon size={22} /></a>
                <a href="https://api.whatsapp.com/send/?phone=2349111111314" target="_blank" rel="noopener noreferrer" className="p-4 bg-pearl rounded-full hover:bg-[#25D366] hover:text-white transition-all shadow-sm" title="WhatsApp"><MessageCircle size={22} /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-6 md:p-12 shadow-2xl border border-sand/30 rounded-sm reveal-on-scroll sr-left">
            {submitted ? (
              <div className="h-full py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-terracotta text-white rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-serif">Message Received</h3>
                <p className="text-slate/60 text-sm md:text-base px-4">Thank you for reaching out. A member of our guest relations team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-slate/50 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-pearl/30 border-b border-sand focus:border-terracotta outline-none py-3 px-1 transition-all text-sm" 
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-slate/50 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="w-full bg-pearl/30 border-b border-sand focus:border-terracotta outline-none py-3 px-1 transition-all text-sm"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate/50 mb-2">Subject</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-pearl/30 border-b border-sand focus:border-terracotta outline-none py-3 px-1 transition-all text-sm"
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-slate/50 mb-2">Your Message</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="w-full bg-pearl/30 border-b border-sand focus:border-terracotta outline-none py-3 px-1 transition-all resize-none text-sm"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-terracotta text-white py-4 uppercase tracking-widest text-[10px] font-black hover:bg-slate transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="w-full h-[350px] md:h-[500px] bg-sand/20 rounded-sm shadow-inner overflow-hidden relative border border-sand">
          <div ref={mapRef} className="w-full h-full z-10"></div>
          
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 md:p-6 shadow-2xl max-w-sm border border-sand/20 z-20 pointer-events-none md:block hidden">
            <h4 className="font-serif text-lg md:text-xl font-bold mb-2 text-slate">Tidé Hotels & Resorts</h4>
            <p className="text-xs md:text-sm text-slate/70 leading-relaxed">
              Nestled in the upscale Utako district, offering proximity to central business hubs and peaceful residential zones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;