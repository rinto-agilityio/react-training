import { compose } from 'react-apollo'

// GraphQL
import { getUser, userToggleRecipe, userToggleVote } from '../graphql/recipe-step'
import RecipeStep from '../screens/recipe-step/components/Recipe'

export default compose(getUser, userToggleRecipe, userToggleVote)(RecipeStep)
