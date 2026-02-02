
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, ShieldCheck, UserCheck, Zap, X, FileText, Info, AlertTriangle, Clock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="absolute inset-0 bg-slate/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-ivory w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl border border-sand flex flex-col animate-scale-in">
        {/* Modal Header */}
        <div className="p-6 border-b border-sand flex justify-between items-center bg-white sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <div className="bg-terracotta/10 p-2 rounded-sm">
              <FileText className="text-terracotta" size={24} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-slate">Booking Policy & Terms</h2>
              <p className="text-[9px] uppercase tracking-widest font-black text-slate/40">Effective 2025 • Version 1.0</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-ivory rounded-full transition-colors group">
            <X size={24} className="text-slate/40 group-hover:text-terracotta transition-colors" />
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-8 md:p-12 overflow-y-auto font-sans text-slate/80 text-sm leading-relaxed space-y-12">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <CreditCard size={18} className="text-terracotta" />
              <h3 className="font-accent text-[11px] font-black tracking-widest text-slate uppercase">1. Booking & Cancellation Policy</h3>
            </div>
            <p className="font-serif italic text-lg text-slate/70">"You will be charged in full upon booking."</p>
            <ul className="space-y-3 pl-4 border-l-2 border-sand/30">
              <li><strong>Guarantee & Payment:</strong> All bookings must be guaranteed with a valid credit card. We require immediate full payment for standard and offer rates.</li>
              <li><strong>Cancellation (Standard Rates Only):</strong> 
                <ul className="mt-2 space-y-1 pl-4 list-disc marker:text-terracotta">
                  <li>Cancellations <strong>&gt; 72 hours</strong> prior to 2:00 PM check-in: No penalty.</li>
                  <li>Cancellations <strong>within 48 hours</strong>: 60% charge of total stay.</li>
                  <li>Cancellations <strong>within 24 hours</strong> or "No-show": 100% charge of total stay.</li>
                </ul>
              </li>
              <li><strong>Non-Refundable Rates:</strong> Charged in full upon booking; not eligible for cancellation or modification.</li>
              <li><strong>Early Departure:</strong> Fee equivalent to 50% of the remaining nightly rate(s).</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <Clock size={18} className="text-terracotta" />
              <h3 className="font-accent text-[11px] font-black tracking-widest text-slate uppercase">2. Terms & Conditions of Your Stay</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="font-bold text-slate text-xs uppercase tracking-wider">Check-in / Check-out</h4>
                <p>Check-in is from <strong>2:00 PM</strong>. Check-out is by <strong>12:00 PM</strong>.</p>
                <p className="text-slate/60 text-xs italic">Late Check-out: 50% of nightly rate until 3:00 PM. Past 3:00 PM incurs one full additional night charge.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-slate text-xs uppercase tracking-wider">Registration</h4>
                <p>A valid government-issued photo ID and the credit card used for booking must be presented at check-in.</p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-2">
              <AlertTriangle size={18} className="text-terracotta" />
              <h3 className="font-accent text-[11px] font-black tracking-widest text-slate uppercase">3. Occupancy & Conduct</h3>
            </div>
            <div className="bg-ivory/50 p-6 border border-sand/20 rounded-sm grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <span className="text-[10px] font-black text-terracotta uppercase">Extra Guests</span>
                <p>Charge of <strong>N37,500 per night</strong> for undisclosed extra guests.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black text-terracotta uppercase">Parties/Events</span>
                <p>Unauthorized gatherings result in a <strong>N450,000 fine</strong> and immediate eviction.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black text-terracotta uppercase">Quiet Period</span>
                <p>10:00 PM to 7:00 AM. Disturbances result in a <strong>N150,000 fine</strong> per incident.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black text-terracotta uppercase">Children</span>
                <p>Under 12 stay free when using existing bedding.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h3 className="font-accent text-[11px] font-black tracking-widest text-slate uppercase">4. Property & Damages</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 bg-terracotta rounded-full mt-2 shrink-0"></div>
                <div>
                  <strong>No Smoking:</strong> 100% non-smoking property. <strong>N375,000 deep-cleaning fee</strong> for any violation.
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 bg-terracotta rounded-full mt-2 shrink-0"></div>
                <div>
                  <strong>Security Hold:</strong> A hold of <strong>N150,000</strong> will be placed at check-in for incidentals.
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-1.5 h-1.5 bg-terracotta rounded-full mt-2 shrink-0"></div>
                <div>
                  <strong>Lost Keys:</strong> A fee of <strong>N75,000</strong> for lost or unreturned room keys.
                </div>
              </li>
            </ul>
          </section>

          {/* Footer Notice */}
          <div className="pt-8 border-t border-sand/40 text-[10px] space-y-4">
            <p className="uppercase tracking-widest font-black text-slate/40">Governing Law: Laws of the Federal Republic of Nigeria.</p>
            <p className="italic text-slate/30">Tidé Hotels & Resorts reserves the right to modify, revoke, or change any policies at its sole discretion without notice.</p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-white border-t border-sand flex justify-center">
          <button 
            onClick={onClose}
            className="bg-slate text-white px-12 py-4 uppercase tracking-[0.3em] text-[10px] font-black hover:bg-terracotta transition-all shadow-xl active:scale-95"
          >
            I Acknowledge & Accept
          </button>
        </div>
      </div>
    </div>
  );
};

const Booking: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isTermsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isTermsOpen]);

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
              <a href="https://forms.zohopublic.com/francisokoronkwotidehot1/form/GuestFeedback/formperma/OtgiBPS4AfTZzRmIg21YzBYFeNqf1XFaBqCBaynhxPM" target="_blank" rel="noopener noreferrer" className="bg-terracotta text-white px-6 py-4 uppercase tracking-widest text-[10px] font-black hover:bg-slate transition-all shadow-xl flex items-center justify-center space-x-2 w-full text-center">
                <span>Personalize My Stay</span><ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Privacy & Terms Section */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-slate/5 p-5 md:p-8 border border-sand/30 rounded-sm reveal-on-scroll sr-up">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="shrink-0 text-terracotta"><ShieldCheck size={32} /></div>
                <div className="space-y-1.5 text-center md:text-left flex-grow">
                  <h4 className="text-[9px] font-black uppercase tracking-widest text-slate">Privacy & Data Protection</h4>
                  <p className="text-[11px] text-slate/70 leading-relaxed">All information will be kept strictly confidential in line with the NDPA 2023.</p>
                </div>
                <button 
                  onClick={() => setIsTermsOpen(true)}
                  className="shrink-0 flex items-center space-x-2 text-[9px] font-black uppercase tracking-[0.2em] text-terracotta hover:text-slate transition-colors border-b border-terracotta pb-1"
                >
                  <Info size={12} /><span>Terms & Booking Policy</span>
                </button>
              </div>
            </div>
            <p className="text-center text-[8px] uppercase tracking-widest text-slate/30 font-bold">By proceeding with a booking, you acknowledge our policies.</p>
          </div>
        </div>
      </div>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
};

export default Booking;
