import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { GitHubLogoIcon as Github } from "@radix-ui/react-icons";

const metrics = [
  { id: "01", label: "Peak Model Accuracy", value: "99%", sub: "weather_cnn.val" },
  { id: "02", label: "ML Projects Shipped", value: "04", sub: "production.ready" },
  { id: "03", label: "Lines of Python", value: "12K+", sub: "across_pipelines" },
  { id: "04", label: "Avg. Model F1", value: "0.94", sub: "classification" },
  { id: "05", label: "Datasets Processed", value: "07", sub: "img · audio · ecg" },
  { id: "06", label: "Years Coding", value: "05", sub: "since_2021" },
];

const experience = [
  {
    role: "Video Editor",
    company: "CARQ Content Design Team",
    period: "Feb 2023 — Dec 2023",
    location: "Remote · India",
    status: "ARCHIVED",
    bullets: [
      "Created engaging visual content for college events and marketing campaigns.",
      "Developed creative storytelling through video editing and design.",
      "Collaborated with the design team to ship time-bound deliverables.",
    ],
    stack: ["Premiere Pro", "After Effects", "Photoshop", "Storytelling"],
    stats: [
      { value: "20+", label: "Edits Shipped" },
      { value: "11mo", label: "Tenure" },
      { value: "100%", label: "On-time" },
    ],
  },
];

const projects = [
  {
    id: "01",
    title: "LungDisease Classification System",
    date: "Sep 2024 — Jun 2025",
    status: "COMPLETED",
    description:
      "Deep learning solution for chest X-ray and audio analysis. 96.7% image accuracy, 91% audio accuracy. Integrated LLM for clinical insights generation and enhanced result interpretability.",
    image: `${import.meta.env.BASE_URL}images/project-1.png`,
    tags: ["Python", "TensorFlow", "Deep Learning", "CV"],
    github: "https://github.com/addy12bag",
    stats: [
      { value: "96.7%", label: "Image Acc" },
      { value: "91%", label: "Audio Acc" },
      { value: "LLM", label: "Clinical AI" },
    ],
  },
  {
    id: "02",
    title: "Smart Grievance Analyzer",
    date: "Jan 2026",
    status: "COMPLETED",
    description:
      "NLP-based system to classify and prioritize citizen complaints with 97% accuracy, integrated into a Chrome extension for real-time analysis.",
    image: `${import.meta.env.BASE_URL}images/project-2.png`,
    tags: ["Python", "Scikit-learn", "Flask", "JS"],
    github: "https://github.com/addy12bag/Smart-Grievance-Analyzer-",
    stats: [
      { value: "97%", label: "Accuracy" },
      { value: "Real-Time", label: "Inference" },
      { value: "Chrome", label: "Extension" },
    ],
  },
  {
    id: "03",
    title: "Arrhythmia Prediction System",
    date: "Dec 2025",
    status: "COMPLETED",
    description:
      "Hybrid ML–DL pipeline for arrhythmia classification on the MIT-BIH dataset. 97% (ML) and 93% (CNN) accuracy. ECG preprocessing and feature engineering.",
    image: `${import.meta.env.BASE_URL}images/project-3.png`,
    tags: ["PyTorch", "Keras", "Signal Processing"],
    github: "https://github.com/addy12bag/Arrhythmia-Prediction-",
    stats: [
      { value: "97%", label: "ML Acc" },
      { value: "93%", label: "CNN Acc" },
      { value: "MIT-BIH", label: "Dataset" },
    ],
  },
  {
    id: "04",
    title: "Weather Classification System",
    date: "Nov 2025",
    status: "COMPLETED",
    description:
      "Multi-class weather image classification with CNN in PyTorch — ~99% validation accuracy across Shine, Cloudy, Rain, Sunrise. Data augmentation, real-time monitoring.",
    image: `${import.meta.env.BASE_URL}images/project-4.png`,
    tags: ["PyTorch", "torchvision", "NumPy"],
    github: "https://github.com/addy12bag/Multi-Class-Weather-Classification_CNN",
    stats: [
      { value: "99%", label: "Val Acc" },
      { value: "04", label: "Classes" },
      { value: "GPU", label: "Accelerated" },
    ],
  },
];

function MetricBox({
  id,
  label,
  value,
  sub,
  index,
}: {
  id: string;
  label: string;
  value: string;
  sub: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative border border-border bg-card/40 p-5 hover:border-primary/60 transition-colors"
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
        <span className="text-primary">* {id}</span>
        <span>{label}</span>
      </div>
      <div className="font-display text-4xl md:text-5xl text-foreground tracking-tight tabular-nums">
        {value}
      </div>
      <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {sub}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-primary/0 group-hover:bg-primary/60 transition-colors" />
    </motion.div>
  );
}

export default function Work() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    skipSnaps: false,
    align: "center",
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      id="work"
      className="py-32 border-t border-border overflow-hidden"
    >
      <div className="container px-6 mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col">
            <span className="font-mono text-primary text-sm uppercase tracking-widest mb-4">
              /work.dir
            </span>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-foreground">
              Work
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs uppercase tracking-widest text-muted-foreground">
            experience · case_files · metrics
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mb-24">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-4">
            <span>// build_metrics</span>
            <span>06 entries</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {metrics.map((m, i) => (
              <MetricBox key={m.id} {...m} index={i} />
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-8">
            <div className="flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="font-mono text-primary text-sm uppercase tracking-widest">
                /experience.log
              </span>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              01 entry
            </span>
          </div>

          {experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-border bg-card/40 group hover:border-primary/40 transition-colors"
            >
              {/* Header bar */}
              <div className="px-6 py-3 border-b border-border bg-muted/20 font-mono text-[11px] uppercase tracking-widest flex items-center justify-between">
                <span className="text-primary">EXP_0{idx + 1}</span>
                <span className="text-muted-foreground hidden sm:inline">
                  full-time · creative
                </span>
                <span className="px-2 py-0.5 border border-border text-muted-foreground">
                  {exp.status}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Left: role */}
                <div className="lg:col-span-2 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-border">
                  <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight text-foreground">
                    {exp.role}
                  </h3>
                  <div className="mt-2 font-mono text-sm text-primary">
                    @ {exp.company}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm text-muted-foreground font-light leading-relaxed"
                      >
                        <span className="text-primary font-mono text-xs mt-1">
                          ▸
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-dashed border-border flex flex-wrap gap-x-4 gap-y-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        #{s.replace(/\s+/g, "_")}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: stats */}
                <div className="grid grid-cols-3 lg:grid-cols-1">
                  {exp.stats.map((s, i) => (
                    <div
                      key={s.label}
                      className={`p-6 lg:p-8 ${i !== exp.stats.length - 1 ? "border-r lg:border-r-0 lg:border-b border-border" : ""}`}
                    >
                      <div className="font-display text-3xl lg:text-4xl text-foreground tabular-nums">
                        {s.value}
                      </div>
                      <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CASE FILES / PROJECTS CAROUSEL */}
        <div className="flex items-end justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-primary text-sm uppercase tracking-widest">
              /case_files.dir
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 font-mono text-sm">
            <span className="text-muted-foreground tabular-nums">
              {(selectedIndex + 1).toString().padStart(2, "0")} /{" "}
              {projects.length.toString().padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="px-4 py-2 border border-border hover:bg-border/50 hover:text-primary transition-colors uppercase text-xs"
              >
                Prev
              </button>
              <button
                onClick={scrollNext}
                className="px-4 py-2 border border-border hover:bg-border/50 hover:text-primary transition-colors uppercase text-xs"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={emblaRef}
          >
            <div className="flex backface-hidden touch-pan-y">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="min-w-0 flex-[0_0_100%] transform-gpu px-1"
                >
                  <motion.div
                    className="h-full flex flex-col border border-border bg-card group"
                    initial={{ opacity: 0.6 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Metadata Header */}
                    <div className="px-6 py-3 border-b border-border font-mono text-[11px] uppercase tracking-widest flex justify-between items-center bg-muted/20">
                      <span className="text-primary">
                        PROJECT_{project.id}
                      </span>
                      <span className="text-muted-foreground hidden sm:inline">
                        {project.date}
                      </span>
                      <span
                        className={`px-2 py-0.5 border ${project.status === "ACTIVE" ? "border-green-500 text-green-500" : "border-border text-muted-foreground"}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      {/* Cover Image */}
                      <div className="lg:col-span-3 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-border p-6 bg-background">
                        <div className="aspect-[16/10] lg:aspect-auto lg:h-full relative border border-primary/20 group-hover:border-primary/50 transition-colors">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover mix-blend-screen opacity-80 group-hover:opacity-100 transition-all duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors" />
                          <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-primary">
                            ▸ frame_{project.id}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2 p-6 md:p-8 flex flex-col">
                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 sm:hidden">
                          {project.date}
                        </div>
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase tracking-tight text-foreground mb-5 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-sans font-light text-sm md:text-base leading-relaxed mb-6 flex-1">
                          {project.description}
                        </p>

                        {/* Stat boxes */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                          {project.stats.map((s) => (
                            <div
                              key={s.label}
                              className="border border-border p-3 bg-background/40"
                            >
                              <div className="font-display text-xl md:text-2xl text-primary tabular-nums leading-none">
                                {s.value}
                              </div>
                              <div className="mt-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                                {s.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-border border-dashed flex flex-wrap gap-x-3 gap-y-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider"
                            >
                              #{tag.replace(/\s+/g, "_")}
                            </span>
                          ))}
                        </div>
                        
                        {project.github && (
                          <div className="mt-5">
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                              <Github className="w-3.5 h-3.5" /> View Source
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Prev/Next */}
          <button
            onClick={scrollPrev}
            aria-label="Previous project"
            className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center border border-border bg-background/80 backdrop-blur hover:border-primary/60 hover:text-primary transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next project"
            className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center border border-border bg-background/80 backdrop-blur hover:border-primary/60 hover:text-primary transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots + counter */}
        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-1.5 transition-all ${
                  i === selectedIndex
                    ? "w-10 bg-primary"
                    : "w-6 bg-border hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-xs text-muted-foreground tabular-nums">
            {(selectedIndex + 1).toString().padStart(2, "0")} /{" "}
            {projects.length.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
