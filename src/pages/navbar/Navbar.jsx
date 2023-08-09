import React, { useEffect, useReducer, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Navbarcss.css";
import "./RelativeNav.css";
import { Link } from "react-router-dom";
import Graphic from "./Graphic";
import Digital from "./Digital";
import Writing from "./Wiring";
import Video from "./Video";
import Music from "./Music";
import Programming from "./Programming";
import Photography from "./Photography";
import Business from "./Business";
import AiService from "./AI Services";

const initialState = {
  isHovering: false,
  isMoving: false
};


const Detail = {

}
function Navbar({position}) {

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

  return position == 'fixed !important' ? (
    <div onMouseEnter={()=>{setGraphic(false);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
      <div className={state.isHovering ? "nav hover" : "nav"}>
    <div className="container" >
        <nav className="navbar navbar-expand-sm navbar-light" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
  <div className="container-fluid" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
    <h2 className={state.isHovering ? "fiverr hover" : "fiverr"}><b>fiverr<span style={{color:"green"}}>.</span></b></h2>
    <input type="text" placeholder="What service are you looking for today?" className={state.isHovering ? "fiverrSearch hover" : "fiverrSearch"}/>
    <div style={{
      }} className={state.isHovering ? "searchIcon hover" : "searchIcon"}><FontAwesomeIcon icon={faMagnifyingGlass} size="30px"/></div>
    <ul className="navbar-nav">
    
      <li className="nav-item">
        <a className={state.isHovering ? "nav-link hover" : "nav-link"} href="#">Fiverr Business</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering ? "nav-link hover" : "nav-link"} href="#">Explore</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering ? "nav-link hover" : "nav-link"} href="#">English</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering ? "nav-link hover" : "nav-link"} href="#">Become a Seller</a>
      </li>
      <li className="nav-item">
        <a className={state.isHovering ? "nav-link hover" : "nav-link"} href="#">Sign in</a>
      </li>
      <button className={state.isHovering ? "button hover" : "button"}>Join</button>
    </ul>
  </div>
  

</nav>
<div className={state.isMoving ? "small hover" : "small"} >
  <div className="container-fluid-mini" onMouseEnter={()=>{setGraphic(false);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
    <ul className="navbar-nav mini">
    <Link className="link menuLink" to="/graphics" onMouseEnter={()=>{setGraphic(true);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Graphics & Design
            </Link>
             
            <Link className="link menuLink" to="one" onMouseEnter={()=>{setDigital(true);setAiService(false);setBusiness(false);setGraphic(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Digital Marketing
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setWriting(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Writing & Translation
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setVideo(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Video & Animation
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setMusic(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setProgramming(false);setPhotography(false);}}>
              Music & Audio
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setProgramming(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setPhotography(false);}}>
              Programming & Tech
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setPhotography(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);}}>
              Photography
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setBusiness(true);setAiService(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Business
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setAiService(true);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
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
  ):(
    <div onMouseEnter={()=>{setGraphic(false);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
      <div className="navv hover">
    <div className="container" >
        <nav className="navbar navbar-expand-sm navbar-light" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
  <div className="container-fluid" onMouseLeave={()=>{setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
    <h2 className="fiverr hover"><b>fiverr<span style={{color:"green"}}>.</span></b></h2>
    <input type="text" placeholder="What service are you looking for today?" className="fiverrSearch"/>
    <div style={{
      }} className="searchIcon hover"><FontAwesomeIcon icon={faMagnifyingGlass} size="30px"/></div>
    <ul className="navbar-nav">
    
      <li className="nav-item">
        <a className="nav-link hover" href="#">Fiverr Business</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hover" href="#">Explore</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hover" href="#">English</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hover" href="#">Become a Seller</a>
      </li>
      <li className="nav-item">
        <a className="nav-link hover" href="#">Sign in</a>
      </li>
      <button className="button hover">Join</button>
    </ul>
  </div>
  

</nav>
<div className="small hover" >
  <div className="container-fluid-mini" onMouseEnter={()=>{setGraphic(false);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
    <ul className="navbar-nav mini">
    <Link className="link menuLink" to="/graphics" onMouseEnter={()=>{setGraphic(true);setAiService(false);setBusiness(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Graphics & Design
            </Link>
             
            <Link className="link menuLink" to="one" onMouseEnter={()=>{setDigital(true);setAiService(false);setBusiness(false);setGraphic(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Digital Marketing
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setWriting(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Writing & Translation
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setVideo(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Video & Animation
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setMusic(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setProgramming(false);setPhotography(false);}}>
              Music & Audio
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setProgramming(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setPhotography(false);}}>
              Programming & Tech
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setPhotography(true);setAiService(false);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);}}>
              Photography
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setBusiness(true);setAiService(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
              Business
            </Link>

            <Link className="link menuLink" to="/" onMouseEnter={()=>{setAiService(true);setBusiness(false);setGraphic(false);setDigital(false);setWriting(false);setVideo(false);setMusic(false);setProgramming(false);setPhotography(false);}}>
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
  );
}

export default Navbar;
