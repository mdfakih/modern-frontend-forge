
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
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <footer className="bg-muted/50 py-8 text-center text-muted-foreground">
          <div className="container mx-auto px-4">
            <p>&copy; 2024 Your Name. Crafted with precision and attention to detail.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
