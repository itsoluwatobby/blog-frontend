import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PostContext } from '../context/PostContextProvider';

const NavBar = () => {
   const location = useLocation()
   const { handleSearch, refetch } = useContext(PostContext)
   const currentLink = location.pathname

  return (
    <nav className='flex items-center small:h-[100px] justify-between h-[88px] bg-gray-500 mad:flex-col mad:p-2 mad:gap-[2px] sticky px-2 top-0 nest-hub:py-4 nest-hub:h-[180px] md:max-w-[50vw]'>
      <div className='flex-1'>
         <input 
            type="text"
            id='search'
            className='nest-hub:w-[95vw] nest-hub:py-6 border-none nest-hub:text-[32px] rounded-lg w-25 small:w-[310px] md:w-[300px] mad:w-[72vw]'
            placeholder='search blog post'
            onChange={handleSearch} 
         />
      </div>
      <div>
         <ul className='flex justify-between items-center space-x-3 mad:space-x-8 text-[20px] md:gap-4 md:mr-3 nest-hub:text-gray-100 nest-hub:text-[32px] nest-hub:gap-10'>
            <li className={`hover:text-gray-700 ${currentLink === '/' && 'border-4 border-b-gray-400 border-l-0 border-r-0 border-t-0'}`} onClick={refetch}><Link to='/'>Posts</Link></li>
            <li className={`hover:text-gray-700 ${currentLink === '/newPost' && 'border-4 border-b-gray-400 border-l-0 border-r-0 border-t-0'}`}><Link to='/newPost'>New</Link></li>
            <li className={`hover:text-gray-700 ${currentLink === '/about' && 'border-4 border-b-gray-400 border-l-0 border-r-0 border-t-0'}`}><Link to='/about'>About</Link></li>
            <li className='hover:text-gray-700 cursor-pointer active:text-gray-900'
            onClick={refetch}>Reload</li>
         </ul>
      </div>
    </nav>
  );
}

export default NavBar;
