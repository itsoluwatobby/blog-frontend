import axios from 'axios';
const BLOG_URL = 'http://localhost:4500/api/blog/posts';

export const axiosFetch = axios.create({
   baseURL: BLOG_URL,
   headers: {
      'Content-Type': 'application/json'
   }
})