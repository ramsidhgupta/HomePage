import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./TestNav.css";

function TestNav() {

  useEffect(() => {
    const body = document.body;
    let lastScroll = 0;

    function handleScroll() {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
      }
      if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      }
      if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on component mount


  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">  <img src="https://www.techsocind.com/assets/img/techsoC.png" alt="Logo" />
</a>
          <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header text-white border-bottom">
            <a className="navbar-brand" href="#">  <img src="https://www.techsocind.com/assets/img/techsoC.png" alt="Logo" /></a>

              <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 p-lg-0">
                <li className="nav-item mx-2">
                  <a className="nav-link active font-weight-bold" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Technology
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Semiconducter Engineering</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Consulting Service</a></li>
                    <hr className="dropdown-divider" />
                    <li><a className="dropdown-item" href="#">Project Outsourcing</a></li>
                    <hr className="dropdown-divider" />
                    <li><a className="dropdown-item" href="#">Offshore Development</a></li>
                    <li>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">Careers</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TestNav;


