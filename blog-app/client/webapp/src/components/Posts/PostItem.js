import React, { memo } from 'react';
import PropTypes from 'prop-types';

//style
import './styles/PostStyle.css'

const PostItem = ({post}) => {

  return (
    <div className='wrap-post'>
      <p className='post-title'>{post.title}</p>
      <p>{post.content}</p>
    </div>
  )
}

PostItem.propTypes = {
  post: PropTypes.object,
};

PostItem.defaultProps = {
  post: {}
};

export default memo(PostItem);
