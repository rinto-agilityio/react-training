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
