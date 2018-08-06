import axios from 'axios';

export const TAB_SELECTED = 'tab_selected';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';

const G_ROOT_URL = 'https://www.googleapis.com/blogger/v3/blogs/';
const G_API_KEY = '?key=AIzaSyCcB9dlS3iO7iPr_ABmR5Rhk4EePMEBbh4';
const BLOG_ID = '8248864446473951450';

export function selectTab(tab) {
    return {
        type: TAB_SELECTED,
        payload: tab
    };
}

export function fetchPosts() {
    const request = axios.get(`${G_ROOT_URL}${BLOG_ID}/posts${G_API_KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id){
    const request = axios.get(`${G_ROOT_URL}${BLOG_ID}/posts/${id}${G_API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}