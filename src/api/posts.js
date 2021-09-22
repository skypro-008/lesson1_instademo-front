import API from './api';

export const getPosts = () => API.get(`/posts/`);

export const like = (id) => API.post(`/posts/${id}/like/`);

export const dislike = (id) => API.post(`/posts/${id}/dislike/`);

export const getComments = (id) => API.get(`/posts/${id}/comments/`);

export const addComment = (id, data) => API.post(`/posts/${id}/comments/`, data);

