import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ListPostWrapper = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 20px;

`
const SinglePostWrapper = styled.article`
  background-color: #fff;
  padding: 20px;
  border: 1px solid rgba(0,0,0,.09);
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0,0,0,.03);
`
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`

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
