import { GitHubLogoIcon as Github, LinkedInLogoIcon as Linkedin } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border font-mono text-xs text-muted-foreground">
      <div className="container mx-auto px-6 h-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} sayantan.bag
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/addy12bag" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/sayantanbag16/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        <div>
          built with care · v3.0
        </div>
      </div>
    </footer>
  );
}
