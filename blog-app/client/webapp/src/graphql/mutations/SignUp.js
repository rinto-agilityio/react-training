import gql from 'graphql-tag'

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!, $name: !String) {
    createUser(email: $email, password: $password, name: $name) {
      success
      message
      author {
        id
        name
        password
        email
      }
    }
  }
`;
