import axios from 'axios';
const BLOG_URL = 'https://blog_app.onrender.com';

export const axiosFetch = axios.create({
   baseURL: BLOG_URL,
   headers: {
      'Content-Type': 'application/json'
   }
})