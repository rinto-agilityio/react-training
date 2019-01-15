import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.div``
const Title = styled.h1``
const Description = styled.p``

const Author = ({ match }) => {
  const [author, setAuthor] = useState({})

  useEffect(async () => {
    const { id } = match.params

    if (!id) return

    const result = await axios(`http://localhost:3001/author/${id}`)

    setAuthor(result.data)
  }, {})

  useEffect(() => (
    document.title = `Author: ${author.name}`
  ))

  return (
    <Wrapper>
      <Title>{author.name}</Title>
      <Description>{author.desc}</Description>
    </Wrapper>
  )
}

export default Author
