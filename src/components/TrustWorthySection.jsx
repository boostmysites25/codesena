import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaRegClock, FaRegLightbulb, FaRegSmile, FaRegCheckCircle } from "react-icons/fa";

const TrustWorthySection = React.memo(() => {
  const totalYrs = 3;
  const projectsDone = 100;
  const totalExperts = 20;
  const happlyClients = 70;

  const [yrs, setYrs] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      // Animate Years of Experience
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 50);

      // Animate Experts
      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 250);

      // Animate Clients
      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, happlyClients));
      }, 30);

      // Animate On Time Completion Percentage
      const completionInterval = setInterval(() => {
        setCompletedProjects((prev) => Math.min(prev + 1, projectsDone));
      }, 30);

      // Clear intervals when animation reaches target values
      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);
  return (
    <div className="py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-tertiary/80 to-secondary/90 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/30 blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-primary rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-primary rounded-full opacity-60 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-white rounded-full opacity-40 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      {/* Content container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="heading-2 text-white mb-4 relative inline-block">
            Our Impact in Numbers
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </h2>
          <div className="relative h-1 mx-auto w-24 overflow-hidden">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-shimmer"></div>
          </div>
          <p className="text-white/80 mt-6 max-w-2xl mx-auto leading-relaxed">
            We're proud of the results we've achieved for our clients. These numbers reflect our commitment to excellence and client satisfaction.
          </p>
        </div>
        
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Years of Experience */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light/70 flex items-center justify-center mb-4 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <FaRegClock className="text-white text-2xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="heading-1 text-white mb-2 flex items-baseline">
                <span className="counter-value relative">
                  {yrs}
                  <span className="absolute -inset-1 bg-primary/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                </span>
                <span className="text-primary-light text-5xl ml-1">+</span>
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent mb-3"></div>
              <p className="text-white/90 font-medium text-lg">Years of Experience</p>
            </div>
          </div>
          
          {/* Expert Team */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light/70 flex items-center justify-center mb-4 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <FaRegLightbulb className="text-white text-2xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="heading-1 text-white mb-2 flex items-baseline">
                <span className="counter-value relative">
                  {experts}
                  <span className="absolute -inset-1 bg-primary/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                </span>
                <span className="text-primary-light text-5xl ml-1">+</span>
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent mb-3"></div>
              <p className="text-white/90 font-medium text-lg">Expert Team</p>
            </div>
          </div>
          
          {/* Happy Clients */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light/70 flex items-center justify-center mb-4 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <FaRegSmile className="text-white text-2xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="heading-1 text-white mb-2 flex items-baseline">
                <span className="counter-value relative">
                  {clients}
                  <span className="absolute -inset-1 bg-primary/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                </span>
                <span className="text-primary-light text-5xl ml-1">+</span>
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent mb-3"></div>
              <p className="text-white/90 font-medium text-lg">Happy Clients</p>
            </div>
          </div>
          
          {/* Projects Completed */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover:-translate-y-1"
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light/70 flex items-center justify-center mb-4 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <FaRegCheckCircle className="text-white text-2xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="heading-1 text-white mb-2 flex items-baseline">
                <span className="counter-value relative">
                  {completedProjects}
                  <span className="absolute -inset-1 bg-primary/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                </span>
                <span className="text-primary-light text-5xl ml-1">+</span>
              </h3>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary/50 to-transparent mb-3"></div>
              <p className="text-white/90 font-medium text-lg">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TrustWorthySection;
