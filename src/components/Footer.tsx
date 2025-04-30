
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent py-10">
      <div className="container-custom">
        <div className="flex flex-col items-center md:flex-row md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">
              <span className="text-blue-light">A</span>kilesh T
            </h2>
            <p className="text-muted-foreground">
              AI & Data Science Student
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/akil555"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted/30 p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/akilesh-thangaraj-071b9a250"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted/30 p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:akilesh69196@gmail.com"
              className="bg-muted/30 p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-muted pt-8 flex flex-col md:flex-row items-center md:justify-between text-sm">
          <p className="text-muted-foreground">
            &copy; {currentYear} Akilesh K. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#about" className="text-muted-foreground hover:text-primary">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
