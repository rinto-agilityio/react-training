import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

// GraphQL Query
import { QUERY_POST } from './graphql'

// Components
import Grid from '@material-ui/core/Grid'
import Loading from '../../components/Loading'
import Post from './components/Post'

const SinglePost = ({ match }) => {
  const { slug } = match.params

  return (
    <Query query={QUERY_POST} variables={{ slug }}>
      {( {loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <p>Error !!!</p>

        const { post: { title, fullContent, author } } = data

        return (
          <Grid item xs={12}>
            <Post
              title={title}
              fullContent={fullContent}
              author={author}
            />
          </Grid>
        )
      }}
    </Query>
  )
}

SinglePost.propTypes = {
  match: PropTypes.object.isRequired
}

export default SinglePost
