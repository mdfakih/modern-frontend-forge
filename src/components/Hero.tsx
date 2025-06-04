import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TypeWriter } from './TypeWriter';
import { useAnimations } from '../hooks/useAnimations';
import { gsap } from 'gsap';

// Add Playfair Display font via CDN in public/index.html or Tailwind config for production
// For now, use font-[Playfair] utility class

const NAME = 'Mohammed Husain Fakih';

export function Hero() {
  const { elementRef: heroRef, animate: heroAnimate } =
    useAnimations<HTMLElement>();
  const { elementRef: badgeRef, animate: badgeAnimate } =
    useAnimations<HTMLDivElement>();
  const { elementRef: titleRef, animate: titleAnimate } =
    useAnimations<HTMLDivElement>();
  const { elementRef: contactRef, animate: contactAnimate } =
    useAnimations<HTMLDivElement>();
  const { elementRef: descriptionRef, animate: descriptionAnimate } =
    useAnimations<HTMLDivElement>();
  const { elementRef: buttonsRef, animate: buttonsAnimate } =
    useAnimations<HTMLDivElement>();
  const { elementRef: scrollRef, animate: scrollAnimate } =
    useAnimations<HTMLDivElement>();

  const nameRef = useRef<HTMLHeadingElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const developerFeatures = [
    'React Specialist',
    'Next.js Expert',
    'Full-Stack Developer',
    // 'Web3 Developer',
    'MERN Stack Developer',
    'Frontend Architect',
  ];

  useEffect(() => {
    // Create a timeline for coordinated animations
    const tl = gsap.timeline();

    // Animate background elements
    gsap.to('.bg-blob', {
      scale: 1.2,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    // Sequence the animations
    tl.from(badgeRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power3.out',
    })
      .from(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4',
      )
      .from(
        contactRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4',
      )
      .from(
        descriptionRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4',
      )
      .from(
        buttonsRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4',
      )
      .from(
        scrollRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4',
      );

    // Add hover animations for buttons
    const buttons = document.querySelectorAll('.social-button');
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });

    // GSAP hover animation for name (Wavy + Gradient Glow)
    const nameEl = nameRef.current;
    const letters = letterRefs.current;
    let hoverTl: gsap.core.Timeline | null = null;
    if (nameEl && letters.length) {
      // Initial state: normal fill, no shadow, y=0
      gsap.set(letters, {
        WebkitTextStroke: '0px #a855f7',
        textShadow: 'none',
        y: 0,
        opacity: 1,
      });
      const onEnter = () => {
        const isDark = document.documentElement.classList.contains('dark');
        const hoverColor = isDark ? '#fff' : '#000';
        hoverTl = gsap.timeline();
        // 1. Gradient glow
        hoverTl.to(letters, {
          textShadow: '0 0 16px #a855f7, 0 0 32px #a855f7, 0 0 48px #6366f1',
          color: hoverColor,
          duration: 0.3,
          ease: 'power1.out',
        });
        // 2. Wavy text animation
        hoverTl.to(
          letters,
          {
            y: (i: number) => Math.sin(i * 0.5) * 12,
            stagger: {
              each: 0.04,
              yoyo: true,
              repeat: 1,
              repeatDelay: 0.1,
            },
            duration: 0.3,
            ease: 'sine.inOut',
          },
          '-=0.1',
        );
      };
      const onLeave = () => {
        if (hoverTl) hoverTl.reverse();
      };
      nameEl.addEventListener('mouseenter', onEnter);
      nameEl.addEventListener('mouseleave', onLeave);
      return () => {
        nameEl.removeEventListener('mouseenter', onEnter);
        nameEl.removeEventListener('mouseleave', onLeave);
      };
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-blob absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
        <div
          className="bg-blob absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8">
          {/* <div ref={badgeRef}>
            <Badge
              variant="secondary"
              className="mb-4"
            >
              Available for Hire
            </Badge>
          </div> */}

          <div
            ref={titleRef}
            className="space-y-2"
          >
            <h1
              ref={nameRef}
              className="text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white mb-2 cursor-pointer transition-all duration-500"
              style={{
                fontFamily: 'Great Vibes, cursive',
                display: 'inline-block',
              }}
            >
              {NAME.split('').map((char, i) => (
                <span
                  key={i}
                  ref={(el) => (letterRefs.current[i] = el)}
                  className="text-black dark:text-white"
                  style={{ display: 'inline-block', transition: 'all 0.3s' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
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

          <div
            ref={contactRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Bhiwandi, Maharashtra, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 9028435660</span>
            </div>
          </div>

          <p
            ref={descriptionRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Architecting elegant solutions with <strong>Next.js</strong>,{' '}
            <strong>React</strong>, and precision. I see beauty in perfectly
            structured data and craft intuitive experiences that scale.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="group"
              asChild
            >
              <a href="mailto:mf9049@gmail.com">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Get In Touch
              </a>
            </Button>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="social-button"
                asChild
              >
                <a
                  href="https://github.com/mdfakih"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="social-button"
                asChild
              >
                <a
                  href="https://linkedin.com/in/mohammed-husain-fakih"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
