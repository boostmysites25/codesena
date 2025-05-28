import React from "react";
import { FaMobileAlt, FaLaptopCode, FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";
import { MdDesignServices, MdWeb, MdDeveloperMode, MdOutlineDesignServices } from "react-icons/md";
import { SiFlutter, SiFirebase } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import bannerImg from "../assets/images/banner.webp";
import aboutImg from "../assets/images/aboutus-img3.webp";
import { Link } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import HeroSection from "../components/website/HeroSection";
import ServiceCards from "../components/website/ServiceCards";

const WebsiteHeader = React.lazy(() =>
  import("../components/website/WebsiteHeader")
);
const TrustWorthySection = React.lazy(() =>
  import("../components/TrustWorthySection")
);
const Portfolio = React.lazy(() => import("../components/Portfolio"));
const Testimonials = React.lazy(() => import("../components/Testimonials"));
const JoinHappyCustomers = React.lazy(() =>
  import("../components/JoinHappyCustomers")
);
const WebsiteFooter = React.lazy(() =>
  import("../components/website/WebsiteFooter")
);
const AllServices = React.lazy(() =>
  import("../components/website/AllServices")
);
const OurValue = React.lazy(() => import("../components/website/OurValue"));
const WhyChooseUs = React.lazy(() => import("../components/WhyChooseUs"));
const LeadForm = React.lazy(() => import("../components/LeadForm"));

const Home = () => {
  // Service cards data with React icons
  const serviceCards = [
    {
      title: "Mobile Application Development",
      icon: (
        <div className="relative">
          <FaMobileAlt size={40} className="text-primary" />
          <div className="absolute -bottom-1 -right-1">
            <TbBrandReactNative size={20} className="text-primary-light" />
          </div>
          <div className="absolute -top-1 -right-1">
            <SiFlutter size={16} className="text-primary-light" />
          </div>
        </div>
      ),
      description:
        "We design and develop mobile apps that are intuitive, fast, and actually enjoyable to use.",
    },
    {
      title: "UI/UX Design",
      icon: (
        <div className="relative">
          <MdOutlineDesignServices size={40} className="text-primary" />
          <div className="absolute -bottom-1 -right-1">
            <MdDesignServices size={20} className="text-primary-light" />
          </div>
        </div>
      ),
      description:
        "Our UI/UX design services create user-friendly interfaces that enhance user experience and engagement.",
    },
    {
      title: "Website Application Development",
      icon: (
        <div className="relative">
          <FaLaptopCode size={40} className="text-primary" />
          <div className="absolute -bottom-1 -right-1">
            <FaReact size={20} className="text-primary-light animate-spin-slow" />
          </div>
          <div className="absolute -top-1 -right-1">
            <FaNodeJs size={16} className="text-primary-light" />
          </div>
        </div>
      ),
      description:
        "We build custom web applications that are fast, scalable, and tailored to your business.",
    },
  ];

  return (
    <>
      <WebsiteHeader />

      {/* Hero Section */}
      <HeroSection bannerImg={bannerImg} />

      {/* Service Cards Section */}
      <ServiceCards services={serviceCards} />

      {/* About Section */}
      <section className="text-white wrapper py-[5rem]">
        <div className="grid lg:grid-cols-2 gap-12 mt-7 items-center">
          <div data-aos="fade-up" className="hidden lg:block h-full relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary opacity-70"></div>
            <img
              loading="lazy"
              src={aboutImg}
              width="600"
              height="600"
              className="object-cover h-full w-full rounded-lg shadow-xl"
              alt="About Code Sena"
            />
          </div>

          <div className="flex h-full items-center lg:items-start flex-col gap-7">
            <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-start">
              <SubHeading heading="About Us" />

              <div
                data-aos="fade-up"
                className="h-[20em] sm:h-[25rem] lg:hidden mb-6 w-full relative"
              >
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary opacity-70"></div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary opacity-70"></div>
                <img
                  loading="lazy"
                  src={aboutImg}
                  width="200"
                  height="200"
                  className="object-cover h-full rounded-lg w-full shadow-xl"
                  alt="About Code Sena"
                />
              </div>

              <h2
                data-aos="fade-up"
                className="heading-2 max-w-[60rem] mx-auto"
              >
                Turning Ideas Into Real-World Technology
              </h2>

              <p data-aos="fade-up" className="desc leading-relaxed">
                At <span className="text-primary font-medium">Code Sena</span>,
                we help businesses turn big ideas into working digital products.
                From AI-powered systems to secure web platforms, we focus on
                building tools that make life easier, work smarter, and grow
                with your goals. We're not just developers—we’re partners who
                care about delivering quality at every stage. <br /> <br />
                We blend creative thinking with technical depth to build digital
                solutions that are practical, scalable, and designed for the
                future.
              </p>
            </div>

            <div
              data-aos="fade-up"
              className="w-fit mt-6 justify-center lg:justify-start"
            >
              <Link to="/about-us" className="primary-btn group">
                Know More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
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

      <AllServices />
      <TrustWorthySection />
      <OurValue />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <JoinHappyCustomers />
      <LeadForm />
      <WebsiteFooter />
    </>
  );
};

export default Home;
