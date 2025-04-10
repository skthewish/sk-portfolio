import React from "react";
import { motion } from "framer-motion";
import Avatar from "./atomic/Avatar";
import { ease } from "../utils/motion";
import { StaticImage } from "gatsby-plugin-image";

const Banner = () => {
  return (
    <section className="container relative min-h-screen w-full px-8 pt-[68px] flex items-center justify-center">
      <motion.div
        animate={{
          y: [0, 16, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute left-[20%] top-[12%] w-[60px] opacity-25 z-0"
      >
        <StaticImage src={"../images/icons/react-js.png"} alt="react js" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -16, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute right-[20%] top-[25%] w-[60px] opacity-25 z-0"
      >
        <StaticImage src={"../images/icons/next-js.png"} alt="next js" />
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
        className="text-center flex flex-col items-center z-10"
      >
        <motion.div variants={ease(0, 1)}>
          <Avatar />
        </motion.div>
        <motion.div variants={ease(0, 1)}>
          <h1 className="banner-head-text mt-[60px] sm:mt-6">
            Hey! I'm <span className="text-amber font-Agbalumo">Sukhdev</span>
          </h1>
        </motion.div>
        <motion.div variants={ease(0, 2)} className="w-full  mt-6">
          <div class="relative h-16 overflow-hidden">
            <div
              class="absolute w-full text-center opacity-0 translate-y-[100%] 
                animate-[slideUp_9s_infinite_0s]"
            >
              <h6 className="banner-sub-text  mt-3">Code whisperer</h6>
            </div>

            <div
              class="absolute w-full text-center opacity-0 translate-y-[100%] 
              animate-[slideUp_9s_infinite_3s]"
            >
              <h6 className="banner-sub-text  mt-3">UI magician</h6>
            </div>

            <div
              class="absolute w-full text-center opacity-0 translate-y-[100%] 
              animate-[slideUp_9s_infinite_6s]"
            >
              <h6 className="banner-sub-text  mt-3">Mobile ninja</h6>
            </div>
          </div>
        </motion.div>
        <motion.div variants={ease(1, 0.5)} className="w-full md:w-[80%] lg:max-w-[75%] mt-[60px] sm:mt-10">
          <StaticImage src={"../images/pc.png"} alt="pc-screen" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
