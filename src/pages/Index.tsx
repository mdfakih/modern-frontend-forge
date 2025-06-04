
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          {/* Temporarily hidden - Featured Projects section */}
          <section id="projects" className="hidden">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <footer className="bg-muted/50 py-8 text-center text-muted-foreground border-t">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
                <p>&copy; 2024 Mohammed Husain Fakih. All rights reserved.</p>
                <span className="hidden md:block">|</span>
                <p>Bhiwandi, Maharashtra, India</p>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <a href="mailto:mf9049@gmail.com" className="hover:text-primary transition-colors">
                  mf9049@gmail.com
                </a>
                <span>|</span>
                <a href="tel:+919028435660" className="hover:text-primary transition-colors">
                  +91 9028435660
                </a>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs">
                Crafted with precision and attention to detail using React, Next.js & TypeScript
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
