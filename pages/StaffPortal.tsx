
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
  const mapping: Record<string, string> = {
    'maintenance': 'Facility & work',
    'operations': 'Tidé Hotels & Resorts',
    'poc': 'People Operation and Culture',
    'guestrelations': 'Guest Relations',
    'it': 'IT',
    'sales': 'Sales',
    'store': 'Store',
    'whispers': 'Whispers',
    'zenza': 'Zenza',
    'culinary': 'Culinary'
  };
  const key = id.toLowerCase().trim();
  return mapping[key] || (id.charAt(0).toUpperCase() + id.slice(1));
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
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-slate text-white rounded-full mb-6 shadow-inner"><Lock size={28} /></div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate">Internal Portal</h1>
            <p className="text-terracotta text-[9px] uppercase tracking-[0.3em] mt-3 font-black">Authorized Personnel Only</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[9px] uppercase tracking-widest font-bold text-slate/60 mb-2 md:mb-3">Secure Access Key</label>
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
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-40 pb-16 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl md:text-5xl font-serif mb-2 font-bold text-slate">Operations Center</h1>
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <p className="text-terracotta uppercase tracking-[0.2em] text-[8px] md:text-[9px] font-black">Tidé Hotels & Resorts Management Suite</p>
            <div className="flex items-center space-x-2 text-[9px] font-black uppercase tracking-widest text-green-600 bg-green-100 px-2 py-1 rounded-sm border border-green-200">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span>{getTeamDisplay(activeTeam)}</span>
            </div>
          </div>
        </div>
        <button onClick={handleLogout} className="flex items-center space-x-3 bg-pearl px-6 py-3 rounded-sm text-[9px] uppercase tracking-widest font-black hover:bg-terracotta hover:text-white transition-all shadow-sm w-full md:w-auto justify-center">
          <LogOut size={16} /><span>Exit Portal</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Social Media CTA */}
          <div className="bg-terracotta text-white p-6 md:p-8 rounded-sm shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform"><MessageSquare size={100} /></div>
            <div className="relative z-10">
              <span className="text-[9px] font-black uppercase tracking-[0.3em] mb-3 block text-sand">Community & Culture</span>
              <h3 className="text-xl md:text-3xl font-serif font-bold mb-4 md:mb-6">Join Our Digital Legacy</h3>
              <p className="text-pearl/80 text-xs md:text-base mb-6 md:mb-8 max-w-lg leading-relaxed italic">Follow Tidé Hotels & Resorts on all platforms to stay updated on brand milestones.</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/tidehotelsandresorts" target="_blank" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-sm transition-all flex items-center space-x-2 text-[8px] uppercase font-black tracking-widest">
                  <Instagram size={16} /><span>Instagram</span>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=2349111111314" target="_blank" className="bg-white/10 hover:bg-white/20 p-2.5 rounded-sm transition-all flex items-center space-x-2 text-[8px] uppercase font-black tracking-widest">
                  <MessageCircle size={16} /><span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {STAFF_LINKS.map((link) => (
              <a key={link.title} href={link.url} target="_blank" onClick={() => handleResourceClick(link.title)} className={`bg-white p-6 md:p-8 border border-sand/40 shadow-sm hover:shadow-2xl transition-all group ${normalize(link.category) === normalize(getTeamDisplay(activeTeam)) ? 'ring-2 ring-terracotta ring-offset-2' : ''}`}>
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div className="bg-ivory p-2.5 group-hover:bg-terracotta group-hover:text-white transition-colors">
                    <FileText size={20} md:size={24} />
                  </div>
                  <ExternalLink size={14} className="text-slate/10 group-hover:text-terracotta" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] font-black text-terracotta block">{link.category}</span>
                  {normalize(link.category) === normalize(getTeamDisplay(activeTeam)) && <span className="bg-terracotta text-white text-[7px] px-1.5 py-0.5 rounded-full uppercase font-black">My Team</span>}
                </div>
                <h3 className="text-lg md:text-xl font-serif mb-2 group-hover:text-terracotta font-bold">{link.title}</h3>
                <p className="text-[10px] md:text-xs text-slate/50 leading-relaxed">{link.description}</p>
              </a>
            ))}
          </div>

          {/* Table Container with Horizontal Scroll fix */}
          <div className="bg-white border border-sand/40 shadow-sm rounded-sm overflow-hidden">
            <div className="p-4 md:p-5 bg-slate text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="text-lg md:text-xl font-serif font-bold">Operation Logs</h3>
              <div className="relative w-full sm:w-auto">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
                <input 
                  type="text" 
                  placeholder="Search logs..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-full pl-9 pr-4 py-1.5 text-[10px] outline-none focus:bg-white/20 w-full" 
                />
              </div>
            </div>
            <div className="overflow-x-auto no-scrollbar touch-pan-x">
              <table className="w-full text-left text-sm min-w-[500px]">
                <thead className="bg-ivory text-slate text-[7px] uppercase tracking-widest font-black border-b border-sand/20">
                  <tr>
                    <th className="px-4 md:px-6 py-3">Time</th>
                    <th className="px-4 md:px-6 py-3">Team</th>
                    <th className="px-4 md:px-6 py-3">Action</th>
                    <th className="px-4 md:px-6 py-3">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/10">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-ivory/30 transition-colors">
                      <td className="px-4 md:px-6 py-3 text-slate/50 font-mono text-[8px] whitespace-nowrap">{log.timestamp.split(',')[1]}</td>
                      <td className="px-4 md:px-6 py-3"><span className={`px-1.5 py-0.5 rounded-sm text-[7px] uppercase font-black whitespace-nowrap ${normalize(log.team) === normalize(getTeamDisplay(activeTeam)) ? 'bg-terracotta/10 text-terracotta' : 'bg-slate/5 text-slate/40'}`}>{log.team}</span></td>
                      <td className="px-4 md:px-6 py-3 font-bold text-slate text-[10px] whitespace-nowrap">{log.action}</td>
                      <td className="px-4 md:px-6 py-3 text-slate/60 text-[10px] italic truncate max-w-[150px]">{log.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate text-white p-6 md:p-8 rounded-sm shadow-2xl relative overflow-hidden">
            <h3 className="text-lg md:text-xl font-serif mb-6 flex items-center space-x-3 font-bold">
              <Users size={20} />
              <span>Team Directory</span>
            </h3>
            <div className="space-y-3">
              {TEAM_STRUCTURE.map((dept) => (
                <div key={dept} className={`flex justify-between items-center py-2 border-b border-white/5 last:border-0 ${normalize(dept) === normalize(getTeamDisplay(activeTeam)) ? 'text-sand font-bold' : 'text-white/40'}`}>
                  <span className="text-[10px] md:text-xs tracking-wide font-light">{dept}</span>
                  {normalize(dept) === normalize(getTeamDisplay(activeTeam)) && <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 border border-sand/30 rounded-sm shadow-sm">
            <h4 className="font-accent text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-slate mb-4 md:mb-6">Staff Ethos</h4>
            <p className="text-[10px] md:text-xs text-slate/60 leading-relaxed italic mb-6">"Excellence is not an act, but a habit. We are building legacies with every interaction."</p>
            <div className="space-y-3">
               <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-slate/40 border-b border-sand/10 pb-1.5">
                 <span>Status</span>
                 <span className="text-green-600">Secure</span>
               </div>
               <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-slate/40 border-b border-sand/10 pb-1.5">
                 <span>Team</span>
                 <span className="text-terracotta">{getTeamDisplay(activeTeam)}</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;
