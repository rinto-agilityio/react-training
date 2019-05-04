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

  const listPosts = data.map((post, index) => {
    return (
      <PostItem
        key={index}
        post={post}
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
  loading: PropTypes.bool,
  fetchMore: PropTypes.func,
  pageInfo: PropTypes.object
};

PostList.defaultProps = {
  data: [],
  loading: false,
  fetchMore: () => {},
  pageInfo: {}
};

export default memo(PostList);