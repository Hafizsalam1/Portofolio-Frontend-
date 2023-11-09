import React from "react"
import fotdir from "../../Assets/fotdir.png"
import Styles from "./LandingPageStyle"
import back from "../../Assets/back.jpg"
import { useState, useEffect } from "react"



const LandingPage = ()=>{

    const [isMouseOver, setIsMouseOver] = React.useState(false);
    const [isMouseOverBuild, setIsMouseOverBuild] = React.useState(false);
    const [isAnimated, setIsAnimated] = React.useState(false);

    useEffect(() => {
      const animationTimeout = setTimeout(() => {
        setIsAnimated(true);
      }, 200);
  
      return () => clearTimeout(animationTimeout);
    }, []);

    const handleMouseOverOn = () => {
      setIsMouseOver(true);
  };

    const handleouseOverOff = () => {
      setIsMouseOver(false);
  };

  const handlemouseOverOnBuild = () => {
    setIsMouseOverBuild(true);
  };

  const handleMouseOverOffBuild = () =>{
    setIsMouseOverBuild(false);
  }


    return(
        <div       style={{
            ...Styles.container,
            opacity: isAnimated ? 1 : 0, 
            transform: isAnimated ? "none" : "translateY(20px)", 
            transition: "opacity 1s ease, transform 1s ease", 
          }}>            

            <div style={Styles.rectangle}>
                
            </div>
            <div style={Styles.leftSection}>
                <h3 style={Styles.Hi}> Hi I'm </h3>
                <h1 style={Styles.Hafiz}> Hafiz Salam</h1>
                <h4 style={Styles.developer}>Fullstack Developer</h4>
                <div>
                  <a href="/about" style={{ textDecoration: 'none', color: 'black' }}>
                <h4 style={{...Styles.whatCanIdo, 
                textShadow: isMouseOver ? "2px 2px 4px #000" : "2px 2px 4px #fff"
                }} onMouseEnter={handleMouseOverOn} onMouseLeave={handleouseOverOff}>Know Me Better {">"}{">"}</h4>
                </a >
                </div>
                {/* <div>
                <a href="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                <h4 style={{...Styles.buildSomething, textShadow: isMouseOverBuild ? "2px 2px 4px #000" : "2px 2px 4px #fff"}} onMouseEnter={handlemouseOverOnBuild} onMouseLeave={handleMouseOverOffBuild}>Lets build something!</h4>
                </a>
                </div> */}
                {/* <div>
                 <h7 style={Styles.copyright}> © Hafiz Salam 2023 </h7>
                </div> */}

            </div>

            
            <div>
                <img src={fotdir} style={Styles.fotdir} />
            </div>
            
            <div>
           
            </div>
            

        </div>
        


    )




} 
export default LandingPage