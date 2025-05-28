import React from "react";

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
        title="Our Services"
        desc=""
      />
      
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl -z-10"></div>
        
        <AllServices />
        <OurValue />
        <WhyChooseUs />
        <Testimonials />
        <JoinHappyCustomers />
      </div>
      
      <WebsiteFooter />
    </>
  );
};

export default Services;
