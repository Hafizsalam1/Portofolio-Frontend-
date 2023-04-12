import React from "react"
import fotdir from "../Assets/fotdir.png"
import Styles from "./LandingPageStyle"
import back from "../Assets/back.jpg"


const MENU = [
    {href: "#", label: "About me"},
    {href: "#", label: "Portofolio"},
    {href: "#", label: "Contact me"}
]


const LandingPage = ()=>{
    return(
        <div style={Styles.container}>            
            <div className="card" style={Styles.navBar}>
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
            <div style={Styles.rectangle}>
                
            </div>
            <div style={Styles.leftSection}>
                <h3 style={Styles.Hi}> Hi I'm </h3>
                <h1 style={Styles.Hafiz}> Hafiz Salam</h1>
                <h4 style={Styles.developer}>Front end/Backend Developer</h4>
            </div>
            <div>
                <img src={fotdir} style={Styles.fotdir} />
            </div>
            <div></div>


        </div>


    )




} 
export default LandingPage