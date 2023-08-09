import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SimpleSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const sliderStyle ={
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems:"center",
    width:"600px",
    height:"100px",
}

  return (
<div style={{ width:"700px"}}>
      <Slider style={{
        width:"500px", 
         alignItems:"center", 
         display:"flex",
         justifyContent: "flex-start", 
         flexDirection:"row",
         fontSize:"20px",
         color:"black",
         position:"relative"}}{...settings}>
        <div>
        <div style={sliderStyle}>
          <img src="/img/heart.png" alt="" style={{    
            width: "130px",
    height:"150px",
    position:"relative",
    top:"20px",
    right:"-50px"}}/>
        <div >
          <p style={{position:"relative", left:"-40px", width:"280px", marginLeft:"50px", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ipsa temporibus incidunt fugit officia eligendi quasi quo necessitatibus nisi quibusdam animi dignissimos unde? Unde veritatis, reprehenderit nobis explicabo atque dolorum.</p>
        </div>
        </div>
        </div>
        <div >
        <div style={sliderStyle}>
        <img src="/img/heart.png" alt="" style={{    width: "130px",
    height:"150px",
    position:"relative",
    top:"20px",
    right:"50px"}}/>
        <div >
          <p style={{position:"relative", right:"150px", width:"280px", marginLeft:"50px", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae inventore eum repellendus laborum. Rerum voluptatem molestiae eius deserunt sunt, aliquam, tempora placeat earum officiis possimus eum sed atque aperiam!</p>
        </div>
        </div>
        </div>
        <div>
        <div style={sliderStyle}>
          <img style={{    width: "130px",
    height:"150px",
    position:"relative",
    top:"20px",
    right:"150px"}}src="/img/heart.png" alt="" />
        <div >
          <p style={{position:"relative", right:"245px", width:"280px", marginLeft:"50px", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae inventore eum repellendus laborum. Rerum voluptatem molestiae eius deserunt sunt, aliquam, tempora placeat earum officiis possimus eum sed atque aperiam!</p>
        </div>
        </div>
        </div>
        <div>
        <div style={sliderStyle}>
          <img src="/img/heart.png" alt="" style={{    width: "130px",
    height:"150px",
    position:"relative",
    top:"20px",
    right:"250px"}}/>
        <div >
          <p style={{position:"relative", right:"350px", width:"280px", marginLeft:"50px", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae inventore eum repellendus laborum. Rerum voluptatem molestiae eius deserunt sunt, aliquam, tempora placeat earum officiis possimus eum sed atque aperiam!</p>
        </div>
        </div>
        </div>
        <div>
        <div style={sliderStyle}>
          <img src="/img/heart.png" alt="" style={{    width: "130px",
    height:"150px",
    position:"relative",
    top:"20px",
    left:"155px"}}/>
        <div >
          <p style={{position:"relative", left:"60px", width:"280px", marginLeft:"50px", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae inventore eum repellendus laborum. Rerum voluptatem molestiae eius deserunt sunt, aliquam, tempora placeat earum officiis possimus eum sed atque aperiam!</p>
        </div>
        </div>
        </div>
      </Slider>
      </div>
  );
};

export default SimpleSlider;