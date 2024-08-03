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
  { srcName: CT110XESDY08, description: 'CT-110 X ES (DY08)', link: '/bajaj',price:"69,498",rta:"8,340",insurance:"7,331" },
  { srcName: Platina100ESPF37, description: 'Platina 100 ES (PF37)', link: '/bajaj',price:"68,294",rta:"8,200",insurance:"7,321" },
  { srcName: Platina110DrumJK35, description: 'Platina 110 Drum (JK35)', link: '/bajaj',price:"70,778",rta:"8,500",insurance:"7,701" },
  { srcName: Platina110DiscABSJK36, description: 'Platina 110 Disc ABS (JK36)', link: '/bajaj',price:"80339",rta:"9650",insurance:"8026" },
  { srcName: Pulsar125NeonDiscDH50, description: 'Pulsar 125 Neon Disc (DH50)', link: '/bajaj',price:"83315",rta:"10000",insurance:"7992" },
  { srcName: Pulsar125CarbonDiscDH41, description: 'Pulsar 125 Carbon Disc (DH41)', link: '/bajaj',price:"90611",rta:"10880",insurance:"8162" },
  { srcName: Pulsar125CarbonDiscSplitDH43, description: 'Pulsar 125 Carbon Disc Split (DH43)', link: '/bajaj',price:"95053",rta:"11410",insurance:"8198" },
  { srcName: Pulsar125CarbonDiscUGDH57, description: 'Pulsar 125 Carbon Disc UG (DH57)', link: '/bajaj',price:"92723",rta:"11130",insurance:"8186" },
  { srcName: Pulsar125CarbonDiscSplitUGDH56, description: 'Pulsar 125 Carbon Disc Split UG (DH56)', link: '/bajaj',price:"97229",rta:"11670",insurance:"8251" },
  { srcName: PulsarNS125JF35, description: 'Pulsar NS 125 (JF35)', link: '/bajaj',price:"104922",rta:"12600",insurance:"8651" },
  { srcName: PulsarNS125JF44, description: 'Pulsar NS 125 (JF44)', link: '/bajaj',price:"110272",rta:"13240",insurance:"9021" },
  { srcName: Pulsar150SDDH42, description: 'Pulsar 150 SD (DH42)', link: '/bajaj',price:"109152",rta:"13100",insurance:"8932" },
  { srcName: Pulsar150TDDH44, description: 'Pulsar 150 TD (DH44)', link: '/bajaj',price:"114150",rta:"13700",insurance:"9131" },
  { srcName: Pulsar150SDDH60, description: 'Pulsar 150 SD (DH60)', link: '/bajaj',price:"112301",rta:"13480",insurance:"9101" },
  { srcName: Pulsar150TDDH61, description: 'Pulsar 150 TD (DH61)', link: '/bajaj',price:"116237",rta:"13950",insurance:"9163" },
  { srcName: PulsarN150JR30, description: 'Pulsar N 150 (JR30)', link: '/bajaj',price:"118054",rta:"14170",insurance:"9203" },
  { srcName: PulsarN150SDJR38, description: 'Pulsar N 150 SD (JR38)', link: '/bajaj',price:"121318",rta:"14560",insurance:"9563" },
  { srcName: PulsarN150TDJR31, description: 'Pulsar N 150 TD (JR31)', link: '/bajaj',price:"124819",rta:"14980",insurance:"9653" },
  { srcName: PulsarNS160TwinABSJF43, description: 'Pulsar NS 160 Twin ABS (JF43)', link: '/bajaj',price:"147021",rta:"17650",insurance:"14021" },
  { srcName: PulsarN160TwinABSJR37, description: 'Pulsar N 160 Twin ABS (JR37)', link: '/bajaj',price:"133382",rta:"16010",insurance:"13676" },
  { srcName: PulsarN160UGJR21, description: 'Pulsar N 160 UG (JR21)', link: '/bajaj',price:"139667",rta:"16770",insurance:"13761" },
  { srcName: PulsarNS200JL24, description: 'Pulsar NS 200 (JL24)', link: '/bajaj',price:"158016",rta:"18970",insurance:"14463" },
  { srcName: PulsarRS200DT19, description: 'Pulsar RS 200 (DT19)', link: '/bajaj',price:"172550",rta:"20710",insurance:"14354" },
  { srcName: Pulsar220DK11, description: 'Pulsar 220 (DK11)', link: '/bajaj',price:"137856",rta:"16550",insurance:"14051" },
  { srcName: Pulsar220UGDK12, description: 'Pulsar 220 UG (DK12)', link: '/bajaj',price:"140320",rta:"16840",insurance:"14180" },
  { srcName:  PULSARN25000JR20, description: 'PULSAR-N 250 (00JR20)', link: '/bajaj',price:"150131",rta:"18020",insurance:"14236" },
  { srcName: Avenger160StreetPD36, description: 'Avenger 160 Street (PD36)', link: '/bajaj',price:"116806",rta:"14020",insurance:"12865" },
  { srcName: Avenger220CruisePD35, description: 'Avenger 220 Cruise (PD35)', link: '/bajaj',price:"143322",rta:"17200",insurance:"13051" },
  { srcName: Avenger220StreetPD37, description: 'Avenger 220 Street (PD37)', link: '/bajaj',price:"143322",rta:"17200",insurance:"13051" },
  { srcName: DominarD250JF36, description: 'Dominar D250 (JF36)', link: '/bajaj',price:"184672",rta:"22170",insurance:"16862" },
  { srcName: DominarD400JF37, description: 'Dominar D400 (JF37)', link: '/bajaj',price:"230815",rta:"27700",insurance:"26123" },
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
                rta={bike.rta}
                insurance={bike.insurance}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Bike = ({ brand, srcName, description, link, price,rta,insurance }) => {
  return (
    <div className='bike'>
      <Link to={link} className='bike-link'>
        <img src={srcName} className='bikeimg' alt={`${brand} bike`} />
        <hr className="separator" />
        <h1 className='bike-description'>{description}</h1>
        <p className='bike-rta'>RTA:{rta}</p>
        <p className='bike-insurance'>Insurance:{insurance}</p>
        <p className='bike-price'>Price: {price}</p>

      </Link>
    </div>
  );
};

export default Tvs;
