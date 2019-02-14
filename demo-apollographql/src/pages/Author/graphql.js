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
        slug,
        content,
      }
    }
  }
`

export {
  QUERY_AUTHOR
}
