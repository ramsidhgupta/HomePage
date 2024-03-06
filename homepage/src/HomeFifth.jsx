import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./HomeFifth.css";
import { Icon } from "@iconify/react";


const HomeFifth = () => {
  const [ref, inView] = useInView();
  return (
    <section class="wrapper-border bg-light">
      <div class="container py-10 py-md-12">
        <div class="row" data-cue="slideInUp">
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
            <h3 class="display-4 mb-6 px-xl-10 px-xxl-15">
              What our Clients say about us...
            </h3>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          autoplay={{ delay: 5000 }}
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
            <div className="item-inner">
              <div ref={ref} className={`card ${inView ? "slideInUp1" : ""}`}>
                <div className="card-body p-4 shadow">
                  <span class="ratings five mb-3">
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  </span>
                  <blockquote class="icon mb-0">
                    <p>
                      “Huge ascent in usefulness from TechsoC group was huge,
                      which has assisted us with accomplishing our designated
                      objectives. I thank you for being patient and zeroing in
                      on the objective that made the biggest difference. I'm
                      happy that we made such a decent group.”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-inner">
              <div ref={ref} className={`card ${inView ? "slideInUp2" : ""}`}>
                <div className="card-body p-4 shadow">
                <span class="ratings five mb-3">
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  </span>
                  <blockquote class="icon mb-0">
                    <p>
                      “The time and exertion by TechsoC group is simply
                      astonishing. They persuade others as well as push them to
                      do their absolute best working. TechsoC association is so
                      honored to have this sort of groups.”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-inner">
              <div ref={ref} className={`card ${inView ? "slideInUp3" : ""}`}>
                <div className="card-body p-4 shadow">
                <span class="ratings five mb-3">
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  </span>
                  <blockquote class="icon mb-0">
                    <p>
                      “On account of TechsoC we can tape-out. I can't applaud
                      the TechsoC group enough. They are actually excellent, and
                      coarseness wise they are LIONS. It isn't not difficult to
                      Build HBMPHY 2E. It is actually more or less testing.”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-inner">
              <div ref={ref} className={`card ${inView ? "slideInUp4" : ""}`}>
                <div className="card-body p-4 shadow">
                <span class="ratings five mb-3">
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  </span>
                  <blockquote class="icon mb-0">
                    <p>
                      “Much appreciated, your committed group commitment in
                      creating check climate for PCIe items.”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item-inner">
              <div ref={ref} className={`card ${inView ? "slideInUp4" : ""}`}>
                <div className="card-body p-4 shadow">
                <span class="ratings five mb-3">
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  <Icon icon="openmoji:star" />
                  </span>
                  <blockquote class="icon mb-0">
                    <p>
                      “Quality is generally there. Top of the game regarding
                      expectations.”
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeFifth;
