import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

// Helpers
import { useUpdateSiteTitle } from '../../helpers/custom-hooks'

const Wrapper = styled.div``
const Title = styled.h1``
const Description = styled.p``
const BookListWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-gap: 30px;
`

const Item = ({ item }) => (
  <Link to={`/book/${item.id}`} title={item.title}>
    <img src={item.cover} alt={item.title} />
  </Link>
)

const Author = ({ match }) => {
  const [author, setAuthor] = useState({})
  const [authorBooks, setAuthorBooks] = useState([])

  useUpdateSiteTitle(`Author: ${author.name}`)

  // Fetch author info
  useEffect(() => {
    const { id } = match.params

    if (!id) return

    axios
      .get(`http://localhost:3001/author/${id}`)
      .then(result => (
        setAuthor(result.data)
      ))
  }, {})

  // Fetch author books
  useEffect(() => {
    if (!author.id) return

    axios
      .get(`http://localhost:3001/book?author.id=${author.id}`)
      .then(result => (
        setAuthorBooks(result.data)
      ))

  }, [author.id])

  return (
    <Wrapper>
      <Title>{author.name}</Title>
      <Description>{author.desc}</Description>
      <BookListWrapper>
        {authorBooks.map(item => <Item key={item.id} item={item} />)}
      </BookListWrapper>
    </Wrapper>
  )
}

export default Author
