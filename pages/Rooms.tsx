
import React from 'react';
import { Download, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROOMS } from '../constants';

const Rooms: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="relative min-h-[70vh] flex items-center justify-center py-24 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img src="https://i.ibb.co/DfHG7z0M/Exterior-Nighttime.jpg" alt="Rooms" className="w-full h-full object-cover brightness-[0.35] scale-110" />
        </div>
        <div className="relative z-10 px-6 w-full max-w-5xl mx-auto text-white">
          <span className="font-accent text-[11px] font-black block mb-8 tracking-[0.4em] text-sand">Accommodation</span>
          <h1 className="hero-title font-serif">Rooms & <span className="italic font-light text-sand/70">Suites</span></h1>
          <p className="text-xl md:text-2xl text-pearl/80 mb-12 leading-relaxed content-measure mx-auto">
            Discover a collection of suites designed by Tidé Hotels & Resorts for the ultimate restorative stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://static.wixstatic.com/ugd/2b2af3_22b7b830a4af4853a65b109ed8d5ca3c.pdf" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white/30 text-white px-10 py-4 font-accent text-[10px] font-black hover:bg-white hover:text-slate tracking-[0.3em]">Download Album</a>
            <Link to="/booking" className="bg-terracotta text-white px-10 py-4 font-accent text-[10px] font-black hover:bg-white hover:text-terracotta tracking-[0.3em] shadow-xl">Personalize Stay</Link>
          </div>
        </div>
      </section>

      <div className="content-container px-6 py-24 space-y-40">
        {ROOMS.map((room, index) => (
          <div key={room.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
            <div className="w-full lg:w-[55%] reveal-on-scroll sr-up">
              <div className="relative overflow-hidden group rounded-sm shadow-xl">
                <img src={room.image} alt={room.name} className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 shadow-lg">
                   <p className="font-accent text-[9px] font-black text-slate tracking-widest uppercase">Luxury Standard</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[45%] space-y-8 reveal-on-scroll sr-up">
              <div className="flex justify-between items-end border-b border-sand/30 pb-6">
                <h3 className="text-3xl md:text-4xl font-serif text-slate font-bold">{room.name}</h3>
                <div className="flex items-center space-x-2 text-terracotta font-accent text-[11px] font-bold">
                  <Users size={18} />
                  <span>{room.occupancy}</span>
                </div>
              </div>
              <p className="text-slate/70 text-lg md:text-xl leading-relaxed content-measure mx-0 font-medium">{room.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] font-bold text-slate/60 bg-pearl/50 p-8 border border-sand/10">
                {room.amenities.map(a => (
                  <div key={a} className="flex items-center space-x-3">
                    <CheckCircle2 size={16} className="text-terracotta shrink-0" />
                    <span className="tracking-wide">{a}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/booking" className="inline-block bg-slate text-white px-12 py-5 font-accent text-[11px] font-black hover:bg-terracotta w-full text-center shadow-xl tracking-[0.3em]">
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
