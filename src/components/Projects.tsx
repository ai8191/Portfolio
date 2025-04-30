
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  highlights: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Guest Room Booking",
      description: "Created a back-end page for Guest room booking web app, which enables the user to apply for the rooms.",
      technologies: ["MongoDB", "Express.js", "Node.js", "Docker"],
      githubUrl: "https://github.com/akil555/guest_room_booking",
      highlights: [
        "Developed RESTful API for room booking operations",
        "Implemented user authentication and authorization",
        "Created database models for room and booking management",
        "Containerized the application using Docker for easy deployment"
      ]
    },
    {
      title: "Movies Details Website",
      description: "An online platform where users can browse and search for details about movies, including release dates, cast and crew information, ratings.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/akil555/Movie_details_website",
      liveUrl: "https://moviedetailsweb.netlify.app/",
      highlights: [
        "Created responsive user interface for movie browsing",
        "Implemented search functionality for finding movies",
        "Designed detailed movie information pages",
        "Built intuitive navigation system for better user experience"
      ]
    },
    {
      title: "T20 Men's World Cup Analysis",
      description: "Created interactive dashboards using PowerBI to visualize and analyze player performance metrics, enabling data-driven insights for match strategies.",
      technologies: ["PowerBI", "Data Analysis", "Visualization"],
      githubUrl: "https://github.com/akil555/T20-Mens-World-Cup",
      highlights: [
        "Analyzed player performance data across tournament matches",
        "Created interactive visualizations for key metrics",
        "Designed comprehensive dashboards for strategic insights",
        "Implemented filters for customized data views"
      ]
    },
    {
      title: "Object Detection System",
      description: "Developed an object detection system using PyTorch's Faster R-CNN model, leveraging OpenCV for bounding box annotations. Deployed the model via a Gradio interface on Hugging Face Spaces.",
      technologies: ["Python", "PyTorch", "OpenCV", "Gradio", "Hugging Face"],
      liveUrl: "https://huggingface.co/spaces/spyderkec/object-detection-backend",
      highlights: [
        "Implemented Faster R-CNN model for accurate object detection",
        "Used OpenCV for image processing and annotations",
        "Built user-friendly interface with Gradio for easy interaction",
        "Successfully deployed the model on Hugging Face Spaces platform"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-light mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Explore some of my projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-accent/30 rounded-lg border border-accent overflow-hidden flex flex-col h-full"
            >
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <div className="min-w-[8px] h-2 w-2 mt-1.5 mr-2 rounded-full bg-blue-light"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center p-4 border-t border-accent bg-muted/30">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size="sm" asChild className={!project.githubUrl ? "ml-auto" : ""}>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            These are just a few examples of my work. Check out my GitHub for more projects.
          </p>
          <Button asChild>
            <a href="https://github.com/akil555" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" /> See More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
