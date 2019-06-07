import { compose } from 'react-apollo'

// GraphQL
import { signInUser, getUser } from '../graphql/user'
import Login from '../screens/login'

export default compose(signInUser, getUser)(Login)
