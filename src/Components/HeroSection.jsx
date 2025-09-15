import React from "react";
import { articles } from "../data/articles";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-2">
        Explore Our Laptop Categories
      </h2>
      <div className="flex justify-center bg-amber-300">
        <section className="w-full max-w-screen-xl h-[680px] px-8 py-16 mx-auto flex items-center justify-center bg-red-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(({ title, image, link, logo }) => (
              <Link
                to={link}
                key={title}
                className="group block w-[400px] h-[300px] rounded-xl overflow-hidden shadow-lg bg-white p-4 flex flex-col justify-between"
              >
                {/* Top Row: Logo on the left, Image on the right */}
                <div className="flex justify-between items-start w-full">
                  <img src={logo} alt="logo" className="h-[50px] w-[50px]" />
                  <img
                    src={image}
                    alt={title}
                    className="w-[240px] h-[240px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 border border-gray-300 shadow"
                  />
                </div>

                {/* Title below */}
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 mt-4 text-center">
                  {title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
