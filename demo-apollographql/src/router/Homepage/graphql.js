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

export {
  QUERY_POST
}
