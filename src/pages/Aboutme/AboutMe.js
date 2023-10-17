

import Styles from "./AboutMeStyle";
import java from "../../Assets/java.svg"
import javascript from "../../Assets/javascript.png"
import postgresql from "../../Assets/postgresql.svg"
import spring from "../../Assets/spring.svg"
import springboot from "../../Assets/springboot.png"
import ind from "../../Assets/ind.jpg"
import ing from "../../Assets/ing.jpg"
import angular from "../../Assets/angular.svg"
import typescript from "../../Assets/typescript.svg"
import React from "react";
import { useState, useEffect } from "react"







const AboutMe = () =>{
    // const SKILL = [
    //     { src: java, href:"#"},
    //     { src: javascript, href:"#"},
    //     { src: postgresql, href:"#"},
    //     { src: spring, href:"#"},
    //     { src: SpringBoot, href:"#"},

    // ]


    const [isAnimated, setIsAnimated] = React.useState(false);

    useEffect(() => {
      const animationTimeout = setTimeout(() => {
        setIsAnimated(true);
      }, 200);
  
      return () => clearTimeout(animationTimeout);
    }, []);


    return(
        <div style={{
            ...Styles.container,
            opacity: isAnimated ? 1 : 0, 
            transform: isAnimated ? "none" : "translateY(20px)", 
            transition: "opacity 1s ease, transform 1s ease", 
          }}>
            <div style={Styles.kotakTulisan}>
            <h2 style={Styles.AboutMe}>About Me</h2><br/>
            <p style={Styles.iam}>I am a graduate Engineering Physics from Institut Teknologi Sepuluh Nopember, currently working as a Software engineer at PT Asuransi Kredit Indonesia. I had various experience in backend programming using Java - Springboot, and frontend programming using React JS or Angular Typscript.</p><br/>

            <h3 style={Styles.skill}>Skill</h3><br/>
            <div style={Styles.kumpulanLogo}>
            <a href="https://angular.io/" target="_blank">
            <img src={angular} style={Styles.icon}/></a>
            <a href="https://www.java.com/" target="_blank">
            <img src={java} style={Styles.icon}/></a>
            <a href="https://www.javascript.com/" target="_blank">
            <img src={javascript} style={Styles.icon} /></a>
            <a href="https://www.postgresql.org/" target="_blank">
            <img src={postgresql} style={Styles.icon} /></a>
            <a href="https://spring.io/" target="_blank">
            <img src={spring} style={Styles.icon} /></a>
            <a href="https://spring.io/projects/spring-boot" target="_blank">
            <img src={springboot} style={Styles.icon} /></a>
            <a href="https://www.typescriptlang.org/" target="_blank">
            <img src={typescript} style={Styles.icon} /></a>
            </div>
            <h3 style={Styles.language}>Language</h3><br/>
            <div style={Styles.kumpulanLogo}>
            <img src={ind} style={Styles.icon} />
            <img src={ing} style={Styles.icon} />
           

            </div>

            </div>
        </div>
    )

}
export default AboutMe;