import gql from 'graphql-tag'

const QUERY_POST = gql`
  query Post($slug: String!) {
    post(slug: $slug) {
      id,
      slug,
      title,
      content,
      author {
        name
      }
    }
  }
`

export {
  QUERY_POST
}
