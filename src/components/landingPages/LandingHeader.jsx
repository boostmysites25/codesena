import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState, useEffect, useRef } from "react";
import { Link as Scroll } from "react-scroll";
import { logoImg } from "../../constant";
import { X } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import LogoFallback from "../ui/LogoFallback";

const options = [
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef(null);
  const menuItemRefs = useRef([]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial animation
  useEffect(() => {
    if (!headerRef.current) return;

    // Set initial opacity to ensure elements are visible even without animations
    if (headerRef.current) {
      headerRef.current.style.opacity = 1;
    }
    if (logoRef.current) {
      logoRef.current.style.opacity = 1;
    }
    if (navItemsRef.current && navItemsRef.current.children) {
      Array.from(navItemsRef.current.children).forEach(child => {
        child.style.opacity = 1;
      });
    }

    try {
      // Create a timeline for header animations
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate the header
      tl.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0
      );

      // Animate the logo
      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
          0.3
        );
      }

      // Animate the nav items
      if (navItemsRef.current && navItemsRef.current.children.length > 0) {
        tl.fromTo(
          navItemsRef.current.children,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 },
          0.5
        );
      }

      return () => {
        tl.kill();
      };
    } catch (error) {
      console.error("Animation error:", error);
      // Make sure everything is visible if animations fail
      gsap.set([
        headerRef.current, 
        logoRef.current, 
        navItemsRef.current?.children
      ], { opacity: 1, y: 0 });
    }
  }, []);

  // Drawer animation
  useEffect(() => {
    try {
      if (isOpen && menuItemRefs.current && menuItemRefs.current.length > 0) {
        gsap.fromTo(
          menuItemRefs.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" }
        );
      }
    } catch (error) {
      console.error("Drawer animation error:", error);
      // Make sure menu items are visible if animation fails
      if (menuItemRefs.current && menuItemRefs.current.length > 0) {
        gsap.set(menuItemRefs.current, { opacity: 1, x: 0 });
      }
    }
  }, [isOpen]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    // Reset menu item refs when drawer is closed
    if (isOpen) {
      menuItemRefs.current = [];
    }
  };

  // Function to add menu items to refs array
  const addToMenuRefs = (el) => {
    if (el && !menuItemRefs.current.includes(el)) {
      menuItemRefs.current.push(el);
    }
  };

  return (
    <div 
      ref={headerRef}
      className={`py-4 fixed top-0 w-full backdrop-blur-md z-50 text-white transition-all duration-300 ${
        scrolled ? "bg-secondary/90 shadow-lg shadow-black/10 py-3" : "bg-secondary/60 py-4"
      }`}
    >
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Helmet>
            {/* Preload the logo image */}
            <link rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
          <div ref={logoRef} style={{ opacity: 1 }}>
            <Scroll
              aria-label="Home"
              smooth={true}
              to="banner"
              className="cursor-pointer"
            >
              <img
                width="150"
                height="100"
                src={logoImg}
                className="h-[3rem] md:h-[4.5rem] scale-110 object-contain transition-transform duration-300 hover:scale-[1.35]"
                alt="logo"
              />
            </Scroll>
          </div>
          <div ref={navItemsRef} className="lg:flex items-center gap-10 hidden">
            <Link className="text-sm animated-underline transition-colors duration-300 hover:text-white" to="/">
              Home
            </Link>
            {options
              .filter((option) => option.path !== "contact")
              .map((option) => (
                <Scroll
                  to={`${option.path}`}
                  className="text-sm animated-underline transition-colors duration-300 hover:text-white"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={1000}
                  activeClass="text-primary font-medium"
                >
                  {option.name}
                </Scroll>
              ))}
            <Scroll
              to="contact"
              className="primary-btn hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us
            </Scroll>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10 bg-tertiary"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[2.2rem] hover:text-primary transition-colors duration-300"
            >
              <X size={35} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <Link
              ref={addToMenuRefs}
              className="text-3xl text-white font-medium transition-all duration-300 hover:text-primary hover:translate-x-2"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {options.map(({ name, path, id }, index) => (
              <Scroll
                ref={addToMenuRefs}
                onClick={() => setIsOpen(false)}
                key={id || index}
                className="text-3xl text-white font-medium transition-all duration-300 hover:text-primary hover:translate-x-2"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                {name}
              </Scroll>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl -z-10"></div>
          <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-primary/5 blur-2xl -z-10"></div>
        </Drawer>
        <button
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
          aria-label="toggle drawer"
        >
          <Hamburger
            color="white"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </button>
      </div>
    </div>
  );
};

export default LandingHeader;
