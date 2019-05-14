import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation signUp($id: ID!, $email: String!, $password: String!, $name: String) {
    signUp(id: $id, email: $email, password: $password, name: $name) {
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
