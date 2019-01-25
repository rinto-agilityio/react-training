import React from 'react'

import {
  PostWrapper,
  Title,
  Content,
  Author,
} from './styles/Post'

const Post = ({ title, content, author }) => (
  <PostWrapper>
    <Title>{title}</Title>
    <Content>{content}</Content>
    <Author>{author.name}</Author>
  </PostWrapper>
)

export default Post
