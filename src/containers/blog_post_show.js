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
                  <h3 className='header'> {post.title} </h3>
                 <Link className="link-back" to="/blog/"> Back to Posts </Link>
                  <br></br>
                  <h6> Labels: </h6>
                  {this.renderLabels(post)}
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