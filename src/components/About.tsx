
import { Button } from "@/components/ui/button";
import { User, Code, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-light mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-accent/50 rounded-lg p-6 border border-accent flex flex-col items-center text-center">
            <div className="bg-blue-dark/50 p-4 rounded-full mb-4">
              <User className="h-8 w-8 text-blue-light" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personal Info</h3>
            <p className="text-muted-foreground mb-4">
            AI & Data Science student with a passion for working with data analytics tool.
            </p>
            <ul className="text-sm text-left space-y-2 w-full">
              <li><span className="font-medium">Email:</span> akilesh69196@gmail.com</li>
              <li><span className="font-medium">Phone:</span> +91 9965377088</li>
              <li><span className="font-medium">Location:</span> Chennimalai, 638051</li>
              <li><span className="font-medium">Date of Birth:</span> 27.02.2004</li>
              <li><span className="font-medium">Nationality:</span> Indian</li>
            </ul>
          </div>
          
          <div className="bg-accent/50 rounded-lg p-6 border border-accent flex flex-col items-center text-center">
            <div className="bg-blue-dark/50 p-4 rounded-full mb-4">
              <Code className="h-8 w-8 text-blue-light" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Technical Focus</h3>
            <p className="text-muted-foreground mb-4">
              Passionate about building end-to-end applications with modern technologies and exploring data science solutions.
            </p>
            <ul className="text-sm text-left space-y-2 w-full">
              <li><span className="font-medium">Frontend:</span> HTML, CSS, JavaScript</li>
              <li><span className="font-medium">Backend:</span> Node.js, Express.js, MongoDB</li>
              <li><span className="font-medium">Data Analysis:</span> PowerBI, Python, SQL, Pyspark</li>
              <li><span className="font-medium">Other:</span> Docker, Machine Learning</li>
            </ul>
          </div>
          
          <div className="bg-accent/50 rounded-lg p-6 border border-accent flex flex-col items-center text-center">
            <div className="bg-blue-dark/50 p-4 rounded-full mb-4">
              <Briefcase className="h-8 w-8 text-blue-light" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Education Summary</h3>
            <p className="text-muted-foreground mb-4">
            Bachelor of Technology (B.Tech) in Artificial Intelligence and Data Science from Kongu Engineering College.
            </p>
            <ul className="text-sm text-left space-y-2 w-full">
              <li><span className="font-medium">CGPA:</span> 6.67</li>
              <li><span className="font-medium">HSC:</span> 87%</li>
              <li><span className="font-medium">SSLC:</span> 80%</li>
              <li><span className="font-medium">Key Interests:</span> Data Analysis,Backend Development</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 bg-accent/30 rounded-lg p-8 border border-accent">
          <h3 className="text-2xl font-semibold mb-4">My Background</h3>
          <p className="text-muted-foreground mb-4">
            I'm an AI & Data Science student at Kongu Engineering College, with a keen interest in backend development and data analytics.
            My academic journey began at Kongu Vellalar Matriculation Higher Secondary School where I built a strong foundation.
          </p>
          <p className="text-muted-foreground mb-4">
            Throughout my education, I've developed skills in various technologies including MongoDB, Express.js, Node.js, and Python.
            I'm particularly interested in combining web development with data science to create innovative applications.
          </p>
          <p className="text-muted-foreground mb-6">
            I'm currently looking for opportunities to apply my skills in real-world scenarios, focusing on projects that leverage
            both my programming abilities and analytical thinking.
          </p>
          <Button asChild>
            <a href="#education">View My Education</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
