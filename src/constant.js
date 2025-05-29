import logoImg from "./assets/logo/logo.png";

// all services
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaMobileAlt,
  FaShieldAlt,
  FaCode,
  FaLaptopCode,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import {
  MdDesignServices,
  MdWeb,
  MdDeveloperMode,
  MdSecurity,
  MdOutlineDesignServices,
} from "react-icons/md";
import {
  SiFlutter,
  SiFirebase,
  SiNextdotjs,
  SiDjango,
  SiAmazonaws,
  SiMongodb,
  SiPostgresql,
  SiKotlin,
  SiDart,
} from "react-icons/si";
import { TbBrandReactNative, TbApi, TbDeviceMobile } from "react-icons/tb";
import { AiFillSafetyCertificate, AiFillBug } from "react-icons/ai";
import { BiUserCheck, BiPalette } from "react-icons/bi";
import { IoIosApps } from "react-icons/io";
import { GiArtificialIntelligence } from "react-icons/gi";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Services = lazy(() => import("./pages/Services"));
const BlogListing = lazy(() => import("./pages/BlogListing"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));

export { logoImg };

export const companyDetails = {
  phone: "+919059009923",
  address: "10-283/9/2/8/11 Vanin agar sec-bad, Hyderabad",
  email: "abc@xyz.com",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <BlogListing />,
  },
  {
    path: "/blog/:slug",
    name: "Blog Detail",
    element: <BlogDetail />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: (
      <div className="relative">
        <FaLaptopCode size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <SiNextdotjs size={20} className="text-primary-light" />
        </div>
      </div>
    ),
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: (
      <div className="relative">
        <MdWeb size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaReact size={20} className="text-primary-light animate-spin-slow" />
        </div>
      </div>
    ),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: (
      <div className="relative">
        <MdDeveloperMode size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaNodeJs size={20} className="text-primary-light" />
        </div>
      </div>
    ),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: (
      <div className="relative">
        <FaCode size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <SiDjango size={20} className="text-primary-light" />
        </div>
      </div>
    ),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: (
      <div className="relative">
        <IoIosApps size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <FaApple size={20} className="text-primary-light" />
        </div>
      </div>
    ),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: (
      <div className="relative">
        <FaAndroid size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <SiKotlin size={20} className="text-primary-light" />
        </div>
      </div>
    ),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals. Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: (
      <div className="relative">
        <SiFlutter size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <SiDart size={20} className="text-primary-light" />
        </div>
      </div>
    ),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: (
      <div className="relative">
        <TbDeviceMobile size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <TbBrandReactNative size={20} className="text-primary-light" />
        </div>
      </div>
    ),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Nikita Sharma",
    position: "Founder at MyWell",
    desc: "“From the initial brief to launch day, the Code Sena team was all in. They helped us build a cross-platform mobile app that looks and feels native, and more importantly—works without a hitch. We appreciated how they kept things simple, focused, and user-first throughout the entire process.”",
  },
  {
    id: 2,
    name: "Rajeev Narayan",
    position: "Product Owner at WorkSuite",
    desc: "“Before working with Code Sena, our app felt cluttered and outdated. Their design team stepped in and reimagined the entire flow. Everything now looks clean, modern, and most importantly—easy to use. Our customers are staying longer, and support tickets have dropped. That says everything.”",
  },
  {
    id: 3,
    name: "Pranav Desai",
    position: "CTO at SwiftPay",
    desc: "“We brought in Code Sena for a round of security testing before our public release—and we’re so glad we did. Their VAPT experts were thorough, explained everything in plain English, and helped us fix vulnerabilities we didn’t even know existed. Thanks to their work, we launched with confidence.”",
  },
];

export const allServices = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Using modern tools like React, Next.js, Node, and Django, we turn your ideas into smooth, functional products.",
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
    detailContent: `
      <div class="space-y-6">
        <h3 class="text-2xl font-semibold text-primary mb-4">Comprehensive Web Development Services</h3>
        
        <p>At Code Sena, we specialize in creating powerful, scalable, and user-friendly web applications that drive business growth and enhance user engagement. Our expert team of developers combines technical expertise with creative problem-solving to deliver web solutions that exceed expectations.</p>
        
        <div class="bg-tertiary/50 p-4 rounded-lg border-l-4 border-primary mb-6">
          <h4 class="font-medium text-lg mb-2">Our Web Development Technology Stack</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li><span class="font-medium">Frontend:</span> React.js, Next.js, Vue.js, Angular</li>
            <li><span class="font-medium">Backend:</span> Node.js, Express, Django, Laravel, Ruby on Rails</li>
            <li><span class="font-medium">Databases:</span> MongoDB, PostgreSQL, MySQL, Firebase</li>
            <li><span class="font-medium">Cloud Services:</span> AWS, Google Cloud, Azure, Vercel, Netlify</li>
          </ul>
        </div>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Custom Web Application Development</h4>
        <p>We build tailor-made web applications designed specifically for your business needs. Whether you're a startup looking to launch an MVP or an established enterprise requiring complex systems, our development team creates solutions that align perfectly with your goals and workflows.</p>
        <p>Our custom web applications are engineered for performance, security, and scalability. We implement best practices in code architecture and database design to ensure your application can grow alongside your business without compromising on speed or reliability.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">E-commerce Solutions</h4>
        <p>Transform your business with our comprehensive e-commerce development services. We create online stores that not only showcase your products beautifully but also provide seamless shopping experiences that convert visitors into customers.</p>
        <p>Our e-commerce solutions include custom shopping carts, secure payment gateways, inventory management systems, customer account portals, and analytics dashboards that give you valuable insights into your business performance.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Progressive Web Applications (PWAs)</h4>
        <p>Combine the best of web and mobile applications with our Progressive Web App development services. PWAs offer app-like experiences through browsers, with benefits including offline functionality, push notifications, and home screen installation.</p>
        <p>We leverage the latest PWA technologies to create fast-loading, engaging web applications that work across all devices and provide native-like experiences without requiring users to download from app stores.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Content Management Systems</h4>
        <p>Take control of your digital content with our custom CMS solutions. We develop intuitive, powerful content management systems that make it easy for your team to update and manage website content without technical knowledge.</p>
        <p>Our CMS implementations include user-friendly interfaces, robust permission systems, media libraries, SEO tools, and customizable templates that give you complete flexibility over your digital presence.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">API Development & Integration</h4>
        <p>Connect your web applications with third-party services and systems through our API development and integration services. We build secure, well-documented APIs that enable seamless data exchange between different platforms.</p>
        <p>Our team has extensive experience integrating with payment processors, CRM systems, marketing automation tools, social media platforms, and various SaaS solutions to create cohesive digital ecosystems.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Web Application Maintenance & Support</h4>
        <p>Keep your web applications running smoothly with our comprehensive maintenance and support services. We provide regular updates, security patches, performance optimizations, and technical support to ensure your applications remain secure, stable, and up-to-date.</p>
        
        <div class="bg-primary/10 p-4 rounded-lg mt-6">
          <h4 class="font-medium text-lg mb-2">Our Web Development Process</h4>
          <ol class="list-decimal pl-5 space-y-2">
            <li><span class="font-medium">Discovery & Planning:</span> We begin by understanding your business goals, target audience, and project requirements.</li>
            <li><span class="font-medium">Design & Prototyping:</span> Our designers create wireframes and interactive prototypes to visualize the user experience.</li>
            <li><span class="font-medium">Development:</span> Our developers bring the designs to life using the most appropriate technologies for your project.</li>
            <li><span class="font-medium">Testing & QA:</span> We rigorously test all aspects of your application to ensure quality and reliability.</li>
            <li><span class="font-medium">Deployment:</span> We handle the deployment process, ensuring a smooth transition to production.</li>
            <li><span class="font-medium">Ongoing Support:</span> We provide continued support and maintenance to keep your application running optimally.</li>
          </ol>
        </div>
        
        <p class="mt-6">Partner with Code Sena for web development services that combine technical excellence with strategic thinking. We don't just build websites—we create digital experiences that drive business growth and user satisfaction.</p>
      </div>
    `,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "We design and develop mobile apps that are intuitive, fast, and actually enjoyable to use.",
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
    detailContent: `
      <div class="space-y-6">
        <h3 class="text-2xl font-semibold text-primary mb-4">Expert Mobile App Development Services</h3>
        
        <p>At Code Sena, we transform innovative ideas into powerful, user-friendly mobile applications that engage users and drive business growth. Our mobile development team combines technical expertise with creative design to deliver exceptional mobile experiences across platforms.</p>
        
        <div class="bg-tertiary/50 p-4 rounded-lg border-l-4 border-primary mb-6">
          <h4 class="font-medium text-lg mb-2">Our Mobile Development Expertise</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li><span class="font-medium">Native Development:</span> iOS (Swift, Objective-C), Android (Kotlin, Java)</li>
            <li><span class="font-medium">Cross-Platform:</span> Flutter, React Native, Xamarin</li>
            <li><span class="font-medium">Backend Services:</span> Firebase, AWS Mobile, Google Cloud</li>
            <li><span class="font-medium">App Features:</span> Offline functionality, Push notifications, In-app purchases, AR/VR integration</li>
          </ul>
        </div>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Native Mobile App Development</h4>
        <p>Our native mobile app development services deliver high-performance applications specifically optimized for iOS and Android platforms. By leveraging platform-specific technologies and design patterns, we create apps that provide the best possible user experience and take full advantage of device capabilities.</p>
        <p>For iOS development, our team works with Swift and Objective-C to build elegant, intuitive applications that adhere to Apple's Human Interface Guidelines. We optimize for performance across the entire Apple ecosystem, including iPhones, iPads, and Apple Watch.</p>
        <p>Our Android development team specializes in Kotlin and Java, creating responsive applications that work seamlessly across the diverse Android device landscape. We implement Material Design principles to ensure a consistent, engaging user experience.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Cross-Platform App Development</h4>
        <p>Maximize your reach and minimize development costs with our cross-platform mobile app development services. We use cutting-edge frameworks like Flutter and React Native to build applications that run on both iOS and Android from a single codebase, without compromising on quality or performance.</p>
        <p>Flutter allows us to create beautiful, natively compiled applications with smooth animations and a consistent look and feel across platforms. With React Native, we leverage JavaScript and React to build mobile apps that are indistinguishable from native applications.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Enterprise Mobile Solutions</h4>
        <p>Transform your business operations with our enterprise mobile solutions. We develop secure, scalable applications that streamline workflows, improve communication, and increase productivity across your organization.</p>
        <p>Our enterprise mobile apps include features such as secure authentication, role-based access control, offline data synchronization, and integration with existing business systems like CRM, ERP, and HR platforms.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Mobile E-commerce Applications</h4>
        <p>Expand your digital retail presence with our mobile e-commerce solutions. We create shopping apps that offer seamless browsing, secure checkout processes, and personalized user experiences that drive conversions and customer loyalty.</p>
        <p>Our mobile e-commerce applications include features such as product catalogs, search functionality, wishlist management, secure payment processing, order tracking, and integration with your existing inventory and fulfillment systems.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">IoT and Connected Device Apps</h4>
        <p>Bridge the gap between physical devices and digital experiences with our IoT mobile app development services. We create applications that communicate with smart devices, wearables, and sensors to provide users with control, monitoring, and data visualization capabilities.</p>
        <p>Our IoT mobile applications implement secure communication protocols, real-time data processing, and intuitive interfaces that make complex connected systems accessible and user-friendly.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">App Maintenance and Support</h4>
        <p>Ensure the continued success of your mobile application with our comprehensive maintenance and support services. We provide regular updates, bug fixes, performance optimizations, and platform compatibility updates to keep your app running smoothly.</p>
        <p>Our support team monitors app performance, user feedback, and platform changes to proactively address issues and implement improvements that enhance the user experience and maintain high app store ratings.</p>
        
        <div class="bg-primary/10 p-4 rounded-lg mt-6">
          <h4 class="font-medium text-lg mb-2">Our Mobile App Development Process</h4>
          <ol class="list-decimal pl-5 space-y-2">
            <li><span class="font-medium">Strategy & Planning:</span> We define your app's objectives, target audience, and key features.</li>
            <li><span class="font-medium">UX/UI Design:</span> Our designers create intuitive, engaging interfaces tailored to mobile users.</li>
            <li><span class="font-medium">Development:</span> Our developers build your app using the most appropriate technologies.</li>
            <li><span class="font-medium">Testing:</span> We conduct thorough testing across devices and scenarios to ensure quality.</li>
            <li><span class="font-medium">Deployment:</span> We handle the app store submission process and ensure a smooth launch.</li>
            <li><span class="font-medium">Post-Launch Support:</span> We provide ongoing maintenance and updates to keep your app competitive.</li>
          </ol>
        </div>
        
        <p class="mt-6">Partner with Code Sena for mobile app development that combines technical excellence with user-centered design. From concept to launch and beyond, we're committed to creating mobile experiences that users love and that drive measurable business results.</p>
      </div>
    `,
  },
  {
    id: 3,
    title: "VAPT Services (Web, Mobile & API)",
    description:
      "Protect Your Digital Assets with Our Comprehensive VAPT Services, Ensuring Robust Security for Web, Mobile, and API Applications.",
    icon: (
      <div className="relative">
        <FaShieldAlt size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <MdSecurity size={20} className="text-primary-light" />
        </div>
        <div className="absolute -top-1 -right-1">
          <AiFillBug size={16} className="text-primary-light" />
        </div>
      </div>
    ),
    detailContent: `
      <div class="space-y-6">
        <h3 class="text-2xl font-semibold text-primary mb-4">Comprehensive Vulnerability Assessment & Penetration Testing Services</h3>
        
        <p>At Code Sena, we understand that security is not just a feature—it's a fundamental requirement for any digital product. Our VAPT (Vulnerability Assessment and Penetration Testing) services provide thorough security evaluations to identify and address vulnerabilities before they can be exploited by malicious actors.</p>
        
        <div class="bg-tertiary/50 p-4 rounded-lg border-l-4 border-primary mb-6">
          <h4 class="font-medium text-lg mb-2">Our VAPT Service Coverage</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li><span class="font-medium">Web Applications:</span> Frontend, Backend, CMS, E-commerce platforms</li>
            <li><span class="font-medium">Mobile Applications:</span> iOS, Android, Cross-platform apps</li>
            <li><span class="font-medium">APIs:</span> REST, GraphQL, SOAP, Microservices</li>
            <li><span class="font-medium">Cloud Infrastructure:</span> AWS, Azure, Google Cloud configurations</li>
          </ul>
        </div>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Web Application Security Testing</h4>
        <p>Our web application security testing services provide comprehensive assessments of your web applications to identify vulnerabilities that could compromise your data or systems. We conduct thorough evaluations against the OWASP Top 10 and other industry-standard security benchmarks.</p>
        <p>Using a combination of automated scanning tools and manual testing techniques, our security experts identify issues such as injection flaws, broken authentication, sensitive data exposure, XML external entities (XXE), broken access control, security misconfigurations, cross-site scripting (XSS), insecure deserialization, and components with known vulnerabilities.</p>
        <p>We don't just identify vulnerabilities—we provide detailed remediation guidance with code examples and best practices to help your development team implement effective fixes. Our reports include severity ratings, exploitation scenarios, and business impact assessments to help you prioritize your security efforts.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Mobile Application Security Testing</h4>
        <p>Secure your mobile applications against emerging threats with our comprehensive mobile application security testing services. We assess both Android and iOS applications for vulnerabilities that could compromise user data or device integrity.</p>
        <p>Our mobile security assessments include analysis of client-side storage, communication security, authentication mechanisms, session management, data leakage points, binary protections, and platform-specific vulnerabilities. We examine both the mobile application itself and its interaction with backend services.</p>
        <p>For Android applications, we perform static and dynamic analysis, decompilation review, permission analysis, and testing for issues like insecure data storage, unintended data leakage, and improper platform usage. For iOS applications, we assess code signing, encryption implementation, keychain usage, and protection against jailbreak detection bypasses.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">API Security Testing</h4>
        <p>Protect your application programming interfaces (APIs) with our specialized API security testing services. As the backbone of modern application architectures, APIs present unique security challenges that require targeted testing approaches.</p>
        <p>Our API security assessments cover authentication mechanisms, authorization controls, input validation, rate limiting, encryption, error handling, and business logic vulnerabilities. We test REST, GraphQL, SOAP, and other API architectures against the OWASP API Security Top 10 and other relevant standards.</p>
        <p>Using a combination of automated tools and manual testing techniques, we identify vulnerabilities such as broken object level authorization, broken user authentication, excessive data exposure, lack of resources & rate limiting, broken function level authorization, and mass assignment. Our reports include detailed exploitation scenarios and remediation guidance.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Cloud Security Assessment</h4>
        <p>Ensure your cloud infrastructure is configured securely with our cloud security assessment services. We evaluate your AWS, Azure, or Google Cloud environments for misconfigurations, excessive permissions, and compliance gaps.</p>
        <p>Our cloud security assessments include reviews of identity and access management (IAM) configurations, storage security, network security groups, encryption implementation, logging and monitoring setups, and serverless function security. We identify issues like publicly accessible storage buckets, overly permissive security groups, and unencrypted sensitive data.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">DevSecOps Integration</h4>
        <p>Integrate security into your development lifecycle with our DevSecOps consulting services. We help you implement automated security testing in your CI/CD pipelines to catch vulnerabilities early in the development process.</p>
        <p>Our DevSecOps services include tool selection and configuration, pipeline integration, custom rule development, and developer training. We help you establish security gates, automated vulnerability scanning, and compliance checks that prevent security issues from reaching production.</p>
        
        <div class="bg-primary/10 p-4 rounded-lg mt-6">
          <h4 class="font-medium text-lg mb-2">Our VAPT Methodology</h4>
          <ol class="list-decimal pl-5 space-y-2">
            <li><span class="font-medium">Reconnaissance & Scoping:</span> We define the testing boundaries and gather information about the target systems.</li>
            <li><span class="font-medium">Vulnerability Scanning:</span> We use automated tools to identify known vulnerabilities and security misconfigurations.</li>
            <li><span class="font-medium">Manual Testing:</span> Our security experts perform hands-on testing to identify vulnerabilities that automated tools might miss.</li>
            <li><span class="font-medium">Exploitation:</span> With your permission, we attempt to exploit identified vulnerabilities to confirm their impact.</li>
            <li><span class="font-medium">Analysis & Reporting:</span> We analyze our findings and prepare detailed reports with remediation guidance.</li>
            <li><span class="font-medium">Remediation Support:</span> We provide guidance and verification testing to ensure vulnerabilities are properly addressed.</li>
          </ol>
        </div>
        
        <p class="mt-6">Partner with Code Sena for VAPT services that go beyond simple vulnerability scanning. Our comprehensive approach combines automated tools with expert manual testing to provide a thorough assessment of your security posture. We don't just identify problems—we help you solve them with practical, actionable guidance.</p>
      </div>
    `,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "We craft clean, modern interfaces built around real user behavior. Our designs are not just pretty—they're intuitive and effective.",
    icon: (
      <div className="relative">
        <MdOutlineDesignServices size={40} className="text-primary" />
        <div className="absolute -bottom-1 -right-1">
          <BiPalette size={20} className="text-primary-light" />
        </div>
        <div className="absolute -top-1 -right-1">
          <BiUserCheck size={16} className="text-primary-light" />
        </div>
      </div>
    ),
    detailContent: `
      <div class="space-y-6">
        <h3 class="text-2xl font-semibold text-primary mb-4">Strategic UI/UX Design Services</h3>
        
        <p>At Code Sena, we believe that exceptional design is the foundation of successful digital products. Our UI/UX design services combine aesthetic excellence with user-centered methodologies to create interfaces that are not only visually appealing but also intuitive, accessible, and effective at achieving business goals.</p>
        
        <div class="bg-tertiary/50 p-4 rounded-lg border-l-4 border-primary mb-6">
          <h4 class="font-medium text-lg mb-2">Our Design Expertise</h4>
          <ul class="list-disc pl-5 space-y-1">
            <li><span class="font-medium">User Research:</span> Interviews, Surveys, Usability testing, Persona development</li>
            <li><span class="font-medium">UX Design:</span> Information architecture, User flows, Wireframing, Prototyping</li>
            <li><span class="font-medium">UI Design:</span> Visual design, Design systems, Responsive design, Animation</li>
            <li><span class="font-medium">Specialized Design:</span> Mobile apps, Web applications, Dashboards, E-commerce</li>
          </ul>
        </div>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">User Research & Strategy</h4>
        <p>Our design process begins with comprehensive user research to understand your target audience's needs, behaviors, and pain points. We employ a variety of research methodologies including user interviews, surveys, competitive analysis, and heuristic evaluations to gather insights that inform our design decisions.</p>
        <p>Based on our research findings, we develop detailed user personas that represent your key audience segments. These personas guide our design process, ensuring that we create experiences tailored to real user needs rather than assumptions.</p>
        <p>We map out user journeys to understand how users interact with your product across different touchpoints and scenarios. This holistic view helps us identify opportunities for improvement and ensures a consistent experience throughout the user's interaction with your product.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Information Architecture & User Flows</h4>
        <p>We create logical, intuitive information architectures that organize your content and functionality in ways that make sense to users. Our IA work includes site mapping, content hierarchies, and taxonomies that provide a solid foundation for navigation and content discovery.</p>
        <p>Our team designs clear, efficient user flows that map out the steps users take to accomplish their goals within your product. We identify and eliminate unnecessary steps, reduce friction points, and optimize critical paths to create smooth, intuitive experiences.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Wireframing & Prototyping</h4>
        <p>We create low-fidelity wireframes that outline the structure and functionality of your interfaces without the distraction of visual design elements. This allows us to focus on usability and information hierarchy early in the process.</p>
        <p>Our interactive prototypes bring wireframes to life, simulating the functionality and interactions of your final product. These prototypes allow for early user testing and stakeholder feedback, reducing the risk of costly changes later in development.</p>
        <p>We conduct usability testing with prototypes to validate our design decisions and identify areas for improvement. This iterative approach ensures that usability issues are addressed before development begins.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Visual Design & UI Systems</h4>
        <p>Our visual design work transforms wireframes into polished, engaging interfaces that reflect your brand identity and appeal to your target audience. We pay careful attention to typography, color theory, imagery, and layout to create visually cohesive designs.</p>
        <p>We create comprehensive design systems that include reusable components, style guides, and pattern libraries. These systems ensure consistency across your product, streamline the design process, and facilitate collaboration between designers and developers.</p>
        <p>Our responsive design approach ensures that your interfaces adapt seamlessly to different screen sizes and devices. We consider the unique constraints and opportunities of each platform to deliver optimal experiences across desktop, tablet, and mobile.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Interaction Design & Microinteractions</h4>
        <p>We design thoughtful interactions that guide users through your interface, provide feedback, and add moments of delight. Our interaction design considers timing, animation principles, and user expectations to create intuitive, responsive experiences.</p>
        <p>We pay special attention to microinteractions—the small, subtle moments within your product that can significantly impact the user experience. From form feedback to loading states to transition animations, these details add polish and professionalism to your product.</p>
        
        <h4 class="text-xl font-medium text-primary-light mb-3">Accessibility & Inclusive Design</h4>
        <p>We integrate accessibility considerations throughout our design process, ensuring that your product is usable by people with a wide range of abilities. We follow WCAG guidelines and best practices for inclusive design.</p>
        <p>Our accessibility work includes color contrast checking, keyboard navigation support, screen reader compatibility, and alternative text for images. We believe that good design should be accessible to everyone.</p>
        
        <div class="bg-primary/10 p-4 rounded-lg mt-6">
          <h4 class="font-medium text-lg mb-2">Our Design Process</h4>
          <ol class="list-decimal pl-5 space-y-2">
            <li><span class="font-medium">Discovery:</span> We research your users, business goals, and competitive landscape.</li>
            <li><span class="font-medium">Strategy:</span> We develop personas, user journeys, and design principles to guide our work.</li>
            <li><span class="font-medium">Structure:</span> We create information architecture and user flows that organize your product logically.</li>
            <li><span class="font-medium">Wireframing:</span> We design low-fidelity layouts that focus on structure and functionality.</li>
            <li><span class="font-medium">Prototyping:</span> We build interactive prototypes for testing and validation.</li>
            <li><span class="font-medium">Visual Design:</span> We apply visual styles, creating polished, branded interfaces.</li>
            <li><span class="font-medium">Design Systems:</span> We document components and patterns for consistent implementation.</li>
            <li><span class="font-medium">Developer Handoff:</span> We prepare and deliver design assets and specifications for development.</li>
          </ol>
        </div>
        
        <p class="mt-6">Partner with Code Sena for UI/UX design services that balance aesthetic excellence with user-centered functionality. Our strategic approach to design creates digital experiences that not only look beautiful but also achieve measurable business results by meeting real user needs.</p>
      </div>
    `,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/web-development/5ghomes.webp"),
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/web-development/cold-creekcap.webp"),
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/web-development/think-reality.webp"),
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/web-development/akash-mega-mart.webp"),
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/web-development/midwam.webp"),
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/portfolio/app-development/akash_mega_mart-app.webp"),
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: require("./assets/images/portfolio/app-development/feelit_app.webp"),
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: require("./assets/images/portfolio/app-development/klikomics.webp"),
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: require("./assets/images/portfolio/app-development/autosnap-app.webp"),
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: require("./assets/images/portfolio/app-development/rentop.webp"),
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
