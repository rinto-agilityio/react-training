import gql from 'graphql-tag'

const QUERY_LATEST_POST_AND_TOP_AUTHORS = gql`
  {
    posts {
      id,
      title,
      slug,
      content
    },
    authors {
      id,
      name,
      photo
    }
  }
`

export {
  QUERY_LATEST_POST_AND_TOP_AUTHORS,
}
