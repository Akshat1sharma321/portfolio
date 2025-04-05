import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";
const Navbar = () => {
  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Sidebar />
      {/* Sidebar */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/Akshat Sharma.png" alt="" className="ak" />
        </motion.span>
        <div className="social">
          <a
            href="https://www.linkedin.com/in/akshat-sharma-923495277/"
            alt="linkedin"
          >
            <img src="\icons8-linkedin-48.png" alt="" className="icon" />
          </a>
          <a href="https://x.com/Akshat6125853" alt="X">
            <img src="\icons8-x-50.png" alt="" className="icon" />
          </a>
          <a
            href="https://www.instagram.com/akshat.sharma4508/"
            alt="Instagram"
          >
            <img src="\icons8-instagram-48.png" alt="" className="icon" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
