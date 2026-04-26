import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { GitHubLogoIcon as Github } from "@radix-ui/react-icons";

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      id: "01",
      title: "Arrhythmia Prediction",
      description: "Predictive machine learning model for detecting arrhythmias from cardiovascular data, enabling early diagnosis and intervention.",
      image: "/images/project-1.png",
      tags: ["Python", "Machine Learning", "Data Science"],
      color: "primary",
      github: "https://github.com/addy12bag/Arrhythmia-Prediction-"
    },
    {
      id: "02",
      title: "Smart Grievance Analyzer",
      description: "An intelligent system designed to automatically analyze, categorize, and prioritize public or customer grievances using Natural Language Processing.",
      image: "/images/project-2.png",
      tags: ["Python", "NLP", "Machine Learning"],
      color: "secondary",
      github: "https://github.com/addy12bag/Smart-Grievance-Analyzer-"
    },
    {
      id: "03",
      title: "Weather Classification CNN",
      description: "A Multi-Class Convolutional Neural Network (CNN) architecture developed for accurately classifying complex weather conditions from image data.",
      image: "/images/project-3.png",
      tags: ["Python", "Deep Learning", "CNN", "TensorFlow"],
      color: "primary",
      github: "https://github.com/addy12bag/Multi-Class-Weather-Classification_CNN"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background relative" ref={containerRef}>
      <div className="container px-6 mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Systems Log.</h2>
          <div className="h-px bg-gradient-to-r from-primary to-transparent flex-1" />
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isEven={isEven} 
                index={index} 
                scrollYProgress={scrollYProgress} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, isEven, index, scrollYProgress }: any) {
  // Parallax effect for images
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
    >
      {/* Image Container */}
      <div className="w-full lg:w-3/5 overflow-hidden rounded-xl border border-white/10 relative bg-card aspect-[16/9]">
        <motion.div 
          style={{ y }} 
          className="absolute inset-[-10%] w-[120%] h-[120%]"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700"
            loading="lazy"
          />
        </motion.div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="w-full lg:w-2/5 flex flex-col">
        <div className="font-mono text-sm text-muted-foreground mb-4 flex items-center gap-4">
          <span className={`text-${project.color}`}>[{project.id}]</span>
          <div className="h-px bg-white/20 flex-1" />
        </div>

        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-lg text-muted-foreground font-light mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-white/80">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {project.demo && project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-secondary transition-colors">
            <Github className="w-4 h-4" /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
