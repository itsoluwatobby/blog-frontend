import React, { useContext } from 'react';
import { PostContext } from '../context/PostContextProvider';

const NewPost = () => {
   const { handleChange, handleSubmit } = useContext(PostContext)

  return (
      <div className='flex flex-col justify-center items-center md:max-w-[50vw]'>
         <h1 className='shadow-md text-3xl text-gray-900 text-center w-full mt-6 nest-hub:text-[36px] nest-hub:font-semibold nest-hub:py-4'>New Post</h1>
         <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mx-3 my-5 gap-5'>
               <div className='flex flex-col w-fit'>
                  <label htmlFor="postTitle" className='text-[20px] tracking-wide text-gray-800 font-mono nest-hub:text-[32px]'>Post Title:</label>
                  <input 
                     type="text"
                     id='newPostTitle'
                     placeholder='Enter Title'
                     required
                     max={30}
                     onChange={handleChange} 
                     className='nest-hub:text-[32px] w-[73vw] small:w-[90vw] md:max-w-[47vw] border-none shadow-md text-[20px] text-gray-600 bg-white h-12 rounded-lg px-3 font-serif md:box-border nest-hub:w-[95vw] nest-hub:py-10'
                  />
               </div>
               <div className='flex flex-col w-fit'>
               <label htmlFor="postBody" className='nest-hub:text-[32px] text-[20px] tracking-wide text-gray-800 font-mono'>Post Body:</label>
                  <textarea 
                     type="text"
                     id='newPostBody'
                     placeholder='Enter post body here'
                     required
                     rows={8}
                     onChange={handleChange}
                     className='nest-hub:text-[32px] w-[73vw] md:max-w-[47vw] border-none placeholder:text-gray-500 font-serif shadow-md bg-white rounded-lg tracking-wide indent-2 break-all text-[20px] small:w-[90vw] nest-hub:w-[95vw] nest-hub:py-8' 
                  />
               </div>
               <button className='nest-hub:w-[95vw] nest-hub:text-[32px] bg-green-500 md:max-w-[47vw] w-[73vw] p-2 rounded-lg shadow hover:bg-green-400 active:bg-green-500 transition duration-200 ease-in-out cursor-pointer small:w-[90vw] text-[18px] font-semibold'>Submit Post</button>
         </form>
      </div>
  );
}

export default NewPost;
