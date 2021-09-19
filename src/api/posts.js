// {
//   "author": "<author_name>",
//   "content": "<comment_content>"
// }

// import API from './api';


import axios from "axios";

export const getPosts = () => axios.get(`/posts/`);

export const like = (id) => axios.post(`/posts/${id}/like/`);

export const dislike = (id) => axios.post(`/posts/${id}/dislike/`);

export const getComments = (id) => axios.get(`/posts/${id}/comments/`);

export const addComment = (id, data) => axios.post(`/posts/${id}/comments/`, data);

