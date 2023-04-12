import Styles from "./ContactStyle"
import React from "react"

const Contact = () => {
    const[name, setName] = React.useState("")
    const[email, setEmail] = React.useState("")
    const[phone, setPhone] = React.useState(0)
    const[message, setMessage] = React.useState("")
    const handleChange = (setState) =>(e)=>{
        setState(e.target.value)
      }




    return(
        <div style={Styles.container}>
            <div>
                <h1 style={Styles.AboutMe}>Contact Me</h1>
                <form style={Styles.form}>
                    <span style={Styles.ketForm}>name</span><br/>
                    <input type={"text"} value={name} onChange={handleChange(setName)} style={Styles.formBox}/><br/>
                    <span style={Styles.ketForm}>email</span><br/>
                    <input type={"email"} value={email} onChange={handleChange(setEmail)} style={Styles.formBox}/><br/>
                    <span style={Styles.ketForm}>phone</span><br/>
                    <input type={"number"} value={phone} onChange={handleChange(setPhone)} style={Styles.formBox}/><br/>
                    <span style={Styles.ketForm}>message</span><br/>
                    <input type={"message"} value={message} onChange={handleChange(setMessage)} style={Styles.formBox}/><br/><br/>
                    <button style={Styles.formBox}>Send</button>
                </form>
            </div>
        </div>


    )


}
export default Contact