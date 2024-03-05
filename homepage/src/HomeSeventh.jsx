import React from "react";
import "./HomeSeventh.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import contact from './assets/contact.jpg';
import telemarketer from './assets/telemarketer.svg'

const HomeSeventh = () => {
  const [ref, inView] = useInView();

  const variants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 50 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 50 },
  };
  const variants3 = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 50 },
  };
  const variants4 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: -20 },
  };
  const variants5 = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 50 },
  };

  return (
    <section class="wrapper bg-light">
      <div class="container pt-19 pb-14 pt-md-10 pb-md-16">
        <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center">
          <motion.div
            class="col-md-8 col-lg-6 offset-lg-0 col-xl-5 offset-xl-1 position-relative"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants5}
            transition={{ duration: 1 }}
            data-cue="slideInLeft"
          >
            <motion.div
              class="shape bg-dot primary rellax w-17 h-21 position-absolute"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants4}
              transition={{ duration: 1 }}
              style={{
                top: "-2rem",
                left: "0.4rem",
                transform: "translate3d(0px, -50px,0px",
               
              }}
            ></motion.div>
            <figure class="rounded">
              <img
                src={contact}
                srcSet={contact}
                alt=""
              />
            </figure>
          </motion.div>

          <div class="col-lg-6">
            <img
              src={telemarketer}
              class="svg-inject icon-svg icon-svg-md mb-4 mt-5"
              alt=""
            />
            <h2 class="display-4 mb-8">
              Let’s Collaborate and the Build the Future Tech{" "}
            </h2>
            <motion.div
              class="d-flex flex-row"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants1}
              transition={{ duration: 1 }}
              data-cue="slideInRight"
            >
              <div>
                <div class="icon text-black-50 fs-28 me-6 mt-n1">
                  {" "}
                  <i class="uil uil-location-pin-alt"></i>{" "}
                </div>
              </div>
              <div>
                <h5 class="mb-1">Address</h5>
                <address>
                  <strong>Techsoc Technologies Private Limited</strong>
                  <br />
                  Level 8, Ikeva, Tower 1, Umiya Business Bay,
                  <br />
                  Cessna Business Park, Marathalli, <br />
                  Bangalore 560037, India{" "}
                </address>
              </div>
            </motion.div>
            <motion.div
              class="d-flex flex-row"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants2}
              transition={{ duration: 1 }}
              data-cue="slideInRight"
            >
              <div>
                <div class="icon text--black-50 fs-28 me-6 mt-n1">
                  {" "}
                  <i class="uil uil-phone-volume"></i>{" "}
                </div>
              </div>
              <div>
                <h5 class="mb-1">Phone</h5>
                <p>+91 80 67577879</p>
              </div>
            </motion.div>
            <motion.div
              class="d-flex flex-row"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants3}
              transition={{ duration: 1 }}
              data-cue="slideInRight"
            >
              <div>
                <div class="icon text--black-50 fs-28 me-6 mt-n1">
                  {" "}
                  <i class="uil uil-envelope"></i>{" "}
                </div>
              </div>
              <div>
                <h5 class="mb-1">E-mail</h5>
                <p class="mb-0">
                  <a
                    href="/cdn-cgi/l/email-protection#94f7fbfae0f5f7e0d4e0f1f7fce7fbf7fdfaf0baf7fbf9"
                    class="link-body"
                  >
                    <span class="__cf_email__">
                      <span
                        class="__cf_email__"
                        data-cfemail="4724282933262433073322242f3428242e29236924282a"
                      >
                        [contact@&#160;techsocind.com]
                      </span>
                    </span>
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeventh;
