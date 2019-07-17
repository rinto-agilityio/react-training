import { compose } from 'react-apollo'

// GraphQL
import { signInUser } from '../../../graphql/user'
import Login from '../'

export default compose(signInUser)(Login)
