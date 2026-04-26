import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Lead ML Engineer",
      company: "Nexus AI Lab",
      period: "2022 — Present",
      description: "Architected and deployed self-learning neural networks for real-time anomaly detection. Reduced false positives by 43% across all production environments.",
    },
    {
      role: "Robotics Control Systems Developer",
      company: "Automata Systems",
      period: "2020 — 2022",
      description: "Developed low-latency computer vision pipelines in Python and C++ to guide precision robotic arms for micro-assembly tasks. Achieved sub-10ms response times.",
    },
    {
      role: "Full Stack Developer",
      company: "Cognitive Solutions",
      period: "2018 — 2020",
      description: "Built end-to-end data processing dashboards using Java Spring Boot and React. Managed multi-terabyte PostgreSQL clusters to serve high-frequency analytics.",
    },
  ];

  return (
    <section id="experience" className="py-32 bg-background relative border-t border-white/5">
      <div className="container px-6 mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <div className="h-px bg-gradient-to-l from-secondary to-transparent flex-1" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Timeline.</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-secondary z-10" />
              <div className="absolute left-0 md:left-1/2 top-2 -translate-x-1/2 w-12 h-px bg-secondary/50" />

              <div className="w-full md:w-1/2 pl-8 md:pl-0 pt-2 text-left">
                <span className="font-mono text-sm text-secondary block mb-2">{exp.period}</span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-muted-foreground font-medium mb-4">{exp.company}</h4>
                <p className="text-muted-foreground/80 font-light text-sm leading-relaxed border border-white/5 p-4 bg-card/30 rounded-lg">
                  {exp.description}
                </p>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
