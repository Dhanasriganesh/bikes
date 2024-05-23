import React from 'react'
import tvs125 from "../Assets/Images/tvs125.png"
import Tvsraider from '../pages/Tvsraider';
const Price = () => {
    const exShowroomPrice = 180762;
    const rtoPrice = 23191;
    const insurancePrice = 19674;
    const onRoadPrice = 223627;
  
    return (
      <div className="App">
        <Tvsraider
          imageSrc={tvs125}
          exShowroomPrice={exShowroomPrice}
          rtoPrice={rtoPrice}
          insurancePrice={insurancePrice}
          onRoadPrice={onRoadPrice}
        />
      </div>
    );
  };

export default Price