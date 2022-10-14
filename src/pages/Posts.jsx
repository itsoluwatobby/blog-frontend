import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../components/Post';
import { PostContext } from '../context/PostContextProvider';
import Spinner from '../components/Spinner';

const Posts = () => {
   const { posts, loading, error } = useContext(PostContext);
   const [morePost, setMorePost] = useState(3)

   if(error) {
      return <p className='text-red-600 text-center mt-5 text-4xl'>Error loading post</p>
   }

   const orderedPosts = posts.slice().sort((a,b) => b.dateTime.localeCompare(a.dateTime))
   const getMorePosts = () => {
      setMorePost(prev => prev <= posts.length-1 ? prev += 1 : prev = 3)
   }

  return (
   <>
      {loading && <Spinner />}
      {!loading && !error && (
      <article className='md:max-w-[50vw]'>
         {orderedPosts.length ? (
         <>   
            <ul className='flex flex-col mx-3 my-5 gap-2 mb-2'>
               {orderedPosts.length < 6 ? (
                  orderedPosts.map(post => (
                     <li key={post._id} className='border-gray-500 bg-gray-300 rounded-lg py-2 px-3 shadow-2xl hover:bg-gray-500 cursor-pointer hover:text-white transition duration-200 ease-in-out'>
                        <Link to={`/post/${post._id}`}><Post post={post} /></Link>
                     </li>
                     )
                  ))
                     :
                  (
                     orderedPosts.slice(morePost-3, morePost).map(post => (
                        <li key={post._id} className='border-gray-500 bg-gray-300 rounded-lg py-2 px-3 shadow-2xl hover:bg-gray-500 cursor-pointer hover:text-white transition duration-200 ease-in-out'>
                           <Link to={`/post/${post._id}`}><Post post={post} /></Link>
                        </li>
                        ))
                  )} 
                  {!orderedPosts.length ?( 
                     <div className='flex flex-col justify-center gap-5 items-center'>
                        <p className='text-3xl'>No post available</p>
                        <Link to='/newPost' className='text-[20px] text-gray-900'>
                           <button className=' border py-2 px-3 rounded-lg border-1-grey-600 bg-green-200 shadow-lg cursor-pointer hover:translate-y-[3px] transition duration-200 ease-in-out hover:bg-green-400 active:bg-green-300'>
                              Tap here to make a new post
                           </button>
                        </Link>
                     </div>
                     ) : null
                  }   
               </ul>
               {posts.length > 5 ? (
                  <div className='flex justify-center items-center px-3 mt-0'>
                     <button onClick={getMorePosts} className='border-1-gray-300 bg-slate-500 hover:bg-slate-600 active:bg-slate-500 transition duration-150 ease-in-out cursor-pointer rounded-full py-1 px-5 tracking-wider text-white'>More Posts</button>
                  </div>
                  ) : null
               }
               {morePost >= posts.length && <p className='mt-0 text-center text-[20px] text-gray-700'>No more posts...</p> }
            </>   
            ):(
               <p className="text-center text-gray-700 text-3xl mt-10">Post not found</p>
            )}
         </article>
         )}
      </>
   )
}

export default Posts;
