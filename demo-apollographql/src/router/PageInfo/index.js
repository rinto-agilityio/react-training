import React from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

// Doing GraphQL
const getPageTitleQuery = gql`
  query {
    app @client {
      pageTitle
    }
  }
`

const UPDATE_PAGE_TITLE = gql`
  mutation UpdatePageTitle($name: String!) {
    updatePageTitle(name: $name) @client
  }
`

const PageInfo = () => {
  return (
    <Query query={getPageTitleQuery}>
      {({ loading, error, data, client }) => {
        if (error) return <h1>Error...</h1>;
        if (loading || !data) return <h1>Loading...</h1>;

        return (
          <>
            <h1>{data.app.pageTitle}</h1>
            <Mutation
              mutation={UPDATE_PAGE_TITLE}
              variables={{ pageTitle: 'New pagename ABCD'}}
            >
              {updatePageTitle => (
                <button onClick={updatePageTitle}>Update-Mutation</button>
              )}
            </Mutation>
          </>
        )
      }}
    </Query>
  )
}

export default PageInfo
