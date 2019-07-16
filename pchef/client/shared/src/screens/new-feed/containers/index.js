import { compose } from 'react-apollo'

// GraphQL
import { getRecipes } from '../../../graphql/recipe'
import NewFeed from '../index'

export default compose(
  getRecipes,
)(NewFeed)
