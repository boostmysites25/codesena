import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createHoverAnimation } from "../../utils/animations";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceCards = ({ services }) => {
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!cardsContainerRef.current) return;

    // Reset refs array
    cardRefs.current = [];

    try {
      // Create staggered animation for cards
      gsap.from(cardRefs.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

      // Apply hover animations to each card
      cardRefs.current.forEach(card => {
        if (card) {
          createHoverAnimation(card, {
            y: -10,
            scale: 1.03,
            boxShadow: '0 15px 30px rgba(34, 170, 210, 0.2)'
          });
        }
      });
    } catch (error) {
      console.error("Animation error in ServiceCards:", error);
      // Make sure cards are visible if animations fail
      if (cardRefs.current.length > 0) {
        gsap.set(cardRefs.current, { opacity: 1, y: 0 });
      }
    }

    return () => {
      // Clean up ScrollTrigger instances
      try {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger && trigger.vars && trigger.vars.trigger === cardsContainerRef.current) {
            trigger.kill();
          }
        });
      } catch (error) {
        console.error("Error cleaning up ScrollTrigger:", error);
      }
    };
  }, [services]);

  // Function to add cards to refs array
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div 
      ref={cardsContainerRef}
      className="md:-mt-[7rem] py-[2rem] relative z-10 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      {services.map((service, index) => (
        <div 
          key={index}
          ref={addToRefs}
          className="bg-gradient-to-b from-tertiary to-tertiary/90 rounded-xl p-6 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform border border-primary/10 hover:border-primary/30"
        >
          <div className="flex gap-4 mb-5 items-center">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 rounded-lg flex items-center justify-center shadow-inner shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
              {typeof service.icon === 'string' ? (
                <img
                  loading="lazy"
                  src={service.icon}
                  width="50"
                  height="50"
                  className="w-[2.5rem] h-[2.5rem] object-contain"
                  alt={service.title}
                />
              ) : (
                // Render React component icon
                <div className="w-[3rem] h-[3rem] flex items-center justify-center">
                  {service.icon}
                </div>
              )}
            </div>
            <p className="text-lg leading-tight font-medium">
              {service.title}
            </p>
          </div>
          <p className="desc leading-relaxed">
            {service.description}
          </p>
          
          {/* Decorative accent */}
          <div className="mt-6 flex items-center gap-2">
            <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
            <div className="h-1 w-4 bg-primary/20 rounded-full"></div>
            <div className="h-1 w-2 bg-primary/10 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;