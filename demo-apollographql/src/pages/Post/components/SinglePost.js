import React from 'react'
import { withStyles } from '@material-ui/core/styles'

// Components
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = ({
  paper: {
    padding: '1rem'
  },
  author: {
    fontStyle: 'italic',
    borderTop: '1px solid #555',
  }
})

const SinglePost = ({ title, fullContent, author, classes }) => (
  <Paper className={classes.paper}>
    <Typography component="h1" variant="h3">{title}</Typography>
    <div dangerouslySetInnerHTML={{__html: fullContent}} />

    <Typography
      component="h3"
      variant="subtitle2"
      className={classes.author}
    >
      {author.name}
    </Typography>
  </Paper>
)

export default withStyles(styles)(SinglePost)
