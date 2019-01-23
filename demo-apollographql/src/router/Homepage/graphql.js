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

const QUERY_TOP_AUTHORS = gql`
  {
    authors {
      name,
      photo
    }
  }
`

export {
  QUERY_POST,
  QUERY_TOP_AUTHORS,
}
