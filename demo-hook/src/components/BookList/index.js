import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Title = styled.h1``
const BookListWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  grid-gap: 20px;
`

const Item = ({ item }) => (
  <a href="">
    <img src={item.cover} alt={item.title} />
  </a>
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
