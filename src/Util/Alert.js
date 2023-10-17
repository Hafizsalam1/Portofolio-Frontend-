import React, { useState } from "react";
import "./Alert.css"; 

const Alert = ({ message, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-content">
          <p>{message}</p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Alert;