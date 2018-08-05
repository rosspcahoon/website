import { BLOG_TAB_SELECTED } from '../actions';


export default function(state = 'Blog Home', action) {
    switch(action.type){
        case BLOG_TAB_SELECTED:
            return action.payload;
         default:
            return state;
    }
}