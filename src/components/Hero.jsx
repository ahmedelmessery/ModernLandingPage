import React from "react";
import {motion} from "motion/react";
import {fadeIn, textVariant} from "../utils/motion";
import {text} from "framer-motion/client";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto pt-36 pb-6 px-4 sm:px-6 lg-px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors group w-fit px-4 py-2 rounded-full">
          <span className="text-blue-600 group-hover:scale-110 transition-transform">
            ★
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </motion.div>

        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl font-bold md:text-5xl lg:text-6xl leading-tight">
          We boost the growth for
          <span className="text-blue-600 relative inline-block">
            startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60"></span>
          </span>
          Companies
          <span className="animate-pulse inline-block ml-2">⏰</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg max-w-xl">
          Get the most accurate leads, sales people training and conversions,
          tools and more — all within the same one billing.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all text-gray-600"
          />
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95">
            →
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pt-0 md:pl-12">
        <div className="relative">
          <img
            src="src\assets\hero-image.png"
            alt="hero image"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
