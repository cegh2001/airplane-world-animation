"use client";

import React from "react";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import Loading from "./Loading";
import Tilt from "react-parallax-tilt";

const Login = () => {
  return (
    <div className="relative top-0 left-0 bg-gradient-to-r from-[#021C3C]  to-[#2E6DB7] bottom-0 leading-5 h-screen w-screen overflow-hidden flex flex-col justify-center items-center">
      <div className="h-[35rem] w-[35rem] absolute rounded-full bg-gradient-to-r from-[#021C3C]  to-[#2E6DB7] -top-96 left-2/4 animate-pulse"></div>
      <div className="h-[35rem] w-[35rem] absolute rounded-full bg-gradient-to-r from-[#021C3C]  to-[#2E6DB7] top-96 -left-10 animate-pulse"></div>
      <div className="grid grid-cols-2 gap-6 w-full px-8">
        <div>
          <h1 className="text-5xl font-bold text-white">Bienvenido,</h1>
          <p className="text-white text-opacity-70 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt, nunc euismod tristique.
          </p>
        </div>
        <Tilt>
          <div className="ml-36 h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-white border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
            <form className="h-full flex flex-col justify-evenly items-center">
              <div className="text-white font-poppins text-2xl tracking-widest">
                Iniciar sesión
              </div>
              <input type="text" placeholder="Usuario" className="input-text" />
              <input
                type="password"
                placeholder="Contraseña"
                className="input-text"
              /> 
              <input
                type="Submit"
                className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-gradient-to-r from-[#2E6DB7] to-[#021C3C] bg-opacity-20 text-white border border-white border-opacity-50 transition ease-in-out hover:scale-110"
              />
            </form>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Login;
