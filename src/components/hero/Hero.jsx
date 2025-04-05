import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  inintal: {
    x: -500,
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  inintal: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
      repeatType: "mirror",
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="inintal"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Hello , I am Akshat Sharma
          </motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
          <motion.p variants={textVariants}>
            I am a frontend developer with a passion for creating <br />{" "}
            beautiful and functional web applications.
          </motion.p>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="#Portfolio">See the latest work</a>
            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
          <motion.img
            src={"/scroll.png"}
            alt="scroll"
            className="scroll"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
        {/* <motion.div className="slidingTextContainer" variants={sliderVariants} initial="inintal" animate="animate">React Developer</motion.div> */}
      </div>

      <div className="imgContainer">
        <img src={"/seo-icon-pack.png"} alt="" className="comp" />
        <img src={"/boy (1).png"} alt="boy" className="boy" />
        <img src={"/Group 1.svg"} alt="Group 2" className="group-svg" />
        <img src={"/Group 1.svg"} alt="Group 2" className="group1-svg" />
      </div>
    </div>
  );
};

export default Hero;
