
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
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
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Data-Driven</span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Architecting elegant solutions with <strong>Next.js</strong>, <strong>React</strong>, and precision. 
            I see beauty in perfectly structured data and craft intuitive experiences that scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="h-4 w-4" />
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
