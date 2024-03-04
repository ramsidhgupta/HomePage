import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import "./HomeSixth.css";
import { Link } from "react-router-dom";
import case2 from './assets/case2.jpg';
import case1 from './assets/case1.jpg';
import case3 from './assets/case3.jpg';
import case4 from './assets/case4.jpg';




const HomeSixth = () => {
  
  const variants2 = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };




  return (
    <>
      <section class="wrapper-border bg-light angled upper-end">
        <div class="container py-10 py-md-12">
          <div class="row" data-cue="slideInUp">
            <div class="col-lg-9 col-xl-8 col-xxl-7">
              <h2 class="fs-16 text-uppercase text-line text-black-50 mb-3">
                Our Offerings
              </h2>
              <h3 class="display-4 mb-9">Our range of services includes</h3>
            </div>
          </div>
          <Swiper
            slidesPerView={4}
            spaceBetween={5}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <motion.div
               
                initial={{ opacity: 0, y: 100 }}
                animate= "visible"
                variants={variants2}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="swiper-slide swiper-slide-active slide "
              >
                <article>
                  <figure class="overlay overlay-1 hover-scale rounded mb-6 works-images">
                    <Link to="SemiCondEngin">
                      <img
                        src={case1}
                        alt=""
                      />
                      <span class="bg"></span>
                    </Link>
                    <figcaption>
                      <h5 class="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div class="post-header">
                    <h2 class="post-title h3 mb-3">
                      <a
                        class="link-dark"
                        href="#"
                        style={{ textDecoration: "none" }}
                      >
                        Design and Verification Services
                      </a>
                    </h2>
                  </div>
                </article>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                
                initial={{ opacity: 0, y: 100 }}
                animate="visible"
                variants={variants2}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="swiper-slide swiper-slide-active slide"
              >
                <article>
                  <figure class="overlay overlay-1 hover-scale rounded mb-6 works-images">
                    <Link to="SemiCondEngin">
                      <img
                        src={case3}
                        alt=""
                      />
                      <span class="bg"></span>
                    </Link>
                    <figcaption>
                      <h5 class="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div class="post-header">
                    <h2 class="post-title h3 mb-3">
                      <a
                        class="link-dark"
                        href="#"
                        style={{ textDecoration: "none" }}
                      >
                        Physical Design and DFT Services
                      </a>
                    </h2>
                  </div>
                </article>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                
                initial={{ opacity: 0, y: 100 }}
                animate="visible"
                variants={variants2}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="swiper-slide swiper-slide-active slide"
              >
                <article>
                  <figure class="overlay overlay-1 hover-scale rounded mb-6 works-images">
                    <Link to="SemiCondEngin">
                      <img
                        src={case2}
                        alt=""
                      />
                      <span class="bg"></span>
                    </Link>
                    <figcaption>
                      <h5 class="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div class="post-header">
                    <h2 class="post-title h3 mb-3">
                      <a
                        class="link-dark"
                        href="#"
                        style={{ textDecoration: "none" }}
                      >
                        Emulation
                      </a>
                    </h2>
                  </div>
                </article>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
               
                initial={{ opacity: 0, y: 100 }}
                animate="visible"
                variants={variants2}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="swiper-slide swiper-slide-active slide"
              >
                <article>
                  <figure class="overlay overlay-1 hover-scale rounded mb-6 works-images">
                    <Link to="SemiCondEngin">
                      <img
                        src={case4}
                        alt=""
                      />
                      <span class="bg"></span>
                    </Link>
                    <figcaption>
                      <h5 class="from-top mb-0">Read More</h5>
                    </figcaption>
                  </figure>
                  <div class="post-header">
                    <h2 class="post-title h3 mb-3">
                      <a
                        class="link-dark"
                        href="#"
                        style={{ textDecoration: "none" }}
                      >
                        ASIC RTL, STA & Synthesis
                      </a>
                    </h2>
                  </div>
                </article>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomeSixth;


 