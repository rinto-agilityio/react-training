import { compose } from 'react-apollo'

// GraphQL
import { getAllRecipeSteps, getUser, userToggleRecipe, userToggleVote } from '../graphql/recipe-step'
import RecipeStep from '../screens/recipe-step/components/Recipe'

export default compose(getAllRecipeSteps, getUser, userToggleRecipe, userToggleVote)(RecipeStep)
