import React from 'react'
import PropTypes from 'prop-types'

// Components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ListPost from '../../../../components/ListPost'

const LatestPosts = ({ title, posts }) => (
  <Grid item xs={12} md={9}>
    <Typography component="h3" variant="h3">
      {title}
    </Typography>
    <ListPost posts={posts} />
  </Grid>
)

LatestPosts.defaultProps = {
  title: 'Latest post',
  posts: []
}

LatestPosts.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired
}

export default LatestPosts
