import gql from 'graphql-tag'

// Doing GraphQL
export const QUERY_PAGE_TITLE = gql`
  query {
    app @client {
      pageTitle
    }
  }
`

export const UPDATE_PAGE_TITLE = gql`
  mutation UpdatePageTitle($pageTitle: String!) {
    updatePageTitle(pageTitle: $pageTitle) @client
  }
`
