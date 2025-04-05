import React, { useRef } from "react";
import "./portfolio.scss";
import {
  motion,
  scroll,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
const items = [
  {
    id: 1,
    title: "Berry - Food Ordering Platform",
    img: "./Berry.png",
    link: "https://berry-i.vercel.app/",
    desc: "Berry is a food ordering platform that allows users to order food from their favorite restaurants.",
  },
  {
    id: 2,
    title: "Soother - Ai : An app help you out during stress",
    img: "./Soother.png",
    link: "https://soother-five.vercel.app/",
    desc: "Soother is an AI-powered app that helps you manage stress and anxiety.",
  },
  {
    id: 3,
    title: "Netflix-Gpt : An AI suggestive netflix upgrade ",
    img: "./Netflix.png",
    link: "https://soother-five.ver  cel.app/",
    desc: "Helps you to find the best movie for you without spending hours on google",
  },
  //   {
  //     id: 4,
  //     title: "Soother - Ai : An app help you out during stress",
  //     img: "./Soother.png",
  //     link: "https://soother-five.vercel.app/",
  //     desc: "Soother is an AI-powered app that helps you manage stress and anxiety.",
  //   },
  //   {
  //     id: 5,
  //     title: "Soother - Ai : An app help you out during stress",
  //     img: "./Soother.png",
  //     link: "https://soother-five.vercel.app/",
  //     desc: "Soother is an AI-powered app that helps you manage stress and anxiety.",
  //   },
];
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img className="port-image" src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button onClick={(e) => e.preventDefault()}>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
