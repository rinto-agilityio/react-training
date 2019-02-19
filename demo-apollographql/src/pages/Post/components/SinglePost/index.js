import React from 'react'
import PropTypes from 'prop-types'

// Components
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const SinglePost = ({ title, fullContent, author }) => (
  <Paper>
    <Typography component="h1" variant="h3">{title}</Typography>
    <div dangerouslySetInnerHTML={{__html: fullContent}} />

    <Typography
      component="h3"
      variant="subtitle2"
    >
      {author.name}
    </Typography>
  </Paper>
)

SinglePost.defaultProps = {
  author: {},
}

SinglePost.propTypes = {
  title: PropTypes.string,
  fullContent: PropTypes.string,
  author: PropTypes.object.isRequired,
}

export default SinglePost
