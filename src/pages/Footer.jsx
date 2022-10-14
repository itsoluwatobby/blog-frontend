import React, { useContext } from 'react';
import { PostContext } from '../context/PostContextProvider';

const Footer = () => {
   const { posts } = useContext(PostContext)
  return (
    <div>
      {posts ? (
        <div className='bg-gray-300 flex items-center justify-center bottom-0 py-2'>
          <p className='font-mono font-bold'>Total number of posts <span className='text-[19px] text-gray-800'>{posts.length}</span></p>
        </div>) : (
          <p className='font-mono font-bold text-center'>No posts</p>
        )
      }
    </div>
  );
}

export default Footer;
