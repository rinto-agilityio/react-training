import React from 'react'
import PropTypes from 'prop-types'

import {
  ListPostWrapper,
  SinglePostWrapper,
  StyledLink,
} from './index.style'

const ListPost = ({ posts }) => (
  <ListPostWrapper>
    {posts.map(post => (
      <SinglePostWrapper key={post.id}>
        <StyledLink to={`post/${post.slug}`} title={post.title}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </StyledLink>
      </SinglePostWrapper>
    ))}
  </ListPostWrapper>
)

ListPost.propTypes = {
  posts: PropTypes.array.isRequired
}

export default ListPost
