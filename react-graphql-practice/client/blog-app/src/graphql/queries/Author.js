import gql from 'graphql-tag'

const SIGN_IN = gql`
  query signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      success
      message
      author {
        name
        email
      }
    }
  }
`;

export default SIGN_IN
