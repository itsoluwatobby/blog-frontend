import { createContext, useEffect, useState } from "react";
import { formatDistanceToNow, parseISO, sub } from 'date-fns'
import { useNavigate } from "react-router-dom";
import { axiosFetch } from "../axios/axiosFetch";

export const PostContext = createContext({})

const PostContextProvider = ({ children }) => {
   const [loading, setLoading] = useState(false);
   const [reload, setReload] = useState(1);
   const [postData, setPostData] = useState({
      posts: [],
      newPostTitle: '',
      newPostBody: '',
      error: ''
   });
   const { posts, newPostTitle, newPostBody, error } = postData
   const navigate = useNavigate();

   const handleChange = (e) => {
      const name = e.target.id
      const type = e.target.type
      const value = type === 'checked' ? e.target.checked : e.target.value
      
      setPostData(prevData => ({...prevData, [name]: value}))
   }

   const refetch = () => setReload(prev => prev + 1)

   useEffect(() => {
      setLoading(true)
      const fetchPosts = async() => {
         try{
            const {data} = await axiosFetch.get('/posts')
            setPostData({posts: data.posts})
         }
         catch(error){
            setLoading(false)
            !error.response && setPostData({error: 'No server response'})
            error.response?.status === 400 && setPostData({error: 'No post available'})
            error.response?.status === 500 && setPostData({error: 'Error fetching posts'})
         }
         finally{
            setLoading(false)
         }
      }
      fetchPosts()
   }, [setPostData, reload])

   const handleSearch = (e) => {
      const valued = e.target.value;
      const findPosts = posts.filter(post => (
        (post.title).toLowerCase().includes(valued.toLowerCase()) || (post.body).toLowerCase().includes(valued.toLowerCase())
      ))
      setPostData({ posts: findPosts })
   }

   const dateFormatter = (date) => {
      return formatDistanceToNow(parseISO(date)) + ' ago'
   }

   const handleDelete = async (id) => {
      if(posts.length <= 3) {
         setPostData({error: 'Unauthorised'})
         refetch()
         navigate('/')
         return
      }
      else{
         setLoading(true)
         try{
            await axiosFetch.delete(`/posts/${id}`)
            navigate('/')
            refetch()
         }
         catch(error){
            setLoading(false)
            !error.response && setPostData({error: 'No server response'})
            error.response?.status === 400 && setPostData({error: 'Post not found'})
            error.response?.status === 500 && setPostData({error: 'Unable to delete post'})
         }
         finally{
            setLoading(false)
         }
      }
   }
  
   const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      try{
         const newPost = {
            title: newPostTitle, body: newPostBody, dateTime: sub(new Date(), { minutes: 0}).toISOString()
         }
         const { data } = await axiosFetch.post('/posts', newPost)
         const allPosts = [...posts, data.result]
         setPostData({ posts: allPosts })
         navigate('/')
      }
      catch(error){
         setLoading(false)
         !error.response && setPostData({error: 'No server response'})
         error.response?.status === 400 && setPostData({error: 'Post title taken'})
         error.response?.status === 500 && setPostData({error: 'Error submitting post'})
      }
      finally{
         setLoading(false)
      }
   }

   const value = { 
      posts, handleDelete, loading, error, handleSearch, dateFormatter, handleSubmit, handleChange, setPostData, refetch
   }

   return (
      <PostContext.Provider value={value}>
         {children}
      </PostContext.Provider>
   )
}

export default PostContextProvider;