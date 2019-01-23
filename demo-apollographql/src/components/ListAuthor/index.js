import React from 'react'
import styled from 'styled-components'

const AuthorWrapper = styled.div``
const AuthorPhotoWrapper = styled.div``
const AuthorName = styled.h2``

const ListAuthor = ({ authors }) => (
  <>
    {authors.map(author => (
      <AuthorWrapper key={author.id}>
        <AuthorPhotoWrapper>
          <img src={author.photo} alt={author.name} />
        </AuthorPhotoWrapper>
        <AuthorName>{author.name}</AuthorName>
      </AuthorWrapper>
    ))}
  </>
)

export default ListAuthor
