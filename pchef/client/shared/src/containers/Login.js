import { compose } from 'react-apollo'

// GraphQL
import { signInUser } from '../graphql/user'

type Props = {
  signInUser: (email: string, password: string) => void,
  children: any,
}

const LoginContainer = ({ children, signInUser }: Props) => children({ signInUser })

export default compose(
  signInUser,
)(LoginContainer)
