import React, { memo } from 'react';
import PropTypes from 'prop-types';
import FetchMoreButton from '../../components/commons/FetchMoreButton'
import AppConfig  from '../../configs/AppConfig'

//components
import PostItem from './PostItem'

const updateQuery = (previousResult, { fetchMoreResult }) => {

  if (!fetchMoreResult) {
    return previousResult;
  }

  return {
    ...previousResult,
    getPostsByAuthor: {
      ...previousResult.getPostsByAuthor, ...fetchMoreResult.getPostsByAuthor,
      pageInfo: {...previousResult.getPostsByAuthor.pageInfo, ...fetchMoreResult.getPostsByAuthor.pageInfo},
      posts: [
        ...previousResult.getPostsByAuthor.posts, ...fetchMoreResult.getPostsByAuthor.posts
      ]
    }
  };
};

const PostList = ({data, loading, fetchMore, pageInfo }) => {
  console.log('pageInfo', pageInfo);

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
      <FetchMoreButton
        loading={loading}
        fetchMore={fetchMore}
        hasNextPage={pageInfo.hasNextPage}
        variables={{
          after: pageInfo.endCursor,
          first: AppConfig.PER_PAGE
        }}
        updateQuery={updateQuery}
      />
    </>
  )
}

PostList.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.object,
  fetchMore: PropTypes.func,
  pageInfo: PropTypes.object
};

PostList.defaultProps = {
  data: [],
  loading: {},
  fetchMore: () => {},
  pageInfo: {}
};

export default memo(PostList);
