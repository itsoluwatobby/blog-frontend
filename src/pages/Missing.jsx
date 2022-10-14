import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div className='text-3xl text-gray-800 text-center uppercase mt-8 flex flex-col justify-between items-center gap-12'>
      <p>Page Not Found</p>

      <Link to='/'>
        <p className='text-2xl underline text-cyan-800 hover:text-cyan-600 active:text-cyan-800 transition-all'>Return To Posts</p></Link>
    </div>
  );
}

export default Missing;
