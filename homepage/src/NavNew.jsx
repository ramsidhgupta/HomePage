import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from './assets/techsoC.png'

import "./NavNew.css";

function NewNav() {
  useEffect(() => {
    const body = document.body;
    let lastScroll = 0;

    function handleScroll() {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
      }
      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      }
      if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            {" "}
            <img
              src={logo}
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="sidebar offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header text-white border-bottom">
            <Link to="/" className="navbar-brand">
                {" "}
                <img
                  src={logo}
                  alt="Logo"
                />
              </Link>

              <button
                type="button"
                className="btn-close btn-close-black shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 p-lg-0">
                <li className="nav-item mx-2">
                <Link to="/"
                    className="nav-link active font-weight-bold"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Technology
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                    <Link to="SemiCondEngin" className="dropdown-item">
                        Semiconducter Engineering
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown mx-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                    <Link
                            to="ConsultServices"className="dropdown-item">
                        Consulting Service
                      </Link>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                    <Link to="ProjectOutSource" className="dropdown-item">
                        Project Outsourcing
                      </Link>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                    <Link to="OffshoreDev" className="dropdown-item" href="#">
                        Offshore Development
                      </Link>
                    </li>
                    <li></li>
                  </ul>
                </li>
                <li className="nav-item mx-2">
                  <Link to="AboutUs"className="nav-link" href="#">
                    About Us
                  </Link>
                </li>
                <li className="nav-item mx-2">
                <Link to="CarrierPage" className="nav-link" href="#">
                    Careers
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="ContactUs" className="nav-link" href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NewNav;
