import React, { useEffect, useRef } from "react";
import "./ThreedCard.css";

const ThreedCard = ({ backgroundImages, title, desc }) => {
  const backgroundRef = useRef();

  useEffect(() => {
   
    backgroundRef.current.style.background = `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${backgroundImages})`;
    backgroundRef.current.style.height = "100%";
    backgroundRef.current.style.width = "100%";
    backgroundRef.current.style.backgroundSize = "130% 100%";
    backgroundRef.current.style.backgroundPosition = "center";
    backgroundRef.current.style.borderRadius = "20px";
    backgroundRef.current.style.transformStyle ="preserve-3d";
    backgroundRef.current.style.transition = "transform .6s cubic-bezier(.4,.2,.2,1), transform-style 2s"; 
  }, [backgroundImages]);

  return (
    <div className="center1">
      <div ref={backgroundRef} className="front-face">
        <div className="contents1 front">
          <p className=""> {title}</p>
          <span className="">TechSoc, Bangluru, India</span>
        </div>
      </div>
      <div className="back-face">
        <div className="contents1 back">
          <p className="">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ThreedCard;


