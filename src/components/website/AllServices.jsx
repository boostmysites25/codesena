import React, { useState } from "react";
import { allServices } from "../../constant";
import SubHeading from "../SubHeading";
import Drawer from "react-modern-drawer";
import { X } from "lucide-react";

const AllServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(allServices[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <section className="wrapper py-[5rem] flex flex-col gap-5 items-center">
      <SubHeading heading="Our Services" />
      <h2
        data-aos="fade-up"
        className="heading-2 max-w-[60rem] mx-auto text-center"
      >
        Building Reliable Tech That Moves With You
      </h2>
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {allServices.map((service) => (
          <div
            key={service.id}
            data-aos="fade-up"
            className="bg-gradient-to-b from-tertiary to-tertiary/90 rounded-xl p-6 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform border border-primary/10 hover:border-primary/30 flex text-center flex-col justify-between"
          >
            <div className="flex flex-col items-center">
              <div className="h-[3.5rem] md:h-[4rem] flex items-center justify-center mb-2">
                {typeof service.icon === 'string' ? (
                  <img
                    loading="lazy"
                    src={service.icon}
                    width="75"
                    height="75"
                    className="h-full object-contain"
                    alt={service.title}
                  />
                ) : (
                  // Render React component icon
                  <div className="scale-125">
                    {service.icon}
                  </div>
                )}
              </div>
              <h6 className="text-xl font-medium mt-2">{service.title}</h6>
              <p className="desc mt-2">{service.description}</p>
            </div>
            <button
              onClick={() => handleSelectServiceToShowDetail(service)}
              className="primary-btn mt-6 w-fit mx-auto group flex items-center gap-2"
            >
              <span>Learn More</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-50 w-screen bg-gradient-to-b from-tertiary to-secondary overflow-y-auto max-h-[90vh]"
        lockBackgroundScroll
      >
        <div className="sticky top-0 z-10 bg-gradient-to-b from-tertiary to-tertiary/90 backdrop-blur-md py-3 px-2 mb-4 flex items-center justify-between">
          <h2 className="text-xl font-medium text-primary ml-4">{selectedService.title}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
          >
            <X size={28} />
          </button>
        </div>
        <div className="wrapper flex flex-col gap-6 text-white pb-[4rem] max-w-5xl mx-auto">
          <div 
            className="desc prose prose-invert prose-headings:text-primary prose-a:text-primary-light prose-strong:text-white prose-strong:font-medium max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedService.detailContent }}
          />
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setIsOpen(false)}
              className="secondary-btn group flex items-center gap-2"
            >
              <span>Close</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:rotate-90"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </Drawer>
    </section>
  );
};

export default AllServices;
