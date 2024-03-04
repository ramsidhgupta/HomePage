import React, { useState } from "react";
import "./Popup.css";

const Popup = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  

  return (
    isVisible && (
      <div className="popup-container">
        <div className="popup-content">
          
          <div className="bg text-center"> 
              <h2 style={{ color: "black", fontWeight: 800 }}>
                Thanks For Submitting Your Response
              </h2>
              <p>We will be in touch soon. Thank you!</p>
            </div>
         
            <div style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
