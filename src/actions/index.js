import axios from 'axios';
import {
    GET_POSTS,
    GET_COMMENTS
} from './types';

export const getPosts = () => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => {
        // console.log('posts', res.data);
        dispatch({ type: GET_POSTS, payload: res.data })
    })
    .catch((err) => {
        console.log(err);
    })
}

export const getComments = (id) => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((res) => {
        // console.log('posts', res.data);
        dispatch({ type: GET_COMMENTS, payload: res.data })
    })
    .catch((err) => {
        console.log(err);
    })
}

