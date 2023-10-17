import back from "../../Assets/back.jpg"
import back2 from "../../Assets/back2.png"



const Styles = {

    back:{
        height: "1022px",
        width: "1920px",
        opacity:0.2
    },
    container:  {
        // backgroundImage: `url(${back2})`,
        // imageOpacity:0.2,
        height: "1022px",
        width: "1920px",
        left: "0px",
        top: "0px",
        borderRadius: "0px",
        maxWidth:"1920px",

        maxHeight: "1200px", // Set your desired maximum height here
        overflow: "hidden",
        display: "flex",
        // backgroundColor:""
        background: "linear-gradient(rgba(150, 150, 150,0.5),rgba(255, 255, 255,0.5))",
        zIndex:-2,
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 70px",
        position: "absolute",
         boxSizing: "border-box",
        width: "100%"
    },
    menu: {
        fontFamily: 'Lato',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 22,
        color: "rgba(255, 255, 255, 0.7)",
        marginLeft: 60,
        textDecoration: "none"
    },
    fotdir: {
        height: "70%",
        width: "70%",
        left: "10px",
        top: "140px",
        marginTop:"90px",
        marginRight:"500px",
        borderRadius: "0px",
    },
    Hi: {
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "30px",
        lineHeight: "47px",
        // color: "#FFFFFF"
    },
    Hafiz: {
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "80px",
        lineHeight: "47px",
        // color: "#FFFFFF"

    },
    developer: {
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "47px",
        // color: "#FFFFFF"

    },
    rightSession: {
        display: "flex",
        alignItems: "center"
    },

    navBar:{
        backgroundColor:"black",
        position: "absolute",
        width: "637px",
        height: "46px",
        left: "991px",
        border: "3px solid lightgray",
        borderRadius: 10,
        top: "-120px"
    },
    leftSection:{
        marginLeft:"100px"
        // position: "absolute",
        // left: 0,
        // backgroundColor:"black",
        // height: "1022px",
        // width: "970px",
    },
    footer:{
        backgroundColor:"black",
        position: "absolute",
        width: "637px",
        height: "46px",
        left: "991px",
        top: "120px"
    },
    rectangle:{
        position: "absolute",
        width: "1802.3px",
        height: "1373.99px",
        left: "983.5px",
        top: "-192px",
        background: "#000000",
        transform: "rotate(9.67deg)",
        zIndex: -1,
        maxWidth: "800px"
    }
}

export default Styles;