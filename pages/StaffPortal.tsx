
import React, { useState, useEffect, useMemo } from 'react';
import { Lock, FileText, BarChart3, Settings, Users, LogOut, ExternalLink, Printer, ClipboardCheck, MessageSquare, History, Download, Search, Filter, X, MonitorSmartphone, Send, AlertCircle, Eye, Clock, Hash, Tag, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { STAFF_LINKS, TEAM_STRUCTURE } from '../constants.tsx';

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

const VALID_PASSWORDS = ['guestrelations', 'it', 'poc', 'maintenance', 'operations', 'store', 'whispers', 'zenza', 'culinary', 'sales'];

const getTeamDisplay = (id: string) => {
  if (id === 'maintenance') return 'Facility & work';
  if (id === 'operations') return 'Tidé Hotels & Resorts';
  if (id === 'poc') return 'People Operation and Culture';
  return id.charAt(0).toUpperCase() + id.slice(1);
};

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

interface ActivityLog {
  id: string;
  timestamp: string;
  team: string;
  action: string;
  details: string;
}

const StaffPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTeam, setActiveTeam] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTeam, setFilterTeam] = useState('All Teams');

  useEffect(() => {
    const storedLogs = localStorage.getItem('tide_staff_logs');
    if (storedLogs) { try { setLogs(JSON.parse(storedLogs)); } catch (e) { console.error("Failed to parse logs", e); } }
  }, []);

  useEffect(() => { localStorage.setItem('tide_staff_logs', JSON.stringify(logs)); }, [logs]);

  const filteredLogs = useMemo(() => {
    return logs.filter(log => {
      const matchesSearch = log.details.toLowerCase().includes(searchQuery.toLowerCase()) || log.action.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTeam = filterTeam === 'All Teams' || normalize(log.team) === normalize(filterTeam);
      return matchesSearch && matchesTeam;
    });
  }, [logs, searchQuery, filterTeam]);

  const addLog = (action: string, details: string, teamOverride?: string) => {
    const newLog: ActivityLog = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      timestamp: new Date().toLocaleString(),
      team: teamOverride || getTeamDisplay(activeTeam) || 'System',
      action,
      details
    };
    setLogs(prev => [newLog, ...prev].slice(0, 500));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPass = password.toLowerCase().trim();
    if (VALID_PASSWORDS.includes(cleanPass)) { 
      setIsAuthenticated(true);
      setActiveTeam(cleanPass);
      setError('');
      addLog('Login', 'Accessed portal successfully', getTeamDisplay(cleanPass));
    } else {
      setError('Access denied. Invalid credentials.');
    }
  };

  const handleLogout = () => {
    addLog('Logout', 'Session terminated');
    setIsAuthenticated(false);
    setActiveTeam('');
    setPassword('');
  };

  const handleResourceClick = (title: string) => addLog('Resource Access', `Opened: ${title}`);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-ivory/50 px-6 pt-24 pb-16 animate-fade-in">
        <div className="max-w-md w-full bg-white p-8 md:p-12 rounded-sm shadow-2xl border border-sand">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate text-white rounded-full mb-6 shadow-inner"><Lock size={32} /></div>
            <h1 className="text-3xl font-serif font-bold text-slate">Internal Portal</h1>
            <p className="text-terracotta text-[9px] uppercase tracking-[0.3em] mt-3 font-black">Authorized Personnel Only</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[9px] uppercase tracking-widest font-bold text-slate/60 mb-3">Secure Access Key</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-pearl/30 border border-sand rounded-sm px-4 py-3.5 outline-none focus:border-terracotta focus:bg-white transition-all text-sm tracking-widest" />
              {error && <p className="text-terracotta text-[9px] mt-2 font-bold uppercase tracking-widest">{error}</p>}
            </div>
            <button type="submit" className="w-full bg-slate text-white py-4 uppercase tracking-widest text-[10px] font-black hover:bg-terracotta transition-all shadow-lg">Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-16 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-2 font-bold text-slate">Operations Center</h1>
          <p className="text-terracotta uppercase tracking-[0.3em] text-[9px] font-black">Tidé Hotels & Resorts Management Suite</p>
        </div>
        <button onClick={handleLogout} className="flex items-center space-x-3 bg-pearl px-8 py-3 rounded-sm text-[9px] uppercase tracking-widest font-black hover:bg-terracotta hover:text-white transition-all shadow-sm">
          <LogOut size={16} /><span>Exit Portal</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {/* Social Media CTA for Staff */}
          <div className="bg-terracotta text-white p-8 rounded-sm shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform"><MessageSquare size={120} /></div>
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block text-sand">Community & Culture</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">Join Our Digital Legacy</h3>
              <p className="text-pearl/80 text-sm md:text-base mb-8 max-w-lg leading-relaxed italic">Follow Tidé Hotels & Resorts on all platforms to stay updated on brand milestones and culture.</p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.instagram.com/tidehotelsandresorts" target="_blank" className="bg-white/10 hover:bg-white/20 p-3 rounded-sm transition-all flex items-center space-x-2 text-[10px] uppercase font-black tracking-widest">
                  <Instagram size={18} /><span>Instagram</span>
                </a>
                <a href="https://web.facebook.com/people/Tid%C3%A9-Hotelsandresorts/pfbid036Te83H2VyrSUEyf7S37xu5JTXPVZgwWsTsxTvVGzzSzk2AUzpDRFQ7nVNEvt5JPZl/" target="_blank" className="bg-white/10 hover:bg-white/20 p-3 rounded-sm transition-all flex items-center space-x-2 text-[10px] uppercase font-black tracking-widest">
                  <Facebook size={18} /><span>Facebook</span>
                </a>
                <a href="https://www.linkedin.com/company/tidé-hotels/" target="_blank" className="bg-white/10 hover:bg-white/20 p-3 rounded-sm transition-all flex items-center space-x-2 text-[10px] uppercase font-black tracking-widest">
                  <Linkedin size={18} /><span>LinkedIn</span>
                </a>
                <a href="https://www.tiktok.com/@tidehotelsandresorts" target="_blank" className="bg-white/10 hover:bg-white/20 p-3 rounded-sm transition-all flex items-center space-x-2 text-[10px] uppercase font-black tracking-widest">
                  <TikTokIcon size={18} /><span>TikTok</span>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=2349111111314" target="_blank" className="bg-white/10 hover:bg-white/20 p-3 rounded-sm transition-all flex items-center space-x-2 text-[10px] uppercase font-black tracking-widest">
                  <MessageCircle size={18} /><span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STAFF_LINKS.map((link) => (
              <a key={link.title} href={link.url} target="_blank" onClick={() => handleResourceClick(link.title)} className="bg-white p-8 border border-sand/40 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-ivory p-3 group-hover:bg-terracotta group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <ExternalLink size={16} className="text-slate/10 group-hover:text-terracotta" />
                </div>
                <span className="text-[8px] uppercase tracking-[0.3em] font-black text-terracotta block mb-2">{link.category}</span>
                <h3 className="text-xl font-serif mb-3 group-hover:text-terracotta font-bold">{link.title}</h3>
                <p className="text-xs text-slate/50 leading-relaxed">{link.description}</p>
              </a>
            ))}
          </div>

          <div className="bg-white border border-sand/40 shadow-sm rounded-sm overflow-hidden">
            <div className="p-5 bg-slate text-white flex justify-between items-center">
              <h3 className="text-xl font-serif font-bold">Recent Operations Log</h3>
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Filter logs..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-full pl-10 pr-4 py-1.5 text-xs outline-none focus:bg-white/20" 
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm min-w-[650px]">
                <thead className="bg-ivory text-slate text-[8px] uppercase tracking-widest font-black border-b border-sand/20">
                  <tr>
                    <th className="px-6 py-4">Timestamp</th>
                    <th className="px-6 py-4">Team</th>
                    <th className="px-6 py-4">Action</th>
                    <th className="px-6 py-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/10">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-ivory/30 transition-colors">
                      <td className="px-6 py-4 text-slate/50 font-mono text-[9px]">{log.timestamp}</td>
                      <td className="px-6 py-4"><span className="px-2 py-0.5 rounded-sm text-[8px] uppercase font-black bg-slate/5 text-slate/40">{log.team}</span></td>
                      <td className="px-6 py-4 font-bold text-slate text-[11px]">{log.action}</td>
                      <td className="px-6 py-4 text-slate/60 text-[11px] italic truncate max-w-[200px]">{log.details}</td>
                    </tr>
                  ))}
                  {filteredLogs.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-slate/30 italic text-sm">No operational logs found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-slate text-white p-8 rounded-sm shadow-2xl relative overflow-hidden">
            <h3 className="text-xl font-serif mb-6 flex items-center space-x-4 font-bold">
              <Users size={24} />
              <span>Team Structure</span>
            </h3>
            <div className="space-y-4">
              {TEAM_STRUCTURE.map((dept) => (
                <div key={dept} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                  <span className="text-xs tracking-wide font-light">{dept}</span>
                  <div className="w-2 h-2 rounded-full bg-terracotta/40"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-ivory/50 p-8 border border-sand/30 rounded-sm">
            <h4 className="font-accent text-[9px] font-black uppercase tracking-[0.4em] text-slate mb-6">Staff Wellbeing</h4>
            <p className="text-xs text-slate/60 leading-relaxed italic mb-8">"Your excellence is our legacy. Remember to practice the IQG-LLW values in every guest interaction today."</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 border border-sand/10 shadow-sm text-center">
                <span className="block text-[10px] font-black text-terracotta uppercase">Innovative</span>
              </div>
              <div className="bg-white p-4 border border-sand/10 shadow-sm text-center">
                <span className="block text-[10px] font-black text-terracotta uppercase">Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;
