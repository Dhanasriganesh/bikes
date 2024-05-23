import React from 'react'
import "../styles/tvsraider.css"
const Tvsraider = ({ imageSrc, exShowroomPrice, rtoPrice, insurancePrice, onRoadPrice }) => {
    return (
      <div className="bike-price-breakdown">
        <div className="bike-image-container">
          <img src={imageSrc} alt="Bike" />
        </div>
        <div className="price-breakdown-box">
          <p>Ex-Showroom</p>
          <p>₹{exShowroomPrice}</p>
          <p>RTO</p>
          <p>₹{rtoPrice}</p>
          <p>Insurance (Comprehensive)</p>
          <p>₹{insurancePrice}</p>
          <p>On-Road Price</p>
          <p>₹{onRoadPrice}</p>
        </div>
      </div>
    );
  };

export default Tvsraider