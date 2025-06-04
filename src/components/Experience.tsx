
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading development of data-intensive applications using Next.js 14 and modern React patterns. Specialized in creating intuitive data visualizations and implementing complex pivot table logic.",
    technologies: ["Next.js", "React", "TypeScript", "MongoDB", "AWS"],
    achievements: [
      "Architected scalable data visualization platform",
      "Reduced load times by 40% through optimization",
      "Led team of 5 developers"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description: "Developed responsive web applications with focus on user experience and performance. Integrated various payment systems and implemented real-time features.",
    technologies: ["React", "Redux", "SCSS", "Node.js", "Express"],
    achievements: [
      "Built comprehensive e-commerce platform",
      "Integrated Razorpay payment gateway",
      "Improved user engagement by 60%"
    ]
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description: "Started journey in web development, focusing on frontend technologies and learning full-stack development principles.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Git"],
    achievements: [
      "Delivered 15+ responsive web projects",
      "Collaborated with design team effectively",
      "Mentored junior interns"
    ]
  }
];

export function Experience() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building elegant solutions and leading teams across diverse projects and technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative mb-12 ml-12 md:ml-20 animate-fade-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-14 md:-left-22 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
