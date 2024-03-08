import React from "react";
import "./styles/Squares.css";

const Squares = () => {
  return (
    <div className="squares">
      <div
        style={{ "--i": "0" }}
        className=""
      ></div>
      <div
        style={{ "--i": "1" }}
        className=""
      ></div>
      <div
        style={{ "--i": "2" }}
        className=""
      ></div>
      <div
        style={{ "--i": "3" }}
        className=""
      ></div>
      <div
        style={{ "--i": "4" }}
        className=""
      ></div>
    </div>
  );
};

export default Squares;
