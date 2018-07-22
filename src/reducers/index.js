import { combineReducers } from 'redux';
import TabsReducer from './reducer_tabs';
import ActiveTabReducer from './reducer_active_tab';
import ActiveBlogTabReducer from './reducer_active_blog_tab';
import BlogTabsReducer from './reducer_blog_tabs';

const rootReducer = combineReducers({
  tabs: TabsReducer,
  activeTab: ActiveTabReducer,
  blogTabs: BlogTabsReducer,
  activeBlogTab: ActiveBlogTabReducer
});


export default rootReducer;
