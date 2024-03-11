import React from 'react'
import Loading from './animations/Loading';
import Loading2 from './animations/Loading2';
import Loading3 from './animations/Loading3';
import Loading4 from './animations/Loading4';
import {Sidebar} from './Sidebar';
import Sidebar2 from './Sidebar2';
import Sidebar3 from './Sidebar3';
import LoginAuth from './LoginAuth';

const Login4 = () => {
  return (
    <div className="grid grid-cols-2 ">
      {/* <div className="">
        <Sidebar />
      </div> */}
      <div>
        <Sidebar2 />
      </div>
      {/* <div>
        <Sidebar3 />
      </div> */}
      <div>
        <Loading />
        <Loading2 />
        <Loading3 />
        <Loading4 />
      </div>
      <div>
        <LoginAuth />
      </div>
    </div>
  );
}

export default Login4