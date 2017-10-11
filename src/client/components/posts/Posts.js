import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as postsActions from '../../actions/posts-actions';

import './Posts.css';

class Posts extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }
  render() {
    console.log(this.props);
    const { posts, error, isFetching } = this.props;

    return (
      <article className='posts'>
        <ul className='posts__post-list'>
          {
            isFetching && (
              <div className='posts__loading'>
                Loading ...
              </div>
            )
          }
          { error && (
            <div className='posts__error'>
              { error }
            </div>
          )}
          {
            posts.map(post => (
              <li className='posts__post' key={`posts__post@${post.id}`}>
                <div className='posts__post-img-wrapper'>
                  <img className='posts__post-img' src={post.image} />
                </div>
                <div className='posts__post-text'>
                  <a href={post.link} target='_blank'>
                    <h2 className='posts__post-title'>{post.title}</h2>
                  </a>
                  <p className='posts__post-meta'>
                    <span className='posts__post-publication'>
                      {post.publication}
                    </span>
                    <span className='posts__post-date'>
                      {post.date}
                    </span>
                  </p>
                  <p className='posts__post-snippet'>{post.snippet}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </article>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func,
  error: PropTypes.string,
  isFetching: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    error: state.posts.error,
    isFetching: state.posts.isFetching
  };
};

export default connect(mapStateToProps, postsActions)(Posts);
