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
      {({ loading, error, data, client }) => {
        if (error) return <h1>Error...</h1>;
        if (loading || !data) return <h1>Loading...</h1>;

        // console.log('client: ', client)
        console.log('data: ', data)

        return (
          <>
            <h1>{data.app.currentPageName}</h1>
            <button
              onClick={() => client.writeData({
                data: {
                  app: {
                    __typename: 'ApolloDemo',
                    currentPageName: 'New pagename'
                  }
                }
              })}
            >Update</button>
          </>
        )
      }}
    </Query>
  )
}

export default PageInfo
