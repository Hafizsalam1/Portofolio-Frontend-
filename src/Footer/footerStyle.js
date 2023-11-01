const Styles = {

    menu: {

        padding: "10px",
        fontFamily: 'Lato',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 18,
        lineHeight: 22,
        color: "rgba(255, 255, 255, 1)",
        marginLeft: 10,
        zIndex:1,
        textDecoration: "none"
    
    },

    logoSosmed:{
        width: "50px",
        height: "auto"
      },

    navBarLogo:{
      backgroundColor:"black",
      position: "absolute",
      width: "637px",
      height: "46px",
      left: "200px",
      border: "3px solid lightgray",
      borderRadius: 10,
      zIndex:1,
      },

    rectFoot: {
        display: "grid",
        left: "0px",
        bottom: "0px",
        height: "100px",
        width: "1920px",
        borderRadius: "0px",
        maxWidth:"1920px",
        display: "flex",
        backgroundColor:"black",
      //   background: "linear-gradient(rgba(150, 150, 150,0.5),rgba(255, 255, 255,0.5))",
        zIndex:1,
        justifyContent: "space-between",
        alignItems: "right",
        padding: "0 70px",
        position: "fixed",
         boxSizing: "border-box"
        //  opacity: "80%"
      }


}
export default Styles;