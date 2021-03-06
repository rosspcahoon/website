import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BlogIndex from '../containers/blog_index';
import BlogPostShow from '../containers/blog_post_show';

export default class SiteBlog extends Component  {

    render() {
        return (
            <BrowserRouter>
                <div className = 'in-set'>
                    <Switch>
                        <Route path='/blog/:id' component={BlogPostShow} />
                        <Route path='/blog' component={BlogIndex} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
