
import "./HomeRevised.css";
import React,{useState, useEffect, useMemo} from "react";
import SimpleSlider from "./Slider";
import SimpleSliderV2Mini from "./SliderV2Mini";
import SimpleSliderV2SM from "./SliderV2SM";
import SimpleSliderV2MD from "./SliderV2MD";
import SimpleSliderV2SMD from "./SliderV2SMD";
import ShowInspiring from "./productDisplay";
import ShowInspiringSM from "./productDisplaySM";
import ShowInspiringMini from "./productDisplayMini";
import ShowInspiringMD from "./productDisplayMD";
import AdaptiveHeight from "./VideoSlide";
import AdaptiveHeightV2 from "./VideoSlideV2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
  const mini = useMediaQuery("(max-width: 600px)");
  const sm = useMediaQuery("(max-width: 800px)" && "(max-width: 900px)");
  const smd = useMediaQuery("(max-width: 1060px)");
  const md = useMediaQuery("(max-width: 1250px)");

  return { mini, sm, md, smd };
}
function PreSet(){
  const { mini, sm, md, smd } = useMediaQueries();

  const colorList = ["black", "rgb(23, 95, 5)", "rgb(255,20,147)", "rgb(128,0,0)", "green", "rgb(139,69,19)"];
  const [color, setColor] = useState(colorList[0]);
  const [ColorIndex, setColorIndex] = useState(0);
  
  useEffect(() => {
    const myInterval = setInterval(() => {
    setColorIndex((ColorIndex) => {if (ColorIndex === colorList.length - 1) {
               console.log(ColorIndex);
              ColorIndex = 0;
           }else {
           ColorIndex++;
           } return ColorIndex});
    }, 4500);
    return () => clearInterval(myInterval);
  }, [colorList.length]);
  
  useEffect(() => {
    setColor(colorList[ColorIndex]);
   }, [ColorIndex]);
  
    const styles = {
      backgroundImage: 'url(./img/bg-signup-1400-x1.jpg)',
      backgroundSize: 'contain',
      backgroundPosition: 'center center',
  height: "370px",
  width:"100%",
  color: "white"
  
    };
    const stylesSM = {
  height: "270px",
  width:"100%",
  color: "white"
  
    };
    const style = {
      backgroundImage: 'url(./img/logo-maker-banner-wide-desktop-1352-2x.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
  height: "330px",
  width:"100vw",
  color: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "30px 0px",
  overflow:"hidden",
    margin: "100px 0px",
   backgroundColor: "rgb(110, 110, 255)"
    };
    const styleSm = {
      backgroundImage: 'url(./img/logo-maker-banner-tablet-852-2x.jpg)',
      backgroundSize: 'contain',
      backgroundPosition: 'center top',
  height: "75vw",
  width:"120vw",
  color: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  overflow:"hidden",
  padding: "30px 0px",
    margin: "100px 0px",
   backgroundColor: "rgb(110, 110, 255)"
    };
    const styleOne = {
      backgroundImage: 'url(./img/business-desktop-870-x1.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
  height: "500px",
  width:"500px"
    };
    if(mini){
    return (
      <div className="container">
  <div>
   <div className="first Row" style={{backgroundColor: color,  overflow: "hidden"}}>
   <div className="container">
     <div className="col-lg-6">
       <h1><b>Find the right</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>freelance</span><span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}> service</span>, <b>right away</b></h1>
       <div className="Input">
       <input type="text" className="firstRow-input" placeholder="Search for any service..."/>
       <div >
       <FontAwesomeIcon icon={faMagnifyingGlass} />
       </div>
       </div>
     </div>

   </div>
   </div>
    <div className="secondRow">
      <img src="./img/Meta.png" style={{width: "65px", height: "55px"}}/>
      <img src="./img/google.png" style={{width: "65px", height: "55px"}}/>
      <img src="./img/Netflix.png" style={{width: "65px", height: "55px"}}/>
      <img src="./img/P&G.png" style={{width: "65px", height: "55px"}}/>
      <img src="./img/Paypal.png" style={{width: "65px", height: "55px"}}/>
    </div>
    <div className="thirdRow">
      <div className="container">
      <h1 style={{position: "relative", left: "50px"}}>Popular services</h1>
      <div style={{width: "100vw", height:"auto", paddingLeft:"0px"}}>
      <SimpleSliderV2Mini/>
      </div>
      </div>
    </div>
  
    <div className="fourthRow" style={{backgroundColor: "rgb(180, 255, 236)"}}>
    <div className="container">
      <div className="innercontainer">
        <h2>The Best part? Everything.</h2>
        <div>
          <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Stick to your budget</b></h5>
          </div>
          <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Get quality work done quickly</b></h5>
          </div>
          <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Pay when you&aposre happy</b></h5>
          </div>
          <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Count on 24/7 support</b></h5>
          </div>
          <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
        </div>
      </div>
      <embed src="./img/vmvv3czyk2ifedefkau7.mp4" type="video/mp4"/>
    </div>
    </div>
  
    <div className="fiveRow">
    <div className="container">
      <h1>You need it, we&apos;ve got it</h1>
      <div >
        <div>
          <div>
          <img src="./img/graphics-design.91dfe44 (1).svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Graphics & Design</span>
        </div>
        <div>
        <div>
          <img src="./img/online-marketing.a3e9794.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Digital Marketing</span>
        </div>
        <div>
        <div>
          <img src="./img/writing-translation.a787f2f (1).svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Writing & Translation</span>
        </div>
        <div>
        <div>
          <img src="./img/video-animation.1356999 (1).svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Video & Animation</span>
        </div>
        <div>
        <div>
          <img src="./img/music-audio.ede4c90.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Music & Audio</span>
        </div>

        <div>
        <div>
          <img src="./img/programming.6ee5a90 (1).svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Programming & Tech</span>
        </div>
        <div>
        <div>
          <img src="./img/business.fabc3a7.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Business</span>
        </div>
        <div>
        <div>
          <img src="./img/lifestyle.112b348.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Lifestyle</span>
        </div>
        <div>
        <div>
          <img src="./img/data.855fe95.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Data</span>
        </div>
        <div>
        <div>
          <img src="./img/photography.0cf5a3f.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Photography</span>
        </div>
      </div>
    </div>
    </div>
  
    <div className="six" >
      <div className="container">
      <div className="sixInner">
        <h3><b>fiverr</b> business</h3>
        <h2><b>A solution built for</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>business</span></h2>
        <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
        <div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Talent matching</h6>
        </div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Dedicated account management</h6>
        </div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Team collaboration tools</h6>
        </div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Business payment solutions</h6>
        </div>
      </div>
        <button>Explore Fiverr Business</button>
      </div>
      <img src="./img/business-desktop-870-x1.jpeg" style={{position: "relative", bottom: "50px",width:"100%", height: "100%", overflow:"hidden"}}/>
    </div>
    </div>
  
    <div >
        <div className="container" style={{      
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"}}>
  <div style={{      
    width:"105%", marginTop:"80px", position:"relative", left:"20px"}}>
  <AdaptiveHeightV2 />
  </div>
  </div>
    </div>
  
    <div className="eight">
    <div className="container" style={styleSm}>
      <div>
        <h3><b>Fiverr</b> logomaker.</h3>
        <h2><b>Make an incredible logo</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>in minutes</span></h2>
        <p>Pre-designed by top talent. Just add your touch.</p>
        <button>Try Fiverr Logo Maker</button>
      </div>
    </div>
    </div>
    
    <div className="nine">
    <div className="container">
  <h1 style={{position: "relative", left: "100px"}}>Inspiring work made on Fiverr</h1>
  <div style={{width: "100vw", height:"400px"}}>
      <ShowInspiringMini />
      </div>
    </div>
    </div>
  
    <div className="ten">

  <h1 style={{position: "relative", left: "4vw"}}>Guides to help you grow</h1>
  <div>
  <div>
      <img src="./img/guide-start-online-business-552-x2.jpeg" style={{width:"100vw", height: "auto", overflow:"hidden"}}/>
      <h3>Start an online business and work from home</h3>
      <p>A complete guide to starting a small business online</p>
      </div>
  <div>
      <img src="./img/guide-digital-marketing-552-x2.jpeg" style={{width:"100vw", height: "auto", overflow:"hidden"}}/>
      <h3>Digital marketing made easy</h3>
      <p>A practical guide to understand what is digital marketing</p>
      </div>
  <div>
      <img src="./img/guide-create-a-logo-552-x2.jpeg" style={{width:"100vw", height: "auto", overflow:"hidden"}}/>
      <h3>Create a logo for your business</h3>
      <p>A step-by-step guide to create a memorable business logo</p>
      </div>

    </div>
    </div>
  
    <div className="eleven">
    <div style={stylesSM}>
      <div style={{
        position: "relative",
  left: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"}}>
        <h2>Suddenly it&#39;s all so <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>doable.</span></h2>
        <button style={{backgroundColor: "green", color: "white"}}>Join Fiverr</button>
      </div>
    </div>
    </div>
    </div>
      </div>
    );} else if(sm){
    return (
      <div>

  <div>
   <div className="first Row" style={{backgroundColor: color,  overflow: "hidden"}}>
   <div className="container">
     <div className="col-lg-6">
       <h1><b>Find the right</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>freelance</span><span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}> service</span>, <b>right away</b></h1>
       <div className="Input">
       <input type="text" className="firstRow-input" placeholder="Search for any service..."/>
       <div >
       <FontAwesomeIcon icon={faMagnifyingGlass} />
       </div>
       </div>
     </div>

   </div>
   </div>
    <div className="secondRow">
      <img src="./img/Meta.png" style={{width: "65px", height: "55px"}}/>
      <img src="./img/google.png" style={{width: "65px", height: "55px"}}/>
      <img src="./img/Netflix.png" style={{width: "65px", height: "55px"}}/>
      <img src="./img/P&G.png" style={{width: "65px", height: "55px"}}/>
      <img src="./img/Paypal.png" style={{width: "65px", height: "55px"}}/>
    </div>
    <div className="thirdRow">
      <div className="container">
      <h1 style={{position: "relative", left: "50px"}}>Popular services</h1>
      <div style={{width: "95vw", height:"400px", marginRight:"30px"}}>
      <SimpleSliderV2SM/>
      </div>
      </div>
    </div>
  
    <div className="fourthRow" style={{backgroundColor: "rgb(180, 255, 236)"}}>
    <div className="container">
      <div className="innercontainer">
        <h2>The Best part? Everything.</h2>
        <div>
          <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Stick to your budget</b></h5>
          </div>
          <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Get quality work done quickly</b></h5>
          </div>
          <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Pay when you&aposre happy</b></h5>
          </div>
          <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Count on 24/7 support</b></h5>
          </div>
          <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
        </div>
      </div>
      <embed src="./img/vmvv3czyk2ifedefkau7.mp4" type="video/mp4"/>
    </div>
    </div>
  
    <div className="fiveRow">
    <div className="container">
      <h1>You need it, we&apos;ve got it</h1>
      <div >
        <div>
          <div>
          <img src="./img/graphics-design.91dfe44 (1).svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Graphics & Design</span>
        </div>
        <div>
        <div>
          <img src="./img/online-marketing.a3e9794.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Digital Marketing</span>
        </div>
        <div>
        <div>
          <img src="./img/writing-translation.a787f2f (1).svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Writing & Translation</span>
        </div>
        <div>
        <div>
          <img src="./img/video-animation.1356999 (1).svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Video & Animation</span>
        </div>
        <div>
        <div>
          <img src="./img/music-audio.ede4c90.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Music & Audio</span>
        </div>

        <div>
        <div>
          <img src="./img/programming.6ee5a90 (1).svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Programming & Tech</span>
        </div>
        <div>
        <div>
          <img src="./img/business.fabc3a7.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Business</span>
        </div>
        <div>
        <div>
          <img src="./img/lifestyle.112b348.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Lifestyle</span>
        </div>
        <div>
        <div>
          <img src="./img/data.855fe95.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Data</span>
        </div>
        <div>
        <div>
          <img src="./img/photography.0cf5a3f.svg" style={{width: "55px", height: "70px"}}/>
          </div>
          <span>Photography</span>
        </div>
      </div>
    </div>
    </div>
  
    <div className="six" >
      <div className="container">
      <div className="sixInner">
        <h3><b>fiverr</b> business</h3>
        <h2><b>A solution built for</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>business</span></h2>
        <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
        <div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Talent matching</h6>
        </div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Dedicated account management</h6>
        </div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Team collaboration tools</h6>
        </div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Business payment solutions</h6>
        </div>
      </div>
        <button>Explore Fiverr Business</button>
      </div>
      <img src="./img/business-desktop-870-x1.jpeg" style={{position: "relative", bottom: "50px",width:"100%", height: "100%", overflow:"hidden"}}/>
    </div>
    </div>
  
    <div >
        <div className="container" style={{      
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"}}>
  <div style={{      
    width:"105%", marginTop:"80px", position:"relative", left:"20px"}}>
  <AdaptiveHeightV2 />
  </div>
  </div>
    </div>
  
    <div className="eight">
    <div className="container" style={styleSm}>
      <div>
        <h3><b>Fiverr</b> logomaker.</h3>
        <h2><b>Make an incredible logo</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>in minutes</span></h2>
        <p>Pre-designed by top talent. Just add your touch.</p>
        <button>Try Fiverr Logo Maker</button>
      </div>
    </div>
    </div>
    
    <div className="nine">
    <div className="container">
  <h1 style={{position: "relative", left: "60px"}}>Inspiring work made on Fiverr</h1>
  <div style={{width: "95vw", height:"400px"}}>
      <ShowInspiringSM />
      </div>
    </div>
    </div>
  
    <div className="ten">

  <h1 style={{position: "relative", left: "-150px"}}>Guides to help you grow</h1>
  <div>
  <div>
      <img src="./img/guide-start-online-business-552-x2.jpeg" style={{width:"100%", height: "100%", overflow:"hidden"}}/>
      <h3>Start an online business and work from home</h3>
      <p>A complete guide to starting a small business online</p>
      </div>
  <div>
      <img src="./img/guide-digital-marketing-552-x2.jpeg" style={{width:"100%", height: "100%", overflow:"hidden"}}/>
      <h3>Digital marketing made easy</h3>
      <p>A practical guide to understand what is digital marketing</p>
      </div>
  <div>
      <img src="./img/guide-create-a-logo-552-x2.jpeg" style={{width:"100%", height: "100%", overflow:"hidden"}}/>
      <h3>Create a logo for your business</h3>
      <p>A step-by-step guide to create a memorable business logo</p>
      </div>

    </div>
    </div>
  
    <div className="eleven">
    <div style={stylesSM}>
      <div style={{
        position: "relative",
  left: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start"}}>
        <h2>Suddenly it&#39;s all so <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>doable.</span></h2>
        <button style={{backgroundColor: "green", color: "white"}}>Join Fiverr</button>
      </div>
    </div>
    </div>
    </div>
      </div>
    );} else if(smd){
      return <div>

<div>
 <div className="first Row" style={{backgroundColor: color}}>
 <div className="container">
   <div className="col-lg-6">
     <h1 style={{color:"white", fontSize: "50px"}}><b>Find the right</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>freelance</span></h1>
     <h1 style={{color:"white", fontSize: "50px"}}><span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>service</span>, <b>right away</b></h1>
     <div className="Input">
     <input type="text" className="firstRow-input" style={{fontSize: "20px"}}placeholder="Search for any service..."/>
     <div style={{position:"relative", right:"70px", marginBottom:"100px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems:"center", width: "55px", height:"52px",backgroundColor:"green"}}>
     <FontAwesomeIcon icon={faMagnifyingGlass}  style={{fontSize:"20px",color: "#f2f4f8"}}/>
     </div>
     </div>
     <div className="spann">
       <span>Popular:</span>
       <div>
       <span>Website Deisng </span>
       <span>WordPress</span>
       <span>Logo Design</span>
       <span>AI Services</span>
       </div>
     </div>
   </div>
   <img className="col-lg-6" src="./img/clock.png"/>
 </div>
 </div>
  <div className="secondRow">
    <h5 style={{color: "grey"}}>Trusted by:</h5>
    <img src="./img/Meta.png" style={{width: "90px", height: "65px"}}/>
    <img src="./img/google.png" style={{width: "90px", height: "65px"}}/>
    <img src="./img/Netflix.png" style={{width: "90px", height: "65px"}}/>
    <img src="./img/P&G.png" style={{width: "90px", height: "65px"}}/>
    <img src="./img/Paypal.png" style={{width: "90px", height: "65px"}}/>
  </div>
  <div className="thirdRow">
      <div className="container">
      <h1 style={{position: "relative", left: "70px"}}>Popular services</h1>
      <div style={{width: "97vw", height:"400px", marginRight:"0px"}}>
      <SimpleSliderV2SMD/>
      </div>
      </div>
    </div>

  <div className="fourthRow" style={{backgroundColor: "rgb(180, 255, 236)"}}>
  <div className="containerr">
    <div>
      <h2>The Best part? Everything.</h2>
      <div>
        <div>
      <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
        <h5><b>Stick to your budget</b></h5>
        </div>
        <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
        <h5><b>Get quality work done quickly</b></h5>
        </div>
        <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
        <h5><b>Pay when you&aposre happy</b></h5>
        </div>
        <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
        <h5><b>Count on 24/7 support</b></h5>
        </div>
        <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
      </div>
    </div>
    <embed src="./img/vmvv3czyk2ifedefkau7.mp4" type="video/mp4"/>
  </div>
  </div>

  <div className="fiveRow">
  <div className="container">
    <h1>You need it, we&apos;ve got it</h1>
    <div >
      <div>
        <div>
        <img src="./img/graphics-design.91dfe44 (1).svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Graphics & Design</span>
      </div>
      <div>
      <div>
        <img src="./img/online-marketing.a3e9794.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Digital Marketing</span>
      </div>
      <div>
      <div>
        <img src="./img/writing-translation.a787f2f (1).svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Writing & Translation</span>
      </div>
      <div>
      <div>
        <img src="./img/video-animation.1356999 (1).svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Video & Animation</span>
      </div>
      <div>
      <div>
        <img src="./img/music-audio.ede4c90.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Music & Audio</span>
      </div>
    </div>
    <div >
      <div>
      <div>
        <img src="./img/programming.6ee5a90 (1).svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Programming & Tech</span>
      </div>
      <div>
      <div>
        <img src="./img/business.fabc3a7.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Business</span>
      </div>
      <div>
      <div>
        <img src="./img/lifestyle.112b348.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Lifestyle</span>
      </div>
      <div>
      <div>
        <img src="./img/data.855fe95.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Data</span>
      </div>
      <div>
      <div>
        <img src="./img/photography.0cf5a3f.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Photography</span>
      </div>
    </div>
  </div>
  </div>

  <div className="six" >
    <div className="container">
    <div>
      <h3><b>fiverr</b> business</h3>
      <h2><b>A solution built for</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>business</span></h2>
      <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
      <div>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
          <h6>Talent matching</h6>
      </div>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
          <h6>Dedicated account management</h6>
      </div>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
          <h6>Team collaboration tools</h6>
      </div>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
          <h6>Business payment solutions</h6>
      </div>
    </div>
      <button>Explore Fiverr Business</button>
    </div>
    <img src="./img/business-desktop-870-x1.jpeg" style={{position: "relative", left: "5px",width:"55%", height: "100%"}}/>
  </div>
  </div>

  <div className="Seven">
      <div className="container" style={{      
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"}}>
<div style={{      
  width:"105%", marginTop:"80px", position:"relative", left:"20px"}}>
<AdaptiveHeight />
</div>
</div>
  </div>

  <div className="eight">
  <div className="container" style={style}>
    <div>
      <h3><b>Fiverr</b> logomaker.</h3>
      <h2><b>Make an incredible logo</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>in minutes</span></h2>
      <p>Pre-designed by top talent. Just add your touch.</p>
      <button>Try Fiverr Logo Maker</button>
    </div>
  </div>
  </div>
  
  <div className="nine">
  <div className="container">
<h1 style={{position: "relative", left: "60px"}}>Inspiring work made on Fiverr</h1>
<div style={{width: "95vw", height:"450px", fontSize: "260px"}}>
    <ShowInspiringMD />
    </div>
  </div>
  </div>

  <div className="ten">
  <div className="container" >
<h1 style={{position: "relative", left: "-28.5vw"}}>Guides to help you grow</h1>
<div>
<div>
    <img src="./img/guide-start-online-business-552-x2.jpeg" style={{width:"30vw", height: "300px"}}/>
    <h3>Start an online business and work from home</h3>
    <p>A complete guide to starting a small business online</p>
    </div>
<div>
    <img src="./img/guide-digital-marketing-552-x2.jpeg" style={{width:"30vw", height: "300px"}}/>
    <h3>Digital marketing made easy</h3>
    <p>A practical guide to understand what is digital marketing</p>
    </div>
<div>
    <img src="./img/guide-create-a-logo-552-x2.jpeg" style={{width:"30vw", height: "300px"}}/>
    <h3>Create a logo for your business</h3>
    <p>A step-by-step guide to create a memorable business logo</p>
    </div>
    </div>
  </div>
  </div>

  <div className="eleven">
  <div className="container" style={styles}>
    <div style={{position: "relative",
left: "100px"}}>
      <h2>Suddenly it&#39;s all so <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>doable.</span></h2>
      <button style={{backgroundColor: "green", color: "white"}}>Join Fiverr</button>
    </div>
  </div>
  </div>
  </div>
    </div>;}else if(md){
      return <div>

<div>
 <div className="first Row" style={{backgroundColor: color}}>
 <div className="container">
   <div className="col-lg-6">
     <h1 style={{color:"white", fontSize: "50px"}}><b>Find the right</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>freelance</span></h1>
     <h1 style={{color:"white", fontSize: "50px"}}><span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>service</span>, <b>right away</b></h1>
     <div className="Input">
     <input type="text" className="firstRow-input" style={{fontSize: "20px"}}placeholder="Search for any service..."/>
     <div style={{position:"relative", right:"70px", marginBottom:"100px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems:"center", width: "55px", height:"52px",backgroundColor:"green"}}>
     <FontAwesomeIcon icon={faMagnifyingGlass}  style={{fontSize:"20px",color: "#f2f4f8"}}/>
     </div>
     </div>
     <div className="spann">
       <span>Popular:</span>
       <div>
       <span>Website Deisng </span>
       <span>WordPress</span>
       <span>Logo Design</span>
       <span>AI Services</span>
       </div>
     </div>
   </div>
   <img className="col-lg-6" src="./img/clock.png"/>
 </div>
 </div>
  <div className="secondRow">
    <h5 style={{color: "grey"}}>Trusted by:</h5>
    <img src="./img/Meta.png" style={{width: "90px", height: "65px"}}/>
    <img src="./img/google.png" style={{width: "90px", height: "65px"}}/>
    <img src="./img/Netflix.png" style={{width: "90px", height: "65px"}}/>
    <img src="./img/P&G.png" style={{width: "90px", height: "65px"}}/>
    <img src="./img/Paypal.png" style={{width: "90px", height: "65px"}}/>
  </div>
  <div className="thirdRow">
    <div className="container">
    <h1 style={{position: "relative", left: "60px"}}>Popular services</h1>
    <div style={{width: "95vw", height:"400px", fontSize:"260px"}}>
    <SimpleSliderV2MD/>
    </div>
    </div>
  </div>

  <div className="fourthRow" style={{backgroundColor: "rgb(180, 255, 236)"}}>
  <div className="container">
    <div>
      <h2>The Best part? Everything.</h2>
      <div>
        <div>
      <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
        <h5><b>Stick to your budget</b></h5>
        </div>
        <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
        <h5><b>Get quality work done quickly</b></h5>
        </div>
        <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
        <h5><b>Pay when you&aposre happy</b></h5>
        </div>
        <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
        <h5><b>Count on 24/7 support</b></h5>
        </div>
        <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
      </div>
    </div>
    <embed src="./img/vmvv3czyk2ifedefkau7.mp4" type="video/mp4"/>
  </div>
  </div>

  <div className="fiveRow">
  <div className="container">
    <h1>You need it, we&apos;ve got it</h1>
    <div >
      <div>
        <div>
        <img src="./img/graphics-design.91dfe44 (1).svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Graphics & Design</span>
      </div>
      <div>
      <div>
        <img src="./img/online-marketing.a3e9794.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Digital Marketing</span>
      </div>
      <div>
      <div>
        <img src="./img/writing-translation.a787f2f (1).svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Writing & Translation</span>
      </div>
      <div>
      <div>
        <img src="./img/video-animation.1356999 (1).svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Video & Animation</span>
      </div>
      <div>
      <div>
        <img src="./img/music-audio.ede4c90.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Music & Audio</span>
      </div>
    </div>
    <div >
      <div>
      <div>
        <img src="./img/programming.6ee5a90 (1).svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Programming & Tech</span>
      </div>
      <div>
      <div>
        <img src="./img/business.fabc3a7.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Business</span>
      </div>
      <div>
      <div>
        <img src="./img/lifestyle.112b348.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Lifestyle</span>
      </div>
      <div>
      <div>
        <img src="./img/data.855fe95.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Data</span>
      </div>
      <div>
      <div>
        <img src="./img/photography.0cf5a3f.svg" style={{width: "60px", height: "70px"}}/>
        </div>
        <span>Photography</span>
      </div>
    </div>
  </div>
  </div>

  <div className="six" >
    <div className="container">
    <div>
      <h3><b>fiverr</b> business</h3>
      <h2><b>A solution built for</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>business</span></h2>
      <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
      <div>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
          <h6>Talent matching</h6>
      </div>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
          <h6>Dedicated account management</h6>
      </div>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
          <h6>Team collaboration tools</h6>
      </div>
        <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
          <h6>Business payment solutions</h6>
      </div>
    </div>
      <button>Explore Fiverr Business</button>
    </div>
    <img src="./img/business-desktop-870-x1.jpeg" style={{position: "relative", right: "90px",width:"55%", height: "600px"}}/>
  </div>
  </div>

  <div >
      <div className="container" style={{      
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"}}>
<div style={{      
  width:"105%", marginTop:"80px", position:"relative", left:"20px"}}>
<AdaptiveHeight />
</div>
</div>
  </div>

  <div className="eight">
  <div className="container" style={style}>
    <div>
      <h3><b>Fiverr</b> logomaker.</h3>
      <h2><b>Make an incredible logo</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>in minutes</span></h2>
      <p>Pre-designed by top talent. Just add your touch.</p>
      <button>Try Fiverr Logo Maker</button>
    </div>
  </div>
  </div>
  
  <div className="nine">
  <div className="container">
<h1 style={{position: "relative", left: "60px"}}>Inspiring work made on Fiverr</h1>
<div style={{width: "95vw", height:"450px", fontSize:"360px"}}>
    <ShowInspiringMD />
    </div>
  </div>
  </div>

  <div className="ten">
  <div className="container" >
<h1 style={{position: "relative", left: "-380px"}}>Guides to help you grow</h1>
<div>
<div>
    <img src="./img/guide-start-online-business-552-x2.jpeg" style={{width:"30vw", height: "25vw"}}/>
    <h3>Start an online business and work from home</h3>
    <p>A complete guide to starting a small business online</p>
    </div>
<div>
    <img src="./img/guide-digital-marketing-552-x2.jpeg" style={{width:"30vw", height: "25vw"}}/>
    <h3>Digital marketing made easy</h3>
    <p>A practical guide to understand what is digital marketing</p>
    </div>
<div>
    <img src="./img/guide-create-a-logo-552-x2.jpeg" style={{width:"30vw", height: "25vw"}}/>
    <h3>Create a logo for your business</h3>
    <p>A step-by-step guide to create a memorable business logo</p>
    </div>
    </div>
  </div>
  </div>

  <div className="eleven">
  <div className="container" style={styles}>
    <div style={{position: "relative",
left: "100px"}}>
      <h2>Suddenly it&#39;s all so <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>doable.</span></h2>
      <button style={{backgroundColor: "green", color: "white"}}>Join Fiverr</button>
    </div>
  </div>
  </div>
  </div>
    </div>;}
    return <div>

  <div>
   <div className="first Row" style={{backgroundColor: color}}>
   <div className="container">
     <div className="col-lg-6">
       <h1 style={{color:"white", fontSize: "50px"}}><b>Find the right</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>freelance</span></h1>
       <h1 style={{color:"white", fontSize: "50px"}}><span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>service</span>, <b>right away</b></h1>
       <div className="Input">
       <input type="text" className="firstRow-input" style={{fontSize: "20px"}}placeholder="Search for any service..."/>
       <div style={{position:"relative", right:"70px", marginBottom:"100px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems:"center", width: "55px", height:"52px",backgroundColor:"green"}}>
       <FontAwesomeIcon icon={faMagnifyingGlass}  style={{fontSize:"20px",color: "#f2f4f8"}}/>
       </div>
       </div>
       <div className="spann">
         <span>Popular:</span>
         <div>
         <span>Website Deisng </span>
         <span>WordPress</span>
         <span>Logo Design</span>
         <span>AI Services</span>
         </div>
       </div>
     </div>
     <img className="col-lg-6" src="./img/clock.png"/>
   </div>
   </div>
    <div className="secondRow">
      <h5 style={{color: "grey"}}>Trusted by:</h5>
      <img src="./img/Meta.png" style={{width: "90px", height: "65px"}}/>
      <img src="./img/google.png" style={{width: "90px", height: "65px"}}/>
      <img src="./img/Netflix.png" style={{width: "90px", height: "65px"}}/>
      <img src="./img/P&G.png" style={{width: "90px", height: "65px"}}/>
      <img src="./img/Paypal.png" style={{width: "90px", height: "65px"}}/>
    </div>
    <div className="thirdRow">
      <div className="container">
      <h1 style={{position: "relative", left: "60px"}}>Popular services</h1>
      <div style={{width: "110%", height:"400px", fontSize:"460px"}}>
      <SimpleSlider/>
      </div>
      </div>
    </div>
  
    <div className="fourthRow" style={{backgroundColor: "rgb(180, 255, 236)"}}>
    <div className="container">
      <div>
        <h2>The Best part? Everything.</h2>
        <div>
          <div>
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Stick to your budget</b></h5>
          </div>
          <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Get quality work done quickly</b></h5>
          </div>
          <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Pay when you&aposre happy</b></h5>
          </div>
          <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", fontSize:"23px", marginBottom:"5px"}} />
          <h5><b>Count on 24/7 support</b></h5>
          </div>
          <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
        </div>
      </div>
      <embed src="./img/vmvv3czyk2ifedefkau7.mp4" type="video/mp4"/>
    </div>
    </div>
  
    <div className="fiveRow">
    <div className="container">
      <h1>You need it, we&apos;ve got it</h1>
      <div >
        <div>
          <div>
          <img src="./img/graphics-design.91dfe44 (1).svg" style={{width: "60px", height: "70px"}}/>
          </div>
          <span>Graphics & Design</span>
        </div>
        <div>
        <div>
          <img src="./img/online-marketing.a3e9794.svg" style={{width: "60px", height: "70px"}}/>
          </div>
          <span>Digital Marketing</span>
        </div>
        <div>
        <div>
          <img src="./img/writing-translation.a787f2f (1).svg" style={{width: "60px", height: "70px"}}/>
          </div>
          <span>Writing & Translation</span>
        </div>
        <div>
        <div>
          <img src="./img/video-animation.1356999 (1).svg" style={{width: "60px", height: "70px"}}/>
          </div>
          <span>Video & Animation</span>
        </div>
        <div>
        <div>
          <img src="./img/music-audio.ede4c90.svg" style={{width: "60px", height: "70px"}}/>
          </div>
          <span>Music & Audio</span>
        </div>
      </div>
      <div >
        <div>
        <div>
          <img src="./img/programming.6ee5a90 (1).svg" style={{width: "60px", height: "70px"}}/>
          </div>
          <span>Programming & Tech</span>
        </div>
        <div>
        <div>
          <img src="./img/business.fabc3a7.svg" style={{width: "60px", height: "70px"}}/>
          </div>
          <span>Business</span>
        </div>
        <div>
        <div>
          <img src="./img/lifestyle.112b348.svg" style={{width: "60px", height: "70px"}}/>
          </div>
          <span>Lifestyle</span>
        </div>
        <div>
        <div>
          <img src="./img/data.855fe95.svg" style={{width: "60px", height: "70px"}}/>
          </div>
          <span>Data</span>
        </div>
        <div>
        <div>
          <img src="./img/photography.0cf5a3f.svg" style={{width: "60px", height: "70px"}}/>
          </div>
          <span>Photography</span>
        </div>
      </div>
    </div>
    </div>
  
    <div className="six" >
      <div className="container">
      <div className="container">
        <h3><b>fiverr</b> business</h3>
        <h2><b>A solution built for</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>business</span></h2>
        <p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
        <div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8",marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Talent matching</h6>
        </div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Dedicated account management</h6>
        </div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Team collaboration tools</h6>
        </div>
          <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{color: "#b7bdc8", marginRight: "10px", marginBottom: "10px",fontSize:"20px"}} />
            <h6>Business payment solutions</h6>
        </div>
      </div>
        <button>Explore Fiverr Business</button>
      </div>
      <img src="./img/business-desktop-870-x1.jpeg" style={{position: "relative", left: "30px",width:"60%", height: "600px"}}/>
    </div>
    </div>
  
    <div >
        <div className="container" style={{      
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"}}>
  <div style={{      
    width:"105%", marginTop:"80px", position:"relative", left:"20px"}}>
  <AdaptiveHeight />
  </div>
  </div>
    </div>
  
    <div className="eight">
    <div className="container" style={style}>
      <div>
        <h3><b>Fiverr</b> logomaker.</h3>
        <h2><b>Make an incredible logo</b> <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>in minutes</span></h2>
        <p>Pre-designed by top talent. Just add your touch.</p>
        <button>Try Fiverr Logo Maker</button>
      </div>
    </div>
    </div>
    
    <div className="nine">
    <div className="container">
  <h1 style={{position: "relative", left: "60px"}}>Inspiring work made on Fiverr</h1>
  <div style={{width: "100%", height:"400px", fontSize:"460px"}}>
      <ShowInspiring />
      </div>
    </div>
    </div>
  
    <div className="ten">
    <div className="container" >
  <h1 style={{position: "relative", left: "-400px"}}>Guides to help you grow</h1>
  <div>
  <div>
      <img src="./img/guide-start-online-business-552-x2.jpeg" style={{width:"400px", height: "300px"}}/>
      <h3>Start an online business and work from home</h3>
      <p>A complete guide to starting a small business online</p>
      </div>
  <div>
      <img src="./img/guide-digital-marketing-552-x2.jpeg" style={{width:"400px", height: "300px"}}/>
      <h3>Digital marketing made easy</h3>
      <p>A practical guide to understand what is digital marketing</p>
      </div>
  <div>
      <img src="./img/guide-create-a-logo-552-x2.jpeg" style={{width:"400px", height: "300px"}}/>
      <h3>Create a logo for your business</h3>
      <p>A step-by-step guide to create a memorable business logo</p>
      </div>
      </div>
    </div>
    </div>
  
    <div className="eleven">
    <div className="container" style={styles}>
      <div style={{position: "relative",
  left: "100px"}}>
        <h2>Suddenly it&#39;s all so <span style={{fontFamily: "Sofia, sansSerif", fontStyle: "oblique"}}>doable.</span></h2>
        <button style={{backgroundColor: "green", color: "white"}}>Join Fiverr</button>
      </div>
    </div>
    </div>
    </div>
      </div>
    ;
}
function Home() {

  return (
<PreSet />
  )
}

export default Home;