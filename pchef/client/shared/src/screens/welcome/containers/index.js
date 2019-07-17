import { compose } from 'react-apollo'

// GraphQL
import { getUser, userToggleCategory } from '../../../graphql/user'
import { getAllCategories } from '../../../graphql/recipe'
import Welcome from '../'

export default compose(getUser, getAllCategories, userToggleCategory)(Welcome)
