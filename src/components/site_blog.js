import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BlogBar from '../containers/blog_bar';
import BlogIndex from '../containers/blog_index';
import BlogNew from '../containers/blog_new';
import BlogPostShow from '../containers/blog_post_show';

export default class SiteBlog extends Component  {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <BlogBar />
                    <Switch>
                        <Route path="/blog/new" component={BlogNew} />
                        <Route path="/blog/:id" component={BlogPostShow} />
                        <Route path="/blog" component={BlogIndex} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
