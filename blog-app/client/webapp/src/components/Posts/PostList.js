import React, { memo } from 'react';
import PropTypes from 'prop-types';

//components
import PostItem from './PostItem'

const PostList = ({data}) => {
  const listPosts = data.map((post, index) => {
    return (
      <PostItem
        key={index}
        title={post.title}
        content={post.content}
      />
    )
  })
  return (
    <>
      {listPosts}
    </>
  )
}

PostList.propTypes = {
  data: PropTypes.array,
};

PostList.defaultProps = {
  data: [],
};

export default memo(PostList);
