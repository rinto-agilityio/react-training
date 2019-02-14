import React from 'react'
import { Query } from 'react-apollo'

// GraphQL
import { QUERY_LATEST_POST_AND_TOP_AUTHORS } from './graphql'

// Components
import Loading from '../../components/Loading'
import ListPost from '../../components/ListPost'
import ListAuthor from '../../components/ListAuthor'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const Homepage = () => (
  <Query query={QUERY_LATEST_POST_AND_TOP_AUTHORS}>
    {( {loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <p>Error !!!</p>

      return (
        <>
          <Grid item xs={12} md={9}>
            <Typography component="h2" variant="h3">
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

export default Homepage
