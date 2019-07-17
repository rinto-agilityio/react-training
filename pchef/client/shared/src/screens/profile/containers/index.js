import { compose } from 'react-apollo'

// GraphQL
import { getUser } from '../../../graphql/user'
import Profile from '../'

export default compose(getUser)(Profile)
