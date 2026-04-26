import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import { GitHubLogoIcon as Github, LinkedInLogoIcon as Linkedin } from "@radix-ui/react-icons";
import { Link } from "wouter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: "Asia/Kolkata", hour: '2-digit', minute:'2-digit', second:'2-digit', hour12: false
      };
      setTime(now.toLocaleTimeString('en-US', options));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const links = [
    { id: "00", name: "home", href: "#home" },
    { id: "01", name: "about", href: "#about" },
    { id: "02", name: "work", href: "#work" },
    { id: "03", name: "skills", href: "#skills" },
    { id: "04", name: "credentials", href: "#credentials" },
    { id: "05", name: "contact", href: "#contact" },
  ];

  return (
    <header className="w-full bg-background border-b border-border/50 z-50 sticky top-0">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group font-mono text-sm md:text-base text-foreground font-bold tracking-tight">
          <ChevronRight className="w-4 h-4 text-primary" />
          <span>~/sayantan.bag</span>
          <span className="w-2 h-4 bg-primary animate-pulse ml-1" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative group"
            >
              <span className="text-primary mr-1">{link.id}.</span>{link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="px-3 py-1 bg-card border border-border rounded font-mono text-xs text-primary flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            IST {time || "00:00:00"}
          </div>
          
          <div className="flex items-center gap-2">
            <a href="https://github.com/addy12bag" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-border rounded hover:bg-white/5 hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/sayantanbag16" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center border border-border rounded hover:bg-white/5 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <a href="#contact" className="px-4 py-2 bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest rounded hover:bg-primary/90 transition-colors flex items-center gap-2">
            hire_me() <span className="text-[10px]">↗</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-background border-b border-border/50 px-6 py-4 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <span className="text-primary">{link.id}.</span> {link.name}
            </a>
          ))}
          <div className="h-px bg-border/50 my-2" />
          <div className="flex items-center justify-between">
            <a href="#contact" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-primary text-primary-foreground font-mono text-xs font-bold uppercase tracking-widest rounded text-center inline-block">
              hire_me() ↗
            </a>
            <div className="flex gap-2">
              <a href="https://github.com/addy12bag" target="_blank" rel="noopener noreferrer" className="p-2 border border-border rounded text-muted-foreground">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/sayantanbag16" target="_blank" rel="noopener noreferrer" className="p-2 border border-border rounded text-muted-foreground">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
