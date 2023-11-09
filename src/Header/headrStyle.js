
const Styles = {
  navBar:{
    backgroundColor:"black",
    position: "fixed",
    width: "637px",
    height: "46px",
    left: "1100px",
    border: "3px solid lightgray",
    borderRadius: 10,
    zIndex:1,
    // display: isMenuVisible ? "flex" : "none", // Show/hide based on isMenuVisible state
    top: "-140px"
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
  // display: isMenuVisible ? "flex" : "none", // Show/hide based on isMenuVisible state
  top: "-140px"
},

  rectHead: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", /* Two equal-width columns */
    gap: "20px",

    height: "100px",
    width: "1920px",
    left: "0px",
    top: "0px",
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
    /* width: "100%", Remove this line */
  },
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

sosmed: {
  fontFamily: 'Lato',
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: 18,
  paddingLeft: "10px",
  lineHeight: 22,
  color: "rgba(255, 255, 255, 1)",
  zIndex:1,
  marginLeft: -1000,
  textDecoration: "none"
},

logoSosmed:{
  width: "50px",
  height: "auto"
},

cardStyle: {
  transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
  maxHeight: 0,
  overflow: "hidden",
  opacity: 0,
},

expandedCardStyle: {
  maxHeight: "300px", // Adjust the height as needed
  opacity: 1,
},

socialMediaVisible: {
  display: "block"
}


};

export default Styles;
  