import React, { lazy } from "react";
import bannerImg from "../assets/images/banner.webp";
import SubHeading from "../components/SubHeading";
import { appDevelopmentServices, webDevelopmentServices } from "../constant";
import TrustWorthySection from "../components/TrustWorthySection";
import appDevAboutImg from "../assets/images/landingpage/app-dev-about.webp";
import webDevAboutImg from "../assets/images/landingpage/web-dev-about.webp";
import { Link as Scroll } from "react-scroll";
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
      <Helmet>
        <title>
          {isWebLanding
            ? "Professional Web Development Services | Code Sena - Custom Websites That Convert"
            : "Expert Mobile App Development Services | Code Sena - Cross-Platform Apps That Scale"}
        </title>
        <meta
          name="description"
          content={
            isWebLanding
              ? "Get custom web development services that drive results. We create fast, SEO-friendly websites using modern tech stacks. Custom-built, not templated. Contact us today!"
              : "Professional mobile app development services. We build scalable, user-focused apps using Flutter and modern frameworks. Cross-platform solutions that deliver results."
          }
        />
        <meta
          name="keywords"
          content={
            isWebLanding
              ? "web development, custom websites, SEO-friendly websites, modern web development, responsive design, web applications"
              : "mobile app development, Flutter apps, cross-platform development, iOS apps, Android apps, mobile applications"
          }
        />
        <meta
          property="og:title"
          content={
            isWebLanding
              ? "Professional Web Development Services | Code Sena"
              : "Expert Mobile App Development Services | Code Sena"
          }
        />
        <meta
          property="og:description"
          content={
            isWebLanding
              ? "Custom web development that drives results"
              : "Scalable mobile apps that deliver exceptional user experiences"
          }
        />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href={isWebLanding ? "/web-development" : "/app-development"}
        />
      </Helmet>
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
              {typeof service.icon === "string" ? (
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
              <h6 className="text-xl font-medium mt-2 text-primary-light">
                {service.title}
              </h6>
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

      {/* Why Choose Us Section */}
      <section className="wrapper py-[4rem] sm:py-[5rem]">
        <div className="text-center flex flex-col items-center mb-12 sm:mb-16">
          <SubHeading heading="Why Choose Us" />
          <h2
            data-aos="fade-up"
            className="heading-2 max-w-[60rem] mx-auto mt-4"
          >
            {isWebLanding
              ? "Why We're Different From Other Web Development Companies"
              : "Why We're Different From Other App Development Companies"}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            data-aos="fade-up"
            className="bg-gradient-to-br from-tertiary/80 to-tertiary/60 rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300"
          >
            {isWebLanding ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary-light">
                    Web Development – Why Choose Us
                  </h3>
                </div>
                <p className="desc leading-relaxed text-white/90">
                  We create fast, SEO-friendly websites that are
                  custom-built—not templated. Every site is designed to reflect
                  your brand and convert visitors into clients. We use modern
                  tech stacks and offer ongoing support as your business grows.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm">
                    Custom Built
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm">
                    SEO Optimized
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm">
                    Modern Tech Stack
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm">
                    Ongoing Support
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary-light">
                    App Development – Why Choose Us
                  </h3>
                </div>
                <p className="desc leading-relaxed text-white/90">
                  We build scalable, user-focused mobile apps tailored to your
                  business goals. Using modern frameworks like Flutter, we
                  deliver cross-platform apps faster and cleaner. You stay
                  involved throughout, and we continue support even after
                  launch.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm">
                    Scalable Architecture
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm">
                    Cross-Platform
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm">
                    Modern Frameworks
                  </span>
                  <span className="px-3 py-1 bg-primary/20 text-primary-light rounded-full text-sm">
                    Post-Launch Support
                  </span>
                </div>
              </>
            )}

            {/* Call to Action */}
            <div className="mt-8 pt-6 border-t border-primary/20">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Scroll
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  className="secondary-btn text-sm sm:text-base px-6 sm:px-8 py-3 border-2 border-primary/50 hover:border-primary text-primary-light hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
                >
                  Contact Us
                </Scroll>
              </div>
            </div>
          </div>
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
