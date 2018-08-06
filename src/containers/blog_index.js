import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class BlogIndex extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    getStringMonth(month) {
        switch(month){
        case "01":
            return 'January';
        case "02":
            return 'February';
        case "03":
            return 'March';
        case "04":
            return 'April';
        case "05":
            return 'May';
        case "06":
            return 'June';
        case "07":
            return 'July';
        case "08":
            return 'August';
        case "09":
            return 'September';
        case "10":
            return 'October';
        case "11":
            return 'November';
        case "12":
            return 'December';
        }
    }

    formatPostDate(date) {
        var datetimeArray = date.split('T');
        var dateArray = datetimeArray[0].split('-');

        return this.getStringMonth(dateArray[1]) + " " + dateArray[2] + ", " + dateArray[0];
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return (
                <li className='list-group-item' key={post.published}>
                    <Link to={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                    <div className='small'>{this.formatPostDate(post.published)}</div>
                </li>
            );
        });
    }


  render() {
    return (
      <div>
        <h2 className="text-center header"> Blog < /h2>
        <p className='text-center'>
            This page is a portal for displaying blog posts made to on Blogger. This was an exercise in connecting
            to a third party API.
        </p>
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

