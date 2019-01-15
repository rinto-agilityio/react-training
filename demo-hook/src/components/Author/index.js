import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  // Fetch author info
  useEffect(async () => {
    const { id } = match.params

    if (!id) return

    const result = await axios(`http://localhost:3001/author/${id}`)

    setAuthor(result.data)
  }, {})

  // Fetch author books
  useEffect(async () => {
    // TODO: Check reason why author is alway null
    // Correct way is check author.id instead of params.id, cuz author is update via useEffect above
    const { id } = match.params

    if (!id) return
      const result = await axios(`http://localhost:3001/book?author.id=${id}`)

      setAuthorBooks(result.data)
  }, [])

  useEffect(() => (
    document.title = `Author: ${author.name}`
  ))

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
