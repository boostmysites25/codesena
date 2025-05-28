import React, { useEffect, useRef } from "react";
import bgImg from "../assets/images/bg-img.webp";
import bannerImg from "../assets/images/banner.webp";
import { FaAward, FaClock, FaUsers, FaCheckCircle, FaTools, FaHeadset, FaHandshake, FaLightbulb } from "react-icons/fa";

const content = [
  {
    icon: FaAward,
    title: "Proven Expertise",
    description: "Our team brings years of industry experience and technical knowledge to every project."
  },
  {
    icon: FaClock,
    title: "Affordable & Time Efficient",
    description: "We deliver high-quality solutions within your budget and timeline constraints."
  },
  {
    icon: FaUsers,
    title: "Client-Centric Approach",
    description: "Your goals and needs are at the center of our development process."
  },
  {
    icon: FaCheckCircle,
    title: "Commitment to Quality",
    description: "We maintain rigorous quality standards throughout the development lifecycle."
  },
  {
    icon: FaTools,
    title: "End-to-End Solutions",
    description: "From concept to deployment and beyond, we handle every aspect of your project."
  },
  {
    icon: FaHeadset,
    title: "Dedicated Support",
    description: "Our team provides ongoing assistance and maintenance for your digital products."
  },
  {
    icon: FaHandshake,
    title: "Transparent and Reliable",
    description: "We maintain clear communication and deliver on our promises consistently."
  },
  {
    icon: FaLightbulb,
    title: "Innovative Problem Solvers",
    description: "We approach challenges creatively to find the most effective solutions."
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  return (
    <section
      className="py-24 relative bg-center bg-cover min-h-[60vh] overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
      ref={sectionRef}
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 to-secondary/90"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-primary rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2
              data-aos="fade-up"
              className="heading-2 text-white relative inline-block"
            >
              Why Choose Us?
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-transparent rounded-full"></div>
            </h2>
          </div>
          
          <p 
            data-aos="fade-up" 
            data-aos-delay="100"
            className="max-w-2xl mx-auto mt-6 text-white/80 text-lg"
          >
            Partner with a team that's committed to your success through technical excellence, 
            reliable service, and innovative solutions.
          </p>
        </div>
        
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {content.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={50 * index}
              className="flex flex-col group items-center gap-4 rounded-2xl p-8 transition-all duration-500 
                bg-gradient-to-br from-primary/10 to-transparent backdrop-blur-sm
                hover:bg-gradient-to-br hover:from-primary/20 hover:to-primary/5
                border border-white/10 hover:border-primary/30
                hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Icon container with animated background */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full p-5 mb-2 relative overflow-hidden
                bg-gradient-to-br from-primary to-primary-light/70 shadow-lg shadow-primary/20 group-hover:shadow-primary/40">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <item.icon className="w-10 h-10 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <h3 className="text-center font-semibold text-xl text-white group-hover:text-primary-light transition-colors duration-300">
                {item.title}
              </h3>
              
              {item.description && (
                <p className="text-center text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                  {item.description}
                </p>
              )}
              
              {/* Animated underline */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full mt-2 group-hover:w-16 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
