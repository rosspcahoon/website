import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectBlogTab } from '../actions/index';
import { bindActionCreators } from 'redux';

class BlogBar extends Component {
    classNameSelector(tab) {
        if (tab.name === this.props.activeBlogTab) {
            return "btn blog-btn-sel selected pull-xs-right";
        } else {
            return "btn blog-btn pull-xs-right";
        }
    }

    renderButtons(){
        return  this.props.blogTabs.map((tab) => {
            return (
                    <Link
                        className = {this.classNameSelector(tab)}
                        onClick={() => this.props.selectBlogTab(tab.name)}
                        to = {tab.url} >
                        {tab.name}
                    </Link>
            );
        });
    }

    render() {
        return (
            <div className="blog-bar">
                    {this.renderButtons()}
             </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeBlogTab: state.activeBlogTab,
        blogTabs: state.blogTabs
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBlogTab: selectBlogTab }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogBar);