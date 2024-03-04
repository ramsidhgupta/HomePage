import React, { useState } from "react";
import "./HomeFirst.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { useInView } from "react-intersection-observer";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.jpg";
import { easeInOut, motion } from "framer-motion";

const CarouselCopy = () => {
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const variants2 = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };
  const variants1 = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Swiper
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      slidesPerView={1}
      spaceBetween={5}
      breakpoints={{
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="position-relative">
          <img className="image-car" src={banner1} alt="Banner 1" />
          <div className="position-absolute w-100 top-50 start-50 translate-middle text-center">
            <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5">
              <motion.h2
                ref={ref5}
                initial={{ opacity: 0, y: -200 }}
                animate={inView5 ? "visible" : "hidden"}
                variants={variants3}
                transition={{ duration: 0.8, delay: 0.2, ease: easeInOut }}
                className="Heading-1 display-1 fs-56 mb-10 ps-5 text-white fw-bold "
              >
                Everything under one Roof{" "}
              </motion.h2>
              <motion.p
                ref={ref5}
                initial={{ opacity: 0, x: -200 }}
                animate={inView5 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.9, delay: 0.3, ease: easeInOut }}
                className="Paragraph-1 lead fs-23 lh-sm mb-10 ps-4 text-white fw-bold "
              >
                We offer great END to End services for VLSI Design &
                Verification.
              </motion.p>
              <motion.div
                ref={ref5}
                initial={{ opacity: 0, y: 200 }}
                animate={inView5 ? "visible" : "hidden"}
                variants={variants2}
                transition={{ duration: 1, delay: 0.4, ease: easeInOut }}
                className=""
              >
                <Link
                  to="TurnKeyServices"
                  className="Button-1 btn btn-lg btn-primary btn-outline-white rounded-pill text-white"
                >
                  Read More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-content position-relative">
          <img className="image-car" src={banner2} alt="Banner 2" />
          <div className="position-absolute w-100 top-50 start-50 translate-middle text-center">
            <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5">
              <motion.h2
                ref={ref6}
                initial={{ opacity: 0, y: -200 }}
                animate={inView6 ? "visible" : "hidden"}
                variants={variants3}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="Heading-1 display-1 fs-56 mb-10 ps-5 text-white fw-bold "
              >
                Semiconductor Engineering R&D
              </motion.h2>
              <motion.p
                ref={ref6}
                initial={{ opacity: 0, x: -200 }}
                animate={inView6 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="Paragraph-1 lead fs-23 lh-sm mb-10 ps-4 text-white fw-bold "
              >
                Our end to end semiconductor offerings includes ASIC Design,
                Verification, Emulation, Physical Design, STA & Synthesis, DFT
              </motion.p>
              <motion.div
                ref={ref6}
                initial={{ opacity: 0, y: 200 }}
                animate={inView6 ? "visible" : "hidden"}
                variants={variants2}
                transition={{ duration: 1, delay: 0.4 }}
                className=""
              >
                <Link
                  to="SemiCondEngin"
                  className="Button-1 btn btn-lg btn-primary btn-outline-white rounded-pill text-white"
                >
                  Read More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-content position-relative">
          <img className="image-car" src={banner3} alt="Banner 3" />
          <div className="position-absolute w-100 top-50 start-50 translate-middle text-center">
            <div className="col-md-10 offset-md-1 col-lg-7 offset-lg-0 col-xl-6 col-xxl-5">
              <motion.h2
                ref={ref7}
                initial={{ opacity: 0, y: -200 }}
                animate={inView7 ? "visible" : "hidden"}
                variants={variants3}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="Heading-1 display-1 fs-56 mb-10 ps-5 text-white fw-bold "
              >
                5G TECHNOLOGY
              </motion.h2>
              <motion.p
                ref={ref7}
                initial={{ opacity: 0, x: -200 }}
                animate={inView7 ? "visible" : "hidden"}
                variants={variants1}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="Paragraph-1 lead fs-23 lh-sm mb-10 ps-4 text-white fw-bold "
              >
                Pool of programming and equipment specialists in 5G innovation.
              </motion.p>
              <motion.div
                ref={ref7}
                initial={{ opacity: 0, y: 200 }}
                animate={inView7 ? "visible" : "hidden"}
                variants={variants2}
                transition={{ duration: 1, delay: 0.4 }}
                className=""
              >
                <Link
                  to="FiveGTech"
                  className="Button-1 btn btn-lg btn-primary btn-outline-white rounded-pill text-white"
                >
                  Read More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselCopy;
