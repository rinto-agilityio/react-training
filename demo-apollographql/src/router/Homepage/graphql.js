import gql from 'graphql-tag'

const QUERY_POST = gql`
  {
    posts {
      id,
      title,
      slug,
      content
    }
  }
`

const QUERY_TOP_AUTHORS = gql`
  {
    authors {
      id,
      name,
      photo
    }
  }
`

export {
  QUERY_POST,
  QUERY_TOP_AUTHORS,
}
