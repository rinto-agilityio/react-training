import React from 'react'
import styled from 'styled-components'

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

const ListPost = ({ posts }) => (
  <ListPostWrapper>
    {posts.map(post => (
      <SinglePostWrapper key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </SinglePostWrapper>
    ))}
  </ListPostWrapper>
)

export default ListPost
