import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const USER_SIGNIN = gql`
  mutation signInUser($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      token
    }
  }
`

const signInUser = graphql(USER_SIGNIN, {
  props: ({ mutate }) => ({
    signInUser: (email, password) => mutate({
      variables: {
        email,
        password,
      },
    }),
  }),
  /**
   * This is sample config updater
   * Use this option to read/write cache
   */
  options: {
    update: (proxy, { data }) => {
      try {
        console.log('proxy: ', proxy)
        console.log('data: ', data)
      } catch (err) {
        console.error(err)
      }
    },
  },
})

export {
  signInUser,
}
