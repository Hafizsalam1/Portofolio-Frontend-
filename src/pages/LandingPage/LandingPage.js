import React from "react"
import fotdir from "../../Assets/fotdir.png"
import Styles from "./LandingPageStyle"
import back from "../../Assets/back.jpg"
import { useState, useEffect } from "react"



const LandingPage = ()=>{


    const [isAnimated, setIsAnimated] = React.useState(false);

    useEffect(() => {
      const animationTimeout = setTimeout(() => {
        setIsAnimated(true);
      }, 200);
  
      return () => clearTimeout(animationTimeout);
    }, []);


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