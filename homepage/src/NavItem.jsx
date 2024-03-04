import React from "react";
import { Link } from "react-router-dom";



import "./NavCss.css";

function NavItem() {
  
   
   const navbarBackgroundColor = "#00FF00"; // Example background color

   // Determine text color based on background color
   const textColor = navbarBackgroundColor === "#FFFFFF" ? "#000000" : "#FFFFFF"; // Example logic, replace with your own
 
  
  return (
    <>
      <div className="content-wrapper">
        <header className="wrapper bg-soft-primary">
          <nav className="navbar navbar-dark navbar-expand-lg center-nav transparent position-absolute caret-none navbar-clone">
            <div className="container flex-lg-row flex-nowrap align-items-center">
              <div className="navbar-brand w-100">
                <Link to="/">
                  <img
                    className="logo-dark"
                    src="https://www.techsocind.com/assets/img/techsoC.png"
                    alt=""
                  />
                  <img
                    className="logo-light"
                    src="https://www.techsocind.com/assets/img/techsoC.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                  <ul className="navbar-nav custom-nav">
                    <li className="nav-item dropdown">
                      <Link to="/" className="nav-link px-3 style={{ color: textColor }}>">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle px-3 style={{ color: textColor }}"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Technologies
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link to="SemiCondEngin" className="dropdown-item style={{ color: textColor }}">
                            Semiconductor Engineering
                          </Link>
                        </li>
                        {/* <li className="nav-item">
                          <a
                            className="dropdown-item"
                            href="5g-technologies.html"
                          >
                            5G Technologies
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item" href="turnkey.html">
                            Turnkey Services
                          </a>
                        </li> */}
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle px-3 style={{ color: textColor }}"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Services
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            to="ConsultServices"
                            className="dropdown-item style={{ color: textColor }}"
                            
                          >
                            Consulting Services
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="ProjectOutSource"
                            className="dropdown-item style={{ color: textColor }}"
                            
                          >
                            Project Outsourcing
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="OffshoreDev"
                            className="dropdown-item style={{ color: textColor }}"
                            
                          >
                            Offshore Development
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <Link to="AboutUs" className="nav-link px-3 style={{ color: textColor }}">
                        About Us
                      </Link>
                    </li> */}
                    <li className="nav-item dropdown">
                      <Link to="AboutUs" className="nav-link px-3 style={{ color: textColor }}">
                        Bussiness Engagment Modal
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link to="CarrierPage" className="nav-link px-3 style={{ color: textColor }}">
                        Careers
                      </Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <Link to="ContactUs" className="nav-link style={{ color: textColor }}">
                        Contact Us
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default NavItem;
