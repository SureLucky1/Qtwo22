
import Predefined from './NavbarPar2'
import React, { useEffect, useReducer, useState, useMemo} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Nav.scss";
import { Link, useLocation } from "react-router-dom";
import Graphic from "./Graphic";
import Digital from "./Digital";
import Writing from "./Wiriting";
import Video from "./Video";
import Music from "./Music";
import Programming from "./Programming";
import Photography from "./Photography";
import Business from "./Business";
import AiService from "./AI Services";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const initialState = {
  isHovering: false,
  isMoving: false
};

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
    const ssmm = useMediaQuery("(max-width: 600px)");

    const md = useMediaQuery("(max-width: 1400px)");
    return { ssmm, md};
}
function Predefined2(){
 const { ssmm, md } = useMediaQueries();
 const { pathname } = useLocation();
 const [graphic, setGraphic] = useState(false);  
 const [digital, setDigital] = useState(false);  
 const [writing, setWriting] = useState(false);  
 const [video, setVideo] = useState(false);  
 const [music, setMusic] = useState(false);  
 const [programming, setProgramming] = useState(false);  
 const [photography, setPhotography] = useState(false);  
 const [business , setBusiness] = useState(false);  
 const [aiService , setAiService] = useState(false);
 function reducer(state, action) {
    switch (action.type) {
      case 'HOVER':
        return {
          ...state,
          isHovering: true
        };
      case 'UNHOVER':
        return {
          ...state,
          isHovering: false
        };
      case 'Move':
        return {
          ...state,
          isMoving: true
        };
      case 'UnMove':
        return {
          ...state,
          isMoving: false
        };
      default:
        return state;
    }
  }
  
  
    const [state, dispatch] = useReducer(reducer, initialState);
  
    useEffect(() => {
  
      function handleMouseEnter() {
        if(window.scrollY > 0){
          dispatch({ type: 'HOVER' });
        }else{
           dispatch({ type: 'UNHOVER' });
        }
      }
      function handleMiniBar() {
        if(window.scrollY > 200){
          dispatch({ type: 'Move' });
        }else{
           dispatch({ type: 'UnMove' });
        }
      }
      window.addEventListener('scroll', handleMouseEnter);
      window.addEventListener('scroll', handleMiniBar);
  
  
    }, []);
 if(ssmm){
    return (
      <div className="another">
        {[false].map((expand) => (
          <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
            <Container fluid>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <Button>Join Fiverr</Button>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Sign in</Nav.Link>
                    <NavDropdown
                      title="Browse categories"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
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
                      Music & Audio
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Programming & Tech
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Photography
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Business
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                      Ai Services
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Explore"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Discover</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Guides
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Learn
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Logo Maker
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Community
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Podcast
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Blog
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Fiverr Workspace
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Business solutions"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">Fiverr Pro</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Fiverr Certified
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Fiverr Enterprise
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                  <Navbar.Brand href="#">General</Navbar.Brand>
                  <hr />
                  <Navbar.Brand href="#">Home</Navbar.Brand>

                  <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                      title="Business solutions"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">English</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Deutsch
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Espanol
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Francais
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Portugues
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Italiano
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Nederlands
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="HK$ HKD"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action3">USD - US$</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        EUR - C
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        GBP - 
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        AUD - A$
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        CAD - CA$
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        ILS - 
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        BRL - R$
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        HKD - HK$
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        SEK - SEK
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        NZD - NZ$
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        SGD - SGD
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        CHF - CHF
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        ZAR - ZAR
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        CNY - CNY
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        INR - 
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        MYR - MYR
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        MXN - MX$
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        PKR - PKR
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        PHP - 
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        TWD - NT$
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        THB - THB
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        TRY - TRY
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        AED - AED
                      </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            <Navbar.Brand href="#">fiverr<span>.</span></Navbar.Brand>
            <Navbar.Brand href="#">Join</Navbar.Brand>
            </Container>
          </Navbar>
        ))}
      </div>
    )
}else if(md){
    return (
        <Predefined />
        )
    }
    return <div onMouseEnter={()=>{setGraphic(false);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
        <div className={pathname !== "/one" ? state.isHovering ? "nav hover" : "nav" : "nav hoverr"}>
    <div className="container" >
        <nav className="navbar navbar-expand-sm navbar-light" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
  <div className="container-fluid" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
  <Link to="/"><h2 className={state.isHovering || pathname !== "/" ? "fiverr hover" : "fiverr"} ><b>fiverr<span style={{color:"green"}}>.</span></b></h2></Link>
    <input type="text" placeholder="What service are you looking for today?" className={pathname !== "/one" ? state.isHovering ? "fiverrSearch hover" : "fiverrSearch" : "fiverrSearch hover"}/>
    <div style={{
      }} className={state.isHovering || pathname !== "/" ? "searchIcon hover" : "searchIcon"}><FontAwesomeIcon icon={faMagnifyingGlass} size="30px"/></div>
    <ul className="navbar-nav">
    
      <li className="nav-item">
        <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} href="#">Fiverr Business</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} href="#">Explore</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} href="#">English</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} href="#">Become a Seller</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} href="#">Sign in</a>
      </li>
      <button className={state.isHovering || pathname !== "/" ? "button hover" : "button"}>Join</button>
    </ul>
  </div>
  

</nav>
<div className={pathname !== "/one" ? state.isMoving ? "small hover" : "small" : "small hoverr"} >
  <div className="container-fluid-mini" onMouseEnter={()=>{setGraphic(false);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
    <ul className="navbar-nav mini">
    <Link className="link menuLink" to="/one" onMouseEnter={()=>{setGraphic(true);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Graphics & Design
            </Link>
             
            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setDigital(true);setAiService(false);setBusiness(false);setGraphic(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Digital Marketing
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setWriting(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Writing & Translation
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setVideo(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Video & Animation
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setMusic(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setProgramming(false);setPhotography(false);}}>
              Music & Audio
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setProgramming(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setPhotography(false);}}>
              Programming & Tech
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setPhotography(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);}}>
              Photography
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setBusiness(true);setAiService(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Business
            </Link>

            <Link className="link menuLink" to="/one" onMouseEnter={()=>{setAiService(true);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              AI Services
            </Link>
    </ul>
    
  </div>
    </div>
    </div>
    {graphic === true && <Graphic  setGraphic={setGraphic}/>}
    {digital === true && <Digital  setDigital={setDigital}/>}
    {writing === true && <Writing setWriting={setWriting}/>}
    {video === true && <Video setVideo={setVideo}/>}
    {music === true && <Music setMusic={setMusic}/>}
    {programming === true && <Programming setProgramming={setProgramming}/>}
    {photography === true && <Photography setPhotography={setPhotography}/>}
    {business === true && <Business setBusiness={setBusiness}/>}
    {aiService === true && <AiService setAiService={setAiService}/>}
    </div>
    </div>
  ;
}
function Navigationbar() {


  return (
    <Predefined2 />
  )
}

export default Navigationbar;
