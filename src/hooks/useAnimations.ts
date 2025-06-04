import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  fadeIn,
  slideUp,
  staggerChildren,
  textReveal,
  parallax,
  magneticEffect,
  scrollFadeIn,
  hoverScale,
} from '../lib/animations';

gsap.registerPlugin(ScrollTrigger);

export const useAnimations = <T extends HTMLElement>() => {
  const elementRef = useRef<T>(null);

  const animate = {
    fadeIn: (duration?: number) => {
      if (elementRef.current) {
        fadeIn(elementRef.current, duration);
      }
    },
    slideUp: (duration?: number) => {
      if (elementRef.current) {
        slideUp(elementRef.current, duration);
      }
    },
    staggerChildren: (stagger?: number) => {
      if (elementRef.current) {
        staggerChildren(elementRef.current, stagger);
      }
    },
    textReveal: () => {
      if (elementRef.current) {
        textReveal(elementRef.current);
      }
    },
    parallax: (speed?: number) => {
      if (elementRef.current) {
        parallax(elementRef.current, speed);
      }
    },
    magnetic: () => {
      if (elementRef.current) {
        magneticEffect(elementRef.current as HTMLElement);
      }
    },
    scrollFadeIn: () => {
      if (elementRef.current) {
        scrollFadeIn(elementRef.current);
      }
    },
    hoverScale: (scale?: number) => {
      if (elementRef.current) {
        hoverScale(elementRef.current, scale);
      }
    },
  };

  return {
    elementRef,
    animate,
  };
};
