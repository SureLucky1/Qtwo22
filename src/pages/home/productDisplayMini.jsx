import React from "react";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
export default function ShowInspiringMini(){
    const Inner = {
        display:"flex",
        rowDirection: "row",
        justifyContent: "flex-start",
        alignItems:"flex-start",
        position: "relative",
        left: "15px",
        marginTop: "18px"
    }

const circle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
     marginRight: "13px"
}
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 1,
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
                <img style={{
                    paddingTop: "0px", 
                    paddingLeft: "0px", 
                    borderRadius: "6.5px", 
                    marginLeft: "5px",
                    color: "white", 
                    width: "100vw", 
                    height:"300px",
                    backgroundSize: "cover", 
                    backgroundImage: "url(./img/fernandobengua.jpg)"}} />
                    <div style={Inner}>
                        <img src="./img/db111eb4-c119-42b4-9a1d-9116601f3d22.jpg" style={circle}/>
                        <div>
                        <h5>Social Media Design</h5>
                    <h6>by fornandobengua</h6>
                    </div>            
                    </div>            
                    </div>
            <div>
            <img style={{
                paddingTop: "0px", 
                paddingLeft: "0px", 
                borderRadius: "6.5px", 
                marginLeft: "5px",
                color: "white", 
                width: "100vw", 
                height:"300px",
                backgroundSize: "cover", 
                backgroundImage: "url(./img/annapietrangeli.jpg)"}} />
                    <div style={Inner}>
                        <img src="./img/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg" style={circle}/>
                        <div>
                        <h5>Book Design</h5>
                    <h6>by annapietrangeli</h6>
                    </div>
                    </div>
                
            </div>
            <div>
            <img style={{
                paddingTop: "0px", 
                paddingLeft: "0px", 
                borderRadius: "6.5px", 
                marginLeft: "5px",
                color: "white", 
                width: "100vw", 
                height:"300px",
                backgroundSize: "cover", 
                backgroundImage: "url(./img/mijalzagier.jpg)"}} />
                    <div style={Inner}>
                    <img src="./img/750ccab0-8a64-4c91-b9a4-d10039dbf79c.jpg" style={circle}/>
                    <div>
                        <h5>Packaging Design</h5>
                    <h6>by mijalzagier</h6>
                    </div>            
                    </div>            
            </div>
            <div>
            <img style={{
                paddingTop: "0px", 
                paddingLeft: "0px", 
                borderRadius: "6.5px", 
                marginLeft: "5px",
                color: "white", 
                width: "100vw", 
                height:"300px",
                backgroundSize: "cover", 
                backgroundImage:  "url(./img/eveeelin.jpg)"}} />
                    <div style={Inner}>
                    <img src="./img/f79ede47-da5f-440a-bf23-57ed9ef7d363.jpg" style={circle}/>
                    <div>
                    <h5>Logo Design</h5>
                    <h6>by eveeelin</h6>
</div>
</div>
            </div>
            <div>

            <img style={{
                paddingTop: "0px", 
                paddingLeft: "0px", 
                borderRadius: "6.5px", 
                marginLeft: "5px",
                color: "white", 
                width: "100vw", 
                height:"300px",
                backgroundSize: "cover", 
                backgroundImage: 'url(./img/skydesigner.jpg)'}} />
                    <div style={Inner}>
                        <img src="./img/2bb8af3c-4cce-42a8-a699-f11177524084.jpg" style={circle}/>
                        <div>
                        <h5>Web & Mobile Design</h5>
                    <h6>by skydesigner</h6>
   </div>  
   </div>  
            </div>
            <div>
            <img style={{
                paddingTop: "0px", 
                paddingLeft: "0px", 
                borderRadius: "6.5px", 
                marginLeft: "5px",
                color: "white", 
                width: "100vw", 
                height:"300px",
                backgroundSize: "cover", 
                backgroundImage: 'url(./img/bruno_malagrino.jpg)'}} />
                    <div style={Inner}>
                    <img src="./img/AF1BF970-07CA-454B-8AF1-2F3E06838C8B.jpg" style={circle}/>
                    <div>
                        <h5>Logo Design</h5>
                    <h6>by bruno_malagrino</h6>
         </div>
         </div>
            </div>
            <div>

            <img style={{
                paddingTop: "0px", 
                paddingLeft: "0px", 
                borderRadius: "6.5px", 
                marginLeft: "5px",
                color: "white", 
                width: "100vw", 
                height:"300px",
                backgroundSize: "cover", 
                backgroundImage: 'url(./img/christophbrandl.jpg)'}} />
                    <div style={Inner}>
                    <img src="./img/6b4a9867-ad06-415f-b307-11177ae30fdd.jpg" style={circle}/>
                    <div>
                        <h5>Illustration</h5>
                    
                    <h6>by christophbrandl</h6>
                    </div>
 
            </div>
            </div>
            <div>

            <img style={{
                paddingTop: "0px", 
                paddingLeft: "0px", 
                borderRadius: "6.5px", 
                marginLeft: "5px",
                color: "white", 
                width: "100vw", 
                height:"300px",
                backgroundSize: "cover", 
                backgroundImage: 'url(./img/passionshake.jpg)'}} />
                    <div style={Inner}>
                    <img src="./img/74e5ab33-a5fc-40ae-9cee-a91b23e80237.jpg" style={circle}/>
                    <div>
                        <h5>Product Photography</h5>
                    <h6>by passionshake</h6>
  </div>  
  </div>  
            </div>
            <div>
            <img style={{
                paddingTop: "0px", 
                paddingLeft: "0px", 
                borderRadius: "6.5px", 
                marginLeft: "5px",
                color: "white", 
                width: "100vw", 
                height:"300px",
                backgroundSize: "cover", 
                backgroundImage: 'url(./img/noneyn.jpg)'}} />
                    <div style={Inner}>
                    <img src="./img/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5.jpg" style={circle}/>
                    <div>
                        <h5>Portraits & Caricatures</h5>
                    <h6>by noneyn</h6>

       </div>     
       </div>     
       </div>
            <div>
            <img style={{
                paddingTop: "0px", 
                paddingLeft: "0px", 
                borderRadius: "6.5px", 
                marginLeft: "5px",
                color: "white", 
                width: "100vw", 
                height:"300px",
                backgroundSize: "cover", 
                backgroundImage: 'url(./img/spickex.jpg)'}} />
                    <div style={Inner}>
                        <img src="./img/fiverr_profile.jpg" style={circle}/>
                        <div>
                        <h5>Flyer Design</h5>
                    <h6>by spickex</h6>
      
</div>            
</div>            
</div>
            <div>
            <img style={{
                paddingTop: "0px", 
                paddingLeft: "0px", 
                borderRadius: "6.5px", 
                marginLeft: "5px",
                color: "white", 
                width: "100vw", 
                height:"300px",
                backgroundSize: "cover", 
                backgroundImage: 'url(./img/lamonastudio-img.jpg)'}} />
                    <div style={Inner}>
                        <img src="./img/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg" style={circle}/>
                        <div>
                        <h5>Animated GIFs</h5>
                    <h6>by lamonastudio</h6>
 </div>           
 </div>           
 </div>

          </Slider>
        </div>
      );
    }
