import gql from 'graphql-tag'

const LOGGED_USER = gql`
  query loggedUser {
    loggedUser @client {
      email
      password
      name
    }
  }
`;

export default LOGGED_USER
