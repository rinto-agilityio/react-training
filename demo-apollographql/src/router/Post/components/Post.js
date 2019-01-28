import React from 'react'

import {
  PostWrapper,
  Title,
  Content,
  Author,
} from './styles/Post'

const Post = ({ title, fullContent, author }) => (
  <PostWrapper>
    <Title>{title}</Title>
    <Content dangerouslySetInnerHTML={{__html: fullContent}} />
    <Author>{author.name}</Author>
  </PostWrapper>
)

export default Post
