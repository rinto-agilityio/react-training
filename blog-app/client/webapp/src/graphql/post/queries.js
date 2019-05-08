import gql from 'graphql-tag'

export const GET_POST = gql`
  query getPostsByAuthor($authorId: ID!, $after: String, $first: Int ) {
    getPostsByAuthor(authorId: $authorId, after: $after, first: $first) {
      success
      message
      posts {
        id
        title
        content
        author {
          name
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      totalCount
    }
  }
`;
