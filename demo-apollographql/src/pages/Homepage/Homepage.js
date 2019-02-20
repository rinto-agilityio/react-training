import React from 'react'
import { Query } from 'react-apollo'

// GraphQL
import { QUERY_LATEST_POST_AND_TOP_AUTHORS } from './Homepage.graphql'

// Components
import Loading from '../../components/Loading'
import LatestPosts from './components/LatestPosts'
import TopAuthors from './components/TopAuthors'

const Homepage = () => (
  <Query query={QUERY_LATEST_POST_AND_TOP_AUTHORS}>
    {( {loading, error, data }) => {
      if (loading) return <Loading />
      if (error) return <p>Error !!!</p>

      return (
        <>
          <LatestPosts posts={data.posts} />
          <TopAuthors authors={data.authors} />
        </>
      )
    }}
  </Query>
)

export default Homepage
