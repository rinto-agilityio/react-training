// import * as React from 'react'
// import { View, Text, Button } from 'react-native'
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

const RPLoginContainer = ({ children, signInUser }: Props) => children({ signInUser })

// class LoginContainer extends React.Component<Props> {
//   _submitLogin = () => {
//     console.log('_submitLogin')
//     const { signInUser } = this.props

//     signInUser('user1@gmail.com', 'user1@pwd')
//   }

//   render() {
//     const { children } = this.props
//     // const temp = 20

//     return (
//       <View>
//         {children}
//         <Button
//           onPress={this._submitLogin}
//           title="Submit Login"
//         />
//       </View>
//     )
//   }
// }

export default compose(
  signInUser,
)(RPLoginContainer)
