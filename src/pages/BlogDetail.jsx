import React, { useEffect, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import WebsiteHeader from "../components/website/WebsiteHeader";
import WebsiteFooter from "../components/website/WebsiteFooter";
import DecorativeElements from "../components/ui/DecorativeElements";
import { getBlogPostBySlug, getRelatedPosts } from "../data/blogData";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaTags,
  FaArrowLeft,
  FaShare,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug);
  const relatedPosts = getRelatedPosts(post?.id, 3);

  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  // If post not found, redirect to blog listing
  useEffect(() => {
    if (!post) {
      navigate("/blogs");
    }
  }, [post, navigate]);

  // Animations
  useEffect(() => {
    if (!post || !headerRef.current || !contentRef.current || !imageRef.current)
      return;

    // Header animations
    gsap.fromTo(
      headerRef.current.querySelectorAll(".animate-item"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0.7 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    // Content animation with scroll trigger
    const contentElements = contentRef.current.querySelectorAll("h3, p, pre");
    gsap.fromTo(
      contentElements,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Clean up animations
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [post]);

  if (!post) return null;

  return (
    <>
      <WebsiteHeader />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-secondary/95 z-0"></div>

        {/* Decorative elements */}
        <DecorativeElements variant="dense" className="opacity-30" />

        <div className="wrapper relative z-10">
          <div ref={headerRef} className="max-w-4xl mx-auto text-center">
            {/* Back to blog link */}
            <Link
              to="/blog"
              className="inline-flex items-center text-white/70 hover:text-primary-light mb-8 transition-colors duration-300 animate-item"
            >
              <FaArrowLeft className="mr-2" />
              Back to all articles
            </Link>

            {/* Categories */}
            {/* <div className="flex flex-wrap justify-center gap-3 mb-6 animate-item">
              {post.categories.map((category, index) => (
                <Link 
                  key={index} 
                  to={`/blog?category=${category}`}
                  className="text-sm font-medium bg-primary/20 text-primary-light px-4 py-1.5 rounded-full hover:bg-primary/30 transition-colors duration-300"
                >
                  {category}
                </Link>
              ))}
            </div> */}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight animate-item">
              {post.title}
            </h1>

            {/* Meta information */}
            <div className="flex flex-wrap justify-center gap-6 text-white/70 mb-8 animate-item">
              <div className="flex items-center gap-2">
                <FaUser className="text-primary-light" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-primary-light" />
                <span>{post.publishDate}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-6 mb-16">
        <div className="wrapper">
          <div className="max-w-5xl mx-auto relative">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl shadow-primary/10">
              <div ref={imageRef} className="w-full h-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary opacity-70"></div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary opacity-70"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="wrapper py-8">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div
              ref={contentRef}
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-3">
                <FaTags className="text-primary-light" />
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm bg-tertiary/50 text-white/80 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FaShare className="mr-3 text-primary-light" />
                Share this article
              </h4>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    post.title
                  )}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-tertiary/50 hover:bg-primary/20 text-white hover:text-primary-light transition-all duration-300"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-tertiary/50 hover:bg-primary/20 text-white hover:text-primary-light transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-tertiary/50 hover:bg-primary/20 text-white hover:text-primary-light transition-all duration-300"
                >
                  <FaFacebook size={18} />
                </a>
              </div>
            </div>

            {/* Author */}
            {/* <div className="mt-12 p-8 bg-tertiary/30 border border-white/10 rounded-xl">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center text-primary-light">
                  <FaUser size={36} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">{post.author}</h4>
                  <p className="text-primary-light mb-4">{post.authorRole}</p>
                  <p className="text-white/70">
                    A passionate technologist with expertise in modern software development practices.
                    Committed to creating elegant solutions to complex problems.
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Related Posts */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-white/10">
                  Related Articles
                </h4>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="group">
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="flex gap-4"
                      >
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h5 className="text-white group-hover:text-primary-light transition-colors duration-300 line-clamp-2">
                            {relatedPost.title}
                          </h5>
                          <p className="text-sm text-white/60 mt-1">
                            {relatedPost.publishDate}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/20">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Need help with your project?
                </h4>
                <p className="text-white/70 mb-6">
                  Our team of experts is ready to help you build your next
                  digital product.
                </p>
                <Link
                  to="/contact-us"
                  className="block w-full py-3 px-4 bg-primary hover:bg-primary-light text-white text-center rounded-lg transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="wrapper py-16 border-t border-white/10 mt-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          More Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <div
              key={post.id}
              data-aos="fade-up"
              className="group bg-tertiary/30 hover:bg-tertiary/50 border border-white/5 hover:border-primary/20 rounded-xl overflow-hidden transition-all duration-500 flex flex-col h-full hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* Image container with overlay */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-70"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-light transition-colors duration-300 mb-3">
                  {post.title}
                </h3>

                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read more link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-auto pt-4 inline-flex items-center text-primary-light font-medium group-hover:text-primary transition-colors duration-300"
                >
                  Read Article
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-light text-white rounded-lg transition-colors duration-300"
          >
            View All Articles
          </Link>
        </div>
      </section>

      <WebsiteFooter />
    </>
  );
};

export default BlogDetail;
