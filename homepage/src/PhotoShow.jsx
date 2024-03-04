import React, { useRef } from "react";
import "./PhotoShow.css";
import event1 from "./assets/event1.jpg";
import event2 from "./assets/event2.jpeg";
import event3 from "./assets/event3.jpg";
import event4 from "./assets/event4.jpeg";
import event5 from "./assets/event5.jpeg";
import event6 from "./assets/event6.jpeg";

const PhotoShow = () => {
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
            style={{ backgroundImage: `url(${event1})` }}
          >
            <div className="contentPhoto">
              <div className="name">Event Name 1</div>
              <div className="desc">About Event Details</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="itemPhoto"
            style={{ backgroundImage: `url(${event2})` }}
          >
            <div className="contentPhoto">
              <div className="name">Event Name 2</div>
              <div className="desc">About Event Details</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="itemPhoto"
            style={{ backgroundImage: `url(${event3})` }}
          >
            <div className="contentPhoto">
              <div className="name">Event Name 3</div>
              <div className="desc">About Event Details</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="itemPhoto"
            style={{ backgroundImage: `url(${event4})` }}
          >
            <div className="contentPhoto">
              <div className="name">Event Name 4</div>
              <div className="desc">About Event Details</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="itemPhoto"
            style={{ backgroundImage: `url(${event5})` }}
          >
            <div className="contentPhoto">
              <div className="name">Event Name 5</div>
              <div className="desc">About Event Details</div>
              <button>See More</button>
            </div>
          </div>
          <div
            className="itemPhoto"
            style={{ backgroundImage: `url(${event6})` }}
          >
            <div className="contentPhoto">
              <div className="name">Event Name 6</div>
              <div className="desc">About Event Details</div>
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

export default PhotoShow;
