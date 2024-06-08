// import React,{useRef,useState} from 'react'
// import { Container, Row, Col } from "reactstrap"
// import { Link, NavLink } from "react-router-dom"
// import "../../../styles/header.css"
// import { RiSearchLine } from 'react-icons/ri';
// const navLinks =
//   [
//     {
//       path: '/home',
//       display: "Home"
//     },
//     {
//       path: '/about',
//       display: "About"
//     },
//     {
//       path: '/bikes',
//       display: "Bikes"
//     },
//     // {
//     //   path: '/blogs',
//     //   display: "Blog"
//     // },
//     {
//       path: '/contact',
//       display: "Contact"
//     },
//     {
//       path: '/offers',
//       display: "Offers"
//     },
//   ]

// function Header() {

//   const menuRef=useRef(null)
//   const toggleMenu=()=>menuRef.current.classList.toggle("menu-active")
//   const [searchQuery, setSearchQuery] = useState('');
//   return (
//     <header className='header'>
//       <div className='header-top'>
//         <Container>
//           <Row>
//             <Col lg='6' md='6' sm='6'>
//               <div className='header-top-left'>
//                 {/* <span>Need Help?</span> */}

//                 <div className="header-midle">
//                   <Link to="/"><h1>Garuda Motors</h1></Link>
//                   <span className='header-top-help'>
//                     <a href='tel:+91 9989197113'><i class="ri-phone-fill"></i> +91 9989197113</a>
//                   </span>
//                 </div>
//               </div>

//             </Col>
//             <Col lg='6' md='6' sm='6'>
//               <div className='header-top-right'>
//                 <Link to='https://www.google.com/maps?q=17.4081382751465,78.5697860717773' target='_blank'><i class='ri-map-pin-line'>Map</i>
//                 </Link>

//                 {/* <Link to='#'><i class='ri-user-line'>Register</i>
//                 </Link> */}


//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <div className="header-middle">
//         <Container>
//           <Row>
         
//             {/* <Col lg='4' md='3' sm='4'>
//               <div className='logo'>
//                 <h1>
//                   <Link to="/home" className='d-flex align-items-center gap-3'>
//                     <i class="ri-motorbike-fill"></i>
//                     <span>Bike<br />Service</span>
//                   </Link>
//                 </h1>
//               </div>
//             </Col>
//             <Col lg='3' md='3' sm='4'>
//               <div className='header-location d-flex align-items-center gap-2'>
//                 <span>
//                   <i class="ri-earth-line"></i>
//                 </span>
//                 <div className='header-location-content'>
//                   <h4>India</h4>
//                   <h6>Hyderabad,Telangana</h6>

//                 </div>
//               </div>
//             </Col>


//             <Col lg='3' md='3' sm='4'>
//               <div className='header-location d-flex align-items-center gap-2'>
//                 <span>
//                   <i class="ri-time-line"></i>
//                 </span>
//                 <div className='header-location-content'>
//                   <h4>Sun-Mon</h4>
//                   <h6>9am-9pm</h6>
//                 </div>
//               </div>
//             </Col>  */}


//             <Col lg='2' md='3' sm='0' className='d-flex align-items-center justify-content-center'>
//               <button className="header-btn btn d-flex 
// align-items-center justify-content-end text-end">
                
//                   <a href='tel:+91 9989197113'>
//                   <i class="ri-phone-line">Request a call</i>
//                   </a></button>
//             </Col>
//             <Col lg='10' md='9' sm='8'>
//                <div className='search-container'>
//                  <i class="ri-search-line"></i>
//                  <input
//                    type="text"
//                    placeholder="Search for a bike..."
//                    className="search-bar"
//                    value={searchQuery}
//                    onChange={(e) => setSearchQuery(e.target.value)}
//                  />
//                </div>
//              </Col>



//           </Row>
//         </Container>
//       </div>


//       <div className="main-navbar">
//         <Container>
//           <div className='nav-wrapper d-flex align-items-center justify-content-between'>
//           <div className="navigation" ref={menuRef} onClick={toggleMenu}> 
//               <div className="menu">
//                 {
//                   navLinks.map((item, index) => (
//                     <NavLink to={item.path} className={navClass => navClass.isActive ? "nav-active nav-items" : "nav-items"} key={index}>{item.display}</NavLink>
//                   ))
//                 }
//               </div>
//             </div>
//             <span className='mobile-menu'>
//               <i class="ri-menu-line" onClick={toggleMenu}></i>
//             </span>
           
//             {/* <div className="nav-right">
//               <div className="search-box">
//                 <input type="text" placeholder='Search' />
//                 <span>

//                   <i class="ri-search-line"></i>

//                 </span>
//               </div>
//             </div> */}
//           </div>
//         </Container>
//       </div>




//     </header>
//   )
// }

// export default Header

// import React, { useRef, useState } from 'react';
// import { Container, Row, Col } from "reactstrap";
// import { Link, NavLink } from "react-router-dom";
// import { IconContext } from 'react-icons';
// import { RiSearchLine } from 'react-icons/ri';
// import "../../../styles/header.css";
// import Tvs from '../../../pages/Tvs'; // Import the Tvs component

// const navLinks = [
//   {
//     path: '/home',
//     display: "Home"
//   },
//   {
//     path: '/about',
//     display: "About"
//   },
//   {
//     path: '/bikes',
//     display: "Bikes"
//   },
//   {
//     path: '/contact',
//     display: "Contact"
//   },
//   {
//     path: '/offers',
//     display: "Offers"
//   },
// ];

// function Header() {
//   const menuRef = useRef(null);
//   const toggleMenu = () => menuRef.current.classList.toggle("menu-active");
//   const [searchQuery, setSearchQuery] = useState('');
  
//   return (
//     <header className='header'>
//       <div className='header-top'>
//         <Container>
//           <Row>
//             <Col lg='6' md='6' sm='6'>
//               <div className='header-top-left'>
//                 <div className="header-midle">
//                   <Link to="/"><h1>Garuda Motors</h1></Link>
//                   <span className='header-top-help'>
//                     <a href='tel:+91 9989197113'><i className="ri-phone-fill"></i> +91 9989197113</a>
//                   </span>
//                 </div>
//               </div>
//             </Col>
//             <Col lg='6' md='6' sm='6'>
//               <div className='header-top-right'>
//                 <Link to='https://www.google.com/maps?q=17.4081382751465,78.5697860717773' target='_blank'>
//                   <i className='ri-map-pin-line'>Map</i>
//                 </Link>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <div className="header-middle">
//         <Container>
//           <Row>
//             <Col lg='10' md='9' sm='8'>
//               <div className='search-container'>
//                 <IconContext.Provider value={{ className: 'search-icon' }}>
//                   <RiSearchLine />
//                 </IconContext.Provider>
//                 <input
//                   type="text"
//                   placeholder="Search for a bike..."
//                   className="search-bar"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//               </div>
//             </Col>
//             <Col lg='2' md='3' sm='4' className='d-flex align-items-center justify-content-center'>
//               <button className="header-btn btn d-flex align-items-center justify-content-end text-end">
//                 <a href='tel:+91 9989197113'>
//                   <i className="ri-phone-line">Request a call</i>
//                 </a>
//               </button>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <Tvs searchQuery={searchQuery} /> {/* Include Tvs component with searchQuery prop */}
//       <div className="main-navbar">
//         <Container>
//           <div className='nav-wrapper d-flex align-items-center justify-content-between'>
//             <div className="navigation" ref={menuRef} onClick={toggleMenu}> 
//               <div className="menu">
//                 {
//                   navLinks.map((item, index) => (
//                     <NavLink to={item.path} className={navClass => navClass.isActive ? "nav-active nav-items" : "nav-items"} key={index}>{item.display}</NavLink>
//                   ))
//                 }
//               </div>
//             </div>
//             <span className='mobile-menu'>
//               <i className="ri-menu-line" onClick={toggleMenu}></i>
//             </span>
//           </div>
//         </Container>
//       </div>
//     </header>
//   )
// }

// export default Header;


import React, { useRef, useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { RiSearchLine } from 'react-icons/ri';
import "../../../styles/header.css";

const navLinks = [
  {
    path: '/home',
    display: "Home"
  },
  {
    path: '/about',
    display: "About"
  },
  {
    path: '/bikes',
    display: "Bikes"
  },
  {
    path: '/contact',
    display: "Contact"
  },
  {
    path: '/offers',
    display: "Offers"
  },
];

function Header({ searchQuery, setSearchQuery }) {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu-active");

  return (
    <header className='header'>
      <div className='header-top'>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className='header-top-left'>
                <div className="header-middle">
                  <Link to="/"><h1>Garuda Motors</h1></Link>
                  <span className='header-top-help'>
                    <a href='tel:+91 9989197113'><i className="ri-phone-fill"></i> +91 9989197113</a>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6'>
              <div className='header-top-right'>
                <Link to='https://www.google.com/maps?q=17.4081382751465,78.5697860717773' target='_blank'><i className='ri-map-pin-line'>Map</i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="header-middle">
        <Container>
          <Row>
            <Col lg='2' md='3' sm='0' className='d-flex align-items-center justify-content-center'>
              <button className="header-btn btn d-flex align-items-center justify-content-end text-end">
                <a href='tel:+91 9989197113'>
                  <i className="ri-phone-line">Request a call</i>
                </a>
              </button>
            </Col>
            <Col lg='10' md='9' sm='8'>
              <div className='search-container'>
                <i className="ri-search-line"></i>
                <input
                  type="text"
                  placeholder="Search for a bike..."
                  className="search-bar"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="main-navbar">
        <Container>
          <div className='nav-wrapper d-flex align-items-center justify-content-between'>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {
                  navLinks.map((item, index) => (
                    <NavLink to={item.path} className={navClass => navClass.isActive ? "nav-active nav-items" : "nav-items"} key={index}>{item.display}</NavLink>
                  ))
                }
              </div>
            </div>
            <span className='mobile-menu'>
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;