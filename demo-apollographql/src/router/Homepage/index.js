import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const QUERY_POST = gql`
  {
    posts {
      id,
      title,
      content
    }
  }
`

const AllPosts = () => (
  <Query query={QUERY_POST}>
    {( {loading, error, data, refetch }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error !!!</p>

      return (
        <>
          <button onClick={() => refetch()}>refetch!</button>

          {data.posts.map(({ id, title, content }) => (
            <div key={id}>
              <p>[{id}]: {title}</p>
              <p>{content}</p>
            </div>
          ))}
        </>
      )
    }}
  </Query>
)

const Homepage = () => (
  <>
    <h1>Homepage</h1>
    <AllPosts />
  </>
)

export default Homepage
