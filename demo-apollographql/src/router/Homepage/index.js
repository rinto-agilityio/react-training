import React from 'react'
import { Query } from 'react-apollo'

// GraphQL
import { QUERY_POST } from './graphql'

// Components
import ListPost from '../../components/ListPost'

const Homepage = () => (
  <Query query={QUERY_POST}>
    {( {loading, error, data, refetch }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error !!!</p>

      return (
        <>
          <h1>Latest post</h1>
          <button onClick={() => refetch()}>refetch!</button>
          <ListPost posts={data.posts} />
        </>
      )
    }}
  </Query>
)

export default Homepage
