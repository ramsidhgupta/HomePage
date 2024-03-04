import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icon } from "@iconify/react";
import HeadSection from "./HeadSection";
import aboutUs from './assets/about-us.jpg'

const AboutUs = () => {
  const [ref, inView] = useInView();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };
  const variants1 = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: -150 },
  };
  const variants2 = {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 1, x: 200 },
  };
  const variants3 = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 50 },
  };
  const variants4 = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: -100 },
  };
  const variants5 = {
    hidden: { opacity: 1, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <>
    <section className="wrapper bg-soft-primary">
      <HeadSection
          header1="About Us"
          header2="A company turning ideas into beautiful things."
          imageUrl={aboutUs}
        />
      </section>
      <div className="container pt-14 pb-8 pt-md-16 pb-md-10">
        <div className="row gx-lg-8 gx-xl-12 gy-10  align-items-center">
          <div className="col-lg-7 order-lg-2">
            <div className="row gx-md-5 gy-5">
              <motion.div
                className="col-md-5 offset-md-1 align-self-end"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 1 }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    backgroundColor: "#fef3e4",
                    margin: "10px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="div">
                      MISSION
                    </Typography>
                    <Typography variant="body2">
                      To offer worldwide types of assistance across businesses
                      in a fair and entrusted way and construct a relationship
                      with all partners while developing with development.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="col-md-6 align-self-end"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants2}
                transition={{ duration: 1 }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    backgroundColor: "#fae6e7",
                    margin: "10px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="div">
                      VISION
                    </Typography>
                    <Typography variant="body2">
                      To be the most respected and confided in organization
                      universally that gives top tier business arrangements
                      utilizing the most recent advancements.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="col-md-5"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants3}
                transition={{ duration: 1 }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    backgroundColor: "#eaf3ef",
                    margin: "10px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="div">
                      VALUES
                    </Typography>
                    <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                    <li><Icon icon="flat-color-icons:ok" /> Integrity</li>
                    <li><Icon icon="flat-color-icons:ok" /> Trustworthiness</li>
                    <li><Icon icon="flat-color-icons:ok" /> Fair practices</li>
                    <li><Icon icon="flat-color-icons:ok" /> Accountability</li>
                    <li><Icon icon="flat-color-icons:ok" /> Quality Orientation</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className="col-md-6 align-self-start"
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants4}
                transition={{ duration: 1 }}
              >
                <Card
                  sx={{
                    minWidth: 275,
                    backgroundColor: "#e0e9fa",
                    margin: "10px",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="div">
                      PHILOSOPHY
                    </Typography>
                    <Typography variant="body2">
                      The business reasoning of TechsoC is to lay accentuation
                      on Human Values and Personal Relations.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          <div className="col-lg-5">
            <h3 className="display-5 mb-5">
              We provide industry solutions to our customer through our
              dedicated development.
            </h3>
            <p className="lead">
              TechsoC is a plan driven Digital Experience, Product Innovation,
              Solutions, and Consulting contributions pioneer. From procedure,
              to plan, execution and the executives we assist with speeding up
              development and change organizations.
            </p>
            <p className="lead">
              Deeply, it is resolved to empower enormous Enterprises, SMBs and
              new businesses to change. TechsoC gets upper hand, development and
              new viewpoints to business and innovation challenges. We are a
              skilled labor force offering a multicultural working environment
              and a cooperative information climate.
            </p>
            <p className="lead">
              TechsoC is settled in the Silicon city, enabling us to use driving
              edge business and advances to help our worldwide clients.
            </p>
          </div>
        </div>
        <hr className="double my-8" />
        <div
          className="row gx-lg-8 gx-xl-12 gt-6 gy-md-0 mt-15 text-center"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="col-md-6 col-lg-4"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants5}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 30 409.6 362.5"
              className="svg-inject icon-svg icon-svg-md text-blue mb-3"
            >
              <path
                className="lineal-stroke"
                d="M343.4 302.9L61 302.5c-25.3-.2-47.5-16.8-54.8-40.9l-3.9-12.9c-7.1-24.2 2.5-50.3 23.5-64.2L262.1 29.8c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.3 249.8c2.4 6.4-.9 13.5-7.3 15.8-1.3.5-2.8.7-4.2.7zM261.8 59.4L39.3 205c-12 7.9-17.4 22.8-13.4 36.6l3.8 12.9c4.2 13.8 16.8 23.3 31.2 23.4l265.8.4-64.9-218.9z"
              ></path>
              <path
                className="lineal-stroke"
                d="M138 362.5c-40.4 0-72.8-31.1-73.6-70.8 0-6.8 5.5-12.3 12.3-12.3 6.6 0 12.1 5.2 12.3 11.8.6 26.2 22.1 46.7 49 46.7 14.2 0 27.7-6.2 37-16.9 4.5-5.1 12.2-5.7 17.4-1.2 5.1 4.5 5.7 12.2 1.2 17.4-14 16.1-34.3 25.3-55.6 25.3z"
              ></path>
              <path
                className="lineal-fill"
                d="M183.4 96l57.8 194.5 102.1.1-74.5-250.5L183.4 96z"
              ></path>
              <path
                className="lineal-stroke"
                d="M343.4 302.9l-102.1-.1c-5.4 0-10.2-3.6-11.8-8.8L171.6 99.5c-1.6-5.2.5-10.8 5.1-13.8l85.4-55.9c5.7-3.7 13.3-2.1 17 3.6.7 1 1.2 2.1 1.5 3.2l74.5 250.6c1.9 6.5-1.8 13.4-8.3 15.3-1.1.2-2.3.4-3.4.4zm-92.9-24.7l76.4.1-65.1-218.9-63.9 41.8 52.6 177z"
              ></path>
              <path
                className="lineal-stroke"
                d="M351.8 330.6c-5.4 0-10.2-3.6-11.8-8.8l-91-306c-2.1-6.5 1.3-13.4 7.8-15.6 6.5-2.1 13.4 1.3 15.6 7.8.1.3.2.5.2.8l91 305.9c1.9 6.5-1.8 13.4-8.3 15.3-1.1.4-2.3.6-3.5.6zM338 91.7c-6.8 0-12.3-5.5-12.3-12.3 0-1.8.4-3.6 1.2-5.3l13.4-28.5c2.9-6.2 10.2-8.8 16.4-5.9 6.2 2.9 8.8 10.2 5.9 16.4l-13.4 28.5c-2.1 4.3-6.4 7.1-11.2 7.1zm28.2 64.9c-6.8 0-12.3-5.5-12.3-12.3 0-5.7 3.9-10.6 9.4-12l31.1-7.5c6.6-1.5 13.2 2.6 14.7 9.3 1.5 6.5-2.5 13-9 14.7l-31.2 7.4c-.8.3-1.8.4-2.7.4zm29.1 90c-2.7 0-5.4-.9-7.5-2.6l-24.9-19.4c-5.4-4.2-6.3-11.9-2.2-17.3s11.9-6.3 17.3-2.2l24.9 19.4c5.4 4.2 6.3 11.9 2.1 17.3-2.3 3-5.9 4.7-9.7 4.8z"
              ></path>
            </svg>
            <h4>Customer Focus</h4>
            <p className="mb-2">
              Focused on addressing client challenges and giving economical
              business and innovation benefits
            </p>
          </motion.div>
          <motion.div
            className="col-md-6 col-lg-4"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants5}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="20 90 709.6 362.5"
              className="svg-inject icon-svg icon-svg-md text-green mb-3"
            >
              <circle
                className="lineal-fill"
                cx="283.8"
                cy="283.8"
                r="143"
              ></circle>
              <path
                className="lineal-stroke"
                d="M283.8 441.8c-87.1 0-158-70.9-158-158s70.9-158 158-158 158 70.9 158 158-70.9 158-158 158zm0-286.1c-70.7 0-128.1 57.3-128.1 128.1S213 411.9 283.8 411.9s128.1-57.3 128.1-128.1c-.1-70.7-57.4-128-128.1-128.1z"
              ></path>
              <path
                className="lineal-fill"
                d="M283.8 210.5c40.5 0 73.3 32.8 73.3 73.3s-32.8 73.3-73.3 73.3-73.3-32.8-73.3-73.3"
              ></path>
              <path
                className="lineal-stroke"
                d="M283.8 372.1c-48.7-.1-88.2-39.5-88.2-88.3.2-8.2 7.1-14.8 15.3-14.5 7.9.2 14.3 6.6 14.5 14.5 0 32.2 26.1 58.4 58.4 58.4s58.4-26.1 58.4-58.4-26.1-58.4-58.4-58.4c-8.2-.2-14.8-7.1-14.5-15.3.2-7.9 6.6-14.3 14.5-14.5 48.7-.5 88.7 38.6 89.2 87.3s-38.6 88.7-87.3 89.2h-1.9z"
              ></path>
              <path
                className="lineal-fill"
                d="M107.9 55.1l-5.3 47.5-47.5 5.3-40.2-40.1 52.9-52.9z"
              ></path>
              <path
                className="lineal-stroke"
                d="M283.8 55.7c-55.3 0-108.8 20.1-150.4 56.7l-15.2-15.2 4.5-40.4c.5-4.5-1.1-9-4.3-12.2L78.3 4.4c-5.8-5.8-15.3-5.8-21.1 0L4.4 57.2c-5.8 5.8-5.8 15.3 0 21.1l40.1 40.1c2.8 2.8 6.6 4.4 10.6 4.4.5 0 1.1 0 1.6-.1l40.4-4.5 15.2 15.2c-36.6 41.5-56.7 95-56.7 150.4C55.7 409.6 158 512 283.8 512c66.2 0 129.1-28.7 172.4-78.7 5.6-6.1 5.1-15.6-1-21.1s-15.6-5.1-21.1 1l-.5.5c-37.7 43.4-92.3 68.4-149.8 68.4-109.3 0-198.3-89-198.3-198.3 0-47.4 17-93.3 48-129.2l140.2 140.2c5.8 5.8 15.3 5.8 21.1 0s5.8-15.3 0-21.1L154.6 133.5c35.9-31 81.8-48 129.2-48 109.4 0 198.3 89 198.3 198.3 0 8.3 6.7 14.9 14.9 14.9s14.9-6.7 14.9-14.9C512 158 409.6 55.7 283.8 55.7zM36.1 67.8l31.7-31.7 24.5 24.5-3.2 28.5-28.5 3.2-24.5-24.5z"
              ></path>
            </svg>
            <h4>Passion and Commitment</h4>
            <p className="mb-2">
              Creating adaptable, future-confirmation business arrangements that
              assist clients with pushing forward.
            </p>
          </motion.div>

          <motion.div
            className="col-md-6 col-lg-4"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants5}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="20 5 609.6 382.5"
              className="svg-inject icon-svg icon-svg-md text-yellow mb-3"
            >
              <path
                className="lineal-fill"
                d="M186.9 353.4h138.3V413H186.9z"
              ></path>
              <path
                className="lineal-stroke"
                d="M460.2 0H51.8C23.2 0 0 23.2 0 51.7v264.4c0 28.6 23.2 51.7 51.8 51.8h120.6v30.7h-28.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h224.9c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5h-28.8v-41.9c.3-1.2.4-2.4.4-3.6-.2-8-6.9-14.3-14.8-14.1H51.8C39.2 339 29 328.8 29 316.2V51.7c0-12.6 10.2-22.8 22.8-22.8h408.5c12.6 0 22.8 10.2 22.8 22.8v264.4c0 12.6-10.2 22.8-22.8 22.8h-46.7c-8 .2-14.3 6.9-14.1 14.8.2 8 6.9 14.3 14.8 14.1h45.9c28.6 0 51.7-23.2 51.8-51.7V51.7C512 23.2 488.8 0 460.2 0zM310.7 367.9v30.7H201.3v-30.7h109.4z"
              ></path>
              <path
                className="lineal-fill"
                d="M220.1 271.6c-12.7-19.8-6.9-46.3 12.9-59s46.3-6.9 59 12.9c9 14 9 32 0 46.1h100.6v-50.3l-30.4-4.9c-4.9-16.3-13.6-31.3-25.3-43.7l11-28.7-47.3-27.3-19.4 23.8c-16.6-3.9-33.9-3.9-50.5 0l-19.4-23.8-47.2 27.3 11 28.7c-11.7 12.4-20.3 27.4-25.3 43.7l-30.3 4.9v50.3h100.6z"
              ></path>
              <path
                className="lineal-stroke"
                d="M392.5 286.1H291.9c-8 0-14.5-6.5-14.5-14.5 0-2.8.8-5.5 2.3-7.8 8.4-13.1 4.6-30.6-8.6-39-13.1-8.4-30.6-4.6-39 8.6-5.9 9.3-5.9 21.1 0 30.4 4.3 6.7 2.4 15.7-4.3 20-2.3 1.5-5.1 2.3-7.8 2.3H119.4c-8 0-14.5-6.5-14.4-14.5v-50.3c0-7.1 5.2-13.1 12.2-14.3l21.8-3.5c4.7-12.2 11.3-23.6 19.5-33.7l-7.9-20.6c-2.5-6.6.1-14.1 6.3-17.7l47.3-27.3c6.2-3.5 14-2.1 18.5 3.4l13.9 17.1c12.9-2 26.1-2 39 0l13.9-17.1c4.5-5.5 12.3-7 18.5-3.4l47.3 27.3c6.2 3.6 8.8 11.1 6.3 17.7l-7.9 20.6c8.2 10.2 14.7 21.5 19.4 33.7l21.8 3.5c7 1.1 12.2 7.2 12.2 14.3v50.3c-.1 8-6.6 14.5-14.6 14.5zm-80-29h65.6v-23.5l-18.2-2.9c-5.5-.9-10-4.8-11.6-10.1-4.3-14.2-11.9-27.2-22-38-3.8-4-5-9.9-3-15.1l6.6-17.2-25.9-15-11.6 14.3c-3.5 4.3-9.1 6.2-14.5 5-14.5-3.3-29.5-3.3-43.9 0-5.4 1.2-11-.7-14.5-5l-11.6-14.3-25.9 15 6.6 17.2c2 5.2.8 11-3 15.1-10.1 10.8-17.7 23.8-22 38-1.6 5.3-6.1 9.2-11.6 10.1l-18.2 2.9v23.5h65.6c-.4-2.8-.6-5.7-.6-8.6.4-31.6 26.3-56.8 57.9-56.4 31 .4 56 25.4 56.4 56.4 0 2.9-.2 5.8-.6 8.6z"
              ></path>
            </svg>
            <h4>Transparency</h4>
            <p className="mb-2">
              Building a consistent channel for data trade among clients and us.
            </p>
          </motion.div>
        </div>
      </div>
      <hr className="double my-8" />
      </>
    
  );
};

export default AboutUs;
