import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Helpers
import { useUpdateSiteTitle } from '../../helpers/custom-hooks'

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

  // Custom hook
  useUpdateSiteTitle(`${book.title}` || 'Book details')

  return (
    <>
      <p><Link to="/" title="Back">Back</Link></p>
      <Wrapper>
        <CoverWrapper>
          <Cover src={book.cover} alt={book.title || 'Book cover'} />
        </CoverWrapper>
        <Info>
          <Title>{book.title}</Title>
          <Description>{book.desc}</Description>
          <AuthorWrapper>
            Author:&nbsp;
            {book.author && <Link to={`/author/${book.author.id}`}>{book.author.name}</Link>}
          </AuthorWrapper>
        </Info>
      </Wrapper>
    </>
  )
}

export default BookDetail
