import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedSection - A reusable component that animates its children when scrolled into view
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be animated
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.animation - Animation type: 'fade-up', 'fade-in', 'fade-down', 'slide-left', 'slide-right', 'scale', 'reveal', 'parallax'
 * @param {number} props.delay - Delay before animation starts (in seconds)
 * @param {number} props.duration - Animation duration (in seconds)
 * @param {number} props.stagger - Stagger time between child animations (in seconds)
 * @param {string} props.triggerPosition - ScrollTrigger start position (e.g., 'top 80%')
 * @param {string} props.ease - GSAP easing function
 * @param {boolean} props.once - Whether animation should only play once
 * @param {number} props.threshold - Percentage of element that needs to be visible to trigger animation (0-1)
 * @param {boolean} props.markers - Show ScrollTrigger markers (for debugging)
 */
const AnimatedSection = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  stagger = 0.1,
  triggerPosition = "top 75%",
  ease = "power3.out",
  once = true,
  threshold = 0.1,
  markers = false,
}) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    let animationProps = {};
    
    // Set animation properties based on animation type
    switch (animation) {
      case "fade-up":
        animationProps = { y: 50, opacity: 0 };
        break;
      case "fade-in":
        animationProps = { opacity: 0 };
        break;
      case "fade-down":
        animationProps = { y: -50, opacity: 0 };
        break;
      case "slide-left":
        animationProps = { x: -50, opacity: 0 };
        break;
      case "slide-right":
        animationProps = { x: 50, opacity: 0 };
        break;
      case "scale":
        animationProps = { scale: 0.9, opacity: 0 };
        ease = "back.out(1.7)";
        break;
      case "reveal":
        // For text reveal animations
        animationProps = { clipPath: "inset(0 100% 0 0)", opacity: 0 };
        break;
      case "parallax":
        // For parallax effect
        return createParallaxEffect();
      default:
        animationProps = { y: 50, opacity: 0 };
    }
    
    // Find all elements with the .animate-item class
    const elements = sectionRef.current.querySelectorAll('.animate-item');
    
    // If there are animate-item elements, animate them with stagger
    if (elements.length > 0) {
      gsap.from(elements, {
        ...animationProps,
        duration,
        delay,
        stagger,
        ease,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: triggerPosition,
          toggleActions: once ? "play none none none" : "play none none reset",
          markers,
          threshold
        },
      });
    } else {
      // Otherwise, animate the section itself
      gsap.from(sectionRef.current, {
        ...animationProps,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: triggerPosition,
          toggleActions: once ? "play none none none" : "play none none reset",
          markers,
          threshold
        },
      });
    }
    
    // Special function for parallax effect
    function createParallaxEffect() {
      const parallaxElements = sectionRef.current.querySelectorAll('.parallax-item');
      
      if (parallaxElements.length > 0) {
        parallaxElements.forEach(element => {
          const speed = element.dataset.speed || 0.1;
          const direction = element.dataset.direction || 'vertical';
          
          gsap.to(element, {
            y: direction === 'vertical' ? `-${speed * 100}%` : 0,
            x: direction === 'horizontal' ? `-${speed * 100}%` : 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              markers,
            }
          });
        });
      }
    }
    
    return () => {
      // Clean up ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, duration, stagger, triggerPosition, ease, once, threshold, markers]);
  
  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;