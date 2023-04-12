import griyamirah from "../Assets/griyamirah.png"
import Styles from "./ProjectStyle"


const Project = () =>{
    return(
        <div style={Styles.container}>
            <div>
            <h1 style={Styles.Project}>Project</h1>
            <h4 style={Styles.ui}>UI design of Griya Amirah's Website</h4><br/>
            <img src={griyamirah} style={Styles.fotdir} />
            </div>

        </div>


    )
}
export default Project