import React, { useState } from 'react';
import { Lock, FileText, BarChart3, Settings, Users, LogOut, ExternalLink, Printer, ClipboardCheck, MessageSquare } from 'lucide-react';
import { STAFF_LINKS, TEAM_STRUCTURE } from '../constants.tsx';

const VALID_PASSWORDS = [
  'housekeeping',
  'it',
  'poc',
  'guest relations',
  'maintenance',
  'whispers',
  'zenza',
  'culinary'
];

const StaffPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPass = password.toLowerCase().trim();
    if (VALID_PASSWORDS.includes(cleanPass)) { 
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Access denied. Invalid credentials.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-ivory/50 px-6 pt-24 pb-16 animate-fade-in">
        <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-sm shadow-2xl border border-sand">
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-slate text-white rounded-full mb-6 md:mb-8 shadow-inner">
              <Lock size={32} md:size={36} />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate">Internal Portal</h1>
            <p className="text-terracotta text-[9px] md:text-[10px] uppercase tracking-[0.3em] mt-3 font-black">Authorized Personnel Only</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6 md:space-y-8">
            <div className="animate-slide-up">
              <label className="block text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-slate/60 mb-3">Secure Access Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-pearl/30 border border-sand rounded-sm px-4 md:px-5 py-3.5 md:py-4 outline-none focus:border-terracotta focus:bg-white transition-all text-sm tracking-widest"
              />
              {error && <p className="text-terracotta text-[9px] mt-2 font-bold uppercase tracking-widest animate-bounce">{error}</p>}
            </div>
            <button 
              type="submit"
              className="w-full bg-slate text-white py-4 md:py-5 uppercase tracking-widest text-[10px] font-black hover:bg-terracotta transition-all shadow-lg"
            >
              Sign In
            </button>
          </form>
          <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-sand/20 text-center">
            <p className="text-[8px] md:text-[9px] text-slate/30 uppercase tracking-[0.2em]">Restricted Infrastructure</p>
          </div>
        </div>
      </div>
    );
  }

  const getIcon = (title: string) => {
    if (title.includes('Sales')) return <BarChart3 size={24} />;
    if (title.includes('Printer')) return <Printer size={24} />;
    if (title.includes('Performance')) return <ClipboardCheck size={24} />;
    if (title.includes('Feedback')) return <MessageSquare size={24} />;
    return <FileText size={24} />;
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-16 md:pb-20 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-6 md:gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-2 md:mb-3 font-bold text-slate">Operations Center</h1>
          <p className="text-terracotta uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] font-black">Tidé Hotels & Resorts Management Suite</p>
        </div>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="flex items-center space-x-3 bg-pearl px-6 md:px-8 py-3 rounded-sm text-[9px] md:text-[10px] uppercase tracking-widest font-black hover:bg-terracotta hover:text-white transition-all shadow-sm w-full md:w-auto justify-center"
        >
          <LogOut size={16} />
          <span>Exit Portal</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
        <div className="lg:col-span-2 space-y-10 md:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 stagger-reveal">
            {STAFF_LINKS.map((link) => (
              <a 
                key={link.title} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 md:p-10 border border-sand/40 shadow-sm hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500 group flex flex-col"
              >
                <div className="flex justify-between items-start mb-6 md:mb-8">
                  <div className="bg-ivory p-3 md:p-4 rounded-sm group-hover:bg-terracotta group-hover:text-white transition-colors">
                    {getIcon(link.title)}
                  </div>
                  <ExternalLink size={16} className="text-slate/10 group-hover:text-terracotta transition-colors" />
                </div>
                <div className="flex-grow">
                  <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-black text-terracotta block mb-2 md:mb-3">{link.category}</span>
                  <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 group-hover:text-terracotta transition-colors font-bold">{link.title}</h3>
                  <p className="text-xs text-slate/50 leading-relaxed">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-10 md:space-y-12">
          <div className="bg-slate text-white p-8 md:p-10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta opacity-10 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-xl md:text-2xl font-serif mb-6 md:mb-8 flex items-center space-x-4 relative z-10 font-bold">
              <Users size={24} className="text-terracotta" />
              <span>Team Directory</span>
            </h3>
            <div className="space-y-4 md:space-y-5 relative z-10">
              {TEAM_STRUCTURE.map((dept) => (
                <div key={dept} className="flex justify-between items-center py-2.5 md:py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 transition-colors rounded-sm">
                  <span className="text-xs font-light text-pearl/80 tracking-wide">{dept}</span>
                  <div className="flex items-center space-x-2 shrink-0">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[7px] md:text-[8px] tracking-[0.2em] text-pearl/40 uppercase font-bold">Online</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ivory p-8 md:p-10 border border-sand shadow-inner">
            <h4 className="font-black text-slate mb-6 md:mb-8 text-[9px] md:text-[10px] uppercase tracking-[0.3em]">Directives</h4>
            <div className="space-y-6 md:space-y-8">
              <div className="p-5 md:p-6 bg-white/60 border-l-2 border-terracotta shadow-sm">
                <p className="text-[8px] md:text-[9px] text-terracotta font-black uppercase tracking-widest mb-1 md:mb-2">Notice</p>
                <p className="text-xs text-slate/70 leading-relaxed italic">"Synchronize all performance metrics for the current quarter through the tracker."</p>
              </div>
              <div className="p-5 md:p-6 bg-white/60 border-l-2 border-olive shadow-sm">
                <p className="text-[8px] md:text-[9px] text-olive font-black uppercase tracking-widest mb-1 md:mb-2">Compliance</p>
                <p className="text-xs text-slate/70 leading-relaxed">Maintain absolute accuracy in daily logs to ensure audit success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;