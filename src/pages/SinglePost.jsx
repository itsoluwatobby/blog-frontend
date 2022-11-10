import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PostContext } from '../context/PostContextProvider';

const SinglePost = () => {
   const { postID } = useParams()
   const { posts, handleDelete, dateFormatter, error } = useContext(PostContext);

   const targetPost = posts.find(post => (post._id).toString() === postID)

   if(error) {
      return <p className='text-red-600 text-center mt-5 text-4xl'>{error}</p>
   }

  return (
   <section>
      {targetPost ? (
         <div className='flex flex-col gap-3 p-2 shadow-lg mt-2 mx-2 font-serif'>
            <div className='flex flex-col space-y-5'>
               <p className='shadow-md text-center text-3xl text-gray-800 underline capitalize tracking-wide'>{(targetPost.title).length > 30 ? `${(targetPost.title).substring(0, 30)} ....` : targetPost.title }</p>
               <p className='tracking-medium break-normal leading-5 text-[20px] text-black'><span className='capitalize'>{targetPost.body.slice(0, 1)}</span>{targetPost.body.slice(1)}</p>
               <p className='text-gray-600'>Posted - {dateFormatter(targetPost.dateTime)}</p>
            </div>
            <div className='flex justify-between items-center'>
               <Link to={`editPost/${targetPost._id}`}>
                  <button className='bg-teal-400 rounded-lg shadow-md hover:bg-teal-300 active:bg-teal-400 transition duration-150 ease-in-out cursor-pointer p-2'>Edit Post</button>
               </Link>
               {posts.length > 1 &&
                  <button onClick={() => handleDelete(targetPost._id)} className='bg-red-500 rounded-lg shadow-md hover:bg-red-300 active:bg-red-400 transition duration-150  ease-in-out cursor-pointer p-2'>Delete Post</button>
               }
            </div>
         </div>) : (
         <div className='flex flex-col justify-center items-center gap-5'>
            <p className='text-3xl mt-5'>Post Not found</p>
            <Link to='/' className='text-[20px] text-gray-900'>
               <button className=' border py-2 px-3 rounded-lg border-1-grey-600 bg-green-200 shadow-lg cursor-pointer hover:translate-y-[3px] transition duration-200 ease-in-out hover:bg-green-400 active:bg-green-300'>
                  Return to posts
               </button>
            </Link>
         </div>
      )}
   </section> 
  );
}

export default SinglePost;
