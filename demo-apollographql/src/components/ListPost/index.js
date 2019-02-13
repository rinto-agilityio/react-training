import React from 'react'
import PropTypes from 'prop-types'

// Components
import { ItemWrapper, ItemLink } from './ListPost.style'

const ListPost = ({ posts }) => (
  <>
    {posts.map(post => (
      <ItemWrapper key={post.id}>
        <ItemLink to={`post/${post.slug}`} title={post.title}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </ItemLink>
      </ItemWrapper>
    ))}
  </>
)

ListPost.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default ListPost
