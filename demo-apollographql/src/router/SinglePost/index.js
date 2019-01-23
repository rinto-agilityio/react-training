import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

// GraphQL Query
import { QUERY_POST } from './graphql'

const UpdateTitle = ({ title }) => {
  useEffect(() => {
    document.title = title
  })

  return null
}

const SinglePost = ({ match }) => {
  const { slug } = match.params

  return (
    <>
      <h1>This is single post:</h1>
      <Query query={QUERY_POST} variables={{ slug }}>
        {( {loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error !!!</p>

          return (
            <>
              <UpdateTitle title={data.post.title} />
              <h2>{data.post.title}</h2>
            </>
          )
        }}
      </Query>
    </>
  )
}

SinglePost.propTypes = {
  match: PropTypes.object.isRequired
}

export default SinglePost
