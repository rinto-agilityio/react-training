import { compose } from 'react-apollo'

// GraphQL
import { getRecipeStep } from '../graphql/recipe-step'
import RecipeStep from '../screens/recipe-step/components/Recipe'

export default compose(getRecipeStep)(RecipeStep)
