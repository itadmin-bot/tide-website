
import React, { useState } from 'react';
import { Lock, FileText, BarChart3, Settings, Users, LogOut, ExternalLink, Printer, ClipboardCheck, MessageSquare } from 'lucide-react';
import { STAFF_LINKS, TEAM_STRUCTURE } from '../constants';

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
      <div className="min-h-[80vh] flex items-center justify-center bg-ivory/50 px-4 animate-fade-in">
        <div className="max-w-md w-full bg-white p-12 rounded-sm shadow-2xl border border-sand">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate text-white rounded-full mb-8 shadow-inner">
              <Lock size={36} />
            </div>
            <h1 className="text-4xl font-serif">Internal Portal</h1>
            <p className="text-slate/40 text-[10px] uppercase tracking-[0.3em] mt-3">Authorized Personnel Only</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="animate-slide-up">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-slate/60 mb-3">Secure Access Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-pearl/30 border border-sand rounded-sm px-5 py-4 outline-none focus:border-terracotta focus:bg-white transition-all text-sm tracking-widest"
              />
              {error && <p className="text-terracotta text-[9px] mt-3 font-bold uppercase tracking-widest animate-bounce">{error}</p>}
            </div>
            <button 
              type="submit"
              className="w-full bg-slate text-white py-5 uppercase tracking-widest text-[10px] font-bold hover:bg-terracotta transition-all shadow-lg"
            >
              Sign In
            </button>
          </form>
          <div className="mt-12 pt-8 border-t border-sand/20 text-center">
            <p className="text-[9px] text-slate/30 uppercase tracking-[0.2em]">Restricted Infrastructure</p>
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
        <div>
          <h1 className="text-5xl font-serif mb-3">Operations Center</h1>
          <p className="text-slate/40 uppercase tracking-[0.4em] text-[10px]">Tidé Hotels & Resorts Management Suite</p>
        </div>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="flex items-center space-x-3 bg-pearl px-8 py-3.5 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-terracotta hover:text-white transition-all shadow-sm"
        >
          <LogOut size={16} />
          <span>Exit Portal</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-reveal">
            {STAFF_LINKS.map((link) => (
              <a 
                key={link.title} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-10 border border-sand/40 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-ivory p-4 rounded-sm group-hover:bg-terracotta group-hover:text-white transition-colors">
                    {getIcon(link.title)}
                  </div>
                  <ExternalLink size={16} className="text-slate/10 group-hover:text-terracotta transition-colors" />
                </div>
                <div className="flex-grow">
                  <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-terracotta block mb-3">{link.category}</span>
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-terracotta transition-colors break-text">{link.title}</h3>
                  <p className="text-xs text-slate/50 leading-relaxed break-text">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-slate text-white p-10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta opacity-10 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-2xl font-serif mb-8 flex items-center space-x-4 relative z-10 break-text">
              <Users size={24} className="text-terracotta" />
              <span>Team Directory</span>
            </h3>
            <div className="space-y-5 relative z-10">
              {TEAM_STRUCTURE.map((dept) => (
                <div key={dept} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 transition-colors rounded-sm">
                  <span className="text-xs font-light text-pearl/80 tracking-wide break-text pr-4">{dept}</span>
                  <div className="flex items-center space-x-2 shrink-0">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[8px] tracking-[0.2em] text-pearl/40 uppercase font-bold">Online</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ivory p-10 border border-sand shadow-inner">
            <h4 className="font-bold text-slate mb-8 text-[10px] uppercase tracking-[0.3em]">Directives</h4>
            <div className="space-y-8">
              <div className="p-6 bg-white/60 border-l-2 border-terracotta shadow-sm">
                <p className="text-[9px] text-terracotta font-bold uppercase tracking-widest mb-2">Notice</p>
                <p className="text-xs text-slate/70 leading-relaxed italic break-text">"Synchronize all performance metrics for the current quarter through the tracker."</p>
              </div>
              <div className="p-6 bg-white/60 border-l-2 border-olive shadow-sm">
                <p className="text-[9px] text-olive font-bold uppercase tracking-widest mb-2">Compliance</p>
                <p className="text-xs text-slate/70 leading-relaxed break-text">Maintain absolute accuracy in daily logs to ensure audit success.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;
