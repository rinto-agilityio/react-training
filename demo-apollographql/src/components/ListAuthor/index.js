import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

// Components
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

const styles = ({
  card: {
    padding: '1rem'
  },
  link: {
    textDecoration: 'none'
  }
})

const ListAuthor = ({ authors, classes }) => (
  <Card className={classes.card}>
    <Typography component="h3" variant="h5">
      Top Authors
    </Typography>

    <List>
      {authors.map(author => (
        <Link
          key={author.id}
          to={`/author/${author.id}`}
          className={classes.link}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar src={author.photo} alt={author.name} />
            </ListItemAvatar>
            <ListItemText>{author.name}</ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  </Card>
)

ListAuthor.defaultProps = {
  classes: {}
}

ListAuthor.propTypes = {
  authors: PropTypes.array.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(ListAuthor)
