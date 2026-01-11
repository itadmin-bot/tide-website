
import React from 'react';
import { ArrowLeft, ExternalLink, ShieldCheck, UserCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Booking: React.FC = () => {
  return (
    <div className="min-h-screen bg-pearl/30 flex flex-col">
      {/* Return Bar */}
      <div className="bg-slate text-white py-4 px-6 flex justify-between items-center sticky top-20 z-40 border-b border-terracotta shadow-md">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-sand hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold"
        >
          <ArrowLeft size={14} />
          <span>Back to Tidé Main Website</span>
        </Link>
        <div className="hidden md:flex items-center space-x-2 text-[10px] uppercase tracking-widest text-white/50">
          <ShieldCheck size={14} />
          <span>Secure Reservation Interface</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6 max-w-3xl mx-auto reveal-on-scroll sr-up">
            <h1 className="text-5xl md:text-7xl font-serif text-slate font-bold">Secure Your Sanctuary</h1>
            <p className="text-slate/60 text-lg md:text-xl leading-relaxed">
              Experience the best of Tidé by reserving your stay through our official channels. 
              Choose your preferred booking method below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Option 1: Direct Engine */}
            <div className="bg-white p-10 md:p-14 shadow-2xl border border-sand/30 flex flex-col h-full reveal-on-scroll sr-right">
              <div className="w-16 h-16 bg-ivory text-terracotta rounded-full flex items-center justify-center mb-8">
                <Zap size={32} />
              </div>
              <h3 className="text-3xl font-serif text-slate font-bold mb-6">Direct Booking Engine</h3>
              <p className="text-slate/60 leading-relaxed mb-10 flex-grow">
                Best for checking live availability and receiving instant confirmation. Perfect for business travelers and short-notice stays.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center space-x-3 text-sm font-bold text-slate/80">
                  <ShieldCheck size={18} className="text-terracotta" />
                  <span>Lowest Rate Guaranteed</span>
                </li>
                <li className="flex items-center space-x-3 text-sm font-bold text-slate/80">
                  <ShieldCheck size={18} className="text-terracotta" />
                  <span>Instant Email Confirmation</span>
                </li>
              </ul>
              <a 
                href="https://www.tidehotelgroup.com/book-online"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate text-white px-10 py-6 uppercase tracking-widest text-[12px] font-black hover:bg-terracotta transition-all shadow-xl flex items-center justify-center space-x-3 w-full"
              >
                <span>Launch Booking Engine</span>
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Option 2: Personalized Form */}
            <div className="bg-white p-10 md:p-14 shadow-2xl border border-sand/30 flex flex-col h-full reveal-on-scroll sr-left" style={{ '--sr-delay': '0.2s' } as React.CSSProperties}>
              <div className="w-16 h-16 bg-ivory text-terracotta rounded-full flex items-center justify-center mb-8">
                <UserCheck size={32} />
              </div>
              <h3 className="text-3xl font-serif text-slate font-bold mb-6">Guest Reservation Form</h3>
              <p className="text-slate/60 leading-relaxed mb-10 flex-grow">
                Ideal for longer stays, corporate blocks, or if you prefer a high-touch, personalized experience tailored to your specific preferences.
              </p>
              <div className="p-5 bg-ivory/40 border border-sand/20 mb-10 rounded-sm">
                <p className="text-[10px] text-slate/50 leading-relaxed italic break-text">
                  "We’d love to get to know you a little better! Please fill in this form so we can prepare your reservation and make your stay as comfortable as possible."
                </p>
              </div>
              <a 
                href="https://form.jotform.com/260042406631041"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracotta text-white px-10 py-6 uppercase tracking-widest text-[12px] font-black hover:bg-slate transition-all shadow-xl flex items-center justify-center space-x-3 w-full"
              >
                <span>Personalize My Stay</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          {/* Legal/Compliance Section */}
          <div className="max-w-4xl mx-auto bg-slate/5 p-8 md:p-12 border border-sand/30 rounded-sm reveal-on-scroll sr-up">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="shrink-0 text-terracotta">
                <ShieldCheck size={48} strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate">Privacy & Data Protection</h4>
                <p className="text-sm text-slate/70 leading-relaxed break-text">
                  All information provided will be kept strictly confidential, securely stored, and used solely for the purpose of managing your booking in line with the **Nigeria Data Protection Act (NDPA) of 2023**. We value your trust as highly as your comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
