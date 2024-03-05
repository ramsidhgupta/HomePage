import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import logo from './assets/techsoC.png'

import "./NavNew.css";

function NewNav() {

const [sidebarOpen, setSidebarOpen] = useState(false);

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

  const handleLinkClick = () => {
    setSidebarOpen(false); 
  };




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
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`sidebar offcanvas offcanvas-start ${sidebarOpen ? 'show' : ''}`}

            
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
                onClick={() => setSidebarOpen(false)}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 p-lg-0">
                <li className="nav-item mx-2">
                <Link to="/" className="nav-link active font-weight-bold" aria-current="page" onClick={handleLinkClick}>

                
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
                    <Link to="SemiCondEngin" className="dropdown-item" aria-current="page" onClick={handleLinkClick}>
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
                            to="ConsultServices"className="dropdown-item" aria-current="page" onClick={handleLinkClick}>
                        Consulting Service
                      </Link>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                    <Link to="ProjectOutSource" className="dropdown-item" aria-current="page" onClick={handleLinkClick}>
                        Project Outsourcing
                      </Link>
                    </li>
                    <hr className="dropdown-divider" />
                    <li>
                    <Link to="OffshoreDev" className="dropdown-item" href="#" aria-current="page" onClick={handleLinkClick}>
                        Offshore Development
                      </Link>
                    </li>
                    <li></li>
                  </ul>
                </li>
                <li className="nav-item mx-2">
                  <Link to="AboutUs"className="nav-link" href="#" aria-current="page" onClick={handleLinkClick}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item mx-2">
                <Link to="CarrierPage" className="nav-link" href="#" aria-current="page" onClick={handleLinkClick}>
                    Careers
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="ContactUs" className="nav-link" href="#" aria-current="page" onClick={handleLinkClick}>
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
