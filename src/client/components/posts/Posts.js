import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Posts.css';

class Posts extends Component {
  render() {
    const { posts, category, tags } = this.props;
    const { postsArr } = posts;

    return (
      <article className='posts'>
        <div>{ category }</div>
        <div>{ tags.map(tag => `${tag}, `) }</div>
        <ul className='posts__post-list'>
          {
            postsArr.map(post => (
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
  posts: PropTypes.object,
  category: PropTypes.string,
  tags: PropTypes.array
};

const mapStateToProps = ({ posts }) => {
  return {
    posts
  };
};

export default connect(mapStateToProps)(Posts);
