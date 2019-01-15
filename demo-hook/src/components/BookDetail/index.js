import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  grid-gap: 20px;
`
const CoverWrapper = styled.div``
const Cover = styled.img`
  max-width: 100%;
`
const Info = styled.div``
const Title = styled.h1``
const Description = styled.p``
const AuthorWrapper = styled.div``

const BookDetail = ({ match }) => {
  const [book, setBook] = useState({})

  // Fetching data from api for book detail
  useEffect(async () => {
    const { id } = match.params

    if (!id) return

    const result = await axios(`http://localhost:3001/book/${id}`)

    setBook(result.data)
  }, [])

  // Update site title
  useEffect(() => (
    document.title = `${book.title}` || 'Book details'
  ))

  return (
    <Wrapper>
      <CoverWrapper>
        <Cover src={book.cover} alt={book.title || 'Book cover'} />
      </CoverWrapper>
      <Info>
        <Title>{book.title}</Title>
        <Description>{book.desc}</Description>
        <AuthorWrapper>
          Author: {book.author && book.author.name}
        </AuthorWrapper>
      </Info>
    </Wrapper>
  )
}

export default BookDetail
