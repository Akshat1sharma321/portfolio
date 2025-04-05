import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vngb0zs", "template_kf521wf", formRef.current, {
        publicKey: "IwIM0QD7EZ1eZ4S2B",
      })
      .then(
        (result) => {
          setSuccess(true);
          console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView={"animate"}
      
    >
      <motion.div
        className="textContainer"
        variants={variants}
        
      >
        <motion.h1 variants={variants}>Let's work together ....</motion.h1>
        <motion.div className="item" variants={variants}>
          <motion.h2>Mail</motion.h2>
          <motion.span>Akshatsharma5901@gmail.com</motion.span>
        </motion.div>
      </motion.div>
      <motion.div
        className="formContainer"
        
      >
        <motion.div
          className="phone"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          
        >
          <img
            src="/phone.svg"
            alt="Phone"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea
            rows={8}
            name="message"
            id=""
            placeholder="Message"
          ></textarea>
          <button type="submit">Send</button>
          {error && <span className="error">Something went wrong</span>}
          {success && <span className="success">Email sent successfully</span>}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
