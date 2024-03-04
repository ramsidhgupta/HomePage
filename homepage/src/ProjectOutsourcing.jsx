import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "./ProjectOutsourcing.css";
import HeadSection from "./HeadSection";
import banner2 from './assets/banner2.jpg'

const ProjectOutsourcing = () => {
  const [ref, inView] = useInView({});
  const [ref1, inView1] = useInView({});
  const [ref2, inView2] = useInView({});
  const variants1 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: -10 },
  };

  return (
    <>
      <section class="wrapper bg-soft-primary">
        <HeadSection
          header1="Project Sourcing"
          header2="Engaged with the project which is independent or a part of bigger systems."
          imageUrl={banner2}
        />
      </section>
      <div class="container pt-md-16"></div>
      <section class="wrapper bg-light">
        <div class="container pt-md-12 pt-12 pt-md-16 px-4">
          <div className="row px-4">
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: -100 }}
              animate={inView2 ? "visible" : "hidden"}
              variants={variants2}
              transition={{ duration: 1, delay: 0.1 }}
              class="col-md-6 mb-5"
            >
              <p>
                TechsoC can be your accomplice for Project-explicit
                reevaluating, where we will cooperate with your group to a
                settlement on expectations and execute the task in a period
                bound way. In this commitment, project determination ought to be
                obvious and have all expected documentation for the specialized
                group to plan a Scope of Work.
              </p>
            </motion.div>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: -100 }}
              animate={inView2 ? "visible" : "hidden"}
              variants={variants2}
              transition={{ duration: 1, delay: 0.3 }}
              class="col-md-6 mb-2 px-4"
            >
              <p>
                TechsoC deals with its designing group in its cutting edge
                office in India. The improvement community is decisively found
                enjoying positive benefits with regards to cost and
                accessibility of specialized labor.
              </p>
            </motion.div>

            <div class="row gx-lg-8 gx-xl-12 gy-2 process-wrapper line">
              <motion.div
                ref={ref2}
                initial={{ opacity: 0, x: -100 }}
                animate={inView2 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 1, delay: 0.3 }}
                class="col-md-6 col-lg-4"
              >
                {" "}
                <span class="icon btn btn-circle btn-lg btn-soft-primary disabled mb-4">
                  <span class="number">01</span>
                </span>
                <h4 class="mb-1">CLARITY</h4>
                <p>
                  All project necessities are indicated in advance, as well as
                  all the expected task related documentation.
                </p>
              </motion.div>
              <motion.div
                ref={ref2}
                initial={{ opacity: 0, x: -100 }}
                animate={inView2 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 1, delay: 0.5 }}
                class="col-md-6 col-lg-4"
              >
                {" "}
                <span class="icon btn btn-circle btn-lg btn-soft-primary disabled mb-4">
                  <span class="number">02</span>
                </span>
                <h4 class="mb-1">Accuracy</h4>
                <p>
                  The venture extension and time spans are known ahead of time,
                  so the group can set the cutoff times and screen the
                  undertaking progress effortlessly.
                </p>
              </motion.div>
              <motion.div
                ref={ref2}
                initial={{ opacity: 0, x: -100 }}
                animate={inView2 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 1, delay: 0.7 }}
                class="col-md-6 col-lg-4"
              >
                {" "}
                <span class="icon btn btn-circle btn-lg btn-soft-primary disabled mb-4">
                  <span class="number">03</span>
                </span>
                <h4 class="mb-1">ACCOUNTABLITY</h4>
                <p>
                  Our group will achieve the venture on schedule and under
                  spending plan, regardless of whether it implies a few
                  additional hours for our group.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectOutsourcing;
