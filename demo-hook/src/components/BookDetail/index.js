import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
    <>
      <div>Book Details id: {match.params.id}</div>
      <p>BookID: {book.id}</p>
    </>
  )
}

export default BookDetail
