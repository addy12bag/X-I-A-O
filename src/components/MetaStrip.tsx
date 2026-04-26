import { useEffect, useState } from "react";

export default function MetaStrip() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Format as IST
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: "Asia/Kolkata",
        hour: '2-digit', 
        minute:'2-digit', 
        second:'2-digit',
        hour12: false
      };
      setTime(now.toLocaleTimeString('en-US', options));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full border-b border-border/50 bg-background/80 backdrop-blur-md hidden md:block">
      <div className="container mx-auto px-6 h-8 flex items-center justify-between font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
        <div className="flex items-center gap-8">
          <span>01 span / Counter</span>
          <span className="text-primary/70">alignment_ portfolio.v3</span>
        </div>
        <div className="flex items-center gap-8">
          <span>locale_ IST · {time || "00:00:00"}</span>
          <span className="flex items-center gap-2 text-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities · 2026
          </span>
        </div>
      </div>
    </div>
  );
}
