import React from "react";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
export default function SimpleSliderV2SM (){

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 2,
        swipeToSlide: true,
        fontSize: "130px",
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #1234; color: #333; fontSize: "130px"`
          );
        }
      };
      return (
        <div style={{marginTop:"50px", fontSize: "10px"}}>
          <Slider {...settings}>
            <div>
                <div style={{paddingTop: "20px", paddingLeft: "10px", borderRadius: "5px", color: "white", width: "95%", overflow:"hidden",height:"370px", backgroundImage: 'url(./img/Social.jpg)'}}>
                    <h5>Reach more customers</h5>
                    <h3>Social Media</h3>
                </div>
                
            </div>
            <div>
            <div style={{paddingTop: "20px", paddingLeft: "10px", borderRadius: "5px", color: "white", width: "95%", overflow:"hidden",height:"370px", backgroundImage: 'url(./img/SEO.jpg)'}}>
                    <h5>Unlock growth online</h5>
                    <h2>SEO</h2>
                </div>
            </div>
            <div>
            <div style={{paddingTop: "20px", paddingLeft: "10px", borderRadius: "5px", color: "white", width: "95%", overflow:"hidden",height:"370px", backgroundImage: 'url(./img/Illustration.jpg)'}}>
                    <h5>Color your dreams</h5>
                    <h3>Illustration</h3>
                </div>
            </div>
            <div>
                <div style={{paddingTop: "20px", paddingLeft: "10px", borderRadius: "5px", color: "white", width: "95%", overflow:"hidden",height:"370px", backgroundImage: 'url(./img/translation-2x.jpg)'}}>
                    <h5>Go global</h5>
                    <h3>Translation</h3>
                </div>
            </div>
            <div>

                <div style={{paddingTop: "20px", paddingLeft: "10px", borderRadius: "5px", color: "white", width: "95%", overflow:"hidden",height:"370px", backgroundImage: 'url(./img/data-entry-2x.jpg)'}}>
                    <h5>Learn your business</h5>
                    <h3>Data Entry</h3>
                </div>
            </div>
            <div>
            <div style={{paddingTop: "20px", paddingLeft: "10px", borderRadius: "5px", color: "white", width: "95%", overflow:"hidden",height:"370px", backgroundImage: 'url(./img/book-covers-2x.jpg)'}}>
                    <h5>Showcase your story</h5>
                    <h3>Book Covers</h3>
                </div>
            </div>
            <div>

                <div style={{paddingTop: "20px", paddingLeft: "10px", borderRadius: "5px", color: "white", width: "95%", overflow:"hidden",height:"370px", backgroundImage: 'url(./img/ai-artists-2x.jpg)'}}>
                    <h5>Add talent to AI</h5>
                    <h3>AI Artists</h3>
                </div>
            </div>
            <div>

                <div style={{paddingTop: "20px", paddingLeft: "10px", borderRadius: "5px", color: "white", width: "95%", overflow:"hidden",height:"370px", backgroundImage: 'url(./img/logo-design-2x.jpg)'}}>
                    <h5>Build your brand</h5>
                    <h3>Logo Design</h3>
                </div>
            </div>
            <div>
                <div style={{paddingTop: "20px", paddingLeft: "10px", borderRadius: "5px", color: "white", width: "95%", overflow:"hidden",height:"370px", backgroundImage: 'url(./img/wordpress-2x.jpg)'}}>
                    <h5>Customize your site</h5>
                    <h3>WordPress</h3>
                </div>
            </div>
            <div>
                <div style={{paddingTop: "20px", paddingLeft: "10px", borderRadius: "5px", color: "white", width: "95%", overflow:"hidden",height:"370px", backgroundImage: 'url(./img/voiceover-2x.jpg)'}}>
                    <h5>Share your message</h5>
                    <h3>Voice Over</h3>
                </div>
            </div>
            <div>
                <div style={{paddingTop: "20px", paddingLeft: "10px", borderRadius: "5px", color: "white", width: "95%", overflow:"hidden",height:"370px", backgroundImage: 'url(./img/animated-explainer-2x.jpg)'}}>
                    <h5>Engage your audience</h5>
                    <h3>Video Explainer</h3>
                </div>
            </div>

          </Slider>
        </div>
      );
    }
