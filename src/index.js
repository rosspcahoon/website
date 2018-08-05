import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import './style.css';
import 'bootstrap';
import './scss/app.scss';

import reducers from './reducers';
import SiteIndex from './components/site_index.js';
import SiteBlog from './components/site_blog.js';
import SiteContact from './components/site_contact.js';
import NavigationBar from './containers/navigation_bar';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <NavigationBar />
                <Switch>
                    <Route path="/blog" component={SiteBlog} />
                    <Route path="/contact" component={SiteContact} />
                    <Route path="/" component={SiteIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
