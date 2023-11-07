import Loading from "../../Assets/loading.json"
import React, { useState } from "react";
import Lottie from 'lottie-react';

const LoadingPage =  () => {

    return (

            <div className="popup-content">
              <div style={{ width: '190px', height: '190px', paddingLeft: '0px' }}>
              <Lottie
                animationData={Loading}
                loop={true} 
                autoplay={true} 
              />
              </div>
            </div>

      );

};
export default LoadingPage;