
import React from 'react'
import Loading from './animations/Loading';
import Loading2 from './animations/Loading2';
import Loading3 from './animations/Loading3';
import Loading4 from './animations/Loading4';
import Sidebar from './Sidebar';
import {SidebarItem} from './Sidebar';
import { IoMdHome, IoMdHelp, IoMdSettings } from "react-icons/io";
import { FaTasks } from "react-icons/fa";

const Testing = () => {
  return (
    <div className="">
      <div>
        <Sidebar>
          <SidebarItem icon={<IoMdHome/>} text="Home" alert />
          <SidebarItem icon={<FaTasks/>} text="Operaciones" active />
          <SidebarItem icon={<IoMdHelp/>} text="Ayuda" />
          <SidebarItem icon={<IoMdSettings/>} text="Configuración" />
        </Sidebar>
      </div>
      {/* <div>
        <Loading />
        <Loading2 />
        <Loading3 />
        <Loading4 />
      </div> */}
    </div>
  );
}

export default Testing