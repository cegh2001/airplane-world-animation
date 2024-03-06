import React from 'react'
import './Heaven.css'

const Heaven = () => {
  return (
    <div className="">
        <div className="clouds">
          <img src="/cloud1.png" style={{ "--i": "1" }}></img>
          <img src="/cloud2.png" style={{ "--i": "2" }}></img>
          <img src="/cloud3.png" style={{ "--i": "3" }}></img>
          
          <img src="/cloud5.png" style={{ "--i": "4" }}></img>
          <img src="/cloud1.png" style={{ "--i": "8" }}></img>
          <img src="/cloud2.png" style={{ "--i": "7" }}></img>
          <img src="/cloud3.png" style={{ "--i": "6" }}></img>
          
          <img src="/cloud5.png" style={{ "--i": "5" }}></img>
        </div>
    </div>
  );
}

export default Heaven