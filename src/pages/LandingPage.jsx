import React, { lazy } from "react";
import bannerImg from "../assets/images/banner.webp";
import SubHeading from "../components/SubHeading";
import { appDevelopmentServices, webDevelopmentServices } from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/landingpage/app-dev-about.webp";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.webp";
import { Helmet } from "react-helmet";

const LandingHeader = lazy(() =>
  import("../components/landingPages/LandingHeader")
);
const LandingFooter = lazy(() =>
  import("../components/landingPages/LandingFooter")
);
const ContactForm = lazy(() =>
  import("../components/landingPages/ContactForm")
);
const Portfolio = lazy(() => import("../components/Portfolio"));
const ConnectWithUs = lazy(() => import("../components/ConnectWithUs"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));

const LandingPage = ({ page }) => {
  const isWebLanding = Boolean(page === "web-development");
  let services;
  if (page === "web-development") {
    services = webDevelopmentServices;
  } else {
    services = appDevelopmentServices;
  }

  return (
    <>
      <LandingHeader />
      <section id="banner" className="h-screen relative text-white">
        <div className="absolute top-0 w-full h-full bg-secondary/90"></div>
        <img
          loading="lazy"
          src={bannerImg}
          sizes="(max-width: 600px) 200px, 
         (max-width: 1200px) 800px, 
         1200px"
          className="w-full h-full absolute -z-10 object-cover object-center"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-4 sm:gap-5 justify-center items-center h-full relative z-10 px-4"
        >
          <p className="text-lg sm:text-xl">
            Welcome to{" "}
            <span className="text-primary font-semibold">Code Sena</span>
          </p>
          <h1 className="heading text-stroke">
            {isWebLanding
              ? "Web Solutions That Work Hard and Scale Smoothly"
              : "Mobile Apps That Feel Natural and Perform Flawlessly"}
          </h1>
          <p className="sub-heading max-w-3xl mx-auto">
            {isWebLanding
              ? "Crafting Websites That Stand Out & Drive Results"
              : "Developing Mobile Apps That Deliver Exceptional User Experiences"}
          </p>
        </div>
      </section>
      <section id="about" className="text-white wrapper pt-[3rem]">
        <div className="grid lg:grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-up" className="hidden lg:block h-full">
            <img
              loading="lazy"
              src={isWebLanding ? webDevAboutImg : appDevAboutImg}
              className="object-cover h-full rounded-lg"
              alt="about us"
              width="600"
              height="400"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex h-full items-center lg:items-start flex-col gap-7"
          >
            <div className="flex flex-col items-center lg:items-start gap-5 text-center lg:text-start">
              <SubHeading
                heading={isWebLanding ? "Web Development" : "App Development"}
              />
              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-4 w-full"
              >
                <img
                  loading="lazy"
                  src={isWebLanding ? webDevAboutImg : appDevAboutImg}
                  className="object-cover h-full rounded-lg w-full"
                  alt="about"
                  width="200"
                  height="200"
                />
              </div>
              <h2 className="heading-2 max-w-[60rem] mx-auto">
                {isWebLanding
                  ? "Transforming Your Vision Into Stunning Websites"
                  : "Creating Seamless Digital Experiences for Your Users"}
              </h2>
              <p className="desc">
                {isWebLanding
                  ? "Our custom web applications are designed to meet your business goals without unnecessary complexity. Whether you're launching a SaaS platform, streamlining internal operations, or managing data-heavy workflows, we develop apps that are scalable, intuitive, and secure. \n Using the latest tech stacks like React, Node.js, and Next.js, we make sure your product not only looks sharp—but runs reliably across all browsers and devices."
                  : "From concept to launch, we build mobile apps that are fast, reliable, and easy to use. Whether you need a native app for iOS or Android, or a cross-platform app with Flutter or React Native, we help you deliver a mobile experience your users will love.\n We manage everything—from design and development to testing and deployment—ensuring that your app runs smooth and solves real problems for your audience."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="wrapper py-[5rem] flex flex-col gap-5 items-center"
      >
        <SubHeading
          heading={
            isWebLanding
              ? "Web Development Services"
              : "App Development Services"
          }
        />
        <h2
          data-aos="fade-up"
          className="heading-2 max-w-[60rem] mx-auto text-center"
        >
          {isWebLanding
            ? "We create websites that are visually stunning, user-friendly, and optimized for search engines."
            : "We craft mobile apps that are intuitive, engaging, and tailored to your specific needs."}
        </h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              data-aos="fade-up"
              className="bg-gradient-to-b from-tertiary to-tertiary/90 rounded-xl p-6 shadow-lg hover:shadow-primary/20 transition-all duration-300 transform border border-primary/10 hover:border-primary/30 items-center flex text-center flex-col"
            >
              {typeof service.icon === 'string' ? (
                <img
                  loading="lazy"
                  src={service.icon}
                  width="50"
                  height="50"
                  className="w-[3rem] h-[3rem] object-contain"
                  alt={service.title}
                />
              ) : (
                // Render React component icon
                <div className="w-[4rem] h-[4rem] flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 p-4 rounded-lg shadow-inner shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 mb-3">
                  {service.icon}
                </div>
              )}
              <h6 className="text-xl font-medium mt-2 text-primary-light">{service.title}</h6>
              <p className="desc mt-3 leading-relaxed">{service.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
                <div className="h-1 w-4 bg-primary/20 rounded-full"></div>
                <div className="h-1 w-2 bg-primary/10 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TrustWorthySection />
      <Portfolio page={page} />
      <WhyChooseUs />
      <Testimonials />
      <ConnectWithUs />
      <JoinHappyCustomers />
      <ContactForm />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
