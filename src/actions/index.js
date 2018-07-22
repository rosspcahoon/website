import axios from 'axios';

export const TAB_SELECTED = 'tab_selected';
export const BLOG_TAB_SELECTED = 'blog_tab_selected';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=rpcwebsite';

export function selectTab(tab) {
    return {
        type: TAB_SELECTED,
        payload: tab
    };
}

export function selectBlogTab(tab) {
    return {
        type: BLOG_TAB_SELECTED,
        payload: tab
    };
}

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback){
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEYS}`)
        .then(() => callback());

     return {
        type: DELETE_POST,
        payload: id
     };
}