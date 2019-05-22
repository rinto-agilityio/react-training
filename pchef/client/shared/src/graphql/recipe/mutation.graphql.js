import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const CREATE_RECIPE = gql`
  mutation createRecipe($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      token
    }
  }
`

export {
  
}
