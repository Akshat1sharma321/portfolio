import React from "react";
import "./mobile.scss";
import { motion } from "framer-motion";

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
    title: "Netflix-Gpt : An AI suggestive netflix upgrade",
    img: "./Netflix.png",
    link: "https://soother-five.vercel.app/",
    desc: "Helps you to find the best movie for you without spending hours on google",
  },
];

const MobilePortfolio = () => {
  return (
    <div className="mobile-portfolio">
      <div className="header">
        <h1>Featured Works</h1>
      </div>

      {items.map((item) => (
        <motion.div
          key={item.id}
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="image-container">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="content">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-button"
            >
              See Demo
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MobilePortfolio;
