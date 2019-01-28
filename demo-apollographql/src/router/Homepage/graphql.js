import gql from 'graphql-tag'

const QUERY_LATESTPOST_AND_TOP_AUTHORS = gql`
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
  QUERY_LATESTPOST_AND_TOP_AUTHORS,
}
