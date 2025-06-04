
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Palette, Users, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "Redux Toolkit", "Context API", "Tailwind CSS", "SCSS", "HTML5", "CSS3", "JavaScript (ES6+)"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Strapi", "MongoDB", "REST APIs"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Globe,
    title: "Web3 & Integration",
    skills: ["MetaMask Integration", "Blockchain Interaction", "Razorpay Integration", "Nodemailer"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Palette,
    title: "Design & Tools",
    skills: ["Git", "Bootstrap", "Figma", "Agile Methodologies"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Communication", "Team Leadership", "Client Management", "Problem-solving", "Time Management"],
    color: "from-indigo-500 to-blue-500"
  }
];

export function Skills() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, modern applications with precision and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <Card 
                key={category.title}
                ref={el => cardRefs.current[index] = el!}
                data-index={index}
                className={`group hover:shadow-lg transition-all duration-500 border-2 hover:border-primary/50 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
