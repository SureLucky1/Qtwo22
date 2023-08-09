import React, { useEffect, useReducer} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Navbarcss.css";
import { Link } from "react-router-dom";

const initialState = {
  isHovering: false,
  isMoving: false
};


function Navbar() {
  
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
    <div >
      <div className={state.isHovering ? "nav hover" : "nav"}>
    <div className="container" >
        <nav className="navbar navbar-expand-sm navbar-light">
  <div className="container-fluid">
    <h1 style={{position: "relative", right:"40px", height:"35px"}}><b>fiverr.</b></h1>
    <input type="text" placeholder="What service are you looking for today?" style={{ right: "15px", width: "600px", fontSize: "20px", height:"44px"}} />
    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
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
<div className={state.isMoving ? "small hover" : "small"}>
  <div className="container-fluid-mini">
    <ul className="navbar-nav mini">
    <Link className="link menuLink" to="/graphics">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="one">
              Digital Marketing
            </Link>

            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Photography
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
    </ul>
  </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Navbar;
