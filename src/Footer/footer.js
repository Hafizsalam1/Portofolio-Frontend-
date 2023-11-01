import React from "react";
import Instagram from "../Assets/igputih.png"
import Mail from "../Assets/mail.png"
import Git from "../Assets/gitputih.png"
import Styles from "./footerStyle"

const Footer = () =>{

    const SOCIALMEDIA = [
        {href: "https://www.instagram.com/hafiz.salam22", label: Instagram},
        {href: "https://github.com/Hafizsalam1", label: Git},
        {href: "mailto:hafiz.salam2k@gmail.com", label: Mail}
    
    ]

    const [isMenuVisible, setMenuVisible] = React.useState(false);

    const handleMouseEnter = () => {
      setMenuVisible(true);
    };
  
    const handleMouseLeave = () => {
      setMenuVisible(false);
    };

    



    return(
    <div         style={{
        ...Styles.rectFoot,
        opacity: isMenuVisible ? 1 : 0.1, // Adjust the opacity based on menuVisible
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
    <div style={Styles.navBarLogo}>
    {SOCIALMEDIA.map((item, idx) => {
        return (
            <a
                style={Styles.menu}
                href={item.href}
                key={idx}>
                <img src={item.label} alt="Social Media Logo" style={Styles.logoSosmed}/> 
            </a>
        )
    })}
        </div>


    </div>

    )

}
export default Footer