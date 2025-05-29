import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WebsiteHeader from "../components/website/WebsiteHeader";
import PageBanner from "../components/website/PageBanner";
import WebsiteFooter from "../components/website/WebsiteFooter";
import DecorativeElements from "../components/ui/DecorativeElements";
import { blogPosts } from "../data/blogData";
import { FaCalendarAlt, FaClock, FaSearch, FaTags } from "react-icons/fa";

const BlogListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Extract all unique categories
  const allCategories = [
    ...new Set(blogPosts.flatMap((post) => post.categories)),
  ];

  // Filter posts based on search term and selected category
  useEffect(() => {
    const filtered = blogPosts.filter((post) => {
      const matchesSearch =
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "" || post.categories.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <WebsiteHeader />
      <PageBanner
        title="Our Blogs"
        desc="Insights, tutorials, and industry perspectives from the Code Sena team"
      />

      <section className="wrapper py-16 relative">
        {/* Decorative background elements */}
        <DecorativeElements variant="minimal" className="opacity-30" />

        {/* Search and filter section */}
        {/* <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-stretch"> */}
            {/* Search input */}
            {/* <div className="relative flex-grow">
              <div
                className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all duration-300 ${
                  isSearchFocused ? "text-primary" : "text-white/50"
                }`}
              >
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full bg-tertiary/50 border border-white/10 focus:border-primary/50 rounded-lg py-3 pl-12 pr-4 text-white placeholder-white/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
            </div> */}

            {/* Category filter */}
            {/* <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-tertiary/50 border border-white/10 focus:border-primary/50 rounded-lg py-3 px-4 text-white appearance-none cursor-pointer focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                  backgroundPosition: "right 0.75rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                  paddingRight: "2.5rem",
                }}
              >
                <option value="">All Categories</option>
                {allCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div> */}

        {/* Results count */}
        <div className="mb-8 text-white/70">
          {filteredPosts.length === 0 ? (
            <p>No articles found. Try a different search term or category.</p>
          ) : (
            <p>
              Showing {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
            </p>
          )}
        </div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-block p-6 rounded-full bg-tertiary/50 mb-6">
              <FaSearch className="text-primary/70 text-4xl" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              No articles found
            </h3>
            <p className="text-white/70 max-w-md mx-auto">
              We couldn't find any articles matching your search criteria. Try
              using different keywords or browsing all categories.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("");
              }}
              className="mt-6 px-6 py-2 bg-primary/20 hover:bg-primary/30 text-primary-light rounded-lg transition-all duration-300"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <WebsiteFooter />
    </>
  );
};

// Blog Card Component
const BlogCard = ({ post }) => {
  return (
    <div
      data-aos="fade-up"
      className="group bg-tertiary/30 hover:bg-tertiary/50 border border-white/5 hover:border-primary/20 rounded-xl overflow-hidden transition-all duration-500 flex flex-col h-full hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
    >
      {/* Image container with overlay */}
      <div className="relative overflow-hidden h-56">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-70"></div>

        {/* Categories */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span
            // key={index}
            className="text-xs font-medium bg-primary/80 text-white px-3 py-1 rounded-full backdrop-blur-sm"
          >
            {post.categories[0]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white group-hover:text-primary-light transition-colors duration-300 mb-3">
          {post.title}
        </h3>

        <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* Meta information */}
        <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-4 text-sm text-white/60">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-primary-light/70" />
            <span>{post.publishDate}</span>
          </div>
        </div>

        {/* Read more link */}
        <Link
          to={`/blog/${post.slug}`}
          className="mt-6 inline-flex items-center text-primary-light font-medium group-hover:text-primary transition-colors duration-300"
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
  );
};

export default BlogListing;
