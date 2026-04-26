import { motion } from "framer-motion";
import { Copy, Mail, Phone, Send } from "lucide-react";
import { GitHubLogoIcon as Github, LinkedInLogoIcon as Linkedin } from "@radix-ui/react-icons";
import { useState } from "react";

const EMAIL = "sayantanbag24@gmail.com";
const PHONE_DISPLAY = "+91 70447 87876";
const PHONE_RAW = "+917044787876";
const GITHUB = "https://github.com/addy12bag";
const LINKEDIN = "https://www.linkedin.com/in/sayantanbag16/";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setStatus("loading");
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          access_key: "0de35d18-d06f-4c6f-918e-9661d9724d29",
          name, 
          email, 
          message 
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 border-t border-border relative"
    >
      <div className="container px-6 mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-primary text-sm">05</span>
          <span className="block w-10 h-px bg-primary" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Contact
          </span>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display tracking-tight text-foreground max-w-4xl"
        >
          Let&rsquo;s build something{" "}
          <span className="text-primary inline-flex items-center gap-3">
            remarkable together.
            <Send className="hidden md:inline-block w-8 h-8 lg:w-10 lg:h-10 -rotate-12 text-primary" />
          </span>
        </motion.h2>

        {/* Status row */}
        <div className="mt-10 mb-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-muted-foreground border-b border-border pb-6">
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-primary" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <span className="hidden sm:inline-block w-px h-3 bg-border" />
          <span className="flex items-center gap-2">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-green-500" />
            </span>
            Open to opportunities · 2026
          </span>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT */}
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground font-light leading-relaxed max-w-md">
              I&rsquo;m currently open to senior full-stack, ML, and robotics
              roles, plus high-impact freelance collaborations. Drop a line
              &mdash; I respond within 24 hours.
            </p>

            {/* Email card */}
            <div className="border border-border bg-card/40 p-5 flex items-center gap-4 group hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 flex items-center justify-center border border-border bg-muted/30">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  email
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="block font-mono text-base md:text-lg text-foreground truncate hover:text-primary transition-colors"
                >
                  {EMAIL}
                </a>
              </div>
              <button
                onClick={onCopyEmail}
                aria-label="Copy email"
                className="w-9 h-9 flex items-center justify-center border border-border hover:border-primary/60 hover:text-primary transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Socials card */}
            <div className="border border-border bg-card/40 p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
                ./socials
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 flex items-center justify-center border border-border hover:border-primary/60 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center border border-border hover:border-primary/60 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${PHONE_RAW}`}
                  aria-label="Phone"
                  className="w-11 h-11 flex items-center justify-center border border-border hover:border-primary/60 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Code-style status block */}
            <div className="border border-border bg-card/40 p-5 font-mono text-xs leading-relaxed">
              <span className="text-muted-foreground">const </span>
              <span className="text-foreground">status</span>
              <span className="text-muted-foreground"> = </span>
              <span className="text-foreground">{"{"}</span>
              <br />
              <span className="pl-4">
                <span className="text-primary">availability</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-green-400">&quot;open&quot;</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="text-primary">response</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-green-400">&quot;under 24h&quot;</span>
                <span className="text-muted-foreground">,</span>{" "}
                <span className="text-primary">timezone</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-green-400">
                  &quot;IST (UTC+5:30)&quot;
                </span>
                <span className="text-muted-foreground">,</span>
              </span>
              <br />
              <span className="text-foreground">{"}"}</span>
              <span className="text-muted-foreground">;</span>
            </div>

            {copied && (
              <div className="font-mono text-[11px] text-primary uppercase tracking-widest">
                ▸ email copied to clipboard
              </div>
            )}
          </div>

          {/* RIGHT - form */}
          <form
            onSubmit={onSubmit}
            className="border border-border bg-card/40 p-6 md:p-8 flex flex-col"
          >
            <div className="font-mono text-sm text-primary mb-8">
              <span className="text-muted-foreground">&gt; </span>
              send_message()
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                >
                  name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="your name"
                  className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-2 font-sans text-foreground placeholder:text-muted-foreground/50 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
                >
                  email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-2 font-sans text-foreground placeholder:text-muted-foreground/50 transition-colors"
                />
              </div>
            </div>

            <div className="mb-8 flex-1">
              <label
                htmlFor="message"
                className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
              >
                message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) =>
                  e.target.value.length <= 500 && setMessage(e.target.value)
                }
                placeholder="tell me about your project..."
                rows={6}
                className="w-full bg-transparent border-0 border-b border-border focus:border-primary outline-none py-2 font-sans text-foreground placeholder:text-muted-foreground/50 resize-none transition-colors"
              />
            </div>

            <div className="flex items-center justify-between mt-auto">
              <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                {message.length}/500
              </span>
              <div className="flex items-center gap-4">
                {status === "error" && (
                  <span className="font-mono text-[11px] text-red-500 uppercase tracking-widest">
                    failed to send
                  </span>
                )}
                {status === "success" && (
                  <span className="font-mono text-[11px] text-green-500 uppercase tracking-widest">
                    message sent!
                  </span>
                )}
                <button
                  type="submit"
                  disabled={status === "loading" || !name || !email || !message}
                  className="px-5 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest inline-flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-[0_0_20px_hsl(var(--primary)/0.25)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.45)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "sending..." : "send_message"}
                  {status !== "loading" && <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
