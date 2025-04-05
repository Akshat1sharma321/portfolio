import "./app.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import MobileHero from "./components/mobile/MobileHero";
import MobilePortfolio from "./components/mobile/MobilePortfolio";
import MobileContact from "./components/mobile/MobileContact";
import { useEffect, useState } from "react";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app">
      <section id="Homepage">
        <Navbar />
        {isMobile ? <MobileHero /> : <Hero />}
      </section>

      {!isMobile && (
        <>
          <section id="Skills">
            <Parallax type="skills" />
          </section>
          <section id="Skills">
            <Skills />
          </section>
          <section id="Portfolio">
            <Parallax type="portfolio" />
          </section>
        </>
      )}

      <section id="Portfolio">
        {isMobile ? <MobilePortfolio /> : <Portfolio />}
      </section>

      {/* <section>Portfolio2</section>
      <section id="About">Portfolio3</section> */}
      <section id="Portfolio1"></section>
      <section id="Portfolio2"></section>
      <section
        id="Contact"
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
          position: "relative",
          top: "0",
          left: "0",
          width: "100%",
        }}
      >
        {isMobile ? <MobileContact /> : <Contact />}
      </section>

      <Cursor />
    </div>
  );
};

export default App;
