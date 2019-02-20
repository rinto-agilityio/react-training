import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

// GraphQL Query
import { QUERY_AUTHOR } from './Author.graphql'

// Components
import Grid from '@material-ui/core/Grid'
import Loading from '../../components/Loading'
import ListPost from '../../components/ListPost'
import AuthorInfo from './components/Info'

const Author = ({ match }) => {
  const authorId = parseInt(match.params.id)

  return (
    <Query query={QUERY_AUTHOR} variables={{ id: authorId }}>
      {( {loading, error, data }) => {
        if (loading) return <Loading />
        if (error) return <p>Error !!!</p>

        const {
          author: {
            name,
            photo,
            desc,
            posts
          }
        } = data

        return (
          <Grid item xs={12}>
            <AuthorInfo
              name={name}
              photo={photo}
              bio={desc}
            />
            <ListPost posts={posts} />
          </Grid>
        )
      }}
    </Query>
  )
}

Author.propTypes = {
  match: PropTypes.object.isRequired
}

export default Author
