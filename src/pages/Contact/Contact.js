import React, { useState, useEffect } from "react";
import Styles from "./ContactStyle";
import Alert from "../../Util/Alert";

const Contact = () => {
  const [animationContext, setAnimationContext] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [formIsValid,setFormIsValid] = useState(true)



  const [showPopup, setShowPopup] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const onCloseAlert =  () =>{
    setShowPopup(false);
  }

  const onOpenAlert = () =>{
    setShowPopup(true);
  }


  const [isAnimated, setIsAnimated] = React.useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setIsAnimated(true);
    }, 200);

    return () => clearTimeout(animationTimeout);
  }, []);

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
    if (!name || !email || !phone || !message) {
      setFormIsValid(false);
      return;
    }else{
      setFormIsValid(true);
    }

  };

  let messageData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [response, setResponse] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      setFormIsValid(false);
      return;
    }
    try {
      messageData = {
        name: name,
        email: email,
        phone: phone,
        message: message,
      }

      const response = await fetch('/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setAnimationContext("correct")
      setAlertMessage("Message Sent")
      setShowPopup(true);
      setResponse(data);
    } catch (error) {
      setAlertMessage("Message failed to send")
      setAnimationContext("false")
      setShowPopup(true);
      console.error('Error:', error);
    }
  };

  return (
    <div style={{
      ...Styles.container,
      opacity: isAnimated ? 1 : 0, 
      transform: isAnimated ? "none" : "translateY(20px)", 
      transition: "opacity 1s ease, transform 1s ease", 
    }}>
      <div>
        <h1 style={Styles.AboutMe}>Contact Me</h1>
        <form style={Styles.form} onSubmit={handleSubmit}>
          <span style={Styles.ketForm}>name</span><br />
          <input type="text" value={name} onChange={handleChange(setName)} style={Styles.formBox} /><br />
          <span style={Styles.ketForm}>email</span><br />
          {showPopup && (
        <Alert message={alertMessage} onClose={onCloseAlert} animation={animationContext}/>
      )}
          <input type="email" value={email} onChange={handleChange(setEmail)} style={Styles.formBox} /><br />
          <span style={Styles.ketForm}>phone</span><br />
          <input type="number" value={phone} onChange={handleChange(setPhone)} style={Styles.formBox} /><br />
          <span style={Styles.ketForm}>message</span><br />
          <textarea value={message} onChange={handleChange(setMessage)} style={Styles.formBoxKeterangan}></textarea><br /><br /><br /><br />
          <button style={Styles.formBox} type="submit">Send</button>
          {!formIsValid && (
  <div style={{ marginTop: '-50px' }}>
    <p style={{ color: 'red', fontSize: '16px' }}>*Mohon isi semua field</p>
  </div>
)}
        </form>
      </div>
    </div>
  );
};

export default Contact;
