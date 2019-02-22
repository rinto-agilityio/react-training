import React from 'react'
import PropTypes from 'prop-types'

// Components
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import ListAuthor from '../../../../components/ListAuthor'

const TopAuthors = ({ title, authors }) => (
  <Grid item xs={12} md={3}>
    <Typography component="h3" variant="h5">
      {title}
    </Typography>
    <Paper>
      <ListAuthor authors={authors} />
    </Paper>
  </Grid>
)

TopAuthors.defaultProps = {
  title: 'Top Authors',
  authors: []
}

TopAuthors.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired
}

export default TopAuthors
