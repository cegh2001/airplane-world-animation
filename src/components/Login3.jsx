"use client";
import React from "react";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import Tilt from "react-parallax-tilt";
import Bubbles from "./Bubbles";


const Login3 = () => {
  return (
    <div className="relative z-10 top-0 left-0 bg-gradient-to-b from-[#021d3c]  to-[#2E6DB7] bottom-0 h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
      <div className="grid w-full px-8 justify-center items-center">
        <div className="relative mt-8 z-30 skew-y-3">
          <div className=" h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl border border-white border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
            <form className="h-full flex flex-col justify-evenly items-center">
              <div className="text-white font-poppins font-bold text-2xl tracking-widest">
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
                className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-gradient-to-r from-[#2E6DB7] via-[#021C3C] to-[#2E6DB7] bg-opacity-20 text-white border border-white border-opacity-50 transition ease-in-out hover:scale-110 font-bold"
                placeholder="Iniciar"
              >
                Iniciar
              </button>
            </form>
          </div>
        </div>
        <div className="">
          <Bubbles />
        </div>
      </div>
    </div>
  );
};

export default Login3;
