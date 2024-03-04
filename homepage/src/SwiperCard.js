import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/pagination";
import "./SwiperCard.css";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";


import a from "./assets/a.png";
import b from "./assets/b.png";
import c from "./assets/c.png";
import f from "./assets/f.png";

export default function SwiperCard() {
  
  const variants2 = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Swiper
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={4}
        spaceBetween={5}
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
           
            initial={{ opacity: 0, y: 200 }}
            animate="visible"
            variants={variants2}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="item-inner card shadow-lg"
          >
            <div className="card-body p-4">
              <img
                className="rounded-circle w-6 mb-1 text-center"
                src={a}
                srcSet={a}
                alt=""
                style={{ width: "4rem" }}
              />
              <h4 className="mb-1">ASIC Technology</h4>
              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li>
                  <Icon icon="flat-color-icons:ok" />
                  Pre Silicon IP/Block/Subsystems/SoC Verification
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> Post Silicon Validation
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> System Verilog/UVM Based
                  Verification
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> Gate Level Simulation
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> SoC Integration
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> STA & Synthesis
                </li>
              </ul>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            
            initial={{ opacity: 0, y: 100 }}
            animate="visible"
            variants={variants2}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="item-inner card shadow-lg"
          >
            <div className="card-body p-4">
              <img
                className="rounded-circle w-10 mb-1 text-center"
                src={b}
                srcSet={b}
                alt=""
                style={{ width: "4rem" }}
              />
              <h4 className="mb-1">Emulation</h4>

              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li>
                  <Icon icon="flat-color-icons:ok" /> FPGA Prototyping
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> Processor-Based Emulation
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> RTL Design
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> Post Silicon Validation
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> System-Level Testing
                </li>
              </ul>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            
            initial={{ opacity: 0, y: 100 }}
            animate="visible"
            variants={variants2}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="item-inner card shadow-lg"
          >
            <div className="card-body p-4">
              <img
                className="rounded-circle w-10 mb-1 text-center"
                src={c}
                srcSet={c}
                alt=""
                style={{ width: "4rem" }}
              />
              <h4 className="mb-1">Physical Design</h4>

              <ul className="icon-list bullet-bg bullet-soft-primary mb-0">
                <li>
                  <Icon icon="flat-color-icons:ok" /> Schematic Design
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> PCB Layout Design
                </li>
              </ul>
            </div>
          </motion.div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            
            initial={{ opacity: 0, y: 100 }}
            animate="visible"
            variants={variants2}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="item-inner card shadow-lg"
          >
            <div className="card-body p-4">
              <img
                className="rounded-circle w-10 mb-1 text-center"
                src={f}
                srcSet={f}
                alt=""
                style={{ width: "4rem" }}
              />
              <h4 className="mb-1">DFT</h4>
              <ul className="icon-list bullet-bg bullet-soft-primary mb-5">
                <li>
                  <Icon icon="flat-color-icons:ok" /> Autosar (ASW / BSW)
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> Infotainment Applications
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> System Software
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> Testing
                </li>
                <li>
                  <Icon icon="flat-color-icons:ok" /> Cloud Integration
                </li>
              </ul>
            </div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
