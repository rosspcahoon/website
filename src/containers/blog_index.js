import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class BlogIndex extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <li className='list-group-item' key={post.published}>
                    <Link to={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                    <div>{post.published}</div>
                </li>
            );
        });
    }


  render() {
    return (
      <div>
        <h3 className='header'> Posts </h3>
        <ul className='list-group'>
            {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(BlogIndex);

