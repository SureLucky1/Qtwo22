import React, { useEffect, useReducer, useState, useMemo} from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'

import { faTwitter, faFacebook, faLinkedin, faPinterest, faInstagram} from '@fortawesome/free-brands-svg-icons';
function useMediaQuery(query) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);

  return match;
}

function useMediaQueries() {
  const mini = useMediaQuery("(max-width: 600px)");
  const sm = useMediaQuery("(max-width: 900px)");

  return { mini, sm };
}
function Footer() {
const {mini, sm} = useMediaQueries()
if(mini){
  return (
    <div className="foot">
      <div className="container">
        <div className="Footer">
                    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Categories</Accordion.Header>
        <Accordion.Body>
                      <NavDropdown.Item href="#action3">Graphics & Design</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                      Digital Marketing
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Writing & Translation
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Video & Animation
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Programming & Tech
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Data
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Business
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Lifestyle
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Photography
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Sitemap
                      </NavDropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>About</Accordion.Header>
        <Accordion.Body>
                      <NavDropdown.Item href="#action3">Careers</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                      Press & News
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Partnerships
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Privacy Policy
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Terms of Service
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Intellectual Property Claims
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Investor Relations
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Contact Sales
                      </NavDropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Support</Accordion.Header>
        <Accordion.Body>
                      <NavDropdown.Item href="#action3">Help & Support</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                      Trust & Safety
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Selling on Fiverr
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Buying on Fiverr
                      </NavDropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Community</Accordion.Header>
        <Accordion.Body>
                      <NavDropdown.Item href="#action3">Customer Success Stories</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                      Community Hub
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Forum
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Events
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Blog
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Influencers
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Affiliates
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Podcast
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Invite a Friend
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Become a Seller
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Community Standards
                      </NavDropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>More From Fiverr</Accordion.Header>
        <Accordion.Body>
                      <NavDropdown.Item href="#action3">Fiverr Business</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                      Fiverr Pro
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Fiverr Logo Maker
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Fiverr Guides
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Get Inspired
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Fiverr Select
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      ClearVoice Content Marketing
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Fiverr Workspace Invoice Software
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Learn Online Courses
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Working Not Working
                      </NavDropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    <div className="footer">
      <div className="title">
      <h5><b>fiverr<span style={{color: "rgb(189, 189, 189)"}}>.</span></b></h5>
      <h6>© Fiverr International Ltd. 2023</h6>
      </div>
    <div className="footerInner">
      <div className="Icon">
      <FontAwesomeIcon icon={faTwitter} className="iconItem" />
      <FontAwesomeIcon icon={faFacebook} className="iconItem" />
      <FontAwesomeIcon icon={faLinkedin} className="iconItem" />
      <FontAwesomeIcon icon={faPinterest} className="iconItem" />
      <FontAwesomeIcon icon={faInstagram} className="iconItem" />
      </div>
      <div className="Other">
      <FontAwesomeIcon icon={faGlobe} /><h5>English</h5>
      <h5 style={{marginLeft: "30px"}}>HK$ HKD</h5>
      </div>
    </div>
  </div>
  </div>
    </div>
  );
}
  return (
    <div className="foot">
      <div className="container">
        <div className="Footer">
    <div className="item">
<div>
  <h6>Categories</h6>
  <h4>Graphics & Design</h4>
  <h4>Digital Marketing</h4>
  <h4>Writing & Translation</h4>
  <h4>Video & Animation</h4>
  <h4>Programming & Tech</h4>
  <h4>Data</h4>
  <h4>Business</h4>
  <h4>Lifestyle</h4>
  <h4>Photography</h4>
  <h4>Sitemap</h4>
</div>
<div>
  <h6>About</h6>
  <h4>Careers</h4>
  <h4>Press & News</h4>
  <h4>Partnerships</h4>
  <h4>Privacy Policy</h4>
  <h4>Terms of Service</h4>
  <h4>Intellectual Property Claims</h4>
  <h4>Investor Relations</h4>
  <h4>Contact Sales</h4>
</div>
<div>
  <h6>Support</h6>
  <h4>Help & Support</h4>
  <h4>Trust & Safety</h4>
  <h4>Selling on Fiverr</h4>
  <h4>Buying on Fiverr</h4>
</div>
<div>
  <h6>Community</h6>
  <h4>Customer Success Stories</h4>
  <h4>Community Hub</h4>
  <h4>Forum</h4>
  <h4>Events</h4>
  <h4>Blog</h4>
  <h4>Influencers</h4>
  <h4>Affiliates</h4>
  <h4>Podcast</h4>
  <h4>Invite a Friend</h4>
  <h4>Become a Seller</h4>
  <h4>Community Standards</h4>
</div>
<div>
  <h6>More From Fiverr</h6>
  <h4>Fiverr Business</h4>
  <h4>Fiverr Pro</h4>
  <h4>Fiverr Logo Maker</h4>
  <h4>Fiverr Guides</h4>
  <h4>Get Inspired</h4>
  <h4>Fiverr Select</h4>
  <h4>ClearVoice
Content Marketing</h4>
  <h4>Fiverr Workspace
Invoice Software</h4>
  <h4>Learn
Online Courses</h4>
  <h4>Working Not Working</h4>
</div>
  </div>
    </div>
    <div className="footer">
      <div className="title">
      <h5><b>fiverr<span style={{color: "rgb(189, 189, 189)"}}>.</span></b></h5>
      <h6>© Fiverr International Ltd. 2023</h6>
      </div>
    <div className="footerInner">
      <div className="Icon">
      <FontAwesomeIcon icon={faTwitter} className="iconItem" />
      <FontAwesomeIcon icon={faFacebook} className="iconItem" />
      <FontAwesomeIcon icon={faLinkedin} className="iconItem" />
      <FontAwesomeIcon icon={faPinterest} className="iconItem" />
      <FontAwesomeIcon icon={faInstagram} className="iconItem" />
      </div>
      <div className="Other">
      <FontAwesomeIcon icon={faGlobe} /><h5>English</h5>
      <h5 style={{marginLeft: "30px"}}>HK$ HKD</h5>
      </div>
    </div>
  </div>
  </div>
    </div>
  );
}

export default Footer;