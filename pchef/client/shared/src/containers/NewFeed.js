import { compose } from 'react-apollo'

// GraphQL
import { getRecipes } from '../graphql/recipe'
import NewFeed from '../screens/new-feed'

export default compose(getRecipes)(NewFeed)
