import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

// Components
import BookItem from './Item'

const BookListWrapper = styled.div``

const BookList = () => {
  const [bookList, setBookList] = useState([])

  // Fetching data from API
  useEffect(async () => {
    const result = await axios('http://localhost:3001/book')

    setBookList(result.data)
  }, [])


  return (
    <BookListWrapper>
      {bookList.map(book => <BookItem item={book} key={book.id} />)}
    </BookListWrapper>
  )
}

export default BookList
