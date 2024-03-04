import React, { useRef } from "react";
import "./PhotoShow.css";
import award1 from "./assets/award1.jpeg";
import award2 from "./assets/award2.jpeg";
import award3 from "./assets/award3.jpeg";
import award4 from "./assets/award4.jpeg";
import award5 from "./assets/award5.jpeg";
import award6 from "./assets/award6.jpeg";

const PhotoShow1 = () => {
  const slideRef = useRef(null);
  const nextSlide = () => {
    const items = slideRef.current.querySelectorAll(".itemPhoto");
    slideRef.current.appendChild(items[0]);
  };
  const prevSlide = () => {
    const items = slideRef.current.querySelectorAll(".itemPhoto");
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    <div className="app-container mt-3 pt-5">
      <div className="containerPhoto">
        <div className="slidePhoto" ref={slideRef}>
          <div
            className="itemPhoto"
            style={{ backgroundImage: `url(${award1})` }}
          >
            <div className="contentPhoto">
              <div className="name">award Name 1</div>
              <div className="desc">About award Details</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="itemPhoto"
            style={{ backgroundImage: `url(${award2})` }}
          >
            <div className="contentPhoto">
              <div className="name">award Name 2</div>
              <div className="desc">About award Details</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="itemPhoto"
            style={{ backgroundImage: `url(${award3})` }}
          >
            <div className="contentPhoto">
              <div className="name">award Name 3</div>
              <div className="desc">About award Details</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="itemPhoto"
            style={{ backgroundImage: `url(${award4})` }}
          >
            <div className="contentPhoto">
              <div className="name">award Name 4</div>
              <div className="desc">About award Details</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="itemPhoto"
            style={{ backgroundImage: `url(${award5})` }}
          >
            <div className="contentPhoto">
              <div className="name">award Name 5</div>
              <div className="desc">About award Details</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="itemPhoto"
            style={{ backgroundImage: `url(${award6})` }}
          >
            <div className="contentPhoto">
              <div className="name">award Name 6</div>
              <div className="desc">About award Details</div>
              <button>See More</button>
            </div>
          </div>
        </div>
        <div className="buttonPhoto">
          <button className="prev" onClick={prevSlide}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoShow1;
