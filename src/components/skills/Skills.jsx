import "./skills.scss";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
} from "framer-motion";

const Skills = () => {
  // Define the three circles with their radii
  const outerRadius = 350; // 700px diameter circle
  const middleRadius = 225; // 450px diameter circle
  const innerRadius = 125; // 250px diameter circle

  // Center position
  const centerX = 853;
  const centerY = 450;

  // Text highlight refs and state
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  // Set up intersection observer for text highlights
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7, // 70% visibility required to trigger
    };

    const textElements = [firstTextRef.current, secondTextRef.current];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = textElements.indexOf(entry.target);

        if (entry.isIntersecting) {
          setActiveIndex(index);
        }
      });
    }, options);

    // Observe both text elements
    if (firstTextRef.current) observer.observe(firstTextRef.current);
    if (secondTextRef.current) observer.observe(secondTextRef.current);

    return () => {
      if (firstTextRef.current) observer.unobserve(firstTextRef.current);
      if (secondTextRef.current) observer.unobserve(secondTextRef.current);
    };
  }, []);

  // Define the skills with their image paths, orbit radius, and rotation speeds
  const skills = [
    {
      name: "react",
      path: "/logo/react.svg",
      orbitRadius: outerRadius,
      initialAngle: 0,
      orbitSpeed: 50,
      selfRotateSpeed: 0,
    },
    {
      name: "figma",
      path: "/logo/figma.svg",
      orbitRadius: outerRadius,
      initialAngle: 180,
      orbitSpeed: 50,
      selfRotateSpeed: 0,
    },
    {
      name: "html",
      path: "/logo/html5.svg",
      orbitRadius: middleRadius,
      initialAngle: 45,
      orbitSpeed: 50,
      selfRotateSpeed: 0,
    },
    {
      name: "github",
      path: "/logo/github.svg",
      orbitRadius: middleRadius,
      initialAngle: 225,
      orbitSpeed: 50,
      selfRotateSpeed: 0,
    },
    {
      name: "java",
      path: "/logo/java.svg",
      orbitRadius: innerRadius,
      initialAngle: 90,
      orbitSpeed: 50,
      selfRotateSpeed: 0,
    },
    {
      name: "css",
      path: "/logo/css.svg",
      orbitRadius: innerRadius,
      initialAngle: 270,
      orbitSpeed: 50,
      selfRotateSpeed: 0,
    },
    {
      name: "typescript",
      path: "/logo/ts.svg",
      orbitRadius: middleRadius,
      initialAngle: 135,
      orbitSpeed: 50,
      selfRotateSpeed: 0,
    },
    {
      name: "javascript",
      path: "/logo/js.svg",
      orbitRadius: innerRadius,
      initialAngle: 0,
      orbitSpeed: 50,
      selfRotateSpeed: 0,
    },
  ];

  return (
    <div className="skills">
      <div className="skills-text">
        <span
          ref={firstTextRef}
          className={
            activeIndex === 0 ? "active" : activeIndex === 1 ? "inactive" : ""
          }
        >
          " I'm a passionate Engineer who's focused on building scalable and
          performant apps."
        </span>
        <span
          ref={secondTextRef}
          className={
            activeIndex === 1 ? "active" : activeIndex === 0 ? "inactive" : ""
          }
        >
          "I take responsibility to craft a good user experience using modern
          frontend architecture."
        </span>
      </div>
      <div
        style={{
          width: 1728,
          height: 1117,
          position: "relative",
          background: "#0c0c1d",
          overflow: "hidden",
          left: "22vh",
          top: "2vh",
        }}
      >
        {/* Circular borders */}
        <div
          style={{
            width: outerRadius * 2,
            height: outerRadius * 2,
            left: centerX - outerRadius,
            top: centerY - outerRadius,
            position: "absolute",
            borderRadius: 9999,
            border: "3px white solid",
          }}
        />
        <div
          style={{
            width: middleRadius * 2,
            height: middleRadius * 2,
            left: centerX - middleRadius,
            top: centerY - middleRadius,
            position: "absolute",
            borderRadius: 9999,
            border: "1.93px white solid",
          }}
        />
        <div
          style={{
            width: innerRadius * 2,
            height: innerRadius * 2,
            left: centerX - innerRadius,
            top: centerY - innerRadius,
            position: "absolute",
            borderRadius: 9999,
            border: "1.07px white solid",
          }}
        />

        {/* Revolving Logos */}
        {skills.map((skill) => {
          const orbitAngle = useMotionValue(
            skill.initialAngle * (Math.PI / 180)
          );

          // Calculate the X and Y positions based on the orbit angle
          const x = useTransform(
            orbitAngle,
            (angle) => centerX - 62.5 + skill.orbitRadius * Math.cos(angle)
          );

          const y = useTransform(
            orbitAngle,
            (angle) => centerY - 62.5 + skill.orbitRadius * Math.sin(angle)
          );

          // Use animation frame to continuously update the orbit angle
          useAnimationFrame((time) => {
            const newAngle =
              (time / (skill.orbitSpeed * 1000)) * Math.PI * 2 +
              skill.initialAngle * (Math.PI / 180);
            orbitAngle.set(newAngle);
          });

          return (
            <motion.div
              key={skill.name}
              className={`${skill.name}-logo`}
              style={{
                width: 125,
                height: 125,
                position: "absolute",
                overflow: "hidden",
                x,
                y,
              }}
            >
              <img
                src={skill.path}
                alt={skill.name}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
