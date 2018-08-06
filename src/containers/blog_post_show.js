import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class BlogPostShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    renderLabels(post){
        return (
            post.labels.join(', ')
        );
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div> Loading...</div>;
        }
        return (
            <div>
                  <h3 className='header inline-display'> {post.title} </h3>
                 <Link className="link-back inline-display" to="/blog/"> Back to Posts </Link>
                  <br></br>
                  <small> Labels: {this.renderLabels(post)} </small>

                  <br></br>
                  <br></br>
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps){
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(BlogPostShow);