import React, {useState} from "react";
import axios from "axios";


import { Icon } from "@iconify/react";
import { useInView } from "react-intersection-observer";
import "reactjs-popup/dist/index.css";

import HeadSection from "./HeadSection";
import contactUs from './assets/contact-us.jpg';



const ContactUs = () => {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    email: "",
    location:"",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "https://homepage-12.onrender.com/api/submitFormEnq",
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          location: formData.location,
          message: formData.message,
        }
      );
      console.log(
        "Form submitted successfully and also, ",
        response.data.message
      );
      
      // setIsPopupVisible(true);
      
      setFormData({
        firstname: "",
        lastname:"",
        email: "",
        location:"",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };



  const [ref7, inView7] = useInView({threshold:0.88});
  return (
    <>
      <section className="wrapper bg-soft-primary">
        <HeadSection
          header1="Contact Us"
          header2="Let's make something great together."
          imageUrl={contactUs}
        />
      </section>
      
      <div className="container pt-17 pb-14 pb-md-16 py-14 py-md-21">
        <div className="row">
          <div className="col-xl-12">
            <div className="row gy-10 gx-lg-8 gx-xl-12">
              <div className="col-lg-4">
                <div className="card bg-pale-primary text-center mt-md-10 mt-5">
                  <div
                    ref={ref7}
                    className={`card-body counter-wrapper text-center ${
                      inView7 ? "animate__animated animate__zoomIn" : ""
                    }`}
                  >
                    <div className="d-flex flex-row justify-content-center">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          {" "}
                          <Icon icon="openmoji:location-indicator-red" />
                        </div>
                      </div>
                      <div className="text-center">
                        <h5 className="mb-1 text-center">Registered Address</h5>
                        <address>
                          <strong>Techsoc Technologies Private Limited</strong>
                          <br />
                          Level 8, Ikeva, Tower 1, Umiya Business Bay,
                          <br />
                          Cessna Business Park, Marathalli, <br />
                          Bangalore 560037, India{" "}
                        </address>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        <Icon icon="flat-color-icons:cell-phone" />
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                      <h5 className="mb-1">Phone</h5>
                      <p>+91 80 67577879</p>
                    </div>

                    <div>
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        {" "}
                        <Icon icon="noto-v1:envelope" />{" "}
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">E-mail</h5>
                      <p className="mb-0">
                        <a
                          href="/cdn-cgi/l/email-protection#e98a86879d888a9da99d8c8a819a868a80878dc78a8684"
                          className="link-body"
                        >
                          <span className="__cf_email__">
                            <span
                              className="__cf_email__"
                              data-cfemail="ceada1a0baafadba8ebaabada6bda1ada7a0aae0ada1a3"
                            >
                              [email&#160;protected]
                            </span>
                          </span>
                        </a>
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-info text-center mt-md-10 mt-5">
                  <div
                    ref={ref7}
                    className={`card-body counter-wrapper text-center ${
                      inView7 ? "animate__animated animate__zoomIn" : ""
                    }`}
                  >
                    <div className="d-flex flex-row justify-content-center">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          {" "}
                          <Icon icon="openmoji:location-indicator-red" />
                        </div>
                      </div>
                      <div className="text-center">
                        <h5 className="mb-1 text-center">Registered Address</h5>
                        <address>
                          <strong>Techsoc Technologies Private Limited</strong>
                          <br />
                          Level 8, Ikeva, Tower 1, Umiya Business Bay,
                          <br />
                          Cessna Business Park, Marathalli, <br />
                          Bangalore 560037, India{" "}
                        </address>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        {" "}
                        <Icon icon="flat-color-icons:cell-phone" />
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                      <h5 className="mb-1">Phone</h5>
                      <p>+91 80 67577879</p>
                    </div>

                    <div>
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        {" "}
                        <Icon icon="noto-v1:envelope" />{" "}
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">E-mail</h5>
                      <p className="mb-0">
                        <a
                          href="/cdn-cgi/l/email-protection#e98a86879d888a9da99d8c8a819a868a80878dc78a8684"
                          className="link-body"
                        >
                          <span className="__cf_email__">
                            <span
                              className="__cf_email__"
                              data-cfemail="ceada1a0baafadba8ebaabada6bda1ada7a0aae0ada1a3"
                            >
                              [email&#160;protected]
                            </span>
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-success text-center mt-md-10 mt-5">
                  <div
                    ref={ref7}
                    className={`card-body counter-wrapper text-center ${
                      inView7 ? "animate__animated animate__zoomIn" : ""
                    }`}
                  >
                    <div className="d-flex flex-row justify-content-center">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          {" "}
                          <Icon icon="openmoji:location-indicator-red" />
                        </div>
                      </div>
                      <div className="text-center">
                        <h5 className="mb-1 text-center">Registered Address</h5>
                        <address>
                          <strong>Techsoc Technologies Private Limited</strong>
                          <br />
                          Level 8, Ikeva, Tower 1, Umiya Business Bay,
                          <br />
                          Cessna Business Park, Marathalli, <br />
                          Bangalore 560037, India{" "}
                        </address>
                      </div>
                    </div>

                    <div className="d-flex flex-row justify-content-center">
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        {" "}
                        <Icon icon="flat-color-icons:cell-phone" />
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                      <h5 className="mb-1">Phone</h5>
                      <p>+91 80 67577879</p>
                    </div>

                    <div>
                      <div className="icon text-primary fs-28 me-4 mt-n1">
                        {" "}
                        <Icon icon="noto-v1:envelope" />{" "}
                      </div>
                    </div>
                    <div>
                      <h5 className="mb-1">E-mail</h5>
                      <p className="mb-0">
                        <a
                          href="/cdn-cgi/l/email-protection#e98a86879d888a9da99d8c8a819a868a80878dc78a8684"
                          className="link-body"
                        >
                          <span className="__cf_email__">
                            <span
                              className="__cf_email__"
                              data-cfemail="ceada1a0baafadba8ebaabada6bda1ada7a0aae0ada1a3"
                            >
                              [email&#160;protected]
                            </span>
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card shadow-lg lift h-70 mt-5">
              <div class="card-body p-4 d-flex flex-row">
                <div className="col-lg-12">
                  <h1 class="display-1 fs-66 lh-xxs mb-4 text-center">
                    Feel Free To Contact with Us
                  </h1>
                  <form
                    className="contact-form needs-validation"
                    novalidate=""
                  >
                    <div className="messages"></div>
                    <div className="row gx-4">
                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            id="firstname"
                            type="text"
                            name="firstname"
                            className="form-control"
                            placeholder="Jane"
                            value={formData.firstname}
                            onChange={handleChange}
                            required="required"
                            data-error="First Name is required."
                          />
                          <label htmlFor="form_name">First Name *</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            Please enter your first name.
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            id="lastname"
                            type="text"
                            name="lastname"
                            className="form-control"
                            placeholder="Doe"
                            value={formData.lastname}
                            onChange={handleChange}
                            required="required"
                            data-error="Last Name is required."
                          />
                          <label htmlFor="lastname">Last Name *</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            {" "}
                            Please enter your last name.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            id="email"
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="jane.doe@example.com"
                            required="required"
                            value={formData.email}
                            onChange={handleChange}
                            data-error="Valid email is required."
                          />
                          <label htmlFor="email">Email *</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            {" "}
                            Please provide a valid email address.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-4">
                          <input
                            id="location"
                            type="text"
                            name="location"
                            className="form-control"
                            placeholder="Banglore, India"
                            required="required"
                            value={formData.location}
                            onChange={handleChange}
                            data-error="Valid Location is required."
                          />
                          <label htmlFor="location">Location</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            {" "}
                            Please provide a Location.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating mb-4">
                          <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            placeholder="Your message"
                            style={{ height: "150px" }}
                            required="required"
                            value={formData.message}
                            onChange={handleChange}
                            data-error="Valid message is required."
                          ></textarea>
                          <label htmlFor="message">Message *</label>
                          <div className="valid-feedback"> Looks good! </div>
                          <div className="invalid-feedback">
                            {" "}
                            Please enter your messsage.{" "}
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="invalidCheck"
                            required=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="invalidCheck"
                          >
                            {" "}
                            I agree to{" "}
                            <a href="#" className="hover">
                              terms and policy
                            </a>
                            .{" "}
                          </label>
                          <div className="invalid-feedback">
                            {" "}
                            You must agree before submitting.{" "}
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <input
                          type="submit"
                          className="btn btn-primary rounded-pill btn-send mb-3"
                          value="Send message"
                          onClick={handleSubmit}
                        />
                        <p className="text-muted">
                          <strong>*</strong> These fields are required.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="wrapper bg-light">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.77339336323!2d77.69257226038711!3d12.936216579802977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae138b9eccf59d%3A0x4c6ee0f2f607ba56!2sCessna%20Business%20Park!5e0!3m2!1sen!2sin!4v1649057860224!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
