import { compose } from 'react-apollo'

// GraphQL
import { userToggleRecipe, userToggleVote } from '../../../../graphql/recipe'
import RecipeList from '../../components/RecipeList'

export default compose(
  userToggleVote,
  userToggleRecipe,
)(RecipeList)
