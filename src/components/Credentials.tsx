import { motion } from "framer-motion";

export default function Credentials() {
  const certifications = [
    { id: "01", title: "Supervised Machine Learning", issuer: "Coursera", period: "Feb 2024 to May 2024", link: "https://www.coursera.org/account/accomplishments/verify/4TC3P83Z9NFM?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" },
    { id: "02", title: "Data Analyst Bootcamp", issuer: "Udemy", period: "Feb 2025 to May 2025", link: "https://www.udemy.com/certificate/UC-7627d1dc-1a74-4d88-bb69-042ccf8370b5/" },
    { id: "03", title: "Computer Vision", issuer: "Infosys Springboard", period: "Jan 2026 to Feb 2026", link: "https://drive.google.com/file/d/1R7yVjm28WzpaGQl7gvpoyMYJ6DjNb-p2/view?usp=sharing" }
  ];

  const achievements = [
    { id: "01", title: "SVMCM Scholarship Recipient", issuer: "Govt of West Bengal", period: "4 Years" },
    { id: "02", title: "100+ problems in C++", issuer: "Code360", period: "Ongoing" }
  ];

  return (
    <section id="credentials" className="py-32 border-t border-border relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col mb-16">
          <span className="font-mono text-primary text-sm uppercase tracking-widest mb-4">/auth.records</span>
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight text-foreground">
            Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="font-mono text-primary text-sm mb-2">{'>'} certifications</div>
            <div className="border border-border bg-card overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-border font-mono text-[10px] text-muted-foreground uppercase tracking-widest bg-muted/30">
                <div className="col-span-2">ID</div>
                <div className="col-span-6">TITLE</div>
                <div className="col-span-4 text-right">ISSUER</div>
              </div>
              <div className="flex flex-col">
                {certifications.map((cert) => (
                  <div key={cert.id} className="grid grid-cols-12 gap-4 p-4 border-b border-border/50 last:border-0 font-mono text-xs hover:bg-border/20 transition-colors">
                    <div className="col-span-2 text-primary">{cert.id}</div>
                    <div className="col-span-6 text-foreground truncate" title={cert.title}>
                      {cert.link ? (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1.5">
                          {cert.title} <span className="text-[9px] mt-0.5">↗</span>
                        </a>
                      ) : (
                        cert.title
                      )}
                    </div>
                    <div className="col-span-4 text-muted-foreground text-right truncate" title={cert.issuer}>{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="font-mono text-primary text-sm mb-2">{'>'} achievements</div>
            <div className="border border-border bg-card overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-border font-mono text-[10px] text-muted-foreground uppercase tracking-widest bg-muted/30">
                <div className="col-span-2">ID</div>
                <div className="col-span-6">TITLE</div>
                <div className="col-span-4 text-right">ISSUER</div>
              </div>
              <div className="flex flex-col">
                {achievements.map((ach) => (
                  <div key={ach.id} className="grid grid-cols-12 gap-4 p-4 border-b border-border/50 last:border-0 font-mono text-xs hover:bg-border/20 transition-colors">
                    <div className="col-span-2 text-primary">{ach.id}</div>
                    <div className="col-span-6 text-foreground truncate" title={ach.title}>{ach.title}</div>
                    <div className="col-span-4 text-muted-foreground text-right truncate" title={ach.issuer}>{ach.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
