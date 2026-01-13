
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
        html: `<div class="relative flex items-center justify-center"><div class="absolute w-10 h-10 bg-terracotta/20 rounded-full animate-ping"></div><div class="relative w-7 h-7 bg-terracotta text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-white"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div></div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });

      L.marker(hotelCoords, { icon: tideIcon }).addTo(mapInstance.current)
        .bindPopup(`<div class="p-1"><h4 class="font-serif text-base font-bold text-slate mb-0.5">Tidé Hotels & Resorts</h4><p class="text-[10px] text-slate/70 font-sans">Utako, Abuja.</p></div>`);
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
    <div className="pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="text-center mb-10 md:mb-14 reveal-on-scroll sr-up">
          <span className="text-terracotta font-accent text-[10px] md:text-[11px] font-black block mb-4 md:mb-6 tracking-[0.4em] uppercase">CONNECT WITH US</span>
          <h1 className="text-3xl md:text-5xl font-serif mb-3 md:mb-4 font-bold text-slate">Get In Touch</h1>
          <p className="text-slate/60 max-w-xl mx-auto text-sm md:text-base leading-relaxed">Whether you have a reservation query or a corporate request, we're here to assist you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mb-12 md:mb-16">
          <div className="space-y-8 md:space-y-10 reveal-on-scroll sr-right">
            <div>
              <h3 className="text-xl font-serif mb-6 text-terracotta font-bold">Contact Details</h3>
              <div className="space-y-5 md:space-y-6">
                {[
                  { icon: <MapPin size={20} />, label: "Our Location", text: "38 S.O. Williams Street, Utako, Abuja." },
                  { icon: <Phone size={20} />, label: "Call Us", text: "+234 911 111 1314" },
                  { icon: <Mail size={20} />, label: "Email Us", text: "hello@tidehotelgroup.com" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="bg-ivory p-2.5 text-terracotta shrink-0">{item.icon}</div>
                    <div><h5 className="font-bold text-[13px] mb-0.5">{item.label}</h5><p className="text-slate/70 text-[13px]">{item.text}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif mb-4 text-terracotta font-bold">Social Concierge</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/tidehotelsandresorts" className="p-3 bg-pearl rounded-full hover:bg-terracotta hover:text-white transition-all shadow-sm"><Instagram size={20} /></a>
                <a href="https://www.tiktok.com/@tidehotelsandresorts" className="p-3 bg-pearl rounded-full hover:bg-black hover:text-white transition-all shadow-sm"><TikTokIcon size={20} /></a>
                <a href="https://api.whatsapp.com/send/?phone=2349111111314" className="p-3 bg-pearl rounded-full hover:bg-[#25D366] hover:text-white transition-all shadow-sm"><MessageCircle size={20} /></a>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 shadow-2xl border border-sand/30 rounded-sm reveal-on-scroll sr-left">
            {submitted ? (
              <div className="h-full py-8 flex flex-col items-center justify-center text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center mb-2"><Send size={24} /></div>
                <h3 className="text-xl font-serif">Message Received</h3>
                <p className="text-slate/60 text-[13px] px-4">Thank you. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div><label className="block text-[9px] uppercase tracking-widest font-bold text-slate/50 mb-1.5">Full Name</label><input type="text" required className="w-full bg-pearl/30 border-b border-sand focus:border-terracotta outline-none py-2 px-1 text-sm" /></div>
                  <div><label className="block text-[9px] uppercase tracking-widest font-bold text-slate/50 mb-1.5">Email</label><input type="email" required className="w-full bg-pearl/30 border-b border-sand focus:border-terracotta outline-none py-2 px-1 text-sm" /></div>
                </div>
                <div><label className="block text-[9px] uppercase tracking-widest font-bold text-slate/50 mb-1.5">Subject</label><input type="text" required className="w-full bg-pearl/30 border-b border-sand focus:border-terracotta outline-none py-2 px-1 text-sm" /></div>
                <div><label className="block text-[9px] uppercase tracking-widest font-bold text-slate/50 mb-1.5">Message</label><textarea rows={3} required className="w-full bg-pearl/30 border-b border-sand focus:border-terracotta outline-none py-2 px-1 resize-none text-sm"></textarea></div>
                <button type="submit" className="w-full bg-terracotta text-white py-3.5 uppercase tracking-widest text-[10px] font-black hover:bg-slate transition-all shadow-lg">Send Message</button>
              </form>
            )}
          </div>
        </div>

        <div className="w-full h-[300px] md:h-[420px] bg-sand/20 rounded-sm shadow-inner overflow-hidden relative border border-sand">
          <div ref={mapRef} className="w-full h-full z-10"></div>
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 shadow-2xl max-w-sm border border-sand/20 z-20 pointer-events-none md:block hidden">
            <h4 className="font-serif text-base font-bold mb-1 text-slate">Tidé Hotels & Resorts</h4>
            <p className="text-[11px] text-slate/70">Nestled in Utako district, offering proximity to central business hubs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
