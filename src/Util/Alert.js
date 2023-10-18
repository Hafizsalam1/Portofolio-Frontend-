import React, { useState } from "react";
import "./Alert.css";
import correct from "../Assets/correct.json";
import incorrect from "../Assets/false.json"
import Lottie from 'lottie-react';

const Alert = ({ message, onClose, animation }) => {
  let animate;


  if(animation == "correct"){
     animate =  correct;
  } else if(animation == "false"){
    animate = incorrect;
  }

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-content">
          <p>{message}</p>
          <div style={{ width: '190px', height: '190px', paddingLeft: '100px' }}>
          <Lottie
            animationData={animate}
            loop={false} 
            autoplay={true} 
          />
          </div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Alert;