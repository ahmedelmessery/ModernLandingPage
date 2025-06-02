import React from "react";
import {motion} from "motion/react";
import {fadeIn, scale, textVariant} from "../utils/motion";
const FeatureSection = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        variants={textVariant(0.4)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center text-center mb-12 gap-3">
        <h1 className="font-bold text-2xl">How can we help your business?</h1>
        <p className="text-sm text-gray-600">
          When you resell besnik, you build trust and increase
        </p>
      </motion.div>

      <div className="flex max-md:flex-col justify-between items-center gap-6 mb-12">
        {features.map((feature, index) => (
          <motion.div
          variants={scale(0.4)}
        initial="hidden"
        whileInView="show"
            key={index}
            className="flex flex-col justify-center items-center gap-4 text-center p-20">
            <span
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
              className="text-4xl w-24 h-24 flex items-center justify-center mb-6 rounded-full">
              {feature.icon}
            </span>
            <h2 className="font-bold text-lg">{feature.title}</h2>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
       className="flex justify-center items-center mt-8 rounded-full">
        <button className="text-lg font-medium hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-100">
          <a href="#newsletter">Become a Partner</a>
        </button>
      </motion.div>
    </section>
  );
};

export default FeatureSection;
