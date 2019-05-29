import { compose } from 'react-apollo'

// GraphQL
import { getRecipes, userToggleRecipe } from '../graphql/recipe'
import NewFeed from '../screens/new-feed'

export default compose(
  getRecipes,
  userToggleRecipe,
)(NewFeed)
