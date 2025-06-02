import React from "react";
import {motion} from "motion/react";
import {fadeIn, scale, slideIn, textVariant} from "../utils/motion";
import schedulePhoto from "../assets/monitor-card.webp"

const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto  px-4  " id="monitor">
      <motion.div
        variants={slideIn("right", "tween", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="flex justify-between items-center gap-6 mb-12 max-md:flex-col">
        <div className="flex flex-col justify-center items-start gap-6 text-center p-20 ">
          <span className="font-bold text-sm text-green-600">MONITOR</span>
          <h1 className="font-bold text-3xl text-start max-sm:text-lg">
            {" "}
            Introducing best mobile carousels
          </h1>
          <p className="text-sm text-gray-800 text-start">
            Before the ship is really back. Round, round, all around the world.
            Round, all around the world. Round, all around the world. Round, all
            around the world.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
            Learn more about monitoring
          </a>
        </div>

        <div className="w-full md:w-1/2">
          <img src={schedulePhoto} alt="monitor" className="" />
        </div>
      </motion.div>
    </section>
  );
};

export default MonitorSection;
