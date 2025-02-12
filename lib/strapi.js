// lib/strapi.js
import axios from 'axios';

export const getPosts = async () => {
  const res = await axios.get('http://localhost:1337/api/blog-posts');
  return res.data;
};
