import React, { useEffect, useReducer, useState, useMemo} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
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
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import Accordion from 'react-bootstrap/Accordion';
const initialState = {
  isHovering: false,
  isMoving: false
};


const Detail = {

}
function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2" style={{position:"relative", right:"30px", fontSize:"30px", background:"none", border:"none"}}>
      <FontAwesomeIcon icon={faBars} style={{color: state.isHovering ? "black" : "white"}} />
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Button>Join Fiverr</Button>
        </Offcanvas.Header>
        <Offcanvas.Body style={{display:"flex", flexDirection:"column"}}>
                  
                    <Nav.Link href="#action1">Sign in</Nav.Link>
                    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Browse categories</Accordion.Header>
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Explore</Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Business solutions</Accordion.Header>
        <Accordion.Body>
                      <NavDropdown.Item href="#action3">Fiverr Pro</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Fiverr Certified
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action5">
                        Fiverr Enterprise
                      </NavDropdown.Item>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
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

               
                  <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>English</Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>HK$ HKD</Accordion.Header>
        <Accordion.Body>
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
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
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

    const sm = useMediaQuery("(max-width: 900px)");
    const md = useMediaQuery("(max-width: 1400px)");
  
    return {  md, sm};
}


export default function Predefined(){
 const { md, sm} = useMediaQueries();
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
   
 const [isDragging, setIsDragging] = useState(false);

 const handleIcons = (tabsBox, arrowIcons) => {
   let scrollVal = Math.round(tabsBox.scrollLeft);
   let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;

   arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
   arrowIcons[1].parentElement.style.display = maxScrollableWidth > scrollVal? "flex" : "none";
 }

 const handleIconClick = (icon, tabsBox, arrowIcons) => {
   tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
   setTimeout(() => { handleIcons(tabsBox, arrowIcons) }, 50);
 }

 const handleTabClick = (tab, tabsBox) => {
   tabsBox.querySelector(".active").classList.remove("active");
   tab.classList.add("active");
 }

 const handleMouseDown = () => {
   setIsDragging(true);
 }

 const handleMouseMove = (e, tabsBox) => {
   if(!isDragging) return;
   tabsBox.classList.add("dragging");
   tabsBox.scrollLeft -= e.movementX;
 }

 const handleMouseUp = (tabsBox) => {
   setIsDragging(false);
   tabsBox.classList.remove("dragging");
 }

 useEffect(() => {
   const tabsBox = document.querySelector(".navbar-nav.mini");
   const allTabs = document.querySelectorAll(".tab");
   const arrowIcons = document.querySelectorAll(".icon i");

   arrowIcons.forEach(icon => {
     icon.addEventListener("click", () => handleIconClick(icon, tabsBox, arrowIcons));
   });

   allTabs.forEach(tab => {
     tab.addEventListener("click", () => handleTabClick(tab, tabsBox));
   });

   tabsBox.addEventListener("mousedown", handleMouseDown);
   tabsBox.addEventListener("mousemove", (e) => handleMouseMove(e, tabsBox));
   document.addEventListener("mouseup", () => handleMouseUp(tabsBox));
 }, [handleIconClick]);

 if(sm){
    return (
      <div onMouseEnter={()=>{setGraphic(false);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
        <div className={pathname !== "/one" ? state.isHovering ? "nav hover" : "nav" : "nav hoverr"}>
      <div className="container" >
          <nav className="navbar navbar-expand-sm navbar-light" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
    <div className="container-fluid" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
    {['start'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    <Link to="/"><h2 className={state.isHovering || pathname !== "/" ? "fiverr hover" : "fiverr"} ><b>fiverr<span style={{color:"green"}}>.</span></b></h2></Link>
      <input type="text" placeholder="What service are you looking for today?" className={pathname !== "/one" ? state.isHovering ? "fiverrSearch hover" : "fiverrSearch" : "fiverrSearch hover"}/>
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className={state.isHovering || pathname !== "/" ? "nav-link hover" : "nav-link"} href="#">Sign in</a>
    </li>
    <button className={state.isHovering || pathname !== "/" ? "button hover" : "button"}>Join</button>
     </ul>
    </div>
    
  
  </nav>
  <div className={pathname !== "/one" ? state.isMoving ? "small hover" : "small" : "small hoverr"} >
    <div className="container-fluid-mini" onMouseEnter={()=>{setGraphic(false);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
    <div className="icon">
       <i id="left"className="fa-solid fa-angle-left"></i>
     </div>
     <ul className="navbar-nav mini">
     <li className="tab" ><Link className="link menuLink" to="/one" onLoad={handleTabClick} onMouseEnter={()=>{setGraphic(true);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
               Graphics & Design
             </Link></li>
       <li className="tab active" ><Link onLoad={handleTabClick} className="link menuLink" to="/one" onMouseEnter={()=>{setDigital(true);setAiService(false);setBusiness(false);setGraphic(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
               Digital Marketing
             </Link></li>
       <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setWriting(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
               Writing & Translation
             </Link></li>
       <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setVideo(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
               Video & Animation
             </Link></li>
       <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setMusic(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setProgramming(false);setPhotography(false);}}>
               Music & Audio
             </Link></li>
       <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setProgramming(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setPhotography(false);}}>
               Programming & Tech
             </Link></li>
       <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setPhotography(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);}}>
                Photography
              </Link></li>
       <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setBusiness(true);setAiService(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
             Business
           </Link></li>
     <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setAiService(true);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
             AI Services
           </Link></li>
   </ul>
   <div className="icon">
     <i id="right" className="fa-solid fa-angle-right"></i>
    </div>
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
   )
  }else if(md){
    return (
      <div onMouseEnter={()=>{setGraphic(false);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
        <div className={pathname !== "/one" ? state.isHovering ? "nav hover" : "nav" : "nav hoverr"}>
      <div className="container" >
          <nav className="navbar navbar-expand-sm navbar-light" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
    <div className="container-fluid" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
    <NavbarCollapse />
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
    <div className="icon">
        <i id="left" className="fa-solid fa-chevron-left"></i>
      </div>
      <ul className="navbar-nav mini">
      <li className="tab" ><Link className="link menuLink" to="/one" onLoad={handleTabClick} onMouseEnter={()=>{setGraphic(true);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
                Graphics & Design
              </Link></li>
        <li className="tab active" ><Link onLoad={handleTabClick} className="link menuLink" to="/one" onMouseEnter={()=>{setDigital(true);setAiService(false);setBusiness(false);setGraphic(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
                Digital Marketing
              </Link></li>
        <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setWriting(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
                Writing & Translation
              </Link></li>
        <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setVideo(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
                Video & Animation
              </Link></li>
        <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setMusic(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setProgramming(false);setPhotography(false);}}>
                Music & Audio
              </Link></li>
        <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setProgramming(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setPhotography(false);}}>
                Programming & Tech
              </Link></li>
        <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setPhotography(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);}}>
                Photography
              </Link></li>
        <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setBusiness(true);setAiService(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
                Business
              </Link></li>
        <li className="tab" ><Link onLoad={handleTabClick}className="link menuLink" to="/one" onMouseEnter={()=>{setAiService(true);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
                AI Services
              </Link></li>
      </ul>
      <div className="icon">
        <i id="right" className="fa-solid fa-chevron-right"></i>
      </div>
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