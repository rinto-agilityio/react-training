import { compose } from 'react-apollo'

// GraphQL
import { getUser } from '../../../graphql/user'
import Profile from '../index'

export default compose(getUser)(Profile)
