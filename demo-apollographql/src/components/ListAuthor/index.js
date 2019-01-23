import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ListAuthorWrapper = styled.section`
  background-color: #fff;
  padding: 1rem;
  border-radius: 3px;
`
const Title = styled.h3`
  margin: 1rem auto;
  text-align: center;
`
const AuthorWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`
const AuthorPhotoWrapper = styled.div``
const AuthorPhoto = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`
const AuthorName = styled.h3`
  margin: 0.5rem 1rem;
`

const ListAuthor = ({ authors }) => (
  <ListAuthorWrapper>
    <Title>Top Authors</Title>
    {authors.map(author => (
      <AuthorWrapper key={author.id}>
        <AuthorPhotoWrapper>
          <AuthorPhoto src={author.photo} alt={author.name} />
        </AuthorPhotoWrapper>
        <AuthorName>{author.name}</AuthorName>
      </AuthorWrapper>
    ))}
  </ListAuthorWrapper>
)

ListAuthor.propTypes = {
  authors: PropTypes.array.isRequired
}

export default ListAuthor
