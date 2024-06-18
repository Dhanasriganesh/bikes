import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { RiSearchLine } from 'react-icons/ri';
import "../styles/tvs.css";
import {
  hfDeluxeDrumNonI3S,
  hfDeluxeDrumAllBlack,
  hfDeluxeDrumTubeless,
  splendorPlusDrumNonI3S,
  splendorPlusDrumI3S,
  splendorPlusDrumMag10,
  splendorPlusDrumXtec,
  superSplendor125CcDrum,
  superSplendor125CcDisk,
  passionPlusDrum,
  glamour125CanvasDrum,
  glamour125CanvasDisk,
  glamour125XTechDrum,
  glamour125XTech2Drum,
  glamour125XTech2Disk,
  glamour125ClassicDrum,
  glamour125ClassicDisk,
  xtreme125RVariantIbs,
  xtreme125RVariantAbs,
  xtreme160RVariantStandard,
  xtreme160RVariantConnect,
  xtreme160RVariantPremium,
  xtreme200S4V,
  xPlus2004V,
  xPlus2004V20Versi,
  xPlus2004VPro,
  karizmaXmr224Cc4V,
  harleyDavidsonDenim,
  harleyDavidsonMid,
  harleyDavidson440S,
  mavrickBasic,
  mavrickMid,
  mavrickTop,
  xoomVx,
  xoomZx,
  pleasureVx,
  pleasureNormal,
  pleasureXtecYellow,
  pleasureXtecConnect,
  destiniPrime,
  destiniXtec,
  maestroEdge125Drum,
  maestroEdge125Disk
} from '../Assets/Images';

const bikesData = [
  {srcName: hfDeluxeDrumNonI3S, description: "HF DELUXE DRUM NON I3S", link: "/price" },
  {srcName: hfDeluxeDrumAllBlack, description: "HF DELUXE DRUM ALL BLACK", link: "/hero" },
  {srcName: hfDeluxeDrumTubeless, description: "HF DELUXE DRUM TUBLESS", link: "/hero" },
  {srcName: splendorPlusDrumNonI3S, description: "SPLENDOR PLUS DRUM NON I3S", link: "/hero" },
  {srcName: splendorPlusDrumI3S, description: "SPLENDOR PLUS DRUM I3S", link: "/hero" },
  {srcName: splendorPlusDrumMag10, description: "SPLENDOR PLUS DRUM MAG 1.0", link: "/hero" },
  {srcName: splendorPlusDrumXtec, description: "SPLENDOR PLUS DRUM X-TEC", link: "/hero" },
  {srcName: superSplendor125CcDrum, description: "SUPER SPLENDOR 125 CC DRUM", link: "/hero" },
  {srcName: superSplendor125CcDisk, description: "SUPER SPLENDOR 125CC DISK", link: "/hero" },
  {srcName: passionPlusDrum, description: "PASSION PLUS DRUM", link: "/tvs" },
  {srcName: glamour125CanvasDrum, description: "GLAMOUR 125 CANVAS DRUM", link: "/hero" },
  {srcName: glamour125CanvasDisk, description: "GLAMOUR 125 CANVAS DISK", link: "/hero" },
  {srcName: glamour125XTechDrum, description: "GLAMOUR 125 X-TECH DRUM", link: "/hero" },
  {srcName: glamour125XTech2Drum, description: "GLAMOUR 125 X-TECH 2 DRUM", link: "/hero" },
  {srcName: glamour125XTech2Disk, description: "GLAMOUR 125 X-TECH 2 DISK", link: "/hero" },
  {srcName: glamour125ClassicDrum, description: "GLAMOUR 125 CLASSIC DRUM", link: "/hero" },
  {srcName: glamour125ClassicDisk, description: "GLAMOUR 125CLASSIC DISK", link: "/hero" },
  {srcName: xtreme125RVariantIbs, description: "X-TREME 125 R VARIANT IBS", link: "/hero" },
  {srcName: xtreme125RVariantAbs, description: "X-TREME 125 R VARIANT ABS", link: "/hero" },
  {srcName: xtreme160RVariantStandard, description: "X-TREME 160 R VARIANT STANDARD", link: "/hero" },
  {srcName: xtreme160RVariantConnect, description: "X-TREME 160 R VARIANT CONNECT", link: "/hero" },
  {srcName: xtreme160RVariantPremium, description: "X-TREME 160 R VARIANT PREMIUM", link: "/hero" },
  {srcName: xtreme200S4V, description: "X-TREME 200 S 4 V", link: "/hero" },
  {srcName: xPlus2004V, description: "X-PLUS 200 4V", link: "/hero" },
  {srcName: xPlus2004V20Versi, description: "X-PLUS 200 4V 2.0 VERSI", link: "/hero" },
  {srcName: xPlus2004VPro, description: "X-PLUS 200 4V PRO", link: "/hero" },
  {srcName: karizmaXmr224Cc4V, description: "KARIZMA XMR 224 CC 4V", link: "/hero" },
  {srcName: harleyDavidsonDenim, description: "HARLEY DAVIDSON DENIM", link: "/hero" },
  {srcName: harleyDavidsonMid, description: "HARLEY DAVIDSON MID", link: "/hero" },
  {srcName: harleyDavidson440S, description: "HARLEY DAVIDSON 440 S", link: "/hero" },
  {srcName: mavrickBasic, description: "MAVRICK BASIC", link: "/hero" },
  {srcName: mavrickMid, description: "MAVRICK MID", link: "/hero" },
  {srcName: mavrickTop, description: "MAVRICK TOP", link: "/hero" },
  {srcName: xoomVx, description: "XOOM VX", link: "/hero" },
  {srcName: xoomZx, description: "XOOM ZX", link: "/hero" },
  {srcName: pleasureVx, description: "PLEASURE VX", link: "/hero" },
  {srcName: pleasureNormal, description: "PLEASURE NORMAL", link: "/hero" },
  {srcName: pleasureXtecYellow, description: "PLEASURE X-TEC YELLOW", link: "/hero" },
  {srcName: pleasureXtecConnect, description: "PLEASURE X-TEC CONNECT", link: "/hero" },
  {srcName: destiniPrime, description: "DESTINI Prime", link: "/hero" },
  {srcName: destiniXtec, description: "DESTINI X-Tec", link: "/hero" },
  {srcName: maestroEdge125Drum, description: "MAESTRO EDGE 125 Drum", link: "/hero" },
  {srcName: maestroEdge125Disk, description: "MAESTRO EDGE 125 Disk", link: "/hero" }
];


const Tvs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBikes = bikesData.filter(bike =>
    bike.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Link to="/hero"><h1>HERO</h1></Link>
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
