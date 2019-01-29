import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

// Components
import Item from './Item'
import ItemErrorBoundary from './ItemErrorBoundary'

// Apply React memo for performance
const ItemMemoWrap = React.memo(Item)

const Title = styled.h1``
const BookListWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px;
`

const BookList = () => {
  const [bookList, setBookList] = useState([])

  // Fetching data from API
  useEffect(() => {
    axios
      .get('http://localhost:3001/book')
      .then(result => (
        setBookList(result.data)
      ))
  }, [])


  return (
    <>
      <Title>New Books</Title>
      <BookListWrapper>
        {bookList.map(book => (
          <ItemErrorBoundary key={book.id}>
            <ItemMemoWrap item={book} />
          </ItemErrorBoundary>
        ))}
      </BookListWrapper>
    </>
  )
}

export default BookList
