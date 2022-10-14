import React from 'react';
import gear from '../assets/Gear.svg'

const Spinner = () => {
  return (
    <div className='bg-blue-400 bg-opacity-10 mt-0 fixed flex justify-center items-center top-0 left-0 right-0 bottom-0 z-50 min-w-full min-h-screen'>
      <img src={gear} alt='loading...' className='h-20 rounded-full' />
    </div>
  );
}

export default Spinner;
