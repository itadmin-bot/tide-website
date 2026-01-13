
import React, { useState, useEffect, useMemo } from 'react';
import { Lock, FileText, BarChart3, Settings, Users, LogOut, ExternalLink, Printer, ClipboardCheck, MessageSquare, History, Download, Search, Filter, X, MonitorSmartphone, Send, AlertCircle, Eye, Clock, Hash, Tag, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { STAFF_LINKS, TEAM_STRUCTURE } from '../constants.tsx';

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
      setError('Access denied.');
    }
  };

  const handleLogout = () => {
    addLog('Logout', 'Session terminated');
    setIsAuthenticated(false);
    setActiveTeam('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-ivory/50 px-6 pt-20 pb-12 animate-fade-in">
        <div className="max-w-md w-full bg-white p-6 md:p-10 rounded-sm shadow-2xl border border-sand">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-slate text-white rounded-full mb-4"><Lock size={22} /></div>
            <h1 className="text-xl md:text-2xl font-serif font-bold text-slate">Internal Portal</h1>
            <p className="text-terracotta text-[8px] uppercase tracking-widest mt-2 font-black">Authorized Only</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="password" placeholder="Access Key" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-pearl/30 border border-sand rounded-sm px-4 py-3 outline-none focus:border-terracotta text-sm tracking-widest" />
            {error && <p className="text-terracotta text-[8px] font-bold uppercase tracking-widest">{error}</p>}
            <button type="submit" className="w-full bg-slate text-white py-3.5 uppercase tracking-widest text-[9px] font-black hover:bg-terracotta transition-all">Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-slate">Operations Center</h1>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <p className="text-terracotta uppercase tracking-[0.2em] text-[7px] md:text-[8px] font-black">Tidé Management Suite</p>
            <div className="flex items-center space-x-1.5 text-[8px] font-black uppercase tracking-widest text-green-600 bg-green-100 px-1.5 py-0.5 rounded-sm">
              <div className="w-1 h-1 bg-green-500 rounded-full"></div><span>{getTeamDisplay(activeTeam)}</span>
            </div>
          </div>
        </div>
        <button onClick={handleLogout} className="flex items-center space-x-2 bg-pearl px-5 py-2.5 rounded-sm text-[8px] uppercase tracking-widest font-black hover:bg-terracotta hover:text-white transition-all shadow-sm">
          <LogOut size={14} /><span>Exit</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-terracotta text-white p-6 md:p-8 rounded-sm shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-[8px] font-black uppercase tracking-[0.3em] mb-2 block text-sand">Community & Culture</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">Join Our Digital Legacy</h3>
              <p className="text-pearl/80 text-[11px] md:text-[13px] mb-5 max-w-lg leading-relaxed italic">Follow brand milestones on all platforms.</p>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.instagram.com/tidehotelsandresorts" target="_blank" className="bg-white/10 hover:bg-white/20 p-2 rounded-sm transition-all flex items-center space-x-2 text-[7px] uppercase font-black tracking-widest"><Instagram size={14} /><span>Instagram</span></a>
                <a href="https://api.whatsapp.com/send/?phone=2349111111314" target="_blank" className="bg-white/10 hover:bg-white/20 p-2 rounded-sm transition-all flex items-center space-x-2 text-[7px] uppercase font-black tracking-widest"><MessageCircle size={14} /><span>WhatsApp</span></a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STAFF_LINKS.map((link) => (
              <a key={link.title} href={link.url} target="_blank" onClick={() => addLog('Resource Access', `Opened: ${link.title}`)} className={`bg-white p-5 md:p-6 border border-sand/40 shadow-sm hover:shadow-xl transition-all group ${normalize(link.category) === normalize(getTeamDisplay(activeTeam)) ? 'ring-1 ring-terracotta' : ''}`}>
                <div className="flex justify-between items-start mb-3"><div className="bg-ivory p-2 group-hover:bg-terracotta group-hover:text-white"><FileText size={18} /></div><ExternalLink size={12} className="text-slate/10" /></div>
                <div className="flex items-center gap-2 mb-1"><span className="text-[7px] uppercase tracking-widest font-black text-terracotta">{link.category}</span></div>
                <h3 className="text-base md:text-lg font-serif mb-1 group-hover:text-terracotta font-bold">{link.title}</h3>
                <p className="text-[9px] text-slate/50 italic">{link.description}</p>
              </a>
            ))}
          </div>

          <div className="bg-white border border-sand/40 shadow-sm rounded-sm overflow-hidden">
            <div className="p-4 bg-slate text-white flex justify-between items-center">
              <h3 className="text-base md:text-lg font-serif font-bold">Operation Logs</h3>
              <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-[9px] outline-none focus:bg-white/20" />
            </div>
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left text-[10px] min-w-[400px]">
                <thead className="bg-ivory text-slate text-[7px] uppercase tracking-widest font-black">
                  <tr><th className="px-4 py-2">Time</th><th className="px-4 py-2">Team</th><th className="px-4 py-2">Action</th><th className="px-4 py-2">Details</th></tr>
                </thead>
                <tbody className="divide-y divide-sand/10">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-ivory/30">
                      <td className="px-4 py-2 text-slate/50 font-mono text-[8px]">{log.timestamp.split(',')[1]}</td>
                      <td className="px-4 py-2"><span className={`px-1.5 py-0.5 rounded-sm text-[7px] uppercase font-black ${normalize(log.team) === normalize(getTeamDisplay(activeTeam)) ? 'text-terracotta' : 'text-slate/40'}`}>{log.team}</span></td>
                      <td className="px-4 py-2 font-bold">{log.action}</td>
                      <td className="px-4 py-2 text-slate/60 italic truncate max-w-[120px]">{log.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate text-white p-6 rounded-sm shadow-2xl">
            <h3 className="text-base md:text-lg font-serif mb-4 flex items-center space-x-2 font-bold"><Users size={18} /><span>Directory</span></h3>
            <div className="space-y-2">
              {TEAM_STRUCTURE.map((dept) => (
                <div key={dept} className={`flex justify-between items-center py-1.5 border-b border-white/5 last:border-0 text-[10px] ${normalize(dept) === normalize(getTeamDisplay(activeTeam)) ? 'text-sand font-bold' : 'text-white/40'}`}>
                  <span>{dept}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-5 md:p-6 border border-sand/30 rounded-sm">
            <h4 className="font-accent text-[8px] font-black uppercase tracking-widest text-slate mb-3">Staff Ethos</h4>
            <p className="text-[10px] text-slate/60 leading-relaxed italic">"Building legacies with every interaction."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;
