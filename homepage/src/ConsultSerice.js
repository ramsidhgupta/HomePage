import React from "react";
import "./selected.css";
import { useInView } from "react-intersection-observer";
import SwiperCard from "./SwiperCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeadSection from "./HeadSection";
import cs from './assets/c-s.jpg';
import cstwo from './assets/c-s2.jpg'

const ConsultSerice = () => {
  const [ref, inView] = useInView({});
  const [ref2, inView2] = useInView({});
  const [ref4, inView4] = useInView({});
  const variants1 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="content-wrapper">
      <section className="wrapper bg-soft-primary">
        <HeadSection
          header1="Consulting Services"
          header2="Importance of right skilled resources for the success of any project"
          imageUrl={cs}
        />
      </section>
      <div className="container pt-md-16"></div>

      <section className="wrapper-border bg-light">
        <div className="container pt-md-14 pt-8 pt-md-16 pb-10">
          <div className="row">
            <div className="col-md-6">
              <p className="lead">
                We give counseling administrations in the space of ASIC Design,
                Pre-silicon Verification, Post Silicon Validation, Physical
                Design, STA, Synthesis, DFT, FPGA Design.
              </p>

              <p className="lead">
                TechsoC Consulting Services overcome any barrier among business
                and specialized assets and assist clients with acquiring esteem
                from their task ventures.
              </p>
            </div>
            <div className="col-md-6">
              <p className="lead">
                We get the significance of right talented assets for the outcome
                of any venture and that is what exactly we zeroed in on,
                developing the right blend of value abilities and assembling
                them the group in the ideal opportunity.
              </p>
              <p className="lead">
                At TechsoC Services we assist our Global Clients with thinking
                ahead about their business. Our counseling administrations offer
                genuinely necessary help to clients during the venture arranging
                and execution stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper-border bg-light">
        <div className="container py-10 py-md-10">
          <div className="row mb-3">
            <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 409.6 356.2"
                className="svg-inject icon-svg icon-svg-md mb-4"
                height="64px"
              >
                <path
                  className="lineal-fill"
                  d="M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z"
                ></path>
                <path
                  className="lineal-fill"
                  d="M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z"
                ></path>
              </svg>
              <h2 className="display-4 mb-3 px-lg-14">
                Technologies we are good at any place, any time
              </h2>
            </div>
          </div>

          <div className="position-relative">
           
            <SwiperCard />
          </div>
        </div>
      </section>
      <section className="wrapper-border bg-light">
        <div className="container py-10 py-md-10">
          <div className="row mb-3">
            <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 409.6 356.2"
                className="svg-inject icon-svg icon-svg-md mb-4"
                height="64px"
              >
                <path
                  className="lineal-fill"
                  d="M265.2 180.7H144.4v-17.6c0-33.3 27-60.4 60.4-60.4s60.4 27 60.4 60.4v17.6z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M265.2 191.7H144.4c-6.1 0-11.1-5-11.1-11.1V163c-.5-39.5 31.1-71.8 70.6-72.3s71.8 31.1 72.3 70.6v19.3c0 6.2-4.9 11.1-11 11.1zm-109.7-22.1h98.6v-6.5c.4-27.2-21.4-49.6-48.6-50s-49.6 21.4-50 48.6v7.9z"
                ></path>
                <path
                  className="lineal-fill"
                  d="M250.4 56.7c0 25.2-20.4 45.6-45.6 45.6s-45.6-20.4-45.6-45.6 20.4-45.6 45.6-45.6c25.2 0 45.6 20.4 45.6 45.6z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M204.8 113.3c-31.3 0-56.7-25.4-56.7-56.7S173.5-.1 204.8-.1s56.7 25.4 56.7 56.7c-.1 31.3-25.4 56.7-56.7 56.7zm0-91.2c-19.1 0-34.5 15.4-34.5 34.5s15.4 34.5 34.5 34.5 34.5-15.4 34.5-34.5c0-19-15.5-34.4-34.5-34.5zm193.7 334.1H296.8c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.7c-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.4-6 2.3-11.9 8.3-13.3 5.8-1.4 11.7 2.2 13.2 8 1.2 4.9 1.8 9.9 1.8 14.9v14.8c0 6.1-4.9 11.1-11.1 11.1z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M347.6 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.2 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.3-27.3 27.4 0 15.1 12.3 27.3 27.4 27.3S375 256 375 241c0-15.1-12.3-27.3-27.4-27.4zM112.8 356.2H11.1c-6.1 0-11.1-5-11.1-11.1v-14.8c0-34.2 27.8-62 62-62 6.1.2 10.9 5.3 10.7 11.4-.2 5.9-4.9 10.6-10.7 10.7-22 0-39.8 17.8-39.8 39.8v3.8h79.6v-3.7c0-3.2-.4-6.5-1.2-9.6-1.5-5.9 2.2-11.9 8.1-13.4s11.9 2.2 13.4 8.1c1.2 4.9 1.8 9.9 1.8 14.9v14.8c.1 6.1-4.9 11.1-11.1 11.1.1 0 .1 0 0 0z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M61.9 290.5c-27.3 0-49.5-22.2-49.5-49.5s22.2-49.5 49.5-49.5 49.5 22.2 49.5 49.5-22.1 49.5-49.5 49.5zm0-76.9c-15.1 0-27.3 12.2-27.3 27.4 0 15.1 12.2 27.4 27.4 27.4 15.1 0 27.3-12.2 27.3-27.3 0-15.2-12.3-27.4-27.4-27.5zm142.9 72.1c-6.1 0-11.1-5-11.1-11.1v-56.4c-.2-6.1 4.6-11.2 10.7-11.4 6.1-.2 11.2 4.6 11.4 10.7v57.1c.1 6.2-4.9 11.1-11 11.1z"
                ></path>
                <path
                  className="lineal-stroke"
                  d="M279.5 285.7H130.1c-6.1.2-11.2-4.6-11.4-10.7s4.6-11.2 10.7-11.4h150.2c6.1-.2 11.2 4.6 11.4 10.7s-4.6 11.2-10.7 11.4h-.8z"
                ></path>
              </svg>
              <h2 className="display-4 mb-3 px-lg-14">
                Technical Staff Augmentation
              </h2>
            </div>
          </div>
          <div className="row gx-lg-8 gx-xl-12 gy-8">
            <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 100 }}
            animate={inView4 ? "visible" : "hidden"}
            variants={variants2}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-md-6 col-lg-4"
              
            >
              <div className="d-flex flex-row">
                <div>
                  <h4 className="mb-1">SCALING THE TEAM</h4>
                  <p className="mb-0">
                    Whenever now is the ideal time to scale your group with an
                    extra skilled designers/expert to increment specialized
                    limit.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 100 }}
            animate={inView4 ? "visible" : "hidden"}
            variants={variants2}
            transition={{ duration: 0.5, delay: 0.3 }}
            class="col-md-6 col-lg-4"
              
            >
              <div className="d-flex flex-row">
                <div>
                  <h4 className="mb-1">
                    ADMITTANCE TO LARGE TECHNICAL EXPERTS
                  </h4>
                  <p className="mb-0">
                    You want a specialized master to get down to work right away
                    and diminish time to enlist.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 100 }}
            animate={inView4 ? "visible" : "hidden"}
            variants={variants2}
            transition={{ duration: 0.5, delay: 0.5 }}
            class="col-md-6 col-lg-4"
              
            >
              <div className="d-flex flex-row">
                <div>
                  <h4 className="mb-1">PROJECT COMPLEXITY</h4>
                  <p className="mb-0">
                    Your undertaking is mind boggling and has no time limits
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 100 }}
            animate={inView4 ? "visible" : "hidden"}
            variants={variants2}
            transition={{ duration: 0.5, delay: 0.1 }}
            class="col-md-6 col-lg-4"
              
            >
              <div className="d-flex flex-row">
                <div>
                  <h4 className="mb-1">CHANGING SPECIFICATION</h4>
                  <p className="mb-0">
                    Project specialized detail prerequisites are continually
                    evolving
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 100 }}
            animate={inView4 ? "visible" : "hidden"}
            variants={variants2}
            transition={{ duration: 0.5, delay: 0.3 }}
            class="col-md-6 col-lg-4"
              
            >
              <div className="d-flex flex-row">
                <div>
                  <h4 className="mb-1">COST AND TIME EFFECTIVE</h4>
                  <p className="mb-0">
                    You're searching for an expense and time-successful method
                    for doing your venture
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
            ref={ref4}
            initial={{ opacity: 0, y: 100 }}
            animate={inView4 ? "visible" : "hidden"}
            variants={variants2}
            transition={{ duration: 0.5, delay: 0.5 }}
            class="col-md-6 col-lg-4"
              
            >
              <div className="d-flex flex-row">
                <div>
                  <h4 className="mb-1">ADAPTABILITY TO RAMP UP OR DOWN</h4>
                  <p className="mb-0">
                    You have the adaptability to add assets for a particular
                    term to speed up your work and afterward downsize when
                    required
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="wrapper-border bg-light">
        <div className="container py-10 py-md-10">
          <div className="row">
            <div className="col-md-5 mb-2">
              <img
                src={cstwo}
                className="w-100 rounded"
                data-cue="slideInLeft"
              />
            </div>
            <div className="col-md-7 mb-2">
              <p className="lead">
                TechsoC can be your accomplice for Project-explicit
                reevaluating, where we will cooperate with your group to a
                settlement on expectations and execute the venture in a period
                bound way. In this commitment, project particular ought to be
                distinct and have all necessary documentation for the
                specialized group to plan a Scope of Work.
              </p>
              <p className="lead">
                TechsoC deals with its designing group in its cutting edge
                office in India and Poland. The improvement community is
                decisively found enjoying clear benefits concerning cost and
                accessibility of specialized labor supply.
              </p>

              <p className="lead">
                We can draw in with the undertaking which is autonomous or a
                piece of greater frameworks. With our undertaking explicit
                rethinking administrations, you as a client begin utilizing
                inner assets all the more productively and gain admittance to
                our specialized ability without recruiting and preparing the new
                representatives.
              </p>
            </div>
            <hr className="double my-8" />
            <h3 className="display-4 mb-10 px-lg-14 text-center">
              Benefits of Project Outsourcing
            </h3>
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
      <section className="wrapper-border bg-light">
        <div className="container py-10 py-md-10">
          <div className="row mb-3">
            <div className="col-md-10 col-xl-9 col-xxl-7 mx-auto text-center">
              <h2 className="display-4 mb-3 px-lg-10">
                Elective Engagement Options To Consulting Services
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <h4>Dedicated Team</h4>
              <p>
                Grow your group cost-really by recruiting our devoted
                specialized engineers in Offshore Development Center.
              </p>

              <h4>Project Outsourcing</h4>
              <p>
                We offer fixed cost project re-appropriating choices to our
                client for custom application advancements.
              </p>
            </div>
            <div
              ref={ref}
              className={`col-md-4 ${
                inView ? "animate__animated animate__zoomIn" : ""
              }`}
            >
              <div className="card bg-soft-primary rounded-4">
                <div className="card-body p-md-5 p-xl-5">
                  <span className="display-4">
                    <i className="uil uil-calling"></i>
                  </span>
                  <h4>WE ARE HERE TO SERVE YOU</h4>
                  <p>
                    Talk to our team to get the best options for your project
                  </p>
                  <Link
                    to="/ContactUs"
                    onClick={scrollToTop}
                    className="btn btn-primary rounded-pill mb-2 me-1 text-white"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultSerice;
