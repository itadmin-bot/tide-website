
import React from 'react';
import { Download, Users, CheckCircle2, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../constants';

const Rooms: React.FC = () => {
  return (
    <div className="pb-32">
      {/* Header */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/DfHG7z0M/Exterior-Nighttime.jpg" 
            alt="Tidé Exterior Night" 
            className="w-full h-full object-cover brightness-[0.3] scale-105" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6 w-full max-w-6xl mx-auto">
          <div className="stagger-reveal">
            <span className="text-sand font-accent uppercase tracking-[0.4em] text-[11px] md:text-[13px] font-black block mb-8">Accommodation</span>
            <h1 className="hero-title font-serif mb-10 leading-none text-white font-bold text-shadow-premium">
              Rooms & <span className="italic font-light text-pearl">Suites</span>
            </h1>
            <p className="text-xl md:text-3xl lg:text-4xl font-medium text-pearl leading-relaxed break-text max-w-4xl mx-auto text-shadow-premium px-4 mb-16">
              Discover a collection of rooms designed for the ultimate restorative stay. From minimalist studios to expansive suites.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://static.wixstatic.com/ugd/2b2af3_22b7b830a4af4853a65b109ed8d5ca3c.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-4 border-2 border-sand text-sand px-12 py-5 font-accent uppercase tracking-widest text-[11px] font-black hover:bg-sand hover:text-white transition-all shadow-lg w-full sm:w-auto justify-center"
              >
                <Download size={20} />
                <span>Download Album</span>
              </a>
              <Link 
                to="/booking"
                className="inline-flex items-center space-x-4 bg-terracotta text-white px-12 py-5 font-accent uppercase tracking-widest text-[11px] font-black hover:bg-white hover:text-slate transition-all shadow-lg w-full sm:w-auto justify-center"
              >
                <UserCheck size={20} />
                <span>Personalize Stay</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Room Listing */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24 space-y-40">
        {ROOMS.map((room, index) => (
          <div key={room.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center overflow-hidden`}>
            <div className={`w-full lg:w-1/2 overflow-hidden group rounded-sm shadow-2xl reveal-on-scroll ${index % 2 === 0 ? 'sr-right' : 'sr-left'}`}>
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
            <div className={`w-full lg:w-1/2 space-y-10 reveal-on-scroll ${index % 2 === 0 ? 'sr-left' : 'sr-right'}`} style={{ '--sr-delay': '0.2s' } as React.CSSProperties}>
              <div className="flex justify-between items-end border-b-2 border-sand/30 pb-6">
                <h2 className="text-4xl md:text-5xl font-serif text-slate font-bold">{room.name}</h2>
                <div className="flex items-center space-x-2 text-terracotta text-sm font-black uppercase tracking-widest">
                  <Users size={22} />
                  <span>{room.occupancy}</span>
                </div>
              </div>
              <p className="text-slate text-xl leading-relaxed font-medium break-text">{room.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10 bg-ivory/40 px-6 border border-sand/20 rounded-sm">
                {room.amenities.map((amenity, i) => (
                  <div key={amenity} className="flex items-center space-x-4 text-[15px] text-slate font-bold reveal-on-scroll sr-up" style={{ '--sr-delay': `${0.3 + (i * 0.05)}s` } as React.CSSProperties}>
                    <CheckCircle2 size={22} className="text-terracotta flex-shrink-0" strokeWidth={3} />
                    <span className="break-text">{amenity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link 
                  to="/booking" 
                  className="inline-block bg-terracotta text-white px-14 py-6 font-accent uppercase tracking-widest text-[13px] font-black hover:bg-slate transition-all w-full text-center shadow-2xl"
                >
                  Book {room.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
