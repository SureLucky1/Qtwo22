import React from "react";
import Slider from "react-slick";

export default function AdaptiveHeightV2(){

    var settings = {
      className: "",
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
const display = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}
const display2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft:"70px",
    marginTop:"50px"
}
    return (
      <div>
        <Slider {...settings}>
          <div>
          <div style={display}>
            <embed src="./img/rb8jtakrisiz0xtsffwi.mp4" type="video/mp4" style={{width: "730px", height: "410px", overflow:"hidden",zIndex: 99}} autoPlay="false"/>
            <div style={display2}>
            <div>
            <h3>Brighid Gannon (DNP, PMHNP-BC), Co-Founder</h3><span>Lavender</span>
            </div>
            <p style={{fontSize: "28px",color:"green", fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>&quot;We used Fiverr for SEO, our logo, website, copy, animated videos - literally 
                Everything. It was like working with a human right next to you versus being across the world.&quot;</p>
          </div>
          </div>
          </div>
          <div>
          <div style={display}>
            <embed src="./img/yja2ld5fnolhsixj3xxw.mp4" type="video/mp4" style={{width: "730px", height: "410px",overflow:"hidden",zIndex: 99}} autoPlay="false"/>
          <div style={display2}>
          
            <div>
            <h3>Kay Kim, Co-Founder</h3><span>rooted</span>
            </div>
            <p style={{fontSize: "28px",color:"green", fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>It&quot;s extremely exciting that Fiverr has freelancers from all over the world = it broadens the talent pool. 
                One of the best things about Fiverr is that while we&quot;re sleeping, someone&quot;s working</p>
          </div>
          </div>
          </div>
          <div>
          <div style={display}>
            <embed src="./img/bsncmkwya3nectkensun.mp4" type="video/mp4" style={{width: "730px", height: "410px", marginLeft:"auto",overflow:"hidden",zIndex: 99}} autoPlay="false"/>
          <div style={display2}>
          
            <div>
            <h3>Tim and Dan Joo, Co-Founders</h3><span>HERFEST</span>
            </div>
            <p style={{fontSize: "28px",color:"green", fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>&quot;When you want to create a business bigger than yourself, you need a lot of help. That&quot;s what Fiverr does.&quot;</p>
          </div>
          </div>
          </div>
          <div>
          <div style={display}>
            <embed src="./img/plfa6gdjihpdvr10rchl.mp4" type="video/mp4" style={{width: "730px", height: "410px", marginLeft:"auto",overflow:"hidden",zIndex: 99}} autoPlay="false"/>
          <div style={display2}>
          
            <div>
            <h3>Caitlin Tormey, Chief Commercial Officer</h3><span>NAADAM</span>
            </div>
            <p style={{fontSize: "28px",color:"green", fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>&quot;We&quot;ve used Fiverr for Shopify web Development, graphic design, and backend web development. 
                Working with Fiverr makes my job a little easier every day.&quot;</p>
          </div>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
