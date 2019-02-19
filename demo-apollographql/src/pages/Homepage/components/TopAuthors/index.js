import React from 'react'
import PropTypes from 'prop-types'

// Components
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import ListAuthor from '../../../../components/ListAuthor'

const TopAuthors = ({ authors }) => (
  <Grid item xs={12} md={3}>
    <Paper>
      <ListAuthor authors={authors} />
    </Paper>
  </Grid>
)

TopAuthors.defaultProps = {
  authors: []
}

TopAuthors.propTypes = {
  authors: PropTypes.array.isRequired
}

export default TopAuthors
