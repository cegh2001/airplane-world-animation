"use client";
import React from 'react'
import Table from './Table'

const Dashboard = () => {
  return (
    <div className="bg-white-500 h-screen flex justify-center items-center px-16">
      <div className="relative z-0 w-full max-w-lg">
        <div className="absolute -left-4 w-72 h-72 bg-purple-300 mix-blend-multiply rounded-full filter blur-xl animate-blob"></div>
        <div className="absolute -right-1 w-72 h-72 bg-yellow-300 mix-blend-multiply rounded-full filter blur-xl animate-blob"></div>
        <div className="absolute top-8 right-24 w-72 h-72 bg-pink-300 mix-blend-multiply rounded-full filter blur-xl animate-blob"></div>
      </div>
    </div>
  );
}

export default Dashboard