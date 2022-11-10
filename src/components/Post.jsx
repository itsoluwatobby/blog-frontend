import React, { useContext } from 'react';
import { PostContext } from '../context/PostContextProvider';

const Post = ({ post }) => {
   const { dateFormatter } = useContext(PostContext)
   
  return (
    <section className='md:max-w-[50vw] font-serif'>
      <div className='flex flex-col gap-2 py-2'>
        <p className='text-[25px] text-gray-00 uppercase'>{post.title}</p>
        <p className='shadow-md text-gray-900 text-[20px]'>{(post.body).length >= 200 ? (
            `${(post.body).slice(0, 120)}  . . . . . .`
        ): post.body}</p>
        <p className='text-gray-600'>posted {dateFormatter(post.dateTime)}</p>
      </div>
    </section>
  );
}

export default Post;
