import { sub } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosFetch } from '../axios/axiosFetch';
import { PostContext } from '../context/PostContextProvider';

const EditPost = () => {
   const { postID } = useParams();
   const navigate = useNavigate();
   
   const [editTitle, setEditTitle] = useState('');
   const [editBody, setEditBody] = useState('')
   const { posts, setPostData, refetch } = useContext(PostContext);

   const targetPost = posts.find(post => (post._id).toString() === postID)

   useEffect(() => {
      setEditTitle(targetPost.title)
      setEditBody(targetPost.body)
   }, [targetPost])


   const handleEdit = async (id) => {
      const newDate = sub(new Date(), { minutes: 0}).toISOString()
      const editedPost = { title: editTitle, body: editBody, dateTime: newDate }
      try{
         const { data } = await axiosFetch.patch(`/posts/${id}`, editedPost)
         const otherPosts = posts.filter(post => post._id !== id)
         const allPosts = [...otherPosts, data.currentPost]
   
         setPostData({ posts: allPosts })
         refetch()
         navigate(`/post/${id}`)
      }
      catch(error){
         setPostData({error: true})
      }
   }

  return (
    <div className='flex flex-col justify-center items-center md:max-w-[50vw]'>
      <h1 className='text-3xl nest-hub:text-[36px] nest-hub:font-semibold nest-hub:py-4 text-gray-900 shadow-md text-center w-full mt-7'>Edit Post</h1>
      <div className='flex flex-col justify-center items-center mx-3 my-5 gap-5'>
         <div className='flex flex-col'>
               <label htmlFor="editTitle" className='nest-hub:text-[32px] text-[20px] break-normal tracking-wide left-0 ml-0 text-gray-800 font-serif'>Edit Title:</label>
               <input 
                  type="text"
                  id='editTitle'
                  max= {30}
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)} 
               className='nest-hub:w-[95vw] nest-hub:py-10 nest-hub:text-[32px] w-[73vw] md:max-w-[47vw] border-none shadow-md text-[20px] bg-white h-12 rounded-lg px-3 text-black font-serif text-center small:w-[90vw]'
            />
         </div>
         <div className='flex flex-col'>
         <label htmlFor="editBody" className='nest-hub:text-[32px] text-[20px] tracking-wide text-gray-800 font-mono'>Edit Body:</label>
            <textarea 
               type="text"
               id='editBody'
               rows={8}
               value={editBody}
               onChange={e => setEditBody(e.target.value)}
               className='nest-hub:w-[95vw] nest-hub:py-10 nest-hub:text-[32px] w-[73vw] md:max-w-[47vw] border-none text-black font-serif shadow-md bg-white rounded-lg px-3 tracking-wide indent-2 break-normal small:w-[90vw]' 
            />
         </div>
         <button onClick={() => handleEdit(targetPost._id)} className='nest-hub:w-[95vw] bg-green-500 w-[73vw] p-2 rounded-lg shadow hover:bg-green-400 active:bg-green-500 transition duration-200 ease-in-out cursor-pointer text-[18px] font-semibold small:w-[90vw]'>Submit Post</button>
      </div>   
    </div>
  );
}

export default EditPost;
