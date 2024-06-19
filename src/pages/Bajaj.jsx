import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { RiSearchLine } from 'react-icons/ri';
import {
  CT110XESDY08,
  Platina100ESPF37,
  Platina110DrumJK35,
  Platina110DiscABSJK36,
  Pulsar125NeonDiscDH50,
  Pulsar125CarbonDiscDH41,
  Pulsar125CarbonDiscSplitDH43,
  Pulsar125CarbonDiscUGDH57,
  Pulsar125CarbonDiscSplitUGDH56,
  PulsarNS125JF35,
  PulsarNS125JF44,
  Pulsar150SDDH42,
  Pulsar150TDDH44,
  Pulsar150SDDH60,
  Pulsar150TDDH61,
  PulsarN150JR30,
  PulsarN150SDJR38,
  PulsarN150TDJR31,
  PulsarNS160TwinABSJF43,
  PulsarN160TwinABSJR37,
  PulsarN160UGJR21,
  PulsarNS200JL24,
  PulsarRS200DT19,
  Pulsar220DK11,
  Pulsar220UGDK12,
  PULSARN25000JR20,
  Avenger160StreetPD36,
  Avenger220CruisePD35,
  Avenger220StreetPD37,
  DominarD250JF36,
  DominarD400JF37
} from "../Assets/Images"

const bikesData = [
  { srcName: CT110XESDY08, description: 'CT-110 X ES (DY08)', link: '/bajaj',price:"4500" },
  { srcName: Platina100ESPF37, description: 'Platina 100 ES (PF37)', link: '/bajaj' },
  { srcName: Platina110DrumJK35, description: 'Platina 110 Drum (JK35)', link: '/bajaj' },
  { srcName: Platina110DiscABSJK36, description: 'Platina 110 Disc ABS (JK36)', link: '/bajaj' },
  { srcName: Pulsar125NeonDiscDH50, description: 'Pulsar 125 Neon Disc (DH50)', link: '/bajaj' },
  { srcName: Pulsar125CarbonDiscDH41, description: 'Pulsar 125 Carbon Disc (DH41)', link: '/bajaj' },
  { srcName: Pulsar125CarbonDiscSplitDH43, description: 'Pulsar 125 Carbon Disc Split (DH43)', link: '/bajaj' },
  { srcName: Pulsar125CarbonDiscUGDH57, description: 'Pulsar 125 Carbon Disc UG (DH57)', link: '/bajaj' },
  { srcName: Pulsar125CarbonDiscSplitUGDH56, description: 'Pulsar 125 Carbon Disc Split UG (DH56)', link: '/bajaj' },
  { srcName: PulsarNS125JF35, description: 'Pulsar NS 125 (JF35)', link: '/bajaj' },
  { srcName: PulsarNS125JF44, description: 'Pulsar NS 125 (JF44)', link: '/bajaj' },
  { srcName: Pulsar150SDDH42, description: 'Pulsar 150 SD (DH42)', link: '/bajaj' },
  { srcName: Pulsar150TDDH44, description: 'Pulsar 150 TD (DH44)', link: '/bajaj' },
  { srcName: Pulsar150SDDH60, description: 'Pulsar 150 SD (DH60)', link: '/bajaj' },
  { srcName: Pulsar150TDDH61, description: 'Pulsar 150 TD (DH61)', link: '/bajaj' },
  { srcName: PulsarN150JR30, description: 'Pulsar N 150 (JR30)', link: '/bajaj' },
  { srcName: PulsarN150SDJR38, description: 'Pulsar N 150 SD (JR38)', link: '/bajaj' },
  { srcName: PulsarN150TDJR31, description: 'Pulsar N 150 TD (JR31)', link: '/bajaj' },
  { srcName: PulsarNS160TwinABSJF43, description: 'Pulsar NS 160 Twin ABS (JF43)', link: '/bajaj' },
  { srcName: PulsarN160TwinABSJR37, description: 'Pulsar N 160 Twin ABS (JR37)', link: '/bajaj' },
  { srcName: PulsarN160UGJR21, description: 'Pulsar N 160 UG (JR21)', link: '/bajaj' },
  { srcName: PulsarNS200JL24, description: 'Pulsar NS 200 (JL24)', link: '/bajaj' },
  { srcName: PulsarRS200DT19, description: 'Pulsar RS 200 (DT19)', link: '/bajaj' },
  { srcName: Pulsar220DK11, description: 'Pulsar 220 (DK11)', link: '/bajaj' },
  { srcName: Pulsar220UGDK12, description: 'Pulsar 220 UG (DK12)', link: '/bajaj' },
  { srcName:  PULSARN25000JR20, description: 'PULSAR-N 250 (00JR20)', link: '/bajaj' },
  { srcName: Avenger160StreetPD36, description: 'Avenger 160 Street (PD36)', link: '/bajaj' },
  { srcName: Avenger220CruisePD35, description: 'Avenger 220 Cruise (PD35)', link: '/bajaj' },
  { srcName: Avenger220StreetPD37, description: 'Avenger 220 Street (PD37)', link: '/bajaj' },
  { srcName: DominarD250JF36, description: 'Dominar D250 (JF36)', link: '/bajaj' },
  { srcName: DominarD400JF37, description: 'Dominar D400 (JF37)', link: '/bajaj' },
];

const Tvs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBikes = bikesData.filter(bike =>
    bike.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='topper'>
        <Link to="/bajaj"><h1>BAJAJ</h1></Link>
        <div className='bookbut'>
              <Link to="/book-now">
                <button className="book-now-button">Book Now</button>
              </Link>
            </div>
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
      </div>
        <div className='bikes-page'>
        <div className='bikes-container'>
          <div className='frow'>
            {filteredBikes.map((bike, index) => (
              <Bike
                key={index}
                brand={bike.brand}
                srcName={bike.srcName}
                description={bike.description}
                link={bike.link}
                price={bike.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Bike = ({ brand, srcName, description, link, price }) => {
  return (
    <div className='bike'>
      <Link to={link} className='bike-link'>
        <img src={srcName} className='bikeimg' alt={`${brand} bike`} />
        <hr className="separator" />
        <h1 className='bike-description'>{description}</h1>
        <p className='bike-price'>Price: {price}</p>
      </Link>
    </div>
  );
};

export default Tvs;
