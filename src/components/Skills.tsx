import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Palette, Users, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { TechIcon } from './TechIcon';
import { useAnimations } from '../hooks/useAnimations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: [
      'React.js',
      'Next.js',
      'Redux Toolkit',
      'Context API',
      'Tailwind CSS',
      'SCSS',
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'Strapi', 'MongoDB', 'REST APIs'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'Web3 & Integration',
    skills: [
      'MetaMask Integration',
      'Blockchain Interaction',
      'Razorpay Integration',
      'Nodemailer',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Design & Tools',
    skills: ['Git', 'Bootstrap', 'Figma', 'Agile Methodologies'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: [
      'Communication',
      'Team Leadership',
      'Client Management',
      'Problem-solving',
      'Time Management',
    ],
    color: 'from-indigo-500 to-blue-500',
  },
];

export function Skills() {
  const { elementRef: sectionRef, animate: sectionAnimate } =
    useAnimations<HTMLElement>();
  const { elementRef: titleRef, animate: titleAnimate } =
    useAnimations<HTMLDivElement>();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate section title
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
    });

    // Animate cards with stagger
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });

        // Add hover animation
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      }
    });

    // Animate badges with stagger
    const badges = document.querySelectorAll('.skill-badge');
    gsap.from(badges, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.05,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4"
    >
      <div className="container mx-auto">
        <div
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Technical <span className="gradient-text protest-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, modern applications
            with precision and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Card
                key={category.title}
                ref={(el) => (cardRefs.current[index] = el)}
                className="group hover:shadow-lg transition-all duration-500 border-2 hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="skill-badge hover:bg-primary hover:text-primary-foreground transition-colors cursor-default flex items-center gap-1.5"
                      >
                        <TechIcon
                          name={skill}
                          className="w-4 h-4"
                        />
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
