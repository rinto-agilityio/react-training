import gql from 'graphql-tag'

const LOGGED_USER = gql`
  query loggedUser {
    loggedUser @client {
      email
      password
      name
      avatar
    }
  }
`;

export default LOGGED_USER
