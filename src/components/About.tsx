import { motion } from "framer-motion";

export default function About() {
  const education = [
    {
      degree: "M.Tech in Intelligent Automation and Robotics",
      institution: "Jadavpur University",
      period: "2025–Present",
      score: ""
    },
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Ramkrishna Mahato Government Engineering College, Purulia",
      period: "2021–2025",
      score: "CGPA 8.15"
    },
    {
      degree: "Higher Secondary",
      institution: "Vidyanagar Multi Purpose School, WB",
      period: "May 2021",
      score: "79.6%"
    },
    {
      degree: "Secondary",
      institution: "Vidyanagar Multi Purpose School, WB",
      period: "Mar 2019",
      score: "75%"
    }
  ];

  return (
    <section id="about" className="py-32 border-t border-border relative">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Bio */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 font-mono text-xl tracking-wider uppercase text-primary flex items-center gap-4"
            >
              <span>/about.bio</span>
              <div className="h-px bg-border/50 flex-1" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert prose-lg text-muted-foreground font-sans font-light leading-relaxed max-w-none"
            >
              <p>
                Full Stack & ML-focused developer with strong analytical and programming skills. Experienced in designing secure applications and optimizing workflows, with a deep interest in leveraging technology to enhance banking operations and customer services.
              </p>
              <p>
                I thrive at the intersection of elegant frontend architecture and robust machine learning pipelines, creating systems that are both intelligent and highly usable. My current focus is on intelligent automation and robotics, pushing the boundaries of what autonomous software can achieve.
              </p>
            </motion.div>

            {/* Profile Image and Button Group */}
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="shrink-0"
              >
                <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(37,99,235,0.2)] ring-2 ring-primary/30 bg-muted border-[6px] border-background">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                    alt="Sayantan Bag" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center sm:mt-8"
              >
                <a href="https://drive.google.com/file/d/1oUL-eF2YCTmOuWvnF6dXmFEuZ3Fxfj36/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-primary/10 border-2 border-primary text-primary font-mono text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-3 group">
                  resume.pdf <span className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Timeline & Signature */}
          <div className="lg:col-span-5 space-y-16">
            
            {/* Signature Block */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-border bg-card p-6 font-mono text-sm"
            >
              <div className="text-primary mb-4 uppercase tracking-widest border-b border-border/50 pb-2">stack_signature</div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex justify-between"><span className="text-foreground">Location</span> <span>Kolkata, WB · IND</span></li>
                <li className="flex justify-between"><span className="text-foreground">Focus</span> <span>ML / Full Stack / Auto</span></li>
                <li className="flex justify-between"><span className="text-foreground">Languages</span> <span>EN / BN / HI</span></li>
                <li className="flex justify-between"><span className="text-foreground">Status</span> <span className="text-green-500">Active</span></li>
              </ul>
            </motion.div>

            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="font-mono text-sm text-primary mb-8 uppercase tracking-widest flex items-center gap-4">
                <span>/education.log</span>
                <div className="h-px bg-border/50 flex-1" />
              </div>
              
              <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-border">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-3 h-3 bg-background border-2 border-primary rounded-none" />
                    <div className="font-mono text-xs text-primary mb-2 tracking-widest">{edu.period}</div>
                    <h4 className="text-foreground font-sans font-medium mb-1">{edu.degree}</h4>
                    <div className="text-sm text-muted-foreground mb-2">{edu.institution}</div>
                    {edu.score && (
                      <div className="inline-block px-2 py-1 border border-border bg-card text-xs font-mono text-muted-foreground">
                        {edu.score}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
