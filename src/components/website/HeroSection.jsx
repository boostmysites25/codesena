import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ bannerImg }) => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const taglineRef = useRef(null);
  const ctaRef = useRef(null);
  const decorRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    // Create a timeline for hero animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate the background image with a subtle zoom effect
    tl.fromTo(
      imageRef.current,
      { scale: 1.2, opacity: 0.5 },
      { scale: 1.1, opacity: 1, duration: 2.5, ease: "power2.out" },
      0
    );

    // Animate the welcome text
    tl.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      0.5
    );

    // Animate the main title with a text stroke effect
    tl.fromTo(
      titleRef.current,
      { y: 80, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
      0.7
    );

    // Animate the tagline
    tl.fromTo(
      taglineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      1
    );

    // Animate the CTA button
    tl.fromTo(
      ctaRef.current,
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      1.2
    );

    // Animate decorative elements
    tl.fromTo(
      decorRef.current.querySelectorAll('.decor-element'),
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1.5, stagger: 0.2, ease: "power2.out" },
      1
    );

    // Create parallax effect on scroll
    gsap.to(imageRef.current, {
      y: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Fade out content on scroll
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "center top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      // Clean up animations
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === heroRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={heroRef} className="h-screen relative text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute top-0 w-full h-full bg-secondary/80 z-0"></div>
      
      {/* Background image with parallax effect */}
      <div ref={imageRef} className="absolute top-0 w-full h-full -z-10">
        <img
          loading="lazy"
          src={bannerImg}
          srcSet={`${bannerImg} 400w, ${bannerImg} 800w, ${bannerImg} 1200w`}
          sizes="(max-width: 600px) 200px, (max-width: 1200px) 800px, 1200px"
          className="w-full h-full object-cover object-center"
          alt="Hero background"
        />
      </div>
      
      {/* Hero content */}
      <div ref={contentRef} className="wrapper pt-12 text-center flex flex-col gap-6 justify-center items-center h-full relative z-10">
        <p ref={subtitleRef} className="sub-heading tracking-wider mb-2">
          Transform Your Vision Into Reality
        </p>
        <h1 ref={titleRef} className="heading text-stroke font-bold tracking-tight">
          Build Digital Products That Actually Work
        </h1>
        <p ref={taglineRef} className="sub-heading max-w-3xl mx-auto leading-relaxed">
          From AI-powered systems to secure web platforms, we create digital solutions that scale with your business and deliver real results
        </p>
        <div ref={ctaRef} className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md sm:max-w-none mx-auto">
          <Link to="/contact-us" className="primary-btn text-sm sm:text-base px-6 sm:px-8 py-3 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 w-full sm:w-auto">
            Start Your Project Today
          </Link>
          <Link to="/services" className="secondary-btn text-sm sm:text-base px-6 sm:px-8 py-3 border-2 border-primary/50 hover:border-primary text-primary-light hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto">
            View Our Services
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div ref={decorRef} className="absolute w-full h-full pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary to-transparent"></div>
        <div className="decor-element absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="decor-element absolute bottom-1/3 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="decor-element absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-primary/5 blur-2xl"></div>
        <div className="decor-element absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full bg-primary/5 blur-2xl"></div>
        
        {/* Animated particles */}
        <div className="decor-element absolute top-[20%] left-[10%] w-1 h-1 rounded-full bg-primary/80"></div>
        <div className="decor-element absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-primary/60"></div>
        <div className="decor-element absolute top-[25%] left-[80%] w-1 h-1 rounded-full bg-primary/70"></div>
        <div className="decor-element absolute top-[60%] left-[85%] w-2 h-2 rounded-full bg-primary/50"></div>
        <div className="decor-element absolute top-[70%] left-[15%] w-1 h-1 rounded-full bg-primary/60"></div>
      </div>
    </section>
  );
};

export default HeroSection;