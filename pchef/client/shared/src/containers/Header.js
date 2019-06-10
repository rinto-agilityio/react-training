import { compose } from 'react-apollo'

// graphQL query
import { getUser } from '../graphql/user'

// component
import Header from '../components/Header'

export default compose(getUser)(Header)
