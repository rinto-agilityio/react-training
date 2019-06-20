import { compose } from 'react-apollo'

// GraphQL
import { signInUser } from '../graphql/user'
import Login from '../screens/login'

export default compose(signInUser)(Login)
