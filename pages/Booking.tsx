
import React from 'react';
import { ArrowLeft, ExternalLink, ShieldCheck, UserCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Booking: React.FC = () => {
  return (
    <div className="min-h-screen bg-pearl/30 flex flex-col">
      {/* Return Bar */}
      <div className="bg-slate text-white py-2 px-6 flex flex-col sm:flex-row justify-between items-center sticky top-12 md:top-18 z-40 border-b border-terracotta shadow-md gap-2">
        <Link to="/" className="flex items-center space-x-2 text-sand hover:text-white transition-colors uppercase tracking-widest text-[9px] font-black">
          <ArrowLeft size={12} /><span>Back to Tidé Main Website</span>
        </Link>
        <div className="flex items-center space-x-2 text-[8px] uppercase tracking-widest text-white/50">
          <ShieldCheck size={12} /><span>Secure Reservation Interface</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-12 md:py-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-3 md:space-y-4 max-w-3xl mx-auto reveal-on-scroll sr-up px-4">
            <h1 className="text-3xl md:text-6xl font-serif text-slate font-bold">Secure Your Sanctuary</h1>
            <p className="text-slate/60 text-sm md:text-lg">Reserve your stay through our official channels.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            {/* Option 1: Direct Engine */}
            <div className="bg-white p-6 md:p-10 shadow-2xl border border-sand/30 flex flex-col h-full reveal-on-scroll sr-right">
              <div className="w-12 h-12 bg-ivory text-terracotta rounded-full flex items-center justify-center mb-5 shrink-0"><Zap size={24} /></div>
              <h3 className="text-xl md:text-2xl font-serif text-slate font-bold mb-3 md:mb-4">Direct Booking Engine</h3>
              <p className="text-slate/60 text-[13px] md:text-base leading-relaxed mb-6 flex-grow">Best for live availability and instant confirmation. Perfect for business travelers.</p>
              <ul className="space-y-2 md:space-y-3 mb-8">
                <li className="flex items-center space-x-2 text-[11px] font-bold text-slate/80"><ShieldCheck size={14} className="text-terracotta" /><span>Lowest Rate Guaranteed</span></li>
                <li className="flex items-center space-x-2 text-[11px] font-bold text-slate/80"><ShieldCheck size={14} className="text-terracotta" /><span>Instant Email Confirmation</span></li>
              </ul>
              <a href="https://www.tidehotelgroup.com/book-online" target="_blank" rel="noopener noreferrer" className="bg-slate text-white px-6 py-4 uppercase tracking-widest text-[10px] font-black hover:bg-terracotta transition-all shadow-xl flex items-center justify-center space-x-2 w-full text-center">
                <span>Launch Booking Engine</span><ExternalLink size={14} />
              </a>
            </div>

            {/* Option 2: Personalized Form */}
            <div className="bg-white p-6 md:p-10 shadow-2xl border border-sand/30 flex flex-col h-full reveal-on-scroll sr-left">
              <div className="w-12 h-12 bg-ivory text-terracotta rounded-full flex items-center justify-center mb-5 shrink-0"><UserCheck size={24} /></div>
              <h3 className="text-xl md:text-2xl font-serif text-slate font-bold mb-3 md:mb-4">Guest Reservation Form</h3>
              <p className="text-slate/60 text-[13px] md:text-base leading-relaxed mb-6 flex-grow">Ideal for longer stays or personalized high-touch experiences tailored to your needs.</p>
              <div className="p-3 bg-ivory/40 border border-sand/20 mb-8 rounded-sm">
                <p className="text-[9px] text-slate/50 leading-relaxed italic">"Please fill in this form so we can prepare your reservation."</p>
              </div>
              <a href="https://form.jotform.com/260042406631041" target="_blank" rel="noopener noreferrer" className="bg-terracotta text-white px-6 py-4 uppercase tracking-widest text-[10px] font-black hover:bg-slate transition-all shadow-xl flex items-center justify-center space-x-2 w-full text-center">
                <span>Personalize My Stay</span><ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Privacy Section */}
          <div className="max-w-4xl mx-auto bg-slate/5 p-5 md:p-8 border border-sand/30 rounded-sm reveal-on-scroll sr-up">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
              <div className="shrink-0 text-terracotta"><ShieldCheck size={32} /></div>
              <div className="space-y-1.5 text-center md:text-left">
                <h4 className="text-[9px] font-black uppercase tracking-widest text-slate">Privacy & Data Protection</h4>
                <p className="text-[11px] text-slate/70 leading-relaxed">All information will be kept strictly confidential in line with the NDPA 2023.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
