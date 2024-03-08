import React from 'react'
import Loading from './animations/Loading';
import Loading2 from './animations/Loading2';
import Loading3 from './animations/Loading3';
import Loading4 from './animations/Loading4';

const Loadings = () => {
  return (
    
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 gap-4">
        <Loading />
        <Loading2 />
        <Loading3 />
        <Loading4 />
        </div>
      </div>
    
  );
}

export default Loadings