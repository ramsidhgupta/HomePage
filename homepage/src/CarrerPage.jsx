import React, { useState, useRef } from "react";
import "./CarrerPage.css";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import axios from "axios";
import Popup from "./Popup";
import { useInView } from "react-intersection-observer";
import HeadSection from "./HeadSection";
import carrier from './assets/careers.jpg'
import AwardShow from './AwardShow';
import EmpQuotes1 from './EmpQuotes1';

const CarrerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    qualification:"",
    experience:"",
    role:"",
    file: null,
  });
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSelectQual = (value) => {
    setFormData({ ...formData, qualification: value });
  };

  const handleSelectExp = (value) => {
    setFormData({ ...formData, experience: value });
  };

  const handleSelectRole = (value) => {
    setFormData({ ...formData, role: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedExtensions = [".doc", ".docx", ".pdf"];
      const fileExtension = file.name.split(".").pop().toLowerCase();
      if (!allowedExtensions.includes("." + fileExtension)) {
        alert("Only .doc, .docx, and .pdf files are allowed");
        e.target.value = null;
        return;
      }
      if (file.size > 14 * 1024) {
        alert("File size should be less than 14 KB");
        e.target.value = null;
        return;
      }
    }

    setFormData({ ...formData, file });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://homepage-12.onrender.com/api/submitForm",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      console.log(
        "Form submitted successfully and also, ",
        response.data.message
      );
      setIsPopupVisible(true);
      setFormData({
        name: "",
        email: "",
        message: "",
        qualification:"",
        experience:"",
        role:"",
        file: null,
      });
      document.getElementById("file").value = "";
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const [ref8, inView8] = useInView({});
  const [ref3, inView3] = useInView({});
  const [ref4, inView4] = useInView({});

  const sectionRef = useRef(null);
  
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const variants1 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };
  
  

  return (
    <>
      <section className="wrapper bg-soft-primary">
      <HeadSection
          header1="Careers"
          header2="We bring solutions to make life easier."
          imageUrl={carrier}
        />
      </section>
      <div class="container pt-md-16"></div>
      <section class="wrapper bg-light">
        <div class="container pt-14 pb-5 pt-md-16">
          <div class="row">
            <div class="col-md-6 pb-5">
              <p
                style={{
                  lineHeight: "1.65",
                  fontSize: ".9rem",
                  fontWeight: "500",
                }}
              >
                At TechsoC we have confidence in engaging your capacities and
                releasing your true capacity. Continuously! Representatives at
                TechsoC approach expertise improvement preparing, studios,
                client openness, and on location travel open doors. Being an
                innovation advancement centered organization, we give
                imaginative activities and suggestions to deal with, and
                continually perceive your endeavors.
              </p>

              <p class="lead">
                We are engaged towards steady development and consumer loyalty.
                Our excursion of the cutting edge inventive item plan and
                assembling keeps you drew in with applying your learnings
                continually. Every donor at TechsoC deals with the most recent
                innovation. There is a long way to go at TechsoC, as we cater
                from 5G to Networking, Cloud to Apps, IoT to Vision. Leave on a
                profession venture where you get to deal with the leading|edge
                advances, devices and your energy to make the arrangements of
                today! Come join the club of trailblazers and give wings to your
                fantasies!
              </p>

              <p class="lead">
                Be a piece of the TechsoC group for an on the up and up venture!
              </p>
            </div>
            <div class="col-md-6 mb-15">
              <div class="row gx-md-5 gy-5">
                <div class="col-md-6 pt-10">
                  <h4>
                    Where would you like to begin your journey with TechsoC?
                  </h4>
                  <motion.div
                    ref={ref4}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView4 ? "visible" : "hidden"}
                    variants={variants2}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="card bg-pale-primary text-center mt-md-10"
                  >
                    <div class="card-body counter-wrapper">
                      <h5>Fresher</h5>
                      <p class="mb-5">(Graduates)</p>
                      <a
                        href="#form"
                        class="btn btn-warning rounded-pill move-up-on-hover mb-2 me-1"
                        role="button"
                        onClick={scrollToSection}
                      >
                        Apply Now
                      </a>
                    </div>
                  </motion.div>
                </div>
                <div class="col-md-6">
                  <div class="row gx-md-5 gy-5">
                    <div class="col-md-12 order-md-2">
                      <motion.div
                        ref={ref4}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inView4 ? "visible" : "hidden"}
                        variants={variants2}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="card bg-pale-primary text-center mt-md-10"
                      >
                        <div class="card-body counter-wrapper">
                          <h5>Experienced</h5>
                          <p class="mb-5">(Professional)</p>
                          
                          <a
                            class="btn btn-warning rounded-pill move-up-on-hover mb-2 me-1"
                            role="button"
                            onClick={scrollToSection}
                          >
                            Apply Now
                          </a>
                        </div>
                      </motion.div>
                    </div>
                    <div class="col-md-10">
                      <motion.div
                        ref={ref4}
                        initial={{ opacity: 0, x: -150 }}
                        animate={inView4 ? "visible" : "hidden"}
                        variants={variants2}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="card bg-pale-primary text-center mt-md-10"
                      >
                        <div class="card-body counter-wrapper">
                          <h5>Student</h5>
                          <p class="mb-5">(Internship)</p>
                          <a
                            class="btn btn-warning rounded-pill move-up-on-hover mb-2 me-1"
                            role="button"
                            onClick={scrollToSection}
                          >
                            Apply Now
                          </a>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="double my-8" />
            <div class="col-md-7">
              <div class="row gx-md-8 gy-8 mb-5 mb-md-5">
                <motion.div
                  ref={ref8}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView8 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.3 }}
                  class="col-md-6 col-lg-4"
                >
                  <div class="icon btn btn-block btn-lg btn-soft-primary disabled mb-6">
                    <Icon icon="emojione-v1:repeat-button" />
                  </div>
                  <h4>Collaboration</h4>
                  <p class="mb-3">
                    We believe that teamwork delivers the very best solutions
                    for our customers.
                  </p>
                </motion.div>

                <motion.div
                  ref={ref8}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView8 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.5 }}
                  class="col-md-6 col-lg-4"
                >
                  <div class="icon btn btn-block btn-lg btn-soft-primary disabled mb-6">
                    <Icon icon="fxemoji:lightbulb" />
                  </div>
                  <h4>Innovation</h4>
                  <p class="mb-3">
                    We create semiconductors that move data faster and more
                    reliable than anyone else.
                  </p>
                </motion.div>

                <motion.div
                  ref={ref8}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView8 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 1, delay: 0.7 }}
                  class="col-md-6 col-lg-4"
                >
                  <div class="icon btn btn-block btn-lg btn-soft-primary disabled mb-6">
                    <Icon icon="bi:globe" />
                  </div>
                  <h4>Community</h4>
                  <p class="mb-3">
                    We believe in a strong culture, corporate citizenship and
                    industry leadership.
                  </p>
                </motion.div>
              </div>
              <div class="life-at">
                <div>
                  <h3>Life at TechsoC</h3>
                  <p>
                    You'll see your thoughts set to work, share in the progress
                    of the organization, and carry on with a sound life in a
                    solid culture of corporate citizenship and industry
                    authority. Come assist with concocting what's to come!
                    Investigate our profession open doors.
                  </p>
                </div>
              </div>
              <hr class="double my-8" />
              <div class="row gx-md-8 gy-8 my-5 my-md-5">
                <motion.div
                  ref={ref3}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView3 ? "visible" : "hidden"}
                  variants={variants1}
                  transition={{ duration: 2, delay: 0.3 }}
                  class="col-md-12 col-lg-12"
                  data-cue="slideInLeft"
                >
                  <div class="icon btn btn-block btn-lg btn-soft-primary disabled mb-6">
                    <Icon icon="solar:hand-heart-outline" />
                  </div>
                  <h4>Health</h4>
                  <p class="mb-3">
                    Keep you and your family solid with serious, far reaching
                    wellbeing and government assistance plans.
                  </p>
                </motion.div>

                <div class="col-md-6 col-lg-4" data-cue="slideInLeft">
                  <div class="icon btn btn-block btn-lg btn-soft-primary disabled mb-6">
                    <Icon icon="material-symbols:finance-chip" />
                  </div>
                  <h4>Financial</h4>
                  <p class="mb-3">
                    Save for retirement and plan for your future with programs
                    set up to assist you with saving. Would it be advisable for
                    you become sick or harmed, Marvell offers handicap intends
                    to help you in your recuperation.
                  </p>
                </div>

                <div class="col-md-6 col-lg-4" data-cue="slideInLeft">
                  <div class="icon btn btn-block btn-lg btn-soft-primary disabled mb-6">
                    <Icon icon="material-symbols-light:finance-mode" />
                  </div>
                  <h4>Equity</h4>
                  <p class="mb-3">
                    Sign up for the Employee Stock Purchase Plan and purchase
                    portions of Marvell normal stock at a limited rate, or
                    identical arrangement.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="row text-center">
                <div class="col-xl-10 mx-auto">
                  <h2 class="fs-15 text-uppercase text-primary mb-3">
                    Job Positions
                  </h2>
                  <p class="display-10 mb-4">
                    We’re always searching for amazing people to join our team.
                    Take a look at our current openings.
                  </p>
                </div>
              </div>

              <div class="row gy-6">
                <div className="col-md-12">
                  <div class="card shadow-lg lift h-100">
                    <div class="card-body p-5 d-flex flex-row">
                      <div>
                        <h4 class="mb-1">Experience level : 3 to 10 years.</h4>
                        <ul class="m-0 mb-5 px-4 text-body">
                          <li>
                            Hands on in ASIC/FPGA level Design Verification
                            Using System Verilog /UVM{" "}
                          </li>
                          <li>
                            Experience in basic Industry tools debug and
                            simulation
                          </li>
                          <li>Good knowledge of ARM subsystem, AMBA bus</li>
                          <li>
                            Familiar with DSP subsystems and high-speed
                            interfaces (e.g. SERDES, GigE, 10GE)
                          </li>
                          <li>Ability to lead & motivate a team of Engineer</li>
                          <li>
                            Experience in Automotive industry would be plus with
                            LIDAR protocol knowledge.
                          </li>
                        </ul>
                        <a
                          class="btn btn-warning rounded-pill move-up-on-hover mb-2 me-1"
                          role="button"
                          onClick={scrollToSection}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div class="card shadow-lg lift h-100">
                    <div class="card-body p-5 d-flex flex-row">
                      <div>
                        <h4 class="mb-1">Experience level :3 to 10 years.</h4>
                        <ul class="m-0 mb-5 px-4 text-body">
                          <li>Hands on in ASIC/FPGA level RTL Design</li>
                          <li>
                            Hands on in Clock Domain Crossing (CDC) checks,
                            Linting, equivalence checks
                          </li>
                          <li>
                            Experience in Digital module micro-architecture and
                            design
                          </li>
                          <li>Experience in basic RTL simulation</li>
                          <li>
                            Good knowledge of Synthesis, STA and DFT aware
                            design
                          </li>
                          <li>Good knowledge of ARM subsystem, AMBA bus</li>
                          <li>
                            Familiar with DSP subsystems and high-speed
                            interfaces (e.g. SERDES, GigE, 10GE)
                          </li>
                          <li>Ability to lead & motivate a team of Engineer</li>
                          <li>
                            Experience in Automotive industry would be plus with
                            LIDAR protocol knowledge.
                          </li>
                        </ul>
                        <a
                          class="btn btn-warning rounded-pill move-up-on-hover mb-2 me-1"
                          role="button"
                          onClick={scrollToSection}
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="double my-6" />
      <AwardShow/>
      <EmpQuotes1/>
      <section>
        <a id="form"></a>
        <div class="container  pb-7" ref={sectionRef}>
          <div class="card bg-soft-primary mb-8" data-cue="zoomIn">
            <div class="card-body p-12">
              <div class="row gx-md-8 gx-xl-12 gy-10">
                <div class="col-lg-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-400 -100 4502 595.7"
                    class="svg-inject icon-svg icon-svg-sm mb-4"
                  >
                    <path
                      class="lineal-stroke"
                      d="M483.6 395.7H53.3C23.9 395.7 0 371.9 0 342.4V53.3C0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3v222.8c0 7.9-6.4 14.2-14.2 14.2s-14.2-6.4-14.2-14.2V53.3c0-13.7-11.1-24.8-24.8-24.8H53.3c-13.7 0-24.8 11.1-24.8 24.8v289.2c0 13.7 11.1 24.8 24.8 24.8h430.3c7.9.2 14.1 6.7 13.8 14.6-.2 7.5-6.3 13.6-13.8 13.8z"
                    ></path>
                    <path
                      class="lineal-fill"
                      d="M497.8 53.3L256 236.4 14.2 53.3c0-21.6 17.5-39.1 39.1-39.1h405.4c21.6 0 39.1 17.5 39.1 39.1z"
                    ></path>
                    <path
                      class="lineal-stroke"
                      d="M256 250.6c-3.1 0-6.1-1-8.6-2.9L5.6 64.6C2.1 61.9 0 57.7 0 53.3 0 23.9 23.9 0 53.3 0h405.4C488.1 0 512 23.9 512 53.3c0 4.4-2.1 8.6-5.6 11.3L264.6 247.7c-2.5 1.9-5.5 2.9-8.6 2.9zM29.3 46.8L256 218.6 482.7 46.8c-2.9-10.9-12.8-18.4-24-18.4H53.3c-11.3.1-21.1 7.6-24 18.4zm454.2 348.7c-3.1 0-6.1-1-8.6-2.9l-99.6-75.4c-6.3-4.7-7.5-13.7-2.7-19.9 4.7-6.3 13.7-7.5 19.9-2.7l99.6 75.4c6.3 4.7 7.5 13.7 2.8 19.9-2.7 3.6-6.9 5.7-11.4 5.6zm-449-4.6c-7.9 0-14.2-6.4-14.2-14.2 0-4.5 2.1-8.7 5.6-11.4l93.5-70.8c6.3-4.7 15.2-3.5 19.9 2.7 4.7 6.3 3.5 15.2-2.7 19.9L43.1 388c-2.5 1.9-5.5 2.9-8.6 2.9z"
                    ></path>
                  </svg>
                  <h2 class="display-4 mb-3 pe-lg-10">
                    Start your journey with TechsoC.
                  </h2>
                  <p class="lead pe-lg-12 mb-0">
                    I bring rapid solutions to make the life of my clients
                    easier. Have any questions? Reach out to me from this
                    contact form and I will get back to you shortly.
                  </p>
                </div>
                <div class="col-lg-6">
                  <form
                    class="contact-form needs-validation"
                    // onSubmit={handleSubmit}
                    novalidate=""
                  >
                    <div class="messages"></div>

                    <div class="row gx-4">
                      <div class="col-md-6">
                        <div class="form-floating mb-4">
                          <input
                            id="name"
                            type="text"
                            name="name"
                            class="form-control border-0"
                            placeholder="Jane"
                            value={formData.name}
                            onChange={handleChange}
                            required="required"
                            data-error="First Name is required."
                          />
                          <label htmlFor="name">Name *</label>
                          <div class="valid-feedback"> Looks good! </div>
                          <div class="invalid-feedback">
                            {" "}
                            Please enter your name.{" "}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-floating mb-4">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            class="form-control border-0"
                            placeholder="jane.doe@example.com"
                            required="required"
                            value={formData.email}
                            onChange={handleChange}
                            data-error="Valid email is required."
                          />
                          <label htmlFor="email" className="form-label">Email *</label>
                          <div class="valid-feedback"> Looks good! </div>
                          <div class="invalid-feedback">
                            {" "}
                            Please provide a valid email address.{" "}
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-4">
                          <textarea
                            id="message"
                            name="message"
                            class="form-control border-0"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            style={{ height: "150px" }}
                            required="required"
                          ></textarea>
                          <label htmlFor="message" className="form-label">Message *</label>
                          <div class="valid-feedback"> Looks good! </div>
                          <div class="invalid-feedback">
                            {" "}
                            Please enter your messsage.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="input-group mb-4">
                          <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Qualification *"
                            name="qualification"
                            aria-label="Qualification *"
                            aria-describedby="qualification-dropdown"
                            required="required"
                            value={formData.qualification}
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="qualification-dropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bi bi-caret-down-fill"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectQual("Bachelor's Degree")
                                }
                              >
                                Bachelor's Degree
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectQual("Master's Degree")
                                }
                              >
                                Master's Degree
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectQual("PhD")}
                              >
                                PhD
                              </button>
                            </li>
                          </ul>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please select your qualification.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="input-group mb-4">
                          <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Experience *"
                            name="experience"
                            aria-label="Experience *"
                            aria-describedby="experience-dropdown"
                            required="required"
                            value={formData.experience}
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="experience-dropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bi bi-caret-down-fill"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() =>
                                  handleSelectExp("Less than 1 year")
                                }
                              >
                                Less than 1 year
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectExp("1-3 years")}
                              >
                                1-3 years
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectExp("3-5 years")}
                              >
                                3-5 years
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectExp("Above 5 years")}
                              >
                                Above 5 Years
                              </button>
                            </li>
                          </ul>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please select your experience.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="input-group mb-4">
                          <input
                            type="text"
                            className="form-control border-0"
                            placeholder="Choose Role *"
                            name="role"
                            aria-label="Choose Role*"
                            aria-describedby="role-dropdown"
                            required="required"
                            value={formData.role}
                            onChange={handleChange}
                          />
                          <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            id="role-dropdown"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bi bi-caret-down-fill"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectRole("RTL Engineer")}
                              >
                                RTL Engineer
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectRole("DV Engineer")}
                              >
                                DV Engineer
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectRole("DFT Engineer")}
                              >
                                DFT Engineer
                              </button>
                            </li>
                            <li>
                              <button
                                className="dropdown-item"
                                type="button"
                                onClick={() => handleSelectRole("PD Engineer")}
                              >
                                PD Engineer
                              </button>
                            </li>
                          </ul>
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            Please select your Role.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="file" className="form-label">
                          Attach File (.doc, .docx, .pdf):
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="file"
                          name="file"
                          accept=".doc, .docx, .pdf"
                          onChange={handleFileChange}
                        />
                      </div>
                      <div class="col-12">
                        <input
                          type="submit"
                          class="btn btn-primary rounded-pill btn-send mb-1 mt-3"
                          value="Send message"
                          onClick={handleSubmit}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isPopupVisible && <Popup onClose={closePopup} />}
    </>
  );
};

export default CarrerPage;
