// import { ThemeProvider } from '@/components/ThemeProvider';
// import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Header /> */}

      <main className="pt-20">
        <section
          id="home"
          className="scroll-mt-20"
        >
          <Hero />
        </section>

        <section
          id="skills"
          className="scroll-mt-20"
        >
          <Skills />
        </section>

        <section
          id="experience"
          className="scroll-mt-20"
        >
          <Experience />
        </section>

        {/* Temporarily hidden - Featured Projects section */}
        <section
          id="projects"
          className="hidden scroll-mt-20"
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="scroll-mt-20"
        >
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
              <a
                href="mailto:mf9049@gmail.com"
                className="hover:text-primary transition-colors"
              >
                mf9049@gmail.com
              </a>
              <span>|</span>
              <a
                href="tel:+919028435660"
                className="hover:text-primary transition-colors"
              >
                +91 9028435660
              </a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-xs">
              Crafted with precision and attention to detail using React,
              Next.js & TypeScript
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
