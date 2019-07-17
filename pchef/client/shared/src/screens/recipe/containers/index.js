import { compose } from 'react-apollo'

// GraphQL
import { recipeDetail } from '../../../graphql/recipe'
import { getAllRecipeSteps } from '../../../graphql/recipe-step'
import Recipe from '../components/Recipe'

export default compose(getAllRecipeSteps, recipeDetail)(Recipe)
