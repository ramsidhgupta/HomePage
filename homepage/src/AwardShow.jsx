import React, { useRef } from "react";
import "./AwardShow.css";
import award1 from "./assets/award1.jpeg";
import award2 from "./assets/award2.jpeg";
import award3 from "./assets/award3.jpeg";
import award4 from "./assets/award4.jpeg";
import award5 from "./assets/award5.jpg";
import award6 from "./assets/award6.jpeg";

const AwardShow = () => {
  const slideRef = useRef(null);
  const nextSlide = () => {
    const items = slideRef.current.querySelectorAll(".itemPhoto2");
    slideRef.current.appendChild(items[0]);
  };
  const prevSlide = () => {
    const items = slideRef.current.querySelectorAll(".itemPhoto2");
    slideRef.current.prepend(items[items.length - 1]);
  };

  return (
    <div className="container mt-3 pt-5">
      <div class="row">
        <div class="col-md-12">
          <div className="containerPhoto2">
            <div className="slidePhoto2" ref={slideRef}>
              <div
                className="itemPhoto2"
                style={{
                  backgroundImage: `url(${award1})`, objectFit:'cover', display:'flex', justifyContent:'space-between'
                }}
              >
                <div className="contentPhoto2" style={{objectFit:'cover', display:'flex', justifyContent:'space-between'}}>
                  <div className="name">Event Name 1</div>
                  <div className="desc">About Event Details</div>
                  <button>See More</button>
                </div>
              </div>
              <div
                className="itemPhoto2"
                style={{
                  backgroundImage: `url(${award2})`,
                }}
              >
                <div className="contentPhoto2">
                  <div className="name">Event Name 2</div>
                  <div className="desc">About Event Details</div>
                  <button>See More</button>
                </div>
              </div>
              <div
                className="itemPhoto2"
                style={{
                  backgroundImage: `url(${award3})`,
                }}
              >
                <div className="contentPhoto2">
                  <div className="name">Event Name 3</div>
                  <div className="desc">About Event Details</div>
                  <button>See More</button>
                </div>
              </div>
              <div
                className="itemPhoto2"
                style={{
                  backgroundImage: `url(${award4})`,
                }}
              >
                <div className="contentPhoto2">
                  <div className="name">Event Name 4</div>
                  <div className="desc">About Event Details</div>
                  <button>See More</button>
                </div>
              </div>
              <div
                className="itemPhoto2"
                style={{
                  backgroundImage: `url(${award5})`,
                }}
              >
                <div className="contentPhoto2">
                  <div className="name">Event Name 5</div>
                  <div className="desc">About Event Details</div>
                  <button>See More</button>
                </div>
              </div>
              <div
                className="itemPhoto2"
                style={{
                  backgroundImage: `url(${award6})`,
                }}
              >
                <div className="contentPhoto2">
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
      </div>
    </div>
  );
};

export default AwardShow;
