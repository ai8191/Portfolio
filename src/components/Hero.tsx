import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg md:text-xl text-blue-light font-medium">
                Hello, I'm
              </h2>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Akilesh T
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
                AI & Data Science Student
              </h2>
            </div>

            <p className="text-muted-foreground max-w-xl mx-auto md:mx-0">
              Motivated and detail-oriented professional seeking an opportunity
              to apply my skills in industry. Eager to contribute through hard
              work, adaptability, and a passion for learning while growing within a
              collaborative team.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <a 
                href="https://github.com/akil555" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/akilesh-thangaraj-071b9a250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:akilesh69196@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* 3D Animation */}
          <div className="w-full h-80 sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden hidden md:block">
            <Spline 
              scene="https://prod.spline.design/61dBhbWCc-mjnHOf/scene.splinecode" 
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
