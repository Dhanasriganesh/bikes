import React from 'react';
import { Link } from 'react-router-dom';
import activa from "../Assets/Images/actred.png";
import glamour from "../Assets/Images/glamourblack.png";
import ntorq from "../Assets/Images/ntorq.png";
import pulsar from "../Assets/Images/pulsar.png";
import tvs125 from "../Assets/Images/tvs125.png"
import rtr310 from "../Assets/Images/RTR310.png"
import rtr160 from "../Assets/Images/rtr160.png"
import jupiter from "../Assets/Images/jupiter.png"
import sport from "../Assets/Images/sport.png"
import jup125 from "../Assets/Images/jup125.png"
import comfort from "../Assets/Images/comfort.png"
import heavy from "../Assets/Images/heavy.png"
import pep from "../Assets/Images/pep.png"
import star from "../Assets/Images/star.png"
import x from "../Assets/Images/x.png"
import "../styles/tvs.css";
const Tvs = () => {
  return (
    <div className='bikes-container'>
      <div className='frow'>
        <Bike brand="HONDA" srcName={tvs125} description="TVS Raider 125" link="/price" />
        <Bike brand="HERO" srcName={rtr310} description="TVS Apache RTR 310" link="/hero" />
        <Bike brand="TVS" srcName={ntorq} description="TVS Ntorq 125" link="/tvs" />
        <Bike brand="BAJAJ" srcName={rtr160} description="TVS Apache RTR 160" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={jupiter} description="TVS Jupiter" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={sport} description="TVS Sport" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={jup125} description="TVS Jupiter 125" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={comfort} description="TVS XL 100 Comfort" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={heavy} description="TVS XL 100 Heavy Duty" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={pep} description="TVS Scooty Pep Plus" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={star} description="TVS Star City Plus" link="/bajaj" />
        <Bike brand="BAJAJ" srcName={x} description="TVS X" link="/bajaj" />
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
        {/* <div className="overlay">{brand}</div> */}
      </Link>
    </div>
  )
}

export default Tvs