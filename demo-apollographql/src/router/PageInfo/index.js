import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

// Doing GraphQL
const getPageNameQuery = gql`
  query {
    app @client {
      currentPageName
    }
  }
`

const PageInfo = () => {
  return (
    <Query query={getPageNameQuery}>
      {({ loading, error, data }) => {
        if (error) return <h1>Error...</h1>;
        if (loading || !data) return <h1>Loading...</h1>;

        return (
          <>
            <h1>{data.app.currentPageName}</h1>
          </>
        )
      }}
    </Query>
  )
}

export default PageInfo
