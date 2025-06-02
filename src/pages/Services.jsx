import React from "react";
import { Link } from "react-router-dom";

const WebsiteHeader = React.lazy(() => import("../components/website/WebsiteHeader"));
const PageBanner = React.lazy(() => import("../components/website/PageBanner"));
const AllServices = React.lazy(() => import("../components/website/AllServices"));
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() => import("../components/JoinHappyCustomers"));
const WebsiteFooter = React.lazy(() => import("../components/website/WebsiteFooter"));

const Services = () => {
  return (
    <>
      <WebsiteHeader />
      
      <PageBanner
        title="Services That Drive Real Results"
        desc="From mobile apps to web platforms, we build digital solutions that scale with your business and deliver measurable impact"
      />
      
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl -z-10"></div>
        
        <AllServices />
        <OurValue />
        
        {/* Strong CTA Section */}
        <section className="wrapper py-12 sm:py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="heading-2 mb-4 sm:mb-6">
              Ready to Transform Your Business with Technology?
            </h2>
            <p className="desc mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a digital solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <Link 
                to="/contact-us" 
                className="primary-btn text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center group w-full sm:w-auto"
              >
                Get Started Today
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
              <Link 
                to="/about-us" 
                className="secondary-btn text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary/50 hover:border-primary text-primary-light hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
        
        <WhyChooseUs />
        <Testimonials />
        <JoinHappyCustomers />
      </div>
      
      <WebsiteFooter />
    </>
  );
};

export default Services;
