import React from 'react';

const About = () => {
  return (
    <div className='nest-hub:max-w-[50vw] md:max-w-[49vw]'>
      <div className='flex flex-col justify-center w-full box-border'>
         <p className='flex flex-col justify-between gap-4 shadow-lg p-2 tracking-wider break-normal font-serif mx-1 rounded-lg w-full'>
            <span className='hover:text-gray-900 hover:bg-gray-500 rounded-md p-2 w-full'>
               My name is Oluwatobi Akinola Samuel, I'm from Nigeria and presently based in Nigeria. I'm a software developer with over two years of programming experience.
            </span>
            <span className='hover:text-gray-900 hover:bg-gray-500 rounded-md p-2 w-full'>
               I love to program in ReactJs, Node, Javascript, Java, HTML, Css and also very familiar with relational database like SQL (using postgres) and non-relational database using MongoDB.
            </span>
         </p>
      </div>
    </div>
  );
}

export default About;
