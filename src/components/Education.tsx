
import { BookOpen } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  achievements?: string[];
}

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "B.Tech - Artificial Intelligence and Data Science",
      institution: "Kongu Engineering College",
      duration: "August 2021 - April 2025",
      location: "Erode",
      description: "Bachelor's degree in Artificial Intelligence and Data Science.",
      achievements: [
        "CGPA: 6.67/10",
        "Focusing on AI, Machine Learning, and Data Science concepts",
        "Developing projects in web development and data analysis"
      ]
    },
    {
      degree: "SSLC And HSC",
      institution: "Kongu Vellalar Matriculation Higher Secondary School",
      duration: "May 2019 - April 2021",
      location: "Erode",
      description: "Completed Higher Secondary Education with computer science stream.",
      achievements: [
        "HSC Score: 87%",
        "SSLC Score: 80%",
        "Completed Higher Secondary Education with a focus on Computer Science, gaining a strong foundation in programming"
      ]
    }
  ];

  const certifications = [
    "Getting Started with PySpark and RDDs",
    "Docker Foundation",
    "Deloitte Australia - Data Analytics Job Simulation",
    "Microsoft Power BI Desktop and Service"
  ];

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-blue-light mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            My academic background and professional certifications that have shaped my expertise.
          </p>
        </div>

        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-accent/30 rounded-lg p-6 border border-accent"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-blue-dark/50 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-blue-light" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="text-muted-foreground">{item.institution}</p>
                </div>
                
                <div className="md:ml-auto text-right">
                  <span className="text-blue-light font-medium">{item.duration}</span>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{item.description}</p>
              
              {item.achievements && (
                <div>
                  <h4 className="font-medium mb-2">Key Achievements & Coursework</h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className="min-w-[8px] h-2 w-2 mt-1.5 mr-2 rounded-full bg-blue-light"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent/20 rounded-lg p-6 border border-accent">
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center p-4 bg-muted/30 rounded-md border border-muted"
              >
                <div className="h-8 w-8 rounded-full bg-blue-dark/50 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-light">
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                    <path d="M7 7h.01"></path>
                  </svg>
                </div>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
