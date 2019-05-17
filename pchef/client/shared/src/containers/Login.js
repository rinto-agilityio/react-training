import { compose, graphql } from 'react-apollo'
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
  options: {
    update: (proxy, { data }) => {
      try {
        const { signInUser: { token } } = data

        if (token) {
          localStorage.setItem('token', token)
        }
      } catch (err) {
        console.error(err)
      }
    },
  },
})

type Props = {
  signInUser: (email: string, password: string) => void,
  children: any,
}

const LoginContainer = ({ children, signInUser }: Props) => children({ signInUser })

export default compose(
  signInUser,
)(LoginContainer)
