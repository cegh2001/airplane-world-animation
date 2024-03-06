import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className=''>
      <div className="grid place-content-center relative">
        <div className="z-0 translate-y-8 earth">
          <div className="z-10 loader">
            <span style={{ "--i": "1" }}></span>
            <span style={{ "--i": "2" }}></span>
            <span style={{ "--i": "3" }}></span>
            <span style={{ "--i": "4" }}></span>
            <span style={{ "--i": "5" }}></span>
            <span style={{ "--i": "6" }}></span>
            <span style={{ "--i": "7" }}></span>
            <span style={{ "--i": "8" }}></span>
            <span style={{ "--i": "9" }}></span>
            <span style={{ "--i": "10" }}></span>
            <span style={{ "--i": "11" }}></span>
            <span style={{ "--i": "12" }}></span>
            <span style={{ "--i": "13" }}></span>
            <span style={{ "--i": "14" }}></span>
            <span style={{ "--i": "15" }}></span>
            <span style={{ "--i": "16" }}></span>
            <span style={{ "--i": "17" }}></span>
            <span style={{ "--i": "18" }}></span>
            <span style={{ "--i": "19" }}></span>
            <span style={{ "--i": "20" }}></span>
            <div className="z-20 plane"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading