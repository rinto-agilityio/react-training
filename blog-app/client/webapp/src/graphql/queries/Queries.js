import gql from 'graphql-tag'

export const GET_AUTHORS = gql`
  query getAuthors {
		authors {
			name
			email
			id
			password
		}
  }
`;

export const LOGGED_USER = gql`
  query loggedUser {
    loggedUser @client {
      id
      email
      password
      name
      avatar
    }
  }
`;

export const SIGN_IN = gql`
  query signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      success
      message
      author {
        id
        name
        email
        password
        avatar
      }
    }
  }
`;

export const GET_POST = gql`
  query getPostsByAuthor($authorId: ID!, $after: String, $first: Int ) {
    getPostsByAuthor(authorId: $authorId, after: $after, first: $first) {
      success
      message
      posts {
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
