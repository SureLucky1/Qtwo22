import React, { useEffect, useState, useReducer} from "react";

import "./Navbarcss.scss";

const initialState = {
  isHovering: false
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
    default:
      return state;
  }
}


  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    function handleMouseEnter() {
      if(window.scrollBy(0, 100)){
        dispatch({ type: 'HOVER' });
      }else{
         dispatch({ type: 'UNHOVER' });
      }
    }
    window.addEventListener('scroll', handleMouseEnter);


  }, []);

  return (
    <div>
    <div className="container">
        <nav className="navbar navbar-expand-sm navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Fiverr Business</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Explore</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">English</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Become a Seller</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sign in</a>
      </li>
      <button>Join</button>
    </ul>
  </div>
  
  <div className={state.isHovering ? "container-fluid-mini" : "container-fluid-mini hover"} >
    <ul className="navbar-nav mini">
      <li className="nav-item">
        <a className="nav-link" href="#">Graphics & Design</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Digital Marketing
</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Writing & Translation</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Video & Animation</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Music & Audio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Programming & Tech</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Photography</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Business</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">AI Services</a>
      </li>
    </ul>
  </div>
</nav>        

    </div>
    </div>
  );
}

export default Navbar;
