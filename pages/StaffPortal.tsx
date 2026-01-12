
import React, { useState, useEffect, useMemo } from 'react';
import { Lock, FileText, BarChart3, Settings, Users, LogOut, ExternalLink, Printer, ClipboardCheck, MessageSquare, History, Download, Search, Filter, X, MonitorSmartphone, Send, AlertCircle, Eye, Clock, Hash, Tag } from 'lucide-react';
import { STAFF_LINKS, TEAM_STRUCTURE } from '../constants.tsx';

const VALID_PASSWORDS = [
  'guestrelations',
  'it',
  'poc',
  'maintenance',
  'operations',
  'store',
  'whispers',
  'zenza',
  'culinary'
];

// Helper to map password-based activeTeam to display team names
const getTeamDisplay = (id: string) => {
  if (id === 'maintenance') return 'Facility & work';
  if (id === 'operations') return 'Tidé Hotels & Resorts';
  if (id === 'poc') return 'People Operation and Culture';
  return id.charAt(0).toUpperCase() + id.slice(1);
};

// Helper to normalize strings for comparison (remove spaces, symbols)
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
  
  // IT Support Modal State
  const [isITModalOpen, setIsITModalOpen] = useState(false);
  const [itRequest, setItRequest] = useState({
    category: 'Network/Wi-Fi',
    urgency: 'Medium',
    description: ''
  });

  // Log Detail Modal State
  const [selectedLog, setSelectedLog] = useState<ActivityLog | null>(null);

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTeam, setFilterTeam] = useState('All Teams');
  const [filterAction, setFilterAction] = useState('All Actions');

  // Load logs from localStorage on mount
  useEffect(() => {
    const storedLogs = localStorage.getItem('tide_staff_logs');
    if (storedLogs) {
      try {
        setLogs(JSON.parse(storedLogs));
      } catch (e) {
        console.error("Failed to parse logs", e);
      }
    }
  }, []);

  // Save logs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tide_staff_logs', JSON.stringify(logs));
  }, [logs]);

  // Derived filtered logs
  const filteredLogs = useMemo(() => {
    return logs.filter(log => {
      const matchesSearch = 
        log.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.timestamp.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTeam = filterTeam === 'All Teams' || normalize(log.team) === normalize(filterTeam);
      
      const matchesAction = filterAction === 'All Actions' || log.action === filterAction;

      return matchesSearch && matchesTeam && matchesAction;
    });
  }, [logs, searchQuery, filterTeam, filterAction]);

  const uniqueActions = useMemo(() => {
    const actions = new Set(logs.map(l => l.action));
    return Array.from(actions);
  }, [logs]);

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
      addLog('Failed Access', `Attempted login attempt with key length: ${password.length}`, 'Unknown');
    }
  };

  const handleLogout = () => {
    addLog('Logout', 'Session terminated');
    setIsAuthenticated(false);
    setActiveTeam('');
    setPassword('');
  };

  const handleResourceClick = (title: string) => {
    addLog('Resource Access', `Opened: ${title}`);
  };

  const handleITSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const teamName = getTeamDisplay(activeTeam).toUpperCase();
    const currentTimestamp = new Date().toLocaleString();
    
    // Log the activity immediately in our system
    addLog('IT Support', `Request Sent: ${itRequest.category} (${itRequest.urgency})`);
    
    // Prepare Email Content - Using generic IT support alias for better privacy
    const recipients = 'itsupport@tidehotelgroup.com';
    const subject = `IT Support Request [${itRequest.urgency}] - ${teamName}`;
    const body = `IT SUPPORT REQUEST DETAILS
--------------------------
TEAM: ${teamName}
CATEGORY: ${itRequest.category}
PRIORITY: ${itRequest.urgency}
TIME: ${currentTimestamp}

DESCRIPTION:
${itRequest.description}

--------------------------
SENT VIA TIDÉ STAFF PORTAL`;

    // Trigger the system email client
    const mailtoLink = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.assign(mailtoLink);
    
    // UI Feedback & Reset
    setItRequest({ category: 'Network/Wi-Fi', urgency: 'Medium', description: '' });
    setIsITModalOpen(false);
  };

  const exportToExcel = () => {
    addLog('Export', `Downloaded filtered activity logs CSV (${filteredLogs.length} entries)`);
    const headers = ['ID', 'Timestamp', 'Team', 'Action', 'Details'];
    const csvRows = [
      headers.join(','),
      ...filteredLogs.map(log => [
        log.id,
        `"${log.timestamp}"`,
        `"${log.team}"`,
        `"${log.action}"`,
        `"${log.details.replace(/"/g, '""')}"`
      ].join(','))
    ];
    
    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `Tide_Staff_Logs_Filtered_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setFilterTeam('All Teams');
    setFilterAction('All Actions');
  };

  const getIcon = (title: string) => {
    if (title.includes('Sales')) return <BarChart3 size={24} />;
    if (title.includes('Printer')) return <Printer size={24} />;
    if (title.includes('Performance')) return <ClipboardCheck size={24} />;
    if (title.includes('Feedback')) return <MessageSquare size={24} />;
    return <FileText size={24} />;
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

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-40 pb-16 md:pb-20 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-6 md:gap-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif mb-2 md:mb-3 font-bold text-slate">Operations Center</h1>
          <p className="text-terracotta uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] font-black">Tidé Hotels & Resorts Management Suite</p>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-3 bg-pearl px-6 md:px-8 py-3 rounded-sm text-[9px] md:text-[10px] uppercase tracking-widest font-black hover:bg-terracotta hover:text-white transition-all shadow-sm w-full md:w-auto justify-center"
        >
          <LogOut size={16} />
          <span>Exit Portal</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
        {/* Resource Cards */}
        <div className="lg:col-span-2 space-y-10 md:space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 stagger-reveal">
            {STAFF_LINKS.map((link) => (
              <a 
                key={link.title} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleResourceClick(link.title)}
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
            
            {/* IT Support Request Card */}
            <button 
              onClick={() => setIsITModalOpen(true)}
              className="bg-white p-8 md:p-10 border border-sand/40 shadow-sm hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500 group flex flex-col text-left w-full h-full"
            >
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="bg-ivory p-3 md:p-4 rounded-sm group-hover:bg-slate group-hover:text-white transition-colors">
                  <MonitorSmartphone size={24} />
                </div>
                <AlertCircle size={16} className="text-slate/10 group-hover:text-terracotta transition-colors" />
              </div>
              <div className="flex-grow">
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-black text-terracotta block mb-2 md:mb-3">Technical</span>
                <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 group-hover:text-terracotta transition-colors font-bold">IT Support Request</h3>
                <p className="text-xs text-slate/50 leading-relaxed">Submit hardware, software, or network issues directly to the IT administration team.</p>
              </div>
            </button>
          </div>

          {/* Enhanced Audit Logs Section */}
          <div className="bg-white border border-sand/40 shadow-sm rounded-sm overflow-hidden flex flex-col">
            <div className="p-5 md:p-8 bg-slate text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-2 md:p-3 rounded-sm shrink-0">
                  <History size={20} className="text-terracotta" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold leading-tight">System Audit Logs</h3>
                  <p className="text-[7px] md:text-[10px] uppercase tracking-widest text-pearl/40 font-black">Historical Activity Tracking</p>
                </div>
              </div>
              <button 
                onClick={exportToExcel}
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-terracotta transition-all px-4 py-3 md:py-2.5 rounded-sm text-[8px] md:text-[9px] font-black uppercase tracking-widest w-full md:w-auto shadow-sm"
              >
                <Download size={14} />
                <span>Export CSV</span>
              </button>
            </div>

            {/* Filter Toolbar */}
            <div className="p-4 md:p-6 bg-ivory/30 border-b border-sand/20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-[8px] uppercase tracking-widest font-black text-slate/40 flex items-center gap-2 pl-1">
                  <Search size={10} /> Search Keywords
                </label>
                <div className="relative">
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Ref ID, Action, Detail..."
                    className="w-full bg-white border border-sand/40 rounded-sm px-4 py-2 text-[11px] md:text-xs outline-none focus:border-terracotta transition-all shadow-sm"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate/30 hover:text-terracotta">
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[8px] uppercase tracking-widest font-black text-slate/40 flex items-center gap-2 pl-1">
                  <Filter size={10} /> Team Entity
                </label>
                <select 
                  value={filterTeam}
                  onChange={(e) => setFilterTeam(e.target.value)}
                  className="w-full bg-white border border-sand/40 rounded-sm px-4 py-2 text-[11px] md:text-xs outline-none focus:border-terracotta transition-all appearance-none shadow-sm cursor-pointer"
                >
                  <option>All Teams</option>
                  {TEAM_STRUCTURE.map(team => <option key={team}>{team}</option>)}
                  <option>System</option>
                  <option>Unknown</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[8px] uppercase tracking-widest font-black text-slate/40 flex items-center gap-2 pl-1">
                  <Tag size={10} /> Event Action
                </label>
                <select 
                  value={filterAction}
                  onChange={(e) => setFilterAction(e.target.value)}
                  className="w-full bg-white border border-sand/40 rounded-sm px-4 py-2 text-[11px] md:text-xs outline-none focus:border-terracotta transition-all appearance-none shadow-sm cursor-pointer"
                >
                  <option>All Actions</option>
                  {uniqueActions.map(action => <option key={action}>{action}</option>)}
                </select>
              </div>

              <button 
                onClick={resetFilters}
                disabled={!searchQuery && filterTeam === 'All Teams' && filterAction === 'All Actions'}
                className="bg-pearl text-slate px-4 py-2.5 rounded-sm text-[8px] font-black uppercase tracking-widest hover:bg-sand/30 transition-all disabled:opacity-30 flex items-center justify-center gap-2 h-[36px] md:h-[38px] shadow-sm active:scale-95"
              >
                <X size={12} /> Reset Filters
              </button>
            </div>

            {/* Results Counter */}
            <div className="px-5 md:px-6 py-2.5 bg-white border-b border-sand/10 flex justify-between items-center">
              <span className="text-[7px] md:text-[8px] uppercase tracking-widest font-black text-slate/30">
                Viewing {filteredLogs.length} matching events
              </span>
              {(searchQuery || filterTeam !== 'All Teams' || filterAction !== 'All Actions') && (
                <span className="text-[7px] md:text-[8px] uppercase tracking-widest font-black text-terracotta bg-terracotta/5 px-2 py-0.5 rounded-sm">
                  Refined Search
                </span>
              )}
            </div>

            <div className="overflow-x-auto scrollbar-thin">
              <table className="w-full text-left text-sm min-w-[650px] lg:min-w-full border-collapse">
                <thead className="sticky top-0 bg-ivory text-slate font-accent text-[8px] md:text-[9px] uppercase tracking-widest font-black border-b border-sand/20 z-10">
                  <tr>
                    <th className="px-4 md:px-6 py-4">Timestamp</th>
                    <th className="px-4 md:px-6 py-4">Team</th>
                    <th className="px-4 md:px-6 py-4">Action</th>
                    <th className="px-4 md:px-6 py-4">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/10 bg-white">
                  {filteredLogs.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-16 text-center">
                        <div className="flex flex-col items-center space-y-4 opacity-10">
                          <Search size={40} md:size={48} strokeWidth={1} />
                          <p className="italic font-serif text-base md:text-lg">No audit entries found</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredLogs.map((log) => (
                      <tr 
                        key={log.id} 
                        onClick={() => setSelectedLog(log)}
                        className="hover:bg-ivory/30 transition-colors cursor-pointer group active:bg-pearl"
                      >
                        <td className="px-4 md:px-6 py-4 text-slate/50 font-mono text-[9px] md:text-[10px] whitespace-nowrap">{log.timestamp}</td>
                        <td className="px-4 md:px-6 py-4">
                          <span className={`px-2 py-0.5 rounded-sm text-[8px] md:text-[9px] uppercase font-black tracking-widest inline-block ${normalize(log.team) === normalize(getTeamDisplay(activeTeam)) ? 'bg-terracotta text-white' : 'bg-slate/5 text-slate/40'}`}>
                            {log.team}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 font-bold text-slate text-[11px] md:text-xs whitespace-nowrap">{log.action}</td>
                        <td className="px-4 md:px-6 py-4 text-slate/60 text-[11px] md:text-xs italic flex justify-between items-center gap-2">
                          <span className="truncate max-w-[150px] md:max-w-[250px]">{log.details}</span>
                          <Eye size={12} className="opacity-0 group-hover:opacity-100 text-terracotta transition-all shrink-0" />
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-10 md:space-y-12">
          {/* Team Directory */}
          <div className="bg-slate text-white p-8 md:p-10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta opacity-10 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-xl md:text-2xl font-serif mb-6 md:mb-8 flex items-center space-x-4 relative z-10 font-bold">
              <span className="bg-terracotta p-1 rounded-sm"><Users size={24} className="text-white" /></span>
              <span>Team Directory</span>
            </h3>
            <div className="space-y-4 md:space-y-5 relative z-10">
              {TEAM_STRUCTURE.map((dept) => {
                const isDeptActive = normalize(dept) === normalize(getTeamDisplay(activeTeam));
                return (
                  <div key={dept} className={`flex justify-between items-center py-2.5 md:py-3 border-b border-white/5 last:border-0 px-2 transition-colors rounded-sm ${isDeptActive ? 'bg-white/10' : 'hover:bg-white/5'}`}>
                    <span className={`text-xs tracking-wide ${isDeptActive ? 'font-bold text-white' : 'font-light text-pearl/80'}`}>{dept}</span>
                    <div className="flex items-center space-x-2 shrink-0">
                      {isDeptActive ? (
                        <>
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                          <span className="text-[7px] md:text-[8px] tracking-[0.2em] text-green-400 uppercase font-black">Active</span>
                        </>
                      ) : (
                        <>
                          <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                          <span className="text-[7px] md:text-[8px] tracking-[0.2em] text-pearl/20 uppercase font-bold">Offline</span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Directives */}
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

      {/* IT Support Modal */}
      {isITModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate/90 backdrop-blur-md" onClick={() => setIsITModalOpen(false)}></div>
          <div className="bg-white w-full max-w-xl rounded-sm shadow-2xl relative z-10 overflow-hidden animate-menu-in">
            <div className="bg-terracotta p-6 md:p-8 text-white flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <MonitorSmartphone size={24} md:size={28} />
                <h3 className="text-xl md:text-2xl font-serif font-bold">IT Support Request</h3>
              </div>
              <button onClick={() => setIsITModalOpen(false)} className="hover:rotate-90 transition-transform p-1">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleITSubmit} className="p-6 md:p-10 space-y-6 md:space-y-8 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest font-black text-slate/40">Team/Department</label>
                  <input 
                    type="text" 
                    value={getTeamDisplay(activeTeam).toUpperCase()} 
                    disabled 
                    className="w-full bg-pearl/50 border border-sand/40 rounded-sm px-4 py-3 text-xs font-bold text-slate/50 cursor-not-allowed"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest font-black text-slate/40">Issue Category</label>
                  <select 
                    value={itRequest.category}
                    onChange={(e) => setItRequest({...itRequest, category: e.target.value})}
                    className="w-full bg-white border border-sand/40 rounded-sm px-4 py-3 text-xs outline-none focus:border-terracotta transition-all appearance-none shadow-sm"
                  >
                    <option>Network/Wi-Fi</option>
                    <option>Hardware (PC/Printer)</option>
                    <option>Software/Portal Access</option>
                    <option>Email/Communication</option>
                    <option>Security/CCTV</option>
                    <option>Other Technical Issue</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest font-black text-slate/40">Priority Level</label>
                <div className="flex gap-2 md:gap-4">
                  {['Low', 'Medium', 'High'].map(level => (
                    <button 
                      key={level}
                      type="button"
                      onClick={() => setItRequest({...itRequest, urgency: level})}
                      className={`flex-1 py-3 text-[9px] md:text-[10px] uppercase tracking-widest font-black rounded-sm border transition-all shadow-sm ${
                        itRequest.urgency === level 
                        ? 'bg-slate text-white border-slate' 
                        : 'bg-pearl/30 border-sand text-slate/40 hover:border-terracotta'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-widest font-black text-slate/40">Description of Issue</label>
                <textarea 
                  required
                  rows={4}
                  value={itRequest.description}
                  onChange={(e) => setItRequest({...itRequest, description: e.target.value})}
                  placeholder="Please describe the issue in detail..."
                  className="w-full bg-white border border-sand/40 rounded-sm px-4 py-3 text-xs outline-none focus:border-terracotta transition-all resize-none shadow-sm"
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-terracotta text-white py-4 md:py-5 uppercase tracking-widest text-[10px] font-black hover:bg-slate transition-all shadow-xl flex items-center justify-center space-x-3 active:scale-95"
                >
                  <Send size={16} />
                  <span>Send IT Request</span>
                </button>
                <p className="text-center mt-6 text-[8px] text-slate/30 uppercase tracking-widest">
                  System draft will launch in your primary mail client.
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Log Detail Modal */}
      {selectedLog && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate/90 backdrop-blur-md" onClick={() => setSelectedLog(null)}></div>
          <div className="bg-white w-full max-w-lg rounded-sm shadow-2xl relative z-10 overflow-hidden animate-menu-in">
            <div className="bg-slate p-6 md:p-8 text-white flex justify-between items-center border-b border-terracotta">
              <div className="flex items-center space-x-4">
                <History size={24} className="text-terracotta" />
                <h3 className="text-xl md:text-2xl font-serif font-bold">Log Details</h3>
              </div>
              <button onClick={() => setSelectedLog(null)} className="hover:rotate-90 transition-transform p-1">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 md:p-10 space-y-6 md:space-y-8">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1">
                  <label className="text-[8px] md:text-[9px] uppercase tracking-widest font-black text-slate/40 flex items-center gap-2">
                    <Hash size={10} /> Reference ID
                  </label>
                  <p className="text-[11px] md:text-xs font-mono font-bold text-slate bg-pearl/50 p-2 rounded-sm border border-sand/20">#{selectedLog.id}</p>
                </div>
                <div className="space-y-1">
                  <label className="text-[8px] md:text-[9px] uppercase tracking-widest font-black text-slate/40 flex items-center gap-2">
                    <Clock size={10} /> Timestamp
                  </label>
                  <p className="text-[11px] md:text-xs font-bold text-slate p-2">{selectedLog.timestamp}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1">
                  <label className="text-[8px] md:text-[9px] uppercase tracking-widest font-black text-slate/40 flex items-center gap-2">
                    <Users size={10} /> Team Entity
                  </label>
                  <div className="p-1">
                    <span className={`inline-block px-3 py-1 rounded-sm text-[9px] md:text-[10px] uppercase font-black tracking-widest ${normalize(selectedLog.team) === normalize(getTeamDisplay(activeTeam)) ? 'bg-terracotta text-white' : 'bg-slate/10 text-slate/60'}`}>
                      {selectedLog.team}
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[8px] md:text-[9px] uppercase tracking-widest font-black text-slate/40 flex items-center gap-2">
                    <Tag size={10} /> Event Action
                  </label>
                  <p className="text-[11px] md:text-xs font-black text-slate p-2">{selectedLog.action}</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-sand/20">
                <label className="text-[8px] md:text-[9px] uppercase tracking-widest font-black text-slate/40">Extended Narrative / Payload</label>
                <div className="bg-ivory/50 p-4 md:p-6 rounded-sm border border-sand/30 min-h-[100px] md:min-h-[120px]">
                  <p className="text-xs md:text-sm text-slate leading-relaxed font-serif italic">"{selectedLog.details}"</p>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => setSelectedLog(null)}
                  className="w-full bg-slate text-white py-4 uppercase tracking-widest text-[10px] font-black hover:bg-terracotta transition-all shadow-lg active:scale-95"
                >
                  Return to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffPortal;
