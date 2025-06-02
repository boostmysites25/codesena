import React from "react";
import SubHeading from "./SubHeading";
import { appPortfolio, webPortfolio } from "../constant";
import { Link } from "react-router-dom";

const Portfolio = ({ page }) => {
  let portfolioList;

  if (page === "web-development") {
    portfolioList = webPortfolio;
  } else if (page === "app-development") {
    portfolioList = appPortfolio;
  } else {
    portfolioList = webPortfolio.slice(0, 3).concat(appPortfolio.slice(0, 3));
  }
  return (
    <div
      id="portfolio"
      className="py-[5rem] wrapper flex flex-col items-center gap-5"
    >
      <SubHeading heading="Our Portfolio" />
      <h2
        data-aos="fade-up"
        className="heading-2 max-w-[60rem] mx-auto text-center"
      >
        Few of Our Recent Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto mt-5">
        {portfolioList.map(({ img, id, title, link }) => (
          <div
            className="relative aspect-square sm:aspect-square rounded-xl overflow-hidden group"
            key={id}
            data-aos="fade-up"
          >
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent to-[#0a1828db] z-[1]"></div>
            <img
              loading="lazy"
              src={img}
              width="200"
              height="200"
              className={`-z-10 h-full w-full object-cover group-hover:scale-110 transition-all duration-300`}
              alt={title}
            />
            <Link
              to={link}
              target="_blank"
              className="z-[2] absolute bottom-0 left-0 w-full hover:text-primary transition-all duration-300 text-white hover:scale-105"
            >
              <h3 className="text-xl p-3 w-full bg-[#0f2136] text-center">
                {title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
