import React, { useEffect, useRef } from "react";
import bannerImg from "../../assets/images/banner.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecorativeElements from "../ui/DecorativeElements";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PageBanner = ({ title, desc, image = bannerImg, animationClass = "" }) => {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const lineRef = useRef(null);
  const bgRef = useRef(null);
  const decorRef = useRef(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    // Create a timeline for banner animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate the background image
    tl.fromTo(
      bgRef.current,
      { scale: 1.1, opacity: 0.7 },
      { scale: 1, opacity: 1, duration: 1.5 },
      0
    );

    // Animate the title with a slight reveal effect
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      0.3
    );

    // Animate the description if it exists
    if (descRef.current) {
      tl.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.5
      );
    }

    // Animate the decorative line
    tl.fromTo(
      lineRef.current,
      { width: 0, opacity: 0 },
      { width: "6rem", opacity: 1, duration: 0.8, ease: "power2.out" },
      0.7
    );

    // Animate decorative elements
    tl.fromTo(
      decorRef.current.querySelectorAll('.decor-element'),
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" },
      0.5
    );

    // Create parallax effect on scroll
    gsap.to(bgRef.current, {
      y: "20%",
      ease: "none",
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      // Clean up animations
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === bannerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [desc]);

  return (
    <div
      ref={bannerRef}
      className="w-full min-h-[70vh] h-fit py-[5rem] relative flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax effect */}
      <div ref={bgRef} className="absolute top-0 w-full h-full -z-10">
        <img
          src={image}
          className="w-full h-full object-cover object-center"
          alt="Page banner"
        />
        <div className="absolute top-0 w-full h-full bg-secondary/90"></div>
      </div>
      
      {/* Decorative elements using the new component */}
      <DecorativeElements 
        ref={decorRef}
        variant="dense" 
        animated={true} 
        className="z-[5]"
        style={{ opacity: 1 }}
      />
      
      <div className="w-full relative z-10">
        <div className="wrapper text-center">
          <h1 
            ref={titleRef} 
            className={`heading-1 mb-6 ${animationClass} text-white`}
          >
            {title}
          </h1>
          
          {desc && (
            <p 
              ref={descRef}
              className={`desc mt-4 max-w-[55rem] mx-auto leading-relaxed ${animationClass}`}
            >
              {desc}
            </p>
          )}
          
          {/* Decorative line */}
          <div 
            ref={lineRef}
            className={`h-1 bg-primary/70 mx-auto mt-8 rounded-full ${animationClass}`}
            style={{ width: '6rem' }}
          ></div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary to-transparent"></div>
    </div>
  );
};

export default PageBanner;
