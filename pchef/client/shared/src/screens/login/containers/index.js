import { compose } from 'react-apollo'

// GraphQL
import { signInUser } from '../../../graphql/user'
import Login from '../index'

export default compose(signInUser)(Login)
