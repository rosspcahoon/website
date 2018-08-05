import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class BlogPostShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/blog/');
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div> Loading...</div>;
        }
        return (
            <div>
                 <Link to="/blog/"> Browse other posts </Link>
                  <h3 className='header'> {post.title} </h3>
                  <h6> Categories: {post.categories}</h6>
                  <p><div dangerouslySetInnerHTML={{ __html: post.content }} /></p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps){
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(BlogPostShow);