import React from "react"
import Styles from "./headrStyle";
import { useState } from "react";
import Instagram from "../Assets/igputih.png"
import Mail from "../Assets/mail.png"
import Git from "../Assets/gitputih.png"


const MENU = [
    {href: "/", label: "Home"},
    {href: "/about", label: "About me"},
    {href: "/portfolio", label: "Portofolio"},
    {href: "/contact", label: "Contact me"}
]

const SOCIALMEDIA = [
    {href: "https://www.instagram.com/hafiz.salam22", label: Instagram},
    {href: "https://github.com/Hafizsalam1", label: Git},
    {href: "mailto:hafiz.salam2k@gmail.com", label: Mail}

]

const Header = () =>{

    const [isMenuVisible, setMenuVisible] = React.useState(false);

    const handleMouseEnter = () => {
      setMenuVisible(true);
    };
  
    const handleMouseLeave = () => {
      setMenuVisible(false);
    };

    return(
        <div  
        style={Styles.rectHead}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <div style={Styles.navBar}>
            {MENU.map((item, idx) => {
                        return(
                            <a 
                            style={Styles.menu}
                            href={item.href}
                                key={idx}>
                                    {item.label}

                                </a>
                        )
                    }
                )}
            </div>

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
export default Header;
