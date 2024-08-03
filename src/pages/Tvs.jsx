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
  {srcName: xlks, description: "XL-100 HD KS BSVI", link: "/price",price:"46289",rta:"7640",insurance:"6090"},
  {srcName: xlhd, description: "XL-100 HD i Touch BSVI", link: "/tvs",price:"58964",rta:"9161",insurance:"6389" },
  {srcName: xlsbs, description: "XL-100 i.Touch SBS Winner Edition BSVI", link: "/tvs",price:"61466",rta:"9461",insurance:"6449" },
  {srcName: xlcom, description: "XL-100 Comfort i.Touch BSVI", link: "/tvs",price:"61244",rta:"9434",insurance:"6444" },
  {srcName: zest, description: "TVS Scooty Zest BSVI", link: "/tvs",price:"74683",rta:"11047",insurance:"6764" },
  {srcName: zestMatte, description: "TVS Scooty Zest Matte Serles BSVI", link: "/tvs",price:"75610",rta:"11158",insurance:"6787" },
  {srcName: jupSmw, description: "JUPITER BSVI SMW", link: "/tvs" ,price:"78043",rta:"11450",insurance:"6845"},
  // {srcName: jupAol, description: "JUPITER BSVI- AOL", link: "/tvs" },
  {srcName: jupClassic, description: "JUPITER CLASSIC BSVI Disc New", link: "/tvs",price:"93098",rta:"13257",insurance:"7203" },
  {srcName: jupZxDisc, description: "JUPITER ZX Disc ISS BSVI", link: "/tvs",price:"89663",rta:"12845",insurance:"7121" },
  {srcName: jupZxAol, description: "JUPITER ZX BSVI - AOL-Drum", link: "/tvs" ,price:"85583",rta:"12355",insurance:"7024"},
  // {srcName: jupZxSxc, description: "JUPITER ZX Disc BSVI - SXC", link: "/tvs" },
  {srcName: jupZxDrumSxc, description: "JUPITER ZX DRUM BSVI - SXC", link: "/tvs" ,price:"87918",rta:"12635",insurance:"7188"},
  {srcName: jup125Disc, description: "JUPITER 125 BSVI Disc", link: "/tvs" ,price:"92146",rta:"13143",insurance:"7181"},
  {srcName: jup125DiscSxc, description: "JUPITER 125 BSVI Disc - SXC", link: "/tvs",price:"99046",rta:"13971",insurance:"7343" },
  {srcName: jup125DrumAlloy, description: "JUPITER 125 DRUM BSVI- Alloy Wheel", link: "/tvs",price:"87641",rta:"12602",insurance:"7073" },
  {srcName: jup125DrumSmw, description: "JUPITER 125 DRUM BSVI- SMW", link: "/tvs",price:"85520",rta:"12347",insurance:"7023" },
  {srcName: ntorqDisc, description: "NTORQ 125 DISC", link: "/tvs",price:"93181",rta:"13267",insurance:"7023" },
  {srcName: ntorqRace, description: "NTORQ 125 DISC -Race Edition BSVI", link: "/tvs",price:"97131",rta:"13741",insurance:"7299" },
  {srcName: ntorqSuperSquad, description: "NTORQ 125 DISC - Super Squad Edition", link: "/tvs" ,price:"99281",rta:"13999",insurance:"7351"},
  {srcName: ntorqRaceXp, description: "NTORQ 125 RACE XP", link: "/tvs",price:"100831",rta:"14185",insurance:"7388" },
  {srcName: ntorqXt, description: "NTORQ 125 XT", link: "/tvs",price:"108731",rta:"15133",insurance:"7576" },
  {srcName: sportEs, description: "TVS SPORT ES BSVI", link: "/tvs",price:"68010",rta:"10246",insurance:"6605" },
  {srcName: sportEls, description: "TVS SPORT ELS BSVI", link: "/tvs",price:"72713",rta:"10811",insurance:"6717" },
  {srcName: starCityPlusEs, description: "STAR CITY+ ES BSVI-DUEL/MONO TONE", link: "/tvs",price:"77982",rta:"11436",insurance:"6818" },
  {srcName: starCityPlusDisc, description: "STAR CITY+ ES BSVI-Disc", link: "/tvs",price:"81078",rta:"11814",insurance:"6893" },
  {srcName: radeon110, description: "TVS RADEON 110ES MAG BSVI", link: "/tvs",price:"75273",rta:"11118",insurance:"6761" },
  // {srcName: radeonDigiDrum, description: "TVS RADEON DIGI DRUM DUEL TONE BSVI", link: "/tvs" },
  {srcName: radeonDigiDisc, description: "TVS RADEON DIGI DISC DUEL TONE BSVI", link: "/tvs",price:"83610",rta:"12118",insurance:"6956" },
  {srcName: raiderDiscConnected, description: "TVS RAIDER DISC CONNECTED", link: "/tvs",price:"107360",rta:"14968",insurance:"7551" },
  {srcName: raiderDiscBsvi, description: "TVS RAIDER DISC BSVI", link: "/tvs",price:"98810",rta:"13942",insurance:"7328" },
  {srcName: raiderDiscSs, description: "TVS RAIDER DISC - SS", link: "/tvs",price:"97810",rta:"13822",insurance:"7304" },
  {srcName: raiderDiscSse, description: "TVS RAIDER DISC - SSE", link: "/tvs" ,price:"101510",rta:"14266",insurance:"7304"},
  {srcName: ronin1chBase, description: "TVS RONIN-U368 1CH BASE", link: "/tvs",price:"150390",rta:"20132",insurance:"13327" },
  {srcName: ronin1chBasePlus, description: "TVS RONIN-U368 1CH BASE+", link: "/tvs",price:"157890",rta:"21032",insurance:"13513" },
  {srcName: ronin2chMid, description: "TVS RONIN-U368 2CH MID", link: "/tvs",price:"170140",rta:"22502",insurance:"13816" },
  // {srcName: ronin2chMid, description: "TVS RONIN-U368 2CH MID", link: "/tvs" },
  {srcName: ronin2chMidSpl, description: "TVS RONIN-2CH MID SPL", link: "/tvs",price:"172140",rta:"22742",insurance:"13865" },
  {srcName: rtr1602vRmDisc, description: "APACHE RTR 160 2V - RM DISC BT", link: "/tvs",price:"127510",rta:"17386",insurance:"12927" },
  {srcName: rtr1604vRmDisc, description: "APACHE RTR 160 4V - RM DISC", link: "/tvs",price:"128660",rta:"17524",insurance:"12319" },
  {srcName: rtr1604vRmSpl, description: "APACHE RTR 160 4V - RM SPL Edition", link: "/tvs",price:"133460",rta:"18100",insurance:"12438" },
  {srcName: rtr1604vAbs, description: "APACHE RTR 160 4V - 2CH ABS", link: "/tvs" ,price:"138960",rta:"18760",insurance:"12438"},
  {srcName: rtr2004v2chRMode, description: "APACHE RTR 200 4V 2ch-R Mode", link: "/tvs",price:"147060",rta:"19732",insurance:"12775" },
  {srcName: rtr310BaseBlackU400, description: "APACHE RTR 310- BASE BLACK - U400", link: "/tvs",price:"244280",rta:"31399",insurance:"15739" },
  {srcName: rtr310BaseBlack, description: "APACHE RTR 310 - BASE BLACK", link: "/tvs",price:"259280",rta:"33199",insurance:"15591" },
  {srcName: rtr310DynOro, description: "APACHE RTR 310 - DYN-ORO YELLOW TR", link: "/tvs" ,price:"287280",rta:"36559",insurance:"15591"},
  {srcName: rr310Bsvir, description: "APACHE RR 310 BSVI" , link:"/tvs",price:"273290",rta:"34880",insurance:"15906"}
  
];

const Tvs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBikes = bikesData.filter(bike =>
    bike.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='topper'>
        <Link to="/tvs"><h1>TVS</h1></Link>
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
        <p className='bike-rta'>RTA: {rta}</p>
        <p className='bike-insurance'>Insurance: {insurance}</p>
        <p className='bike-price'>Price: {price}</p>
      </Link>
    </div>
  );
};

export default Tvs;
