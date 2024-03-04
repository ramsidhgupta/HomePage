import React from "react";
import "./HomeThird.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import list from './assets/list.svg'
import home1 from './assets/home1.jpg'

const HomeThird = () => {
  const [ref, inView] = useInView();

  const variants1 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 50 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 60 },
  };
  const variants4 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: -10 },
  };
  const variants5 = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: -10 },
  };
  return (
    <>
      <section className="wrapper-border bg-light angled lower-end">
        <div className="container py-14 py-md-10">
          <motion.div
            className="row mb-5"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants5}
            transition={{ duration: 1 }}
            data-cue="slideInUp"
          >
            <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
              <img
                src={list}
                className="svg-inject icon-svg icon-svg-md mb-4"
                alt=""
              />
              <h2 className="display-4 mb-4 px-lg-14">Why TechsoC</h2>
            </div>
          </motion.div>
          <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-6 order-lg-2">
              <motion.div
                className="card me-lg-6"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 1 }}
                data-cue="slideInRight"
              >
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">01</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">Design to Development</h4>
                      <p className="mb-0">
                        Seek after the most noteworthy specialized quality and
                        dependability.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="card ms-lg-13 mt-6"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants2}
                transition={{ duration: 1 }}
                data-cue="slideInRight"
              >
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">02</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">Innovative and Excellence</h4>
                      <p className="mb-0">Building best of the kind.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="card mx-lg-6 mt-6"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants3}
                transition={{ duration: 1 }}
                data-cue="slideInRight"
              >
                <div className="card-body p-6">
                  <div className="d-flex flex-row">
                    <div>
                      <span className="icon btn btn-circle btn-lg btn-soft-primary disabled me-4">
                        <span className="number">03</span>
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-1">Finalize Product</h4>
                      <p className="mb-0">Expectation is delivered.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="col-lg-6"
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants4}
              transition={{ duration: 1 }}
              data-cue="slideInUp"
            >
              <img
                src={home1}
                className="w-100 rounded"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeThird;
