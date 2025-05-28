import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Configure default GSAP settings
gsap.config({
  autoSleep: 60,
  force3D: true,
  nullTargetWarn: false,
});

// Default ease for animations
gsap.defaults({
  ease: 'power3.out',
  duration: 0.8,
});

// Initialize ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: 'play none none none',
  start: 'top 80%',
});

// Helper function to refresh ScrollTrigger when needed
export const refreshScrollTrigger = () => {
  ScrollTrigger.refresh();
};

// Helper function to kill all ScrollTrigger instances
export const killScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

// Helper function for common animations
export const commonAnimations = {
  fadeUp: (element, options = {}) => {
    return gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ...options,
    });
  },
  fadeIn: (element, options = {}) => {
    return gsap.from(element, {
      opacity: 0,
      duration: 0.8,
      ...options,
    });
  },
  staggerFadeUp: (elements, options = {}) => {
    return gsap.from(elements, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ...options,
    });
  },
  parallax: (element, options = {}) => {
    return gsap.to(element, {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: element.parentElement || element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        ...options.scrollTrigger,
      },
      ...options,
    });
  },
};

export default gsap;