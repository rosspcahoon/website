import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TabsReducer from './reducer_tabs';
import ActiveTabReducer from './reducer_active_tab';
import ActiveBlogTabReducer from './reducer_active_blog_tab';
import BlogTabsReducer from './reducer_blog_tabs';
import PostsReducer from './reducer_blog_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  tabs: TabsReducer,
  activeTab: ActiveTabReducer,
  blogTabs: BlogTabsReducer,
  activeBlogTab: ActiveBlogTabReducer,
  form: formReducer
});


export default rootReducer;
