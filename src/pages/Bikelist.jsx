// import React from 'react'
// import { Col } from 'reactstrap'
// import { Link } from 'react-router-dom'
// import hero from "../Assets/Images/hero.png"
// import "../styles/bikelist.css"
// const Bikelist = (props) => {
//   const {id, imgUrl,model,bikeName,speed,price}=props.item
//   return (

//     <Col lg="4" md="4" sm="6">
//       <div className='bike-item'>
//         <div className='bike-img'>
//           <img src={hero} className='w-100'/>
//         </div>
//         <div className="bike-itemcontent mt-4">
//           <h4 className='section-title text-center'>{bikeName}</h4>
//           <h6 className="bikeprice mt-4">{price}.00</h6>
//           <div className="bike-item-info d-flex align-items-center
//           justify-content-between mt-3 mb-4">
//             <span className='d-flex align-items-center gap-1'><i class="ri-bike-line"></i>{model}</span>
//             <span className='d-flex align-items-center gap-1'><i class="ri-timer-flash-line"></i>{speed}</span>

//           </div>
//           <button className="w-50 bike-item-btn">
//             <Link to="/bikes/${bikeName}">Look</Link>
//           </button>
//           </div>
//       </div>
//     </Col>
//   )
// }

// export default Bikelist

import React from 'react';
import { Link } from 'react-router-dom';
import activa from "../Assets/Images/UNICORN_160.png";
import glamour from "../Assets/Images/glamourblack.png";
import ntorq from "../Assets/Images/ntorq.png";
import pulsar from "../Assets/Images/pulsar.png";
import "../styles/bikelist.css";

const Bikelist = () => {
  return (
    <div className='bikes-container'>
      <div className='frow'>
        <Bike brand="HONDA" srcName={activa} description="HONDA" link="/honda" />
        <Bike brand="HERO" srcName={glamour} description="HERO" link="/hero" />
        <Bike brand="TVS" srcName={ntorq} description="TVS" link="/tvs" />
        <Bike brand="BAJAJ" srcName={pulsar} description="BAJAJ" link="/bajaj" />
      </div>
    </div>
  );
}

const Bike = ({ brand, srcName, description, link }) => {
  return (
    <div className='bike'>
      <Link to={link} className='bike-link'>
        <img src={srcName} className='bikeimg' alt={`${brand} bike`} />
        <hr className="separator" />
        <h1 className='bike-description'>{description}</h1>
        <div className="overlay">{brand}</div>
      </Link>
    </div>
  );
}

export default Bikelist;

