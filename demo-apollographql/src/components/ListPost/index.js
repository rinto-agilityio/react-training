import React from 'react'
import PropTypes from 'prop-types'

// Components
import { ItemWrapper, ItemLink } from './ListPost.style'

const ListPost = ({ posts }) => (
  <div id="test-jest-id">
    {posts.map(post => (
      <ItemWrapper key={post.id}>
        <ItemLink to={`post/${post.slug}`} title={post.title}>
          <h2 className="test-classname">{post.title}</h2>
          <p>{post.content}</p>
        </ItemLink>
      </ItemWrapper>
    ))}
  </div>
)

ListPost.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default ListPost
