import React from 'react'
import PropTypes from 'prop-types'

import {
  ListAuthorWrapper,
  Title,
  AuthorWrapper,
  AuthorPhoto,
  AuthorName,
} from './index.style'

const ListAuthor = ({ authors }) => (
  <ListAuthorWrapper>
    <Title>Top Authors</Title>
    {authors.map(author => (
      <AuthorWrapper key={author.id} to={`/author/${author.id}`}>
        <AuthorPhoto src={author.photo} alt={author.name} />
        <AuthorName>{author.name}</AuthorName>
      </AuthorWrapper>
    ))}
  </ListAuthorWrapper>
)

ListAuthor.propTypes = {
  authors: PropTypes.array.isRequired
}

export default ListAuthor
