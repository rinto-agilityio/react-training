import React from 'react'
import PropTypes from 'prop-types'

// Components
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import { StyledLink } from './ListAuthor.style'

const ListAuthor = ({ authors }) => (
  <List>
    {authors.map(author => (
      <StyledLink
        key={author.id}
        to={`/author/${author.id}`}
      >
        <ListItem>
          <ListItemAvatar>
            <Avatar src={author.photo} alt={author.name} />
          </ListItemAvatar>
          <ListItemText>{author.name}</ListItemText>
        </ListItem>
      </StyledLink>
    ))}
  </List>
)

ListAuthor.defaultProps = {
  authors: []
}

ListAuthor.propTypes = {
  authors: PropTypes.array.isRequired
}

export default ListAuthor
