import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { RiSearchLine } from 'react-icons/ri';
import {
  // activa,
  // glamour,
  // ntorq,
  // pulsar,
  // tvs125,
  // rtr310,
  // rtr160,
  // jupiter,
  // sport,
  // jup125,
  // comfort,
  // heavy,
  // pep,
  // star,
  // x,
  xlks,
  xlhd,
  xlsbs,
  xlcom,
  rr310Bsvir,
  zest,
  zestMatte,
  jupSmw,
  // jupAol,
  jupClassic,
  jupZxDisc,
  jupZxAol,
  // jupZxSxc,
  jupZxDrumSxc,
  jup125Disc,
  jup125DiscSxc,
  jup125DrumAlloy,
  jup125DrumSmw,
  ntorqDisc,
  ntorqRace,
  ntorqSuperSquad,
  ntorqRaceXp,
  ntorqXt,
  sportEs,
  sportEls,
  starCityPlusEs,
  starCityPlusDisc,
  radeon110,
  // radeonDigiDrum,
  radeonDigiDisc,
  raiderDiscConnected,
  raiderDiscBsvi,
  raiderDiscSs,
  raiderDiscSse,
  ronin1chBase,
  ronin1chBasePlus,
  ronin2chMid,
  ronin2chMidSpl,
  rtr1602vRmDisc,
  rtr1604vRmDisc,
  rtr1604vRmSpl,
  rtr1604vAbs,
  rtr2004v2chRMode,
  rtr310BaseBlackU400,
  rtr310BaseBlack,
  rtr310DynOro,
  rr310Bsvi,
} from '../Assets/Images';

import "../styles/tvs.css";

const bikesData = [
  {srcName: xlks, description: "XL-100 HD KS BSVI", link: "/price" },
  {srcName: xlhd, description: "XL-100 HD i Touch BSVI", link: "/tvs" },
  {srcName: xlsbs, description: "XL-100 i.Touch SBS Winner Edition BSVI", link: "/tvs" },
  {srcName: xlcom, description: "XL-100 Comfort i.Touch BSVI", link: "/tvs" },
  {srcName: zest, description: "TVS Scooty Zest BSVI", link: "/tvs" },
  {srcName: zestMatte, description: "TVS Scooty Zest Matte Serles BSVI", link: "/tvs" },
  {srcName: jupSmw, description: "JUPITER BSVI SMW", link: "/tvs" },
  // {srcName: jupAol, description: "JUPITER BSVI- AOL", link: "/tvs" },
  {srcName: jupClassic, description: "JUPITER CLASSIC BSVI Disc New", link: "/tvs" },
  {srcName: jupZxDisc, description: "JUPITER ZX Disc ISS BSVI", link: "/tvs" },
  {srcName: jupZxAol, description: "JUPITER ZX BSVI - AOL-Drum", link: "/tvs" },
  // {srcName: jupZxSxc, description: "JUPITER ZX Disc BSVI - SXC", link: "/tvs" },
  {srcName: jupZxDrumSxc, description: "JUPITER ZX DRUM BSVI - SXC", link: "/tvs" },
  {srcName: jup125Disc, description: "JUPITER 125 BSVI Disc", link: "/tvs" },
  {srcName: jup125DiscSxc, description: "JUPITER 125 BSVI Disc - SXC", link: "/tvs" },
  {srcName: jup125DrumAlloy, description: "JUPITER 125 DRUM BSVI- Alloy Wheel", link: "/tvs" },
  {srcName: jup125DrumSmw, description: "JUPITER 125 DRUM BSVI- SMW", link: "/tvs" },
  {srcName: ntorqDisc, description: "NTORQ 125 DISC", link: "/tvs" },
  {srcName: ntorqRace, description: "NTORQ 125 DISC -Race Edition BSVI", link: "/tvs" },
  {srcName: ntorqSuperSquad, description: "NTORQ 125 DISC - Super Squad Edition", link: "/tvs" },
  {srcName: ntorqRaceXp, description: "NTORQ 125 RACE XP", link: "/tvs" },
  {srcName: ntorqXt, description: "NTORQ 125 XT", link: "/tvs" },
  {srcName: sportEs, description: "TVS SPORT ES BSVI", link: "/tvs" },
  {srcName: sportEls, description: "TVS SPORT ELS BSVI", link: "/tvs" },
  {srcName: starCityPlusEs, description: "STAR CITY+ ES BSVI-DUEL/MONO TONE", link: "/tvs" },
  {srcName: starCityPlusDisc, description: "STAR CITY+ ES BSVI-Disc", link: "/tvs" },
  {srcName: radeon110, description: "TVS RADEON 110ES MAG BSVI", link: "/tvs" },
  // {srcName: radeonDigiDrum, description: "TVS RADEON DIGI DRUM DUEL TONE BSVI", link: "/tvs" },
  {srcName: radeonDigiDisc, description: "TVS RADEON DIGI DISC DUEL TONE BSVI", link: "/tvs" },
  {srcName: raiderDiscConnected, description: "TVS RAIDER DISC CONNECTED", link: "/tvs" },
  {srcName: raiderDiscBsvi, description: "TVS RAIDER DISC BSVI", link: "/tvs" },
  {srcName: raiderDiscSs, description: "TVS RAIDER DISC - SS", link: "/tvs" },
  {srcName: raiderDiscSse, description: "TVS RAIDER DISC - SSE", link: "/tvs" },
  {srcName: ronin1chBase, description: "TVS RONIN-U368 1CH BASE", link: "/tvs" },
  {srcName: ronin1chBasePlus, description: "TVS RONIN-U368 1CH BASE+", link: "/tvs" },
  {srcName: ronin2chMid, description: "TVS RONIN-U368 2CH MID", link: "/tvs" },
  // {srcName: ronin2chMid, description: "TVS RONIN-U368 2CH MID", link: "/tvs" },
  {srcName: ronin2chMidSpl, description: "TVS RONIN-2CH MID SPL", link: "/tvs" },
  {srcName: rtr1602vRmDisc, description: "APACHE RTR 160 2V - RM DISC BT", link: "/tvs" },
  {srcName: rtr1604vRmDisc, description: "APACHE RTR 160 4V - RM DISC", link: "/tvs" },
  {srcName: rtr1604vRmSpl, description: "APACHE RTR 160 4V - RM SPL Edition", link: "/tvs" },
  {srcName: rtr1604vAbs, description: "APACHE RTR 160 4V - 2CH ABS", link: "/tvs" },
  {srcName: rtr2004v2chRMode, description: "APACHE RTR 200 4V 2ch-R Mode", link: "/tvs" },
  {srcName: rtr310BaseBlackU400, description: "APACHE RTR 310- BASE BLACK - U400", link: "/tvs" },
  {srcName: rtr310BaseBlack, description: "APACHE RTR 310 - BASE BLACK", link: "/tvs" },
  {srcName: rtr310DynOro, description: "APACHE RTR 310 - DYN-ORO YELLOW TR", link: "/tvs" },
  {srcName: rr310Bsvi, description: "APACHE RR 310 - DYN-ORO YELLOW TR", link:"/tvs"},
  {srcName: rr310Bsvir, description: "APACHE RR 310 BSVI" , link:"/tvs"}
  
];

const Tvs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBikes = bikesData.filter(bike =>
    bike.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Link to="/tvs"><h1>TVS</h1></Link>
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
