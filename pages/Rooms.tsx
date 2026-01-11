import React from 'react';
import { Download, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../constants.tsx';

const Rooms: React.FC = () => {
  return (
    <div className="pb-16 md:pb-24">
      {/* Header */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center py-20 md:py-24 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://i.ibb.co/DfHG7z0M/Exterior-Nighttime.jpg" alt="Rooms" className="w-full h-full object-cover brightness-[0.35] scale-110" />
        </div>
        <div className="relative z-10 px-6 w-full max-w-5xl mx-auto text-white pt-24 md:pt-32">
          <span className="font-accent text-[10px] md:text-[11px] font-black block mb-6 md:mb-8 tracking-[0.4em] md:tracking-[0.5em] text-sand uppercase">Accommodation</span>
          <h1 className="hero-title font-serif">Rooms & <span className="italic font-light text-sand/70">Suites</span></h1>
          <p className="text-lg md:text-2xl text-pearl/80 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
            Discover a collection of suites designed by Tidé Hotels & Resorts for the ultimate restorative stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4 w-full sm:w-auto">
            <a href="https://static.wixstatic.com/ugd/2b2af3_22b7b830a4af4853a65b109ed8d5ca3c.pdf" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white/30 text-white px-8 md:px-10 py-4 font-accent text-[10px] font-black hover:bg-white hover:text-slate tracking-[0.25em] md:tracking-[0.3em] uppercase text-center">Download Album</a>
            <Link to="/booking" className="bg-terracotta text-white px-8 md:px-10 py-4 font-accent text-[10px] font-black hover:bg-white hover:text-terracotta tracking-[0.25em] md:tracking-[0.3em] uppercase shadow-xl text-center">Personalize Stay</Link>
          </div>
        </div>
      </section>

      <div className="content-container px-6 py-16 md:py-24 space-y-24 md:space-y-40">
        {ROOMS.map((room, index) => (
          <div key={room.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-16 items-center`}>
            <div className="w-full lg:w-[55%] reveal-on-scroll sr-up">
              <div className="relative overflow-hidden group rounded-sm shadow-xl">
                <img src={room.image} alt={room.name} className="w-full h-[350px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/95 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 shadow-lg">
                   <p className="font-accent text-[8px] md:text-[9px] font-black text-slate tracking-widest uppercase">Luxury Standard</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] space-y-6 md:space-y-8 reveal-on-scroll sr-up">
              <div className="flex justify-between items-end border-b border-sand/30 pb-4 md:pb-6">
                <h3 className="text-2xl md:text-4xl font-serif text-slate font-bold">{room.name}</h3>
                <div className="flex items-center space-x-2 text-terracotta font-accent text-[10px] md:text-[11px] font-bold shrink-0">
                  <Users size={16} md:size={18} />
                  <span>{room.occupancy}</span>
                </div>
              </div>
              <p className="text-slate/70 text-lg md:text-xl leading-relaxed font-medium">{room.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-[12px] md:text-[13px] font-bold text-slate/60 bg-pearl/50 p-6 md:p-8 border border-sand/10">
                {room.amenities.map(a => (
                  <div key={a} className="flex items-center space-x-3">
                    <CheckCircle2 size={16} className="text-terracotta shrink-0" />
                    <span className="tracking-wide">{a}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/booking" className="inline-block bg-slate text-white px-10 py-4 md:py-5 font-accent text-[10px] md:text-[11px] font-black hover:bg-terracotta w-full text-center shadow-xl tracking-[0.25em] md:tracking-[0.3em] uppercase">
                Book This Suite
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;