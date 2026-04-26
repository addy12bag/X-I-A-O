import { Link } from "wouter";
import { motion } from "framer-motion";
import { TerminalSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-50 z-0 mix-blend-screen" />
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-card flex items-center justify-center border border-border mx-auto">
            <TerminalSquare className="w-10 h-10 text-primary" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-8xl md:text-9xl font-display tracking-tight text-foreground mb-4"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base text-muted-foreground font-mono uppercase tracking-widest mb-10"
        >
          Entity Not Found // Error
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/" className="px-8 py-4 bg-primary text-primary-foreground font-mono text-sm font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors inline-flex items-center gap-3">
            return_to_core()
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
