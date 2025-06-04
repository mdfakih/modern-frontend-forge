import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Fade in animation
export const fadeIn = (element: string | Element, duration = 1) => {
  return gsap.from(element, {
    opacity: 0,
    duration,
    ease: 'power2.out',
  });
};

// Slide up animation
export const slideUp = (element: string | Element, duration = 1) => {
  return gsap.from(element, {
    y: 100,
    opacity: 0,
    duration,
    ease: 'power3.out',
  });
};

// Stagger children animation
export const staggerChildren = (element: string | Element, stagger = 0.1) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger,
    ease: 'power2.out',
  });
};

// Text reveal animation
export const textReveal = (element: string | Element) => {
  const split = new SplitText(element, { type: 'lines,words,chars' });
  return gsap.from(split.chars, {
    opacity: 0,
    duration: 0.5,
    stagger: 0.02,
    ease: 'power2.out',
  });
};

// Parallax effect
export const parallax = (element: string | Element, speed = 0.5) => {
  return gsap.to(element, {
    yPercent: speed * 100,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Magnetic effect for buttons
export const magneticEffect = (element: HTMLElement) => {
  element.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    gsap.to(element, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.5,
      ease: 'power2.out',
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  });
};

// Smooth scroll initialization
export const initSmoothScroll = () => {
  ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.5,
    effects: true,
  });
};

// Page transition
export const pageTransition = (element: string | Element) => {
  const tl = gsap.timeline();

  tl.to(element, {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.inOut',
  }).to(element, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.inOut',
  });

  return tl;
};

// Hover scale effect
export const hoverScale = (element: string | Element, scale = 1.05) => {
  gsap.to(element, {
    scale,
    duration: 0.3,
    ease: 'power2.out',
    paused: true,
  });
};

// Scroll-triggered fade in
export const scrollFadeIn = (element: string | Element) => {
  return gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1,
    },
  });
};

// Custom cursor effect
export const customCursor = (cursor: HTMLElement) => {
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: 'power2.out',
    });
  });
};
