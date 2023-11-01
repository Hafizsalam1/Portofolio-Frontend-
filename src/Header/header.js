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

const MenuItem = ({ href, label }) => {
    const [isMouseOver, setIsMouseOver] = useState(false);


    const underLineOn = () => {
        setIsMouseOver(true);
    };

    const underLineOff = () => {
        setIsMouseOver(false);
    };

    return (
        <a
            style={{
                ...Styles.menu,
                textDecoration: isMouseOver ? 'underline' : 'none'
            }}
            onMouseEnter={underLineOn}
            onMouseLeave={underLineOff}
            href={href}
        >
            {label}
        </a>
    );
};

const SocialMediaLink = ({ href, label }) => {

    const [isGettingBigger, setIsGettingBigger] = React.useState(false);

    const gettingBigger = () =>{

        setIsGettingBigger(true);
    };

    const gettingSmaller = () =>{
        setIsGettingBigger(false);
    };



return(
    <a style={Styles.menu} href={href}>
        <img src={label} alt="Social Media Logo" style={{...Styles.logoSosmed, 
        transform: isGettingBigger ? 'scale(1.1)' : 'scale(1)'
        }}
        onMouseEnter={gettingBigger}
        onMouseLeave={gettingSmaller}
        />
    </a>

);
}






const Header = () =>{

    const [isMenuVisible, setMenuVisible] = React.useState(false);
    const [isMouseOver, setIsMouseOver] = React.useState(false);


    const handleMouseEnter = () => {
      setMenuVisible(true);
    };
  
    const handleMouseLeave = () => {
      setMenuVisible(false);
    };


    

    return(
        <div  
        style={{
            ...Styles.rectHead,
            opacity: isMenuVisible ? 1 : 0.1, // Adjust the opacity based on menuVisible
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <div style={Styles.navBar}>
            {MENU.map((item, idx) => {
                        return(
                            <MenuItem key={idx} {...item} />
                        )
                    }
                )}
            </div>

            <div style={Styles.navBarLogo}>
    {SOCIALMEDIA.map((item, idx) => {
        return (
            <SocialMediaLink key={idx} {...item} />
        )
    })}
</div>
        </div>
    )

}
export default Header;
