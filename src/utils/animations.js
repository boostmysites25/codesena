import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

// Hero section animations
export const animateHero = (element) => {
  const tl = gsap.timeline();
  
  tl.from(element.querySelector('.hero-title'), {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })
  .from(element.querySelector('.hero-subtitle'), {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.6')
  .from(element.querySelector('.hero-cta'), {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.4');

  return tl;
};

// Scroll reveal animations
export const createScrollReveal = (elements, options = {}) => {
  const defaults = {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    start: 'top 80%'
  };

  const settings = { ...defaults, ...options };

  return gsap.from(elements, {
    y: settings.y,
    opacity: settings.opacity,
    duration: settings.duration,
    stagger: settings.stagger,
    ease: settings.ease,
    scrollTrigger: {
      trigger: elements,
      start: settings.start,
      toggleActions: 'play none none none'
    }
  });
};

// Parallax effect for backgrounds
export const createParallax = (element, options = {}) => {
  const defaults = {
    yPercent: 20,
    ease: 'none',
    start: 'top bottom',
    end: 'bottom top'
  };

  const settings = { ...defaults, ...options };

  return gsap.to(element, {
    yPercent: settings.yPercent,
    ease: settings.ease,
    scrollTrigger: {
      trigger: element,
      start: settings.start,
      end: settings.end,
      scrub: true
    }
  });
};

// Section transition animations
export const animateSectionTransition = (section) => {
  return gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
};

// Staggered card animations
export const animateCards = (cards, container) => {
  return gsap.from(cards, {
    y: 60,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: container,
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  });
};

// Text reveal animation
export const animateTextReveal = (textElement) => {
  const splitText = textElement.textContent.split(' ');
  textElement.innerHTML = '';
  
  splitText.forEach(word => {
    const wordSpan = document.createElement('span');
    wordSpan.innerHTML = word + ' ';
    wordSpan.style.display = 'inline-block';
    textElement.appendChild(wordSpan);
  });
  
  return gsap.from(textElement.children, {
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.05,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: textElement,
      start: 'top 85%',
      toggleActions: 'play none none none'
    }
  });
};

// Hover animations for interactive elements
export const createHoverAnimation = (element, options = {}) => {
  const defaults = {
    y: -5,
    scale: 1.02,
    duration: 0.3,
    ease: 'power2.out',
    boxShadow: '0 10px 25px rgba(34, 170, 210, 0.3)'
  };

  const settings = { ...defaults, ...options };
  
  const enterAnimation = () => {
    gsap.to(element, {
      y: settings.y,
      scale: settings.scale,
      duration: settings.duration,
      ease: settings.ease,
      boxShadow: settings.boxShadow
    });
  };
  
  const leaveAnimation = () => {
    gsap.to(element, {
      y: 0,
      scale: 1,
      duration: settings.duration,
      ease: settings.ease,
      boxShadow: '0 0 0 rgba(34, 170, 210, 0)'
    });
  };
  
  element.addEventListener('mouseenter', enterAnimation);
  element.addEventListener('mouseleave', leaveAnimation);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('mouseenter', enterAnimation);
    element.removeEventListener('mouseleave', leaveAnimation);
  };
};

// Magnetic effect for buttons and interactive elements
export const createMagneticEffect = (element, options = {}) => {
  const defaults = {
    strength: 0.3,
    radius: 100,
    ease: 'power2.out'
  };

  const settings = { ...defaults, ...options };
  
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const mouseMove = (e) => {
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    
    if (distance < settings.radius) {
      gsap.to(element, {
        x: distX * settings.strength,
        y: distY * settings.strength,
        duration: 0.3,
        ease: settings.ease
      });
    } else {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: settings.ease
      });
    }
  };
  
  const mouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: settings.ease
    });
  };
  
  document.addEventListener('mousemove', mouseMove);
  element.addEventListener('mouseleave', mouseLeave);
  
  // Return cleanup function
  return () => {
    document.removeEventListener('mousemove', mouseMove);
    element.removeEventListener('mouseleave', mouseLeave);
  };
};

// Typing animation
export const createTypingAnimation = (element, text, options = {}) => {
  const defaults = {
    duration: 2,
    delay: 0,
    ease: 'none',
    repeat: 0,
    repeatDelay: 1,
    cursor: true,
    cursorClass: 'typing-cursor'
  };

  const settings = { ...defaults, ...options };
  
  // Add cursor element if needed
  if (settings.cursor) {
    const cursorEl = document.createElement('span');
    cursorEl.className = settings.cursorClass;
    cursorEl.textContent = '|';
    cursorEl.style.animation = 'blink 1s infinite';
    element.appendChild(cursorEl);
    
    // Add blink animation to stylesheet if not already present
    if (!document.querySelector('#cursor-blink-animation')) {
      const style = document.createElement('style');
      style.id = 'cursor-blink-animation';
      style.textContent = `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  return gsap.to(element, {
    duration: settings.duration,
    text: text,
    delay: settings.delay,
    ease: settings.ease,
    repeat: settings.repeat,
    repeatDelay: settings.repeatDelay
  });
};

// Scroll-based progress animation (for progress bars, etc.)
export const createScrollProgress = (element, options = {}) => {
  const defaults = {
    scaleX: 0,
    transformOrigin: 'left center',
    ease: 'none'
  };

  const settings = { ...defaults, ...options };
  
  return gsap.fromTo(element, 
    { scaleX: 0 },
    {
      scaleX: 1,
      transformOrigin: settings.transformOrigin,
      ease: settings.ease,
      scrollTrigger: {
        trigger: options.trigger || element,
        start: options.start || 'top 80%',
        end: options.end || 'bottom 20%',
        scrub: true
      }
    }
  );
};

// 3D tilt effect
export const create3DTilt = (element, options = {}) => {
  const defaults = {
    max: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 300,
    easing: 'cubic-bezier(.03,.98,.52,.99)'
  };

  const settings = { ...defaults, ...options };
  
  const mouseEnter = () => {
    gsap.to(element, {
      scale: settings.scale,
      duration: settings.speed / 1000,
      ease: settings.easing
    });
  };
  
  const mouseMove = (e) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (settings.max * mouseY / (rect.height / 2)).toFixed(2);
    const rotateY = (settings.max * -mouseX / (rect.width / 2)).toFixed(2);
    
    gsap.to(element, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: settings.perspective,
      duration: settings.speed / 1000,
      ease: settings.easing
    });
  };
  
  const mouseLeave = () => {
    gsap.to(element, {
      scale: 1,
      rotationX: 0,
      rotationY: 0,
      duration: settings.speed / 1000,
      ease: settings.easing
    });
  };
  
  element.addEventListener('mouseenter', mouseEnter);
  element.addEventListener('mousemove', mouseMove);
  element.addEventListener('mouseleave', mouseLeave);
  
  // Return cleanup function
  return () => {
    element.removeEventListener('mouseenter', mouseEnter);
    element.removeEventListener('mousemove', mouseMove);
    element.removeEventListener('mouseleave', mouseLeave);
  };
};