import { compose } from 'react-apollo'

// GraphQL
import { getAllRecipeSteps, getUser, userToggleRecipe, userToggleVote } from '../../../graphql/recipe-step'
import { recipeDetail } from '../../../graphql/recipe'
import RecipeStep from '../components/Recipe'

export default compose(getAllRecipeSteps, recipeDetail, getUser, userToggleRecipe, userToggleVote)(RecipeStep)
