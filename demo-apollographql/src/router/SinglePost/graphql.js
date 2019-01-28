import gql from 'graphql-tag'

const QUERY_POST = gql`
  query Post($slug: String!) {
    post(slug: $slug) {
      id,
      slug,
      title,
      fullContent,
      author {
        name
      }
    }
  }
`

export {
  QUERY_POST
}
