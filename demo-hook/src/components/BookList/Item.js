import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-bottom: 1px solid #eee;
  display: grid;
  grid-template-columns: 160px auto;
  grid-gap: 20px;
`
const ThumbnailWrapper = styled.div``
const Thumbnail = styled.img`
  max-width: 100%;
`
const Info = styled.div`
  display: inline-block;
`
const Title = styled.h3``
const Author = styled.p``

const BookItem = ({ item }) => (
  <Wrapper>
    <ThumbnailWrapper>
      <Thumbnail src={item.cover} alt={item.title} />
    </ThumbnailWrapper>
    <Info>
      <Title>{item.title}</Title>
      <Author>Author: {item.author.name}</Author>
    </Info>
  </Wrapper>
)

export default BookItem
