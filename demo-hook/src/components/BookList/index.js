import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Title = styled.h1``
const BookListWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
`
const BookItem = styled(Link)`
  max-width: 300px;
`

const Item = ({ item }) => (
  <BookItem to={`/book/${item.id}`} title={item.title}>
    <img src={item.cover} alt={item.title} />
  </BookItem>
)

const BookList = () => {
  const [bookList, setBookList] = useState([])

  // Fetching data from API
  useEffect(async () => {
    const result = await axios('http://localhost:3001/book')

    setBookList(result.data)
  }, [])


  return (
    <>
      <Title>New Books</Title>
      <BookListWrapper>
        {bookList.map(book => <Item item={book} key={book.id} />)}
      </BookListWrapper>
    </>
  )
}

export default BookList
