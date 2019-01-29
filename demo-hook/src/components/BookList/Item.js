import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BookItem = styled(Link)`
  max-width: 300px;
`

const Item = ({ item }) => (
  <BookItem to={`/book/${item.id}`} title={item.title}>
    <img src={item.cover} alt={item.title.toUpperCase()} />
  </BookItem>
)

export default Item
