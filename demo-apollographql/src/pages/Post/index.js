import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

// GraphQL Query
import { QUERY_POST } from './graphql'

// Components
import Grid from '@material-ui/core/Grid'
import Loading from '../../components/Loading'
import SinglePost from './components/SinglePost'

const Post = ({ match }) => {
  const { slug } = match.params

  return (
    <Query query={QUERY_POST} variables={{ slug }}>
      {( {loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <p>Error !!!</p>

        const { post: { title, fullContent, author } } = data

        return (
          <Grid item xs={12}>
            <SinglePost
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

Post.defaultProps = {
  match: {}
}

Post.propTypes = {
  match: PropTypes.object.isRequired
}

export default Post
