import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { RiSearchLine } from 'react-icons/ri';
import {
  ACTIVA_STD,
  ACTIVA_DLX,
  ACTIVA_SMART,
  ACTIVA_125_DRUM,
  ACTIVA_125_DRUM_ALLOY,
  ACTIVA_125_DISC,
  ACTIVA_125_SMART,
  DIO_125_STD,
  DIO_125_SMART,
  DIO_STD,
  DIO_DLX,
  DIO_SMART,
  ACTIVA_DLX_LTD,
  ACTIVA_SMART_LTD,
  DIO_125_REPSOL,
  SP_125_DRUM,
  SP_125_DIS,
  SHINE_100,
  SHINE_125_DRUM,
  SHINE_125_DISK,
  UNICORN_160,
  SP_160_SINGLE_DISC,
  SP_160_DOUBLE_DISC,
  CD_110,
  LIVO_DRUM,
  LIVO_DISC,
  HORNET_2_0,
  CB_200X,
  HORNET_REPSOL,
  SP_125_SPORTS
} from "../Assets/Images"
import "../styles/tvs.css";

const bikesData = [
  { srcName: ACTIVA_STD, description: 'ACTIVA STD', link: '/honda' },
  { srcName: ACTIVA_DLX, description: 'ACTIVA DLX', link: '/honda' },
  { srcName: ACTIVA_SMART, description: 'ACTIVA SMART', link: '/honda' },
  { srcName: ACTIVA_125_DRUM, description: 'ACTIVA 125 DRUM', link: '/honda' },
  { srcName: ACTIVA_125_DRUM_ALLOY, description: 'ACTIVA 125 DRUM ALLOY', link: '/honda' },
  { srcName: ACTIVA_125_DISC, description: 'ACTIVA 125 DISC', link: '/honda' },
  { srcName: ACTIVA_125_SMART, description: 'ACTIVA 125 SMART', link: '/honda' },
  { srcName: DIO_125_STD, description: 'DIO 125 STD', link: '/honda' },
  { srcName: DIO_125_SMART, description: 'DIO 125 SMART', link: '/honda' },
  { srcName: DIO_STD, description: 'DIO STD', link: '/honda' },
  { srcName: DIO_DLX, description: 'DIO DLX', link: '/honda' },
  { srcName: DIO_SMART, description: 'DIO SMART', link: '/honda' },
  { srcName: ACTIVA_DLX_LTD, description: 'ACTIVA DLX LTD', link: '/honda' },
  { srcName: ACTIVA_SMART_LTD, description: 'ACTIVA SMART LTD', link: '/honda' },
  { srcName: DIO_125_REPSOL, description: 'DIO 125 REPSOL', link: '/honda' },
  { srcName: SP_125_DRUM, description: 'SP 125 DRUM', link: '/honda' },
  { srcName: SP_125_DIS, description: 'SP 125 DISC', link: '/honda' },
  { srcName: SHINE_100, description: 'SHINE 100', link: '/honda' },
  { srcName: SHINE_125_DRUM, description: 'SHINE 125 DRUM', link: '/honda' },
  { srcName: SHINE_125_DISK, description: 'SHINE 125 DISK', link: '/honda' },
  { srcName: UNICORN_160, description: 'UNICORN 160', link: '/honda' },
  { srcName: SP_160_SINGLE_DISC, description: 'SP 160 SINGLE DISC', link: '/honda' },
  { srcName: SP_160_DOUBLE_DISC, description: 'SP 160 DOUBLE DISC', link: '/honda' },
  { srcName: CD_110, description: 'CD 110', link: '/honda' },
  { srcName: LIVO_DRUM, description: 'LIV DRUM', link: '/honda' },
  { srcName: LIVO_DISC, description: 'LIVO DISC', link: '/honda' },
  { srcName: HORNET_2_0, description: 'HORNET 2.0', link: '/honda' },
  { srcName: CB_200X, description: 'CB 200X', link: '/honda' },
  { srcName: HORNET_REPSOL, description: 'HORNET REPSOL', link: '/honda' },
  { srcName: SP_125_SPORTS, description: 'SP 125 SPORTS', link: '/honda' },
];



const Tvs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBikes = bikesData.filter(bike =>
    bike.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Link to="/honda"><h1>HONDA</h1></Link>
      <div className='bikes-page'>
      
        <div className='search-container'>
          <IconContext.Provider value={{ className: 'search-icon' }}>
            <RiSearchLine />
          </IconContext.Provider>
          <input
            type="text"
            placeholder="Search for a bike..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className='bikes-container'>
          <div className='frow'>
            {filteredBikes.map((bike, index) => (
              <Bike
                key={index}
                brand={bike.brand}
                srcName={bike.srcName}
                description={bike.description}
                link={bike.link}
              />
            ))}
          </div>
        </div>
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

export default Tvs;
