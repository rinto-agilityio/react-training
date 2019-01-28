import gql from 'graphql-tag'

const QUERY_AUTHOR = gql`
  query GetAuthor($id: Int!) {
    author(id: $id) {
      id,
      name,
      photo,
      desc,
      posts {
        title,
        content,
      }
    }
  }
`

export {
  QUERY_AUTHOR
}
