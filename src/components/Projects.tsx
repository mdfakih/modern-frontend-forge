
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Data Analytics Dashboard",
    description: "Comprehensive analytics platform with real-time data visualization, complex pivot tables, and interactive charts. Built with Next.js 14 and optimized for performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Next.js", "React", "TypeScript", "Recharts", "Tailwind"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Features seamless user experience and robust backend.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Razorpay", "Express"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Web3 DApp Interface",
    description: "Decentralized application interface with MetaMask integration and blockchain interaction. Clean, intuitive design for complex Web3 operations.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    technologies: ["React", "Web3.js", "MetaMask", "Ethereum", "SCSS"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing precision-crafted applications that demonstrate technical expertise and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group hover:shadow-xl transition-all duration-500 overflow-hidden border-2 hover:border-primary/50 animate-scale-in ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${project.featured ? 'lg:flex' : ''}`}>
                <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className={`p-6 ${project.featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="group/btn">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button size="sm" className="group/btn">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
