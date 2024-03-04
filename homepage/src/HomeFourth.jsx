import React from "react";
import "./HomeFourth.css";
import { Link } from "react-router-dom";
import join from './assets/join.jpg'

const HomeFourth = () => {
  return (
    <section
      data-cue="fadeIn"
      className="wrapper image-wrapper bg-image bg-overlay"
      style={{
        backgroundImage:
        `url(${join})`,
      }}
    >
      <div class="container py-18">
        <div class="row">
          <div class="col-lg-8">
            <h2 class="fs-16 text-uppercase text-line text-white mb-3">
              Join Our Community
            </h2>
            <h3 class="display-4 mb-6 text-white pe-xxl-18">
              We are trusted by majority of the clients. Join them by using our
              services and grow your business.
            </h3>
            <Link to="/ContactUs"
              
              className="btn btn-primary rounded mb-0 text-nowrap text-white"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFourth;
