import { compose } from 'react-apollo'

// graphQL query
import { getUser } from '../../../graphql/user'

// component
import Header from '../'

export default compose(getUser)(Header)
