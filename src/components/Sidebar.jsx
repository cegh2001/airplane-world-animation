"use client";
import React from 'react'
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { useContext, createContext, useState } from "react";
const SidebarContext = createContext();

export default function Sidebar ({ children }) {
  
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="z-10 absolute flex-1">
      <aside className="h-screen">
        <nav className="bg-navy h-full flex flex-col border-gray-50 border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src=""
              alt="logo"
              className={`overflow-hidden transition-all ${
                expanded ? "w-16" : "w-0"
              }`}
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="rounded-lg "
            >
              {expanded ? (
                <LuChevronFirst className="translate-x-2 h-8 w-8 text-white hover hover:scale-110" />
              ) : (
                <LuChevronLast className="translate-x-2 h-8 w-8 text-white hover hover:scale-110" />
              )}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>
          </SidebarContext.Provider>
          <div className="border-t flex p-3">
            <LuChevronFirst />
            <div className={'flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}'}>
              <div className="leading-4">
                <h4 className="text-white font-semibold">Version 1</h4>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}

