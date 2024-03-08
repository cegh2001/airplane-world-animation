"use client";

import React from "react";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import Earthplane from "./animations/Earthplane";
import Tilt from "react-parallax-tilt";
import Squares from "./animations/Squares";

const Login = () => {
  return (
    <div className="relative top-0 left-0 bg-gradient-to-r  from-[#2E6DB7]  to-[#9cc6f9] bottom-0 h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
      {/* <div className="absolute -translate-y-10">
        <Earthplane />
      </div> */}
      <div className="">
        <Squares />
      </div>
      <div className="grid w-full px-8 justify-center items-center">
        <div className="relative z-30 flex justify-center items-center">
          <div className="h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl border border-white border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
            <form className="h-full flex flex-col justify-evenly items-center">
              <div className="text-white font-poppins font-bold text-2xl tracking-widest border-2 border-white border-x-0 border-t-0">
                Iniciar sesión
              </div>
              <input
                type="text"
                placeholder="Usuario"
                className="px-6 py-1 input-text"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="px-6 py-1 input-text"
              />
              <button
                type="Submit"
                className="cursor-pointer font-poppins font-bold px-5 py-1 text-white bg-white bg-opacity-10 rounded-2xl shadow-5xl border border-white border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm tracking-wide transition ease-in-out hover:scale-110"
                placeholder="Iniciar"
              >
                Iniciar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
