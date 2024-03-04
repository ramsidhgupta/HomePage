import React from "react";
import { Link } from 'react-router-dom';
import "./ImageSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";


import ThreedCard from "./ThreedCard";


const ImageSlider = ({ images, titles, descriptions, links }) => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={5}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 3,
          depth: 300,
          modifier: 3.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Link to={links[index]}>
              <ThreedCard
                backgroundImages={image}
                title={titles[index]}
                desc={descriptions[index]}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
   </div>
  );
};

export default ImageSlider;

