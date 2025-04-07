import React from "react";
import { motion } from "framer-motion";

import { services, technologies } from "../constants";
import Card from "./atomic/Card";
import { bounceUp, ease } from "../utils/motion";

const About = () => {
  return (
    <section
      id="about"
      className="container min-h-screen w-full px-8 pt-[68px] flex flex-col items-center justify-center"
    >
      <div className="text-center flex flex-col">
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={ease(0, 0.5)}
          className="section-head-text"
        >
          Overview
        </motion.h1>

        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={ease(0, 1)}
          className="section-sub-text mt-8 !leading-9"
        >
          I’m a self-taught developer who turned curiosity into code.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={ease(0, 1)}
          className="section-sub-text mt-4 !leading-9"
        >
          Over the past <span className="text-txt dark:text-dark-txt">3+ years</span>, I’ve crafted intuitive
          interfaces, optimized performance bottlenecks, and shipped real-world apps that actually solve problems.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={ease(0, 1)}
          className="section-sub-text mt-4 !leading-9"
        >
          I don’t just write code—<span className="text-txt dark:text-dark-txt">I design experiences</span>, debug
          chaos, and mentor rising devs. When I’m not coding, I’m exploring emerging tech, or scribbling down product
          ideas over coffee.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={ease(0, 1)}
          className="section-sub-text mt-8 !leading-9"
        >
          Tech I vibe with: <span className="text-txt dark:text-dark-txt">React, Next.js, React Native, Node.js</span>
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={ease(0, 1)}
          className="section-sub-text mt-4 !leading-9"
        >
          Passionate about staying up-to-date with emerging technologies and best practices to ensure the development of
          cutting-edge software products.
        </motion.p>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={ease(0, 1)}
          className="section-sub-text mt-4 !leading-9"
        >
          <span className="text-amber">Let's work together to bring your ideas to life!</span>
        </motion.p>
      </div>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row gap-8 justify-center items-center mt-8"
      >
        {services.map((service, i) => (
          <motion.div variants={ease(0, 1)} key={service.title}>
            <Card className="w-full max-w-[300px] md:w-[200px]">
              <div className="w-full flex md:flex-col justify-center items-center gap-8">
                <div className="w-[80px] md:w-[100px] h-[80px] md:h-[100px] grid items-center">
                  <img src={service.icon} alt={service.title} className="object-contain" loading="lazy" />
                </div>
                <h4 className="whitespace-pre-line text-txt dark:text-dark-txt font-bold text-center">
                  {service.title}
                </h4>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.h1
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        variants={ease(0, 1)}
        className="section-head-text mt-[60px]"
      >
        Technologies I know
      </motion.h1>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={bounceUp(50, 0, 0.4, 1)}
        className="flex flex-wrap mt-[30px] gap-2 justify-center"
      >
        {technologies.map((tech, i) => (
          <div key={tech.name}>
            <div className="h-[100px] md:h-[120px] w-[100px] md:w-[120px] rounded-full flex flex-col items-center justify-center md:px-2 py-3 md:py-6">
              <div className="w-12 h-12 grid items-center dark:bg-background p-2 rounded-full">
                <img src={tech.icon} alt={tech.name} loading="lazy" />
              </div>
              <span className="text-txt dark:text-dark-txt mt-auto text-center text-[10px] md:text-xs">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
