import React, { useEffect, useRef } from "react";
import { companyDetails, logoImg } from "../../constant";
import {
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LogoFallback from "../ui/LogoFallback";
import DecorativeElements from "../ui/DecorativeElements";
import { websiteLinks } from "./WebsiteHeader";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WebsiteFooter = () => {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const socialRef = useRef(null);
  const linksRef = useRef(null);
  const contactRef = useRef(null);
  const copyrightRef = useRef(null);

  useEffect(() => {
    if (!footerRef.current) return;

    // Set initial opacity to ensure elements are visible even without animations
    if (logoRef.current) {
      logoRef.current.style.opacity = 1;
    }
    if (socialRef.current) {
      Array.from(socialRef.current.children).forEach((child) => {
        child.style.opacity = 1;
      });
    }
    if (linksRef.current) {
      const linkItems = linksRef.current.querySelectorAll("li");
      if (linkItems && linkItems.length > 0) {
        linkItems.forEach((item) => {
          item.style.opacity = 1;
        });
      }
    }
    if (contactRef.current) {
      const contactItems = contactRef.current.querySelectorAll("li");
      if (contactItems && contactItems.length > 0) {
        contactItems.forEach((item) => {
          item.style.opacity = 1;
        });
      }
    }
    if (copyrightRef.current) {
      copyrightRef.current.style.opacity = 1;
    }

    // Create scroll trigger animations with a fallback
    const createAnimation = () => {
      // Logo animation
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Social icons animation
      if (socialRef.current && socialRef.current.children.length > 0) {
        gsap.fromTo(
          socialRef.current.children,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: socialRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Links animation
      const linkItems = linksRef.current?.querySelectorAll("li");
      if (linkItems && linkItems.length > 0) {
        gsap.fromTo(
          linkItems,
          { x: -20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            scrollTrigger: {
              trigger: linksRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Contact items animation
      const contactItems = contactRef.current?.querySelectorAll("li");
      if (contactItems && contactItems.length > 0) {
        gsap.fromTo(
          contactItems,
          { x: 20, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Copyright animation
      if (copyrightRef.current) {
        gsap.fromTo(
          copyrightRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            delay: 0.5,
            scrollTrigger: {
              trigger: copyrightRef.current,
              start: "top 95%",
            },
          }
        );
      }
    };

    // Try to create animations, but ensure content is visible regardless
    try {
      createAnimation();
    } catch (error) {
      console.error("Animation error:", error);
      // Make sure everything is visible if animations fail
      gsap.set(
        [
          logoRef.current,
          socialRef.current?.children,
          linksRef.current?.querySelectorAll("li"),
          contactRef.current?.querySelectorAll("li"),
          copyrightRef.current,
        ],
        { opacity: 1 }
      );
    }

    return () => {
      // Clean up ScrollTrigger instances
      try {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (
            trigger &&
            trigger.vars &&
            trigger.vars.trigger &&
            (trigger.vars.trigger === footerRef.current ||
              trigger.vars.trigger === socialRef.current ||
              trigger.vars.trigger === linksRef.current ||
              trigger.vars.trigger === contactRef.current ||
              trigger.vars.trigger === copyrightRef.current)
          ) {
            trigger.kill();
          }
        });
      } catch (error) {
        console.error("Error cleaning up ScrollTrigger:", error);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer ref={footerRef} className="py-[4rem] relative bg-secondary/80">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary to-transparent z-[1]"></div>

      {/* Decorative elements using the new component */}
      <DecorativeElements
        variant="default"
        animated={true}
        className="z-[5]"
        style={{ opacity: 1 }}
      />

      <div className="wrapper flex lg:flex-row flex-col gap-10 sm:gap-14 justify-between">
        <div className="max-w-xs">
          <Helmet>
            {/* Preload the logo image */}
            <link rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
          <div ref={logoRef} style={{ opacity: 1 }}>
            <LogoFallback
              src={logoImg}
              alt="Code Sena Logo"
              className="w-[10rem] object-contain hover-scale transition-transform duration-300"
              fallbackText="Code Sena"
              width="150"
              height="100"
            />
            <p className="desc text-sm max-w-[22rem] mt-4">
              We create digital products that deliver, scale & stay secure.
            </p>
          </div>
          <div ref={socialRef} className="flex items-center gap-4 mt-6">
            <Link
              aria-label="Contact us on Instagram"
              to={companyDetails.instagram}
              className="w-[2.5rem] h-[2.5rem] rounded-full p-2 bg-gradient-to-br from-primary to-primary/70 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Instagram strokeWidth={1.5} size={20} />
            </Link>
            <Link
              aria-label="Contact us on Twitter"
              to={companyDetails.twitter}
              className="w-[2.5rem] h-[2.5rem] rounded-full p-2 bg-gradient-to-br from-primary to-primary/70 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Twitter strokeWidth={1.5} size={20} />
            </Link>
            <Link
              aria-label="Contact us on LinkedIn"
              to={companyDetails.linkedin}
              className="w-[2.5rem] h-[2.5rem] rounded-full p-2 bg-gradient-to-br from-primary to-primary/70 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 flex justify-center items-center"
            >
              <Linkedin strokeWidth={1.5} size={20} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          <div ref={linksRef} className="flex flex-col gap-3 text-white">
            <h6 className="font-semibold text-lg text-gradient mb-2">
              Company
            </h6>
            <ul className="flex flex-col gap-3">
              {websiteLinks.map(({ path, name }) => (
                <li key={path} className="group">
                  <Link
                    to={path}
                    className="flex gap-2 items-center text-white/80 group-hover:text-primary transition-colors duration-200"
                  >
                    <ChevronRight
                      size={16}
                      strokeWidth={3}
                      className="text-primary transform group-hover:translate-x-1 transition-transform duration-200"
                    />
                    <span className="text-sm">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div ref={contactRef} className="flex flex-col gap-3 text-white">
            <h6 className="font-semibold text-lg text-gradient mb-2">
              Contact Us
            </h6>
            <ul className="flex flex-col gap-4">
              <li className="max-w-[22rem] flex gap-3 text-white/80 hover:text-white transition-colors duration-200">
                <MapPin
                  strokeWidth={1.5}
                  size={20}
                  className="text-primary inline min-w-5 mt-1"
                />
                <span className="text-sm">{companyDetails.address}</span>
              </li>
              <li className="flex gap-3 text-white/80">
                <Link
                  aria-label="Contact us on Email"
                  to={`mailto:${companyDetails.email}`}
                  className="flex gap-3 text-white/80 hover:text-primary transition-colors duration-200"
                >
                  <Mail
                    strokeWidth={1.5}
                    size={20}
                    className="text-primary inline mt-1"
                  />
                  <span className="text-sm">{companyDetails.email}</span>
                </Link>
              </li>
              <li>
                <Link
                  aria-label="Contact us on Phone"
                  to={`tel:${companyDetails.phone}`}
                  className="flex gap-3 text-white/80 hover:text-primary transition-colors duration-200"
                >
                  <Phone
                    strokeWidth={1.5}
                    size={20}
                    className="text-primary inline mt-1"
                  />
                  <span className="text-sm">{companyDetails.phone}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div
        ref={copyrightRef}
        className="wrapper mt-12 pt-6 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center"
      >
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Code Sena. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="mt-4 md:mt-0 flex items-center gap-2 text-white/60 hover:text-primary transition-colors duration-300"
        >
          <span className="text-sm">Back to top</span>
          <ArrowUp size={16} className="animate-bounce" />
        </button>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
