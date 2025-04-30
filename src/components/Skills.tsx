
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const skillCategories = [
    {
      name: "Web Development",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      name: "Data Science",
      skills: [
        { name: "Python", level: 85 },
        { name: "PowerBI", level: 80 },
        { name: "Machine Learning", level: 75 },
        { name: "SQL", level: 80 },
        { name: "Tableau", level: 75 },
        { name: "PySpark", level: 70 },
      ],
    },
    {
      name: "Programming Languages",
      skills: [
        { name: "Java", level: 75 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        { name: "Docker", level: 75 },
        { name: "Git", level: 80 },
        { name: "Linux", level: 75 },
        { name: "MS Excel", level: 85 },
        { name: "Figma", level: 70 },
        { name: "Adobe XD", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-light mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            I've developed various technical skills throughout my education.
            Here's an overview of my technical expertise and competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.name} 
              className="bg-accent/30 rounded-lg p-6 border border-accent"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-light">
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-light to-blue-dark h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Additional Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Spline", "MS Excel", "Linux", "GitHub", "Docker", "Machine Learning", 
              "Data Analysis", "Problem Solving", "Teamwork", "Adaptability", "Communication", "Time Management"].map((skill, index) => (
              <span 
                key={index} 
                className={cn(
                  "px-4 py-2 rounded-full text-sm",
                  index % 3 === 0 ? "bg-blue-dark/40 text-blue-light" : 
                  index % 3 === 1 ? "bg-accent/50 text-primary" : 
                  "bg-muted/50 text-muted-foreground"
                )}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
