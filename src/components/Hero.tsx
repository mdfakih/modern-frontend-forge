
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TypeWriter } from "./TypeWriter";

export function Hero() {
  const developerFeatures = [
    "React Specialist",
    "Next.js Expert", 
    "Full-Stack Developer",
    "Web3 Developer",
    "MERN Stack Developer",
    "Frontend Architect"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <Badge variant="secondary" className="mb-4 animate-glow">
            Available for Hire
          </Badge>
          
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-2">
              Mohammed Husain Fakih
            </h1>
            <div className="text-3xl md:text-5xl font-bold tracking-tight min-h-[1.2em]">
              <TypeWriter 
                texts={developerFeatures}
                speed={80}
                deleteSpeed={40}
                delayBetween={2000}
                className="gradient-text"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Bhiwandi, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 9028435660</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Architecting elegant solutions with <strong>Next.js</strong>, <strong>React</strong>, and precision. 
            I see beauty in perfectly structured data and craft intuitive experiences that scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="group" asChild>
              <a href="mailto:mf9049@gmail.com">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Get In Touch
              </a>
            </Button>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="https://github.com/mdfakih" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform" asChild>
                <a href="https://linkedin.com/in/mohammed-husain-fakih" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
