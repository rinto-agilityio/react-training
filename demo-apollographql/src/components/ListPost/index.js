import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

// Components
import Paper from '@material-ui/core/Paper'

const styles = ({
  wrapper: {
    padding: '1rem',
    marginBottom: '1rem'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  }
})

const ListPost = ({ posts, classes }) => (
  <>
    {posts.map(post => (
      <Paper key={post.id} className={classes.wrapper}>
        <Link to={`post/${post.slug}`} title={post.title} className={classes.link}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </Link>
      </Paper>
    ))}
  </>
)

ListPost.defaultProps = {
  classes: {}
}

ListPost.propTypes = {
  posts: PropTypes.array.isRequired,
  classes: PropTypes.object
}

export default withStyles(styles)(ListPost)
