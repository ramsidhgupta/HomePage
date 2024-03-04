import React from "react";
import "./OffshoreDevelopment.css";
import { useInView } from "react-intersection-observer";
import offone from './assets/1.jpeg';
import offtwo from './assets/off2.png';
import offthree from './assets/off3.png';
import offfour from './assets/4.jpeg'

const OffshoreDevelopment = () => {
  const [ref, inView] = useInView({});
  return (
    <>
      <section class="wrapper bg-soft-primary">
        <div class="container pt-17 pt-md-17 pb-0 pb-md-0 pt-xs-17">
          <div class="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-md-10 mb-3">
            <div
              ref={ref}
              className={`col-lg-6 ${
                inView ? "animate__animated animate__fadeInLeft" : ""
              }`}
            >
              <h1 class="display-1 fs-66 lh-xxs mb-0 fw-bold">OffShore Development</h1>
            </div>
            <div
              ref={ref}
              className={`col-lg-6 ${
                inView ? "animate__animated animate__fadeInRight" : ""
              }`}
            >
              <p class="lead fs-25 my-3 fw-bold">
                A dedicated development centre engaged in Developing
              </p>
            </div>
          </div>
          <div class="row office-group">
            <div
              ref={ref}
              className={`col-sm-6 col-md-3 rounded ${
                inView
                  ? "animate__animated animate__fadeInLeft animate__delay-1s"
                  : ""
              }`}
            >
              <img
                src={offone}
                class="office-image"
                alt="office image one"
              />
            </div>
            <div
              ref={ref}
              className={`col-sm-6 col-md-3 rounded ${
                inView
                  ? "animate__animated animate__fadeInLeft animate__delay-2s"
                  : ""
              }`}
            >
              <img
                src={offtwo}
                class="office-image"
                alt="office image two"
              />
            </div>
            <div
              ref={ref}
              className={`col-sm-6 col-md-3 rounded ${
                inView
                  ? "animate__animated animate__fadeInRight animate__delay-1s"
                  : ""
              }`}
            >
              <img
                src={offthree}
                class="office-image"
                alt="office image three"
              />
            </div>
            <div
              ref={ref}
              className={`col-sm-6 col-md-3 rounded ${
                inView
                  ? "animate__animated animate__fadeInRight animate__delay-2s"
                  : ""
              }`}
            >
              <img
                src={offfour}
                class="office-image"
                alt="office image four"
              />
            </div>
          </div>
        </div>
      </section>
      <section class="wrapper bg-light">
        <div class="container pt-8 pt-md-10">
          <div class="row">
            <div
              ref={ref}
              className={`col-lg-12 mb-10 ${
                inView
                  ? "animate__animated animate__fadeInUp animate__delay-3s"
                  : ""
              }`}
            >
              {/* <div class="col-lg-12 mb-10"> */}
              <p class="lead">
                TechsoC deals with its seaward improvement at its best in class
                office in Bangalore, India. The Offshore improvement place (ODC)
                is decisively found enjoying clear benefits regarding cost and
                accessibility of specialized labor.
              </p>

              <p class="lead">
                The committed ODC is especially invaluable to clients requiring
                a devoted group in India due to the different benefits that
                India offers without the need to lay out its own office.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OffshoreDevelopment;
