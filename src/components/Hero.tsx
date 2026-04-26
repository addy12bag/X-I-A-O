import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100dvh-6rem)] flex flex-col justify-center overflow-hidden"
    >
      {/* 3D Orb */}
      <motion.div
        style={{ y, opacity }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full orb-glow opacity-80 mix-blend-screen pointer-events-none"
      />

      <div className="container px-6 mx-auto flex-1 flex flex-col justify-center pt-20">
        {/* Top label row */}
        <div className="flex justify-between items-center mb-8 text-muted-foreground font-mono text-xs md:text-sm uppercase tracking-widest">
          <span className="text-primary">— PORTFOLIO / 2026</span>
          <span>FULL STACK & ML ENGINEER</span>
        </div>

        {/* Big name */}
        <div className="flex flex-col mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[12vw] leading-[0.85] tracking-tighter text-foreground"
          >
            SAYANTAN
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-end gap-6 mt-4 md:mt-6"
          >
            <h1 className="text-[12vw] leading-[0.85] tracking-tighter text-stroke-primary">
              BAG.
            </h1>
            <span className="font-mono text-sm md:text-base text-muted-foreground mb-4 hidden sm:block">
              — n. /səjantən/
            </span>
          </motion.div>
        </div>

        {/* Tagline + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end pb-10"
        >
          <div className="lg:col-span-2 max-w-2xl">
            <h2 className="text-2xl md:text-3xl text-foreground font-light tracking-tight mb-4">
              Engineering intelligence —{" "}
              <span className="text-primary">from pixels to parameters.</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
              Intelligent Automation · Robotics · Deep Learning. I build
              end-to-end platforms where machine learning, robotics and clean
              web interfaces meet.
            </p>
          </div>

          <div className="flex items-center gap-3 lg:justify-end">
            <button
              onClick={scrollToWork}
              className="px-5 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-[0_0_20px_hsl(var(--primary)/0.25)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.45)]"
            >
              view_work()
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://drive.google.com/file/d/1oUL-eF2YCTmOuWvnF6dXmFEuZ3Fxfj36/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border border-border text-foreground font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:border-primary/60 hover:text-primary transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              resume.pdf
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-auto pt-10 pb-8 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs md:text-sm text-muted-foreground"
        >
          <div className="flex flex-col gap-1">
            <span className="text-primary">* 01 /</span>
            <span className="text-foreground">
              Peak Model Accuracy{" "}
              <span className="font-display text-base md:text-lg">99%</span>
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-primary">* 02 /</span>
            <span className="text-foreground">
              ML Projects Shipped{" "}
              <span className="font-display text-base md:text-lg">04</span>
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-primary">* 03 /</span>
            <span className="text-foreground">
              DSA Problems Solved{" "}
              <span className="font-display text-base md:text-lg">100+</span>
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-primary">* 04 /</span>
            <span className="text-foreground">
              B.Tech CGPA{" "}
              <span className="font-display text-base md:text-lg">8.15</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
