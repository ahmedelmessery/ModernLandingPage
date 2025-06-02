import React from "react";
import {motion} from "motion/react";
import {fadeIn, slideIn, textVariant} from "../utils/motion";
import schedulePhoto from "../assets/stats.webp"
const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto  px-4  " id="schedule">
      <motion.div
        variants={slideIn("left", "tween", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="flex justify-between items-center gap-6 mb-12 max-md:flex-col">
        <div className="mt-6 w-full md:w-1/2">
          <img
            src={schedulePhoto}
            alt="stats"
            className="w-full h-auto"
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-4 text-center p-20 ">
          <span className="font-bold text-sm text-orange-400">SCHEDULE</span>
          <h1 className="font-bold text-3xl text-start max-sm:text-lg">
            Streamline Your Business <br />
            With Smart Scheduling Solutions
          </h1>
          <p className="text-sm text-gray-800 text-start">
            Take control of your time and boost productivity with our
            intelligent scheduling system. Automate appointments, manage team
            availability, and deliver exceptional customer experiences through
            seamless calendar management.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
            Explore scheduling features
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ScheduleSection;
