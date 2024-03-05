import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./HomeSecond.css";
import { Icon } from '@iconify/react';
import welcome1 from './assets/welcome1.jpg';
import welcome2 from './assets/welcome2.jpg';
import megaphone from './assets/megaphone.svg'

const HomeSecond = () => {
  const [ref, inView] = useInView();

  const variants1 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, x: -400 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <section className="wrapper-border bg-light angled lower-end">
      <div className="container py-14 py-md-10">
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-5 mb-md-5 align-items-center">
          <div className="col-lg-6 position-relative order-lg-2">
            <motion.div ref={ref}
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? "visible" : "hidden"}
                variants={variants2}
                transition={{ duration: 2, delay: 0.3 }}
              className="shape bg-dot primary rellax w-16 h-20"
              style={{ top: "3rem", left: "5.5rem" }}
            ></motion.div>
            <div className="overlap-grid overlap-grid-2">
              <motion.div
                className="item"
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <figure className="rounded shadow">
                  <img
                    className="image-1"
                    src={welcome1}
                    alt="Welcome First Image"
                  />
                </figure>
              </motion.div>
              <motion.div
                className="item"
                ref={ref}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? "visible" : "hidden"}
                variants={variants2}
                transition={{ duration: 2, delay: 0.3 }}
              >
                <figure className="rounded shadow">
                  <img
                    className="image-2"
                    src={welcome2}
                    alt="Welcome Second Image"
                  />
                </figure>
              </motion.div>
            </div>
          </div>
          <div className="col-lg-6" data-cue="slideInUp">
            <img
              src={megaphone}
              className="svg-inject icon-svg icon-svg-md mb-4"
              alt=""
            />
            <h2 className="display-4 mb-3">Who Are We?</h2>
            <p className="lead">
              TechsoC is the developing System Engineering and Solution Company,
              offers administrations like Semiconductor Engineering R&D
              Services, Consultancy and Outsourcing administrations to our
              clients across the globe for an on location and seaward plan of
              action.
            </p>
            <p className="lead">
              Our expertise in VLSI design & verification services can transform
              your product ideas into cost-effective, powerful, performance &
              area optimized System-on-Chip (SoC). We cater to the growing
              demands of the 5G, Data Centre Infrastructure & Industrial
              markets.
            </p>
            <div className="row gy-3 gx-xl-8">
              <div className="col-xl-12">
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li className="lead">
                    <span>
                    <Icon icon="icon-park-outline:check-correct" />
                    </span>
                    <span>
                        Our prosperity comes from exhibited initiative and a
                      pledge to transform associations into getting through
                      examples of overcoming adversity.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="col-xl-12">
                <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                  <li className="lead">
                    <span>
                    <Icon icon="icon-park-outline:check-correct" />
                    </span>
                    <span>
                        We, at TechsoC, have faith in cooperation with the journey
                      for getting new skills.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSecond;
