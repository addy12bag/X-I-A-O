import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minus, Square } from "lucide-react";

export default function SystemStatus() {
  const [isVisible, setIsVisible] = useState(() => {
    // Collapsed by default on mobile, expanded on desktop
    if (typeof window !== "undefined") {
      return window.innerWidth >= 640; // sm breakpoint
    }
    return true;
  });
  const [time, setTime] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [githubRepos, setGithubRepos] = useState("...");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeOpts: Intl.DateTimeFormatOptions = { 
        timeZone: "Asia/Kolkata", hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false
      };
      const dateOpts: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata", weekday: 'short', month: 'short', day: 'numeric'
      };
      setTime(now.toLocaleTimeString('en-US', timeOpts));
      setDateStr(now.toLocaleDateString('en-US', dateOpts));
    }, 1000);

    // Fetch GitHub Repos
    fetch("https://api.github.com/users/addy12bag")
      .then(res => res.json())
      .then(data => {
        if (data.public_repos !== undefined) {
          setGithubRepos(data.public_repos.toString());
        } else {
          setGithubRepos("ERR");
        }
      })
      .catch(() => setGithubRepos("ERR"));

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) {
    return (
      <button 
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 left-6 z-50 w-10 h-10 bg-card border border-border flex items-center justify-center text-primary hover:bg-primary/10 transition-colors rounded-sm"
      >
        <Terminal className="w-5 h-5" />
      </button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-4 left-4 z-50 w-60 sm:w-72 bg-card border border-border/80 shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
      >
        {/* Header */}
        <div className="h-8 bg-muted border-b border-border/80 flex items-center justify-between px-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span className="font-mono text-[10px] text-foreground tracking-widest uppercase">SYSTEM.STATUS</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Minus className="w-3 h-3 cursor-not-allowed" />
            <Square className="w-3 h-3 cursor-not-allowed" />
            <X className="w-3.5 h-3.5 cursor-pointer hover:text-destructive" onClick={() => setIsVisible(false)} />
          </div>
        </div>

        {/* Body */}
        <div className="p-4 font-mono text-xs flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground uppercase">Status</span>
            <span className="flex items-center gap-1.5 text-green-500">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              ONLINE
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground uppercase">Time (IST)</span>
            <span className="text-primary">{time || "00:00:00"}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground uppercase">Date</span>
            <span className="text-foreground">{dateStr || "---"}</span>
          </div>

          <div className="h-px bg-border/50 my-1" />

          <div className="flex justify-between items-center">
            <span className="text-muted-foreground uppercase">Network</span>
            <span className="text-foreground">STABLE</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground uppercase">GH Repos</span>
            <span className="text-primary">{githubRepos}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground uppercase">DL Type</span>
            <span className="text-foreground">NEURAL</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
