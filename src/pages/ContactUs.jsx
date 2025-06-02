import React, { lazy } from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { companyDetails } from "../constant";
import { Link } from "react-router-dom";

const WebsiteHeader = lazy(() => import("../components/website/WebsiteHeader"));
const PageBanner = lazy(() => import("../components/website/PageBanner"));
const WebsiteFooter = lazy(() => import("../components/website/WebsiteFooter"));
const LeadForm = lazy(() => import("../components/LeadForm"));
const MapComponent = lazy(() => import("../components/website/MapComponent"));

const ContactUs = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner 
        title="Let's Build Something Amazing Together" 
        desc="Ready to turn your vision into reality? Get in touch and let's discuss how we can help your business grow with the right technology"
      />
      <div className="py-[3rem]">
        <div className="wrapper">
          {/* Strong headline for contact section */}
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h2 className="heading-2 mb-3 sm:mb-4">
              Start Your Digital Transformation Today
            </h2>
            <p className="desc max-w-2xl mx-auto">
              Whether you need a mobile app, web platform, or custom software solution, we're here to help you succeed.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            <div
              data-aos="fade-up"
              className="bg-tertiary flex flex-col gap-3 items-center justify-center rounded-xl p-5 hover:bg-tertiary/80 transition-all duration-300"
            >
              <MapPin
                strokeWidth={2}
                size={40}
                className="text-primary inline min-w-5"
              />
              <span className="text-center font-medium">
                {companyDetails.address}
              </span>
            </div>
            <Link
              to={`mailto:${companyDetails.email}`}
              data-aos="fade-up"
              className="bg-tertiary flex flex-col gap-3 items-center justify-center rounded-xl p-5 hover:bg-tertiary/80 transition-all duration-300 group"
            >
              <Mail strokeWidth={2} size={40} className="text-primary inline group-hover:scale-110 transition-transform" />
              <span className="text-center font-medium">
                {companyDetails.email}
              </span>
            </Link>
            <Link
              to={`tel:${companyDetails.phone}`}
              data-aos="fade-up"
              className="bg-tertiary flex flex-col gap-3 items-center justify-center rounded-xl p-5 hover:bg-tertiary/80 transition-all duration-300 group"
            >
              <Phone
                strokeWidth={2}
                size={40}
                className="text-primary inline group-hover:scale-110 transition-transform"
              />
              <span className="text-center font-medium">
                {companyDetails.phone}
              </span>
            </Link>
          </div>
          <LeadForm />
        </div>
      </div>
      <div className="mt-[3rem] relative">
        <div
          data-aos="fade-up"
          className="p-7 flex gap-2 bg-white absolute rounded-b-xl left-0 translate-x-1/2 sm:right-[2rem] sm:translate-x-0 top-0 z-10 text-black min-w-[22rem] max-w-[22rem]"
        >
          <MapPin strokeWidth={1.5} size={20} className="inline min-w-5 mt-1" />{" "}
          <span className="text-sm">{companyDetails.address}</span>
        </div>
        <MapComponent />
      </div>
      <WebsiteFooter />
    </>
  );
};

export default ContactUs;
