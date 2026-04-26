import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    { id: "languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "C/C++", "SQL"] },
    { id: "frontend", skills: ["React", "HTML5", "CSS3", "TailwindCSS", "Responsive Design"] },
    { id: "backend", skills: ["Node.js", "PostgreSQL", "MongoDB"] },
    { id: "ml_ai", skills: ["TensorFlow", "PyTorch", "Scikit-learn", "CNN", "RNN", "Computer Vision"] },
    { id: "tools", skills: ["Git", "GitHub", "Data Science", "Deep Learning", "Matlab", "Excel", "Power BI"] }
  ];

  return (
    <section id="skills" className="py-32 border-t border-border relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col mb-16">
          <span className="font-mono text-primary text-sm uppercase tracking-widest mb-4">/system.capabilities</span>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-foreground">
            Technical Stack
          </h2>
        </div>

        <div className="bg-card border border-border p-6 md:p-12 font-mono">
          <div className="text-muted-foreground text-sm mb-8 flex items-center gap-2 border-b border-border pb-4">
            <span className="w-2.5 h-2.5 bg-primary rounded-none animate-pulse" />
            <span>root@sayantan:~/skills$ ls -la</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="text-primary text-sm flex items-center gap-2">
                  <span className="text-muted-foreground">{'>'}</span> {cat.id}
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-background border border-border text-xs text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
