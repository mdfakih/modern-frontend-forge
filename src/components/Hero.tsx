import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TypeWriter } from './TypeWriter';
import { useAnimations } from '../hooks/useAnimations';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

// Add Playfair Display font via CDN in public/index.html or Tailwind config for production
// For now, use font-[Playfair] utility class

const NAME = 'Mohammed Husain Fakih';

// Update styles for the matrix trail effect with purple colors
const matrixStyles = `
  .matrix-letter {
    position: relative;
    display: inline-block;
    color: inherit;
    transition: color 0.3s ease;
  }

  .matrix-letter::after {
    content: attr(data-letter);
    position: absolute;
    left: 0;
    top: 0;
    color: #a855f7; /* Changed to purple-500 */
    opacity: 0;
    transform: translateY(0);
    text-shadow: 0 0 8px #a855f7, 0 0 16px #a855f7, 0 0 24px #6366f1; /* Added indigo for extra glow */
    pointer-events: none;
    z-index: -1;
  }

  .matrix-trail-active .matrix-letter::after {
    animation: matrixTrail 1.5s ease-out forwards;
  }

  @keyframes matrixTrail {
    0% {
      opacity: 0.8;
      transform: translateY(0);
      filter: blur(0px);
      color: #a855f7; /* Start with purple */
    }
    50% {
      color: #c084fc; /* Lighter purple in the middle */
    }
    100% {
      opacity: 0;
      transform: translateY(20px);
      filter: blur(8px);
      color: #6366f1; /* End with indigo */
    }
  }

  .matrix-name {
    position: relative;
    display: inline-block;
  }

  .matrix-name:hover {
    text-shadow: 0 0 8px #a855f7, 0 0 16px #a855f7, 0 0 24px #6366f1;
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = matrixStyles;
  document.head.appendChild(styleSheet);
}

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

  const developerFeatures = [
    'React Specialist',
    'Next.js Expert',
    'Full-Stack Developer',
    // 'Web3 Developer',
    'MERN Stack Developer',
    'Frontend Architect',
  ];

  // Main useEffect for entrance and button animations
  useEffect(() => {
    console.log('Hero Main useEffect running');
    let cleanupFunctions: (() => void)[] = [];

    // Create a timeline for coordinated animations if main refs are available
    let tl: gsap.core.Timeline | null = null;
    if (heroRef.current && badgeRef.current && titleRef.current && 
        contactRef.current && descriptionRef.current && buttonsRef.current && 
        scrollRef.current) {
      console.log('Hero Main useEffect: Main refs available, creating timeline.');
      tl = gsap.timeline();
       // Animate background elements (still using querySelectorAll)
      const bgBlobs = document.querySelectorAll('.bg-blob');
      if (bgBlobs.length) {
        const bgAnimation = gsap.to(bgBlobs, {
          scale: 1.2,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
        cleanupFunctions.push(() => bgAnimation.kill());
      }

      // Sequence the entrance animations
      tl.from(badgeRef.current, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' })
        .from(titleRef.current, { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from(contactRef.current, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from(descriptionRef.current, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from(buttonsRef.current, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from(scrollRef.current, { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' }, '-=0.4');
    } else {
        console.log('Hero Main useEffect: Main refs NOT available for timeline setup.');
    }

    // Setup button hover animations (still using querySelectorAll)
    const buttons = Array.from(document.querySelectorAll('.social-button'));
    if (buttons.length > 0) {
        console.log('Button elements available, setting up hover animations.');
        const buttonAnimations = buttons.map(button => {
          const enterAnimation = gsap.to(button, { scale: 1.1, duration: 0.3, ease: 'power2.out', paused: true });
          const leaveAnimation = gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.out', paused: true });

          const onEnter = () => enterAnimation.play();
          const onLeave = () => leaveAnimation.play();

          button.addEventListener('mouseenter', onEnter);
          button.addEventListener('mouseleave', onLeave);

          return { button, enterAnimation, leaveAnimation, onEnter, onLeave };
        });

        cleanupFunctions.push(() => {
          console.log('Cleaning up button animations');
          buttonAnimations.forEach(({ button, enterAnimation, leaveAnimation, onEnter, onLeave }) => {
            button.removeEventListener('mouseenter', onEnter);
            button.removeEventListener('mouseleave', onLeave);
            enterAnimation.kill();
            leaveAnimation.kill();
          });
        });
    } else {
        console.log('Button elements NOT available for hover setup.');
    }

    // Cleanup function for the whole effect
    return () => {
      console.log('Hero Main useEffect cleanup running');
      cleanupFunctions.forEach(cleanup => cleanup());
      if (tl) tl.kill(); // Ensure main timeline is killed
      console.log('Hero Main useEffect cleanup complete');
    };
  }, []); // Empty dependency array: runs once on mount

  // useEffect for Name Animation (depends on nameRef)
  useEffect(() => {
    console.log('Hero Name useEffect running. nameRef.current:', nameRef.current);

    let splitTextInstance: SplitText | null = null;
    const nameEl = nameRef.current;
    let cleanupFunctions: (() => void)[] = [];

    if (!nameEl) {
      console.log('Hero Name useEffect: Name element NOT available.');
      return () => {};
    }

    console.log('Hero Name useEffect: Name element IS available.', nameEl);

    if (!SplitText) {
      console.error('SplitText not loaded!');
      cleanupFunctions.push(() => console.log('SplitText not loaded, no splitting to clean up.'));
      return () => {
        console.log('Hero Name useEffect cleanup running (SplitText not loaded).');
        cleanupFunctions.forEach(cleanup => cleanup());
        console.log('Hero Name useEffect cleanup complete (SplitText not loaded).');
      };
    }

    let isMounted = true;

    document.fonts.ready.then(() => {
      console.log('Fonts are ready for SplitText.');
      if (!isMounted || !nameRef.current) {
        console.log('Component unmounted or name element gone before fonts ready for SplitText.');
        return;
      }

      const timeoutId = setTimeout(() => {
        if (!nameRef.current) {
          console.log('Timeout after fonts ready for SplitText: Name element not in DOM anymore, skipping SplitText.');
          return;
        }

        try {
          // Split the text by characters for both effects
          console.log('Attempting SplitText on:', nameRef.current);
          splitTextInstance = new SplitText(nameRef.current, { type: 'chars,words' });
          const chars = splitTextInstance.chars as HTMLElement[];
          console.log('SplitText created chars:', chars);

          // Add matrix-letter class and data-letter attribute to each character
          chars.forEach(char => {
            char.classList.add('matrix-letter');
            char.setAttribute('data-letter', char.textContent || '');
          });

          // Wrap the name in a container for the effects
          const nameContainer = document.createElement('div');
          nameContainer.className = 'matrix-name';
          nameEl.parentNode?.insertBefore(nameContainer, nameEl);
          nameContainer.appendChild(nameEl);

          // --- 3D Depth Drop Entrance Animation ---
          const entranceTimeline = gsap.timeline({
            defaults: { ease: 'power3.out' }
          });

          // Set initial state for 3D effect
          gsap.set(chars, {
            opacity: 0,
            rotationX: -90,
            transformOrigin: '50% 0%',
            z: -1000, // Start deep in 3D space
            perspective: 1000
          });

          // Add 3D drop animation to timeline
          entranceTimeline.to(chars, {
            opacity: 1,
            rotationX: 0,
            z: 0,
            duration: 1.2,
            stagger: {
              amount: 0.8,
              from: 'random', // Random start for more dynamic effect
              grid: 'auto',
              axis: 'x'
            },
            ease: 'power3.out'
          });

          // Add a subtle bounce at the end
          entranceTimeline.to(chars, {
            y: -5,
            duration: 0.2,
            stagger: 0.02,
            ease: 'power2.out',
            yoyo: true,
            repeat: 1
          }, '-=0.3'); // Slightly overlap with the end of the drop

          cleanupFunctions.push(() => entranceTimeline.kill());

          // --- Keep existing hover effect ---
          const onEnter = () => {
            nameContainer.classList.add('matrix-trail-active');
            // Add staggered trail effect to each character
            gsap.to(chars, {
              duration: 0.5,
              stagger: 0.02,
              ease: 'power2.out',
              onStart: () => {
                chars.forEach(char => {
                  const after = char.querySelector('::after');
                  if (after) {
                    gsap.set(after, { opacity: 0 });
                  }
                });
              }
            });
          };

          const onLeave = () => {
            nameContainer.classList.remove('matrix-trail-active');
            // Reset all characters
            gsap.to(chars, {
              duration: 0.3,
              stagger: 0.01,
              ease: 'power2.in',
              onComplete: () => {
                chars.forEach(char => {
                  const after = char.querySelector('::after');
                  if (after) {
                    gsap.set(after, { opacity: 0 });
                  }
                });
              }
            });
          };

          nameContainer.addEventListener('mouseenter', onEnter);
          nameContainer.addEventListener('mouseleave', onLeave);

          cleanupFunctions.push(() => {
            console.log('Cleaning up matrix effect and SplitText.');
            nameContainer.removeEventListener('mouseenter', onEnter);
            nameContainer.removeEventListener('mouseleave', onLeave);
            if (splitTextInstance) splitTextInstance.revert();
            // Restore original DOM structure
            if (nameEl.parentNode === nameContainer) {
              nameContainer.parentNode?.insertBefore(nameEl, nameContainer);
              nameContainer.remove();
            }
            console.log('Matrix effect and SplitText cleanup complete.');
          });

        } catch (error) {
          console.error('Error during SplitText setup:', error);
          if (splitTextInstance) splitTextInstance.revert();
          cleanupFunctions.push(() => console.log('Cleanup after SplitText setup error.'));
        }
      }, 50);

      cleanupFunctions.push(() => {
        console.log('Clearing timeout', timeoutId);
        clearTimeout(timeoutId);
      });
    }).catch(error => {
      console.error('Error waiting for fonts to be ready for SplitText:', error);
      cleanupFunctions.push(() => console.log('Cleanup after font loading error for SplitText.'));
    });

    cleanupFunctions.push(() => {
      console.log('Name useEffect cleanup: Setting isMounted to false.');
      isMounted = false;
    });

    return () => {
      console.log('Hero Name useEffect cleanup running.');
      cleanupFunctions.forEach(cleanup => cleanup());
      console.log('Hero Name useEffect cleanup complete.');
    };
  }, [nameRef.current]);

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
              className="text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white mb-2 cursor-pointer"
              style={{
                fontFamily: 'Great Vibes, cursive',
              }}
            >
              {NAME}
            </h1>
            <div className="text-3xl md::text-5xl font-bold tracking-tight min-h-[1.2em]">
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
            className="flex flex-col sm::flex-row gap-4 justify-center items-center text-muted-foreground"
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
            <strong>React</strong>, and precision. I see beauty in perfectly\n            structured data and craft intuitive experiences that scale.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden"
              asChild
            >
              <a 
                href="mailto:mf9049@gmail.com"
                onClick={(e) => {
                  // Prevent any animation interference
                  e.currentTarget.blur();
                }}
              >
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Get In Touch
              </a>
            </Button>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="social-button relative overflow-hidden"
                asChild
              >
                <a
                  href="https://github.com/mdfakih"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    // Prevent any animation interference
                    e.currentTarget.blur();
                  }}
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="social-button relative overflow-hidden"
                asChild
              >
                <a
                  href="https://linkedin.com/in/mohammed-husain-fakih"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    // Prevent any animation interference
                    e.currentTarget.blur();
                  }}
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
