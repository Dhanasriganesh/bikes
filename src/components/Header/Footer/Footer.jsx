import React from 'react'
import { Container, Row, Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from "react-router-dom"
import "../../../styles/footer.css"

const quickLinks=[
  {
    path:'/about',
    display:"About"
  },
  {
    path:'#',
    display:"Privacy Policy"
  },
  {
    path:'/bikes',
    display:"Bike Listing"
  },
  {
    path:'/contact',
    display:"Contact"
  },
]

function Footer() 
{
  const date=new Date()
  const year=date.getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <div className='foot'>
          <Row>
            <Col lg="4" md="4" sm="12">
              <div className='logo footer-logo'>
                <h1>
                  <Link to="/home" className='d-flex align-items-center gap-2'>
                    <i class="ri-motorbike-fill"></i>
                    <span>Bike<br />Service</span>
                  </Link>
                </h1>
              </div>
              <p className="footer-logo-content">
                Garuda Motors
                For You And For Your Bikes You Love The Most
                Always with you In near with you
              </p>
            </Col>
            <Col lg="2" md="4" sm="6">
              <div className="mb-4">
                <h5 className='footer-link-title'>Quick Links</h5>
              <ListGroup>
                {
                  quickLinks.map((item,index)=>(
                    <ListGroupItem key={index} className='p-0 mt-3 quick-link'>
                      <Link to={item.path}>{item.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
              </div>
            </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className='footer-link-title mb-4'>Head Office</h5>
              <p className='office-info'>
              <Link to='https://www.google.com/maps?q=17.4081382751465,78.5697860717773' target='_blank'> <i class="ri-map-pin-line"></i>
                122, Swaroop Nagar Rd, Swaroop Nagar, Sai Nagar, Boduppal, Hyderabad, Telangana 500039
                </Link></p>
              <p className='office-info'>
              <a href='tel:+91 9989197113'><i class="ri-phone-fill"></i> +91 9989197113</a>
              </p>
              <p className='office-info'>
                <i class="ri-mail-line"></i>
                garudamotors@gmail.com
              </p>
              <p className='office-info'>
                <i class="ri-time-line"></i>
                Mon - Sun : 9:00 - 9:00
              </p>
            </div>
          </Col>
          
          <Col lg="12">
          <div className="footer-bottom">
            <p className="section-description">
              <i class="ri-copyright-line"></i>
              Copyright © {year} Garuda Motors. All rights reserved.
            </p>
          </div>
          </Col>
          
          </Row>
        </div>
      </Container>
    </footer>
)}

export default Footer;