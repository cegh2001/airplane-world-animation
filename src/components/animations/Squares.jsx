import React from "react";
import "./styles/Squares.css";

const Squares = () => {
  return (
    <div className="squares">
      <li
        style={{ "--i": "0" }}
        className="z-40 -top-12 left-36 flex flex-col items-center justify-center"
      >
        <img
          src="/g-logo.png"
          alt="logo"
          className="w-3/4 h-3/4"
        />
      </li>
      <li style={{ "--i": "1" }} className="z-40 top-32 -left-64"></li>
      <li style={{ "--i": "2" }} className="z-30 top-60 left-44"></li>
      <li
        style={{ "--i": "3" }}
        className="z-40 top-96 translate-y-5 -left-24 "
      ></li>
      <li style={{ "--i": "4" }} className="z-30 -top-20 -left-12"></li>
    </div>
  );
};

export default Squares;
