import React from "react";
import "./mobile.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const MobileHero = () => {
  return (
    <div className="mobile-hero">
      <motion.div
        className="text-container"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={textVariants}>Hello, I am Akshat Sharma</motion.h2>
        <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
        <motion.p variants={textVariants}>
          I am a frontend developer with a passion for creating beautiful and
          functional web applications.
        </motion.p>
        <motion.div className="buttons" variants={textVariants}>
          <motion.a
            href="#Portfolio"
            variants={textVariants}
            className="button"
          >
            See the latest work
          </motion.a>
          <motion.a href="#Contact" variants={textVariants} className="button">
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MobileHero;
