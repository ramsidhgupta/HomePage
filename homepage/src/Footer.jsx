import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Tech from "./assets/techsoC.png";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <footer class="bg-soft text-center text-lg-start text-dark py-2 ram1">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-6 col-md-4 mb-0 mb-md-0">
                <div className="row">
                  <div className="col-lg-6 col-md-2 mb-0 mb-md-0">
                    <SocialMedia />
                  </div>
                  <div className="col-lg-6 col-md-2 mb-0 mb-md-0">
                    <Link to="/" onClick={scrollToTop}>
                      <img src={Tech} height="40" alt="" loading="lazy" />
                    </Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-1 col-md-4 mb-1 mb-md-0">
                <Link to="AboutUs" onClick={scrollToTop} className="nav-link fw-bold">
                  About Us
                </Link>
              </div>

              <div class="col-lg-1 col-md-6 mb-1 mb-md-0">
                <Link
                  to="ContactUs"
                  onClick={scrollToTop}
                  className="nav-link text-dark fw-bold"
                >
                  Contact Us
                </Link>
              </div>

              <div class="col-lg-1 col-md-6 mb-1 mb-md-0">
                <Link
                  to="LifeAtTechsoc"
                  onClick={scrollToTop}
                  className="nav-link text-dark fw-bold "
                >
                  Life At TechsoC
                </Link>
              </div>

              <div class="col-lg-3 col-md-6 mb-1 mb-md-0">
                <h5 class="text-uppercase mb-1">location</h5>

                <ul class="list-unstyled">
                  <li>
                    <i class="fas fa-map-marker-alt pe-2 text-center"></i>
                    Bangalore, India
                  </li>
                  {/* <li>
                    <i class="fas fa-phone pe-2"></i>+91 80 67577879
                  </li>
                  <li>
                    <i class="fas fa-envelope pe-2 mb-0"></i>
                    contact@techsocind.com
                  </li> */}
                  <li>
                    <Link to="/" class="text-dark">
                      <i class="fas fa-envelope pe-2 mb-0"></i>© 2024 Copyright
                      : TechsoCind.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
