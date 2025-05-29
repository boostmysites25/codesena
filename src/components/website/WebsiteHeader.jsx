import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { logoImg } from "../../constant";
import { X } from "lucide-react";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import LogoFallback from "../ui/LogoFallback";

export const websiteLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about-us",
    name: "About Us",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/blogs",
    name: "Blogs",
  },
  {
    path: "/contact-us",
    name: "Contact Us",
  },
];

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      Array.from(navItemsRef.current.children).forEach((child) => {
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
      gsap.set(
        [headerRef.current, logoRef.current, navItemsRef.current?.children],
        { opacity: 1, y: 0 }
      );
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
        scrolled
          ? "bg-secondary/90 shadow-lg shadow-black/10 py-3"
          : "bg-secondary/60 py-4"
      }`}
    >
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Helmet>
            {/* Preload the logo image */}
            <link rel="preload" href={logoImg} as="image" type="image/png" />
          </Helmet>
          <div ref={logoRef} style={{ opacity: 1 }}>
            <LogoFallback
              src={logoImg}
              alt="Code Sena Logo"
              className="h-[3rem] md:h-[4.5rem] scale-110 object-contain transition-transform duration-300 hover:scale-[1.35]"
              fallbackText="Code Sena"
              width="150"
              height="100"
            />
          </div>
          <div ref={navItemsRef} className="lg:flex items-center gap-10 hidden">
            {websiteLinks
              .filter((option) => option.name !== "Contact Us")
              .map((option) => (
                <Link
                  to={`${option.path}`}
                  className={`text-sm animated-underline transition-colors duration-300 ${
                    option.path === pathname
                      ? "text-primary font-medium"
                      : "text-white/90 hover:text-white"
                  }`}
                  key={option.path}
                >
                  {option.name}
                </Link>
              ))}
            <Link
              to="/contact-us"
              className="primary-btn hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              Contact Us
            </Link>
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
            {websiteLinks.map(({ name, path, id }) => (
              <Link
                ref={addToMenuRefs}
                onClick={() => setIsOpen(false)}
                key={id}
                className={`text-3xl font-medium transition-all duration-300 hover:text-primary hover:translate-x-2 ${
                  path === pathname ? "text-primary" : "text-white/90"
                }`}
                to={path}
              >
                {name}
              </Link>
            ))}
          </div>
        </Drawer>
        <button
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
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

export default WebsiteHeader;
