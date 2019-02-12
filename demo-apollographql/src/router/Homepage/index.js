import React from 'react'
import { Query } from 'react-apollo'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

// GraphQL
import { QUERY_LATEST_POST_AND_TOP_AUTHORS } from './graphql'

// Components
import Loading from '../../components/Loading'
import ListPost from '../../components/ListPost'
import ListAuthor from '../../components/ListAuthor'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


const styles = theme => ({
  title: {
    marginBottom: '1rem',
  }
})

const Homepage = ({ classes }) => (
  <Query query={QUERY_LATEST_POST_AND_TOP_AUTHORS}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <p>Erroor!</p>

      return (
        <>
          <Grid item xs={12} md={9}>
            <Typography component="h2" variant="h3" className={classes.title}>
              Latest post
            </Typography>
            <ListPost posts={data.posts} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper>
              <ListAuthor authors={data.authors} />
            </Paper>
          </Grid>
        </>
      )
    }}
  </Query>
)

export default withStyles(styles)(Homepage)
