import React from "react";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import SubHeading from "../components/SubHeading";
import aboutImg1 from "../assets/images/aboutus-img1.webp";
import aboutImg2 from "../assets/images/aboutus-img2.webp";
import aboutImg3 from "../assets/images/home-about-img.jpeg";
import { Link } from "react-router-dom";

const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const AboutUs = () => {
  return (
    <>
      <WebsiteHeader />
      <PageBanner 
        title="About Code Sena" 
        desc="We're not just developers—we're your technical partners in building products that grow with your business"
      />

      <section className="text-white wrapper py-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={aboutImg1}
              className="object-cover h-full rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5">
              <SubHeading heading="About Us" />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={aboutImg1}
                  className="object-cover h-full rounded-lg w-full"
                  alt=""
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                Turning Big Ideas Into Working Digital Products
              </h2>
              <p className="desc">
                At Code Sena, we help businesses turn big ideas into working
                digital products. From AI-powered systems to secure web
                platforms, we focus on building tools that make life easier,
                work smarter, and grow with your goals. We're not just
                developers—we’re partners who care about delivering quality at
                every stage. <br />
                <br />
                We blend creative thinking with technical depth to build digital
                solutions that are practical, scalable, and designed for the
                future.
                <br />
                <br />
                We’re not just a dev shop—we’re your technical partner in
                building products that grow with your business. Whether it’s a
                polished web platform, a high-performing mobile app, or a secure
                backend API, we combine thoughtful design with clean code to
                help your brand stand out. <br />
                <br />
                Our goal is to take your vision, wrap it in beautiful UI/UX, and
                ship it with rock-solid performance and security. From MVPs to
                enterprise-grade systems, we help you build smarter, scale
                faster, and launch with confidence.
              </p>
            </div>
            
            {/* CTA Section */}
            <div className="mt-6 sm:mt-8 text-center lg:text-left">
              <Link 
                to="/contact-us" 
                className="primary-btn inline-flex items-center group text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
              >
                Ready to Start Your Project?
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
            </div>
          </div>
        </div>
      </section>

      <TrustWorthySection />

      <section className="wrapper py-[3rem] bg-tertiary">
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-10">
          <div className="h-full">
            <img
              loading="lazy"
              src={aboutImg3}
              className="object-cover h-full w-full max-h-[24rem] rounded-lg"
              alt=""
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center lg:items-start flex-col gap-7"
          >
            <h3 className="heading-2 text-primary mb-4">
              Smart, Secure, and Scalable
            </h3>
            <p className="desc">
              We believe in building software that doesn’t just work—it works
              well and keeps working as you grow. Whether you're launching a new
              platform, redesigning an app, or making your systems more secure,
              our job is to make technology feel like less of a risk and more of
              a return on investment. We're passionate about creating things
              that solve real problems—and doing it right the first time.
            </p>

            <div className="mt-6">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-3 bg-primary rounded-full"></div>
                <div className="h-1 w-6 bg-primary rounded-full"></div>
                <div className="h-1 w-12 bg-primary rounded-full"></div>
              </div>
              
              {/* CTA for this section */}
              <div className="text-center md:text-left">
                <Link 
                  to="/services" 
                  className="primary-btn inline-flex items-center group text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                >
                  Explore Our Services
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default AboutUs;
