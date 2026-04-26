import { motion } from "framer-motion";
import { Layers, Zap, ShieldAlert, Cpu } from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Full-Stack Architecture",
      description: "End-to-end system design spanning highly concurrent backend services in Java/Node to resilient, interactive frontend applications using React and Next.js."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Automation",
      description: "Developing event-driven automation pipelines capable of processing thousands of inputs per second, triggering self-healing scripts and autonomous actions."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Machine Learning Integration",
      description: "Not just training models, but deploying them into production. Wrapping complex deep learning models into accessible APIs and low-latency inference endpoints."
    },
    {
      icon: <ShieldAlert className="w-6 h-6" />,
      title: "Robotics Control",
      description: "Writing embedded control software and computer vision interfaces that translate environmental data into precise mechanical actions in physical space."
    }
  ];

  return (
    <section className="py-24 bg-card/20 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4"
          >
            System <span className="text-primary">Capabilities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground font-light max-w-2xl mx-auto"
          >
            Comprehensive technical coverage from hardware interfaces to cloud infrastructure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-white/5 p-8 rounded-xl hover:border-primary/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {cap.icon}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">{cap.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
