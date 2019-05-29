import { compose } from 'react-apollo'

// GraphQL
import { recipeDetail } from '../graphql/recipe'
import { getAllRecipeSteps } from '../graphql/recipe-step'
import Recipe from '../screens/recipe/components/Recipe/index'

export default compose(getAllRecipeSteps, recipeDetail)(Recipe)
