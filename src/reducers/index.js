import { combineReducers } from 'redux';
import TabsReducer from './reducer_tabs';
import ActiveTabReducer from './reducer_active_tab';
import PostsReducer from './reducer_blog_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  tabs: TabsReducer,
  activeTab: ActiveTabReducer,
});


export default rootReducer;
