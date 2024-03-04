import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { easeInOut, motion } from "framer-motion";
import "./SocialMedia.css";

const SocialMedia = () => {
  
  const variants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  
  const linkedInProfileUrl = "https://www.linkedin.com/company/techsoc-technologies-private-limited/";
  const [ref10, inView10] = useInView({});

  return (
    <div className="final">
     
        
          <div className="icons">
            <a href="#">
              <motion.div
                ref={ref10}
                initial={{ opacity: 0, x: -100 }}
                animate={inView10 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.2, delay: 0.1, ease: easeInOut }}
                className="layer"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-facebook-f"></span>
              </motion.div>
              <div className="text">Facebook</div>
            </a>
            <a href="#">
              <motion.div
                ref={ref10}
                initial={{ opacity: 0, x: -100 }}
                animate={inView10 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.4, delay: 0.2, ease: easeInOut }}
                className="layer"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-twitter"></span>
              </motion.div>
              <div className="text">Twitter</div>
            </a>
            <a href="#">
              <motion.div
                ref={ref10}
                initial={{ opacity: 0, x: -100 }}
                animate={inView10 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.5, delay: 0.3, ease: easeInOut }}
                className="layer"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-instagram"></span>
              </motion.div>
              <div className="text">Instagram</div>
            </a>
            <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
              <motion.div
                ref={ref10}
                initial={{ opacity: 0, x: -100 }}
                animate={inView10 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.6, delay: 0.4, ease: easeInOut }}
                className="layer"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-linkedin-in"></span>
              </motion.div>
              <div className="text">Linkedin</div>
            </a>
            <a href="#">
              <motion.div
                ref={ref10}
                initial={{ opacity: 0, x: -100 }}
                animate={inView10 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.7, delay: 0.5, ease: easeInOut }}
                className="layer"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="fab fa-youtube"></span>
              </motion.div>
              <div className="text">YouTube</div>
            </a>
          </div>
        
      
    </div>
  );
};

export default SocialMedia;
