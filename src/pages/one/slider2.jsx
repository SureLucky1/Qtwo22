import Carousel from "nuka-carousel"
import React from 'react';
const Carousell = () => {
    const imgStyle ={
        width: "130px",
        height:"100px",
        backgroundColor:"blue"
    }
    const sliderStyle ={
        display:"flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems:"center",
        width:"600px",
        height:"100px",
        backgroundColor:"blue"
    }
  return (
    <Carousel>
              <div>
          <img src="/img/heart.png" alt="" style={imgStyle}/>
        <div style={sliderStyle}>
          <p style={{width:"350px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa temporibus incidunt fugit officia eligendi quasi quo necessitatibus nisi quibusdam animi dignissimos unde? Unde veritatis, reprehenderit nobis explicabo atque dolorum.</p>
        </div>
        </div>
              <div>
          <img src="/img/heart.png" alt="" style={imgStyle}/>
        <div style={sliderStyle}>
          <p style={{width:"350px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa temporibus incidunt fugit officia eligendi quasi quo necessitatibus nisi quibusdam animi dignissimos unde? Unde veritatis, reprehenderit nobis explicabo atque dolorum.</p>
        </div>
        </div>
              <div>
          <img src="/img/heart.png" alt="" style={imgStyle}/>
        <div style={sliderStyle}>
          <p style={{width:"350px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa temporibus incidunt fugit officia eligendi quasi quo necessitatibus nisi quibusdam animi dignissimos unde? Unde veritatis, reprehenderit nobis explicabo atque dolorum.</p>
        </div>
        </div>
              <div>
          <img src="/img/heart.png" alt="" style={imgStyle}/>
        <div style={sliderStyle}>
          <p style={{width:"350px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa temporibus incidunt fugit officia eligendi quasi quo necessitatibus nisi quibusdam animi dignissimos unde? Unde veritatis, reprehenderit nobis explicabo atque dolorum.</p>
        </div>
        </div>
              <div>
          <img src="/img/heart.png" alt="" style={imgStyle}/>
        <div style={sliderStyle}>
          <p style={{width:"350px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa temporibus incidunt fugit officia eligendi quasi quo necessitatibus nisi quibusdam animi dignissimos unde? Unde veritatis, reprehenderit nobis explicabo atque dolorum.</p>
        </div>
        </div>
    </Carousel>
  )
}

export default Carousell;