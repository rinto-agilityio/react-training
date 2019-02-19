import React from 'react'
import PropTypes from 'prop-types'

// Components
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import { StyledCard, StyledLink } from './ListAuthor.style'

const ListAuthor = ({ title, authors }) => (
  <StyledCard>
    <Typography component="h3" variant="h5">
      {title}
    </Typography>

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
  </StyledCard>
)

ListAuthor.defaultProps = {
  title: 'Top Authors',
  authors: []
}

ListAuthor.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired
}

export default ListAuthor
