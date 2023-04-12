

import Styles from "./AboutMeStyle";
import java from "../Assets/java.svg"
import javascript from "../Assets/javascript.png"
import postgresql from "../Assets/postgresql.svg"
import spring from "../Assets/spring.svg"
import springboot from "../Assets/springboot.png"
import ind from "../Assets/ind.jpg"
import ing from "../Assets/ing.jpg"







const AboutMe = () =>{
    // const SKILL = [
    //     { src: java, href:"#"},
    //     { src: javascript, href:"#"},
    //     { src: postgresql, href:"#"},
    //     { src: spring, href:"#"},
    //     { src: SpringBoot, href:"#"},

    // ]
    return(
        <div style={Styles.container}>
            <div style={Styles.kotakTulisan}>
            <h2 style={Styles.AboutMe}>About Me</h2><br/>
            <p style={Styles.iam}>I’am a fresh graduate from Sepuluh Nopember Institute of Technology, majoring in Engineering Physics. I had various experience and knowledge regarding machine learning, optics, photonics, and content writing. I learned those subjects through classes in college, online course, and other opportunities such as student organization. I am now looking forward to further develop and make used of my skill in industry.</p><br/>

            <h3 style={Styles.skill}>Skill</h3><br/>
            <div style={Styles.kumpulanLogo}>
            <img src={java} style={Styles.icon} />
            <img src={javascript} style={Styles.icon} />
            <img src={postgresql} style={Styles.icon} />
            <img src={spring} style={Styles.icon} />
            <img src={springboot} style={Styles.icon} />
            </div>
            <h3 style={Styles.language}>Language</h3><br/>
            <div style={Styles.kumpulanBendera}>
            <img src={ind} style={Styles.icon} />
            <img src={ing} style={Styles.icon} />
            </div>
            </div>
        </div>
    )

}
export default AboutMe;