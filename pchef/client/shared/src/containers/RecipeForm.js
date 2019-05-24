import { compose } from 'react-apollo'

// GraphQL
import { createRecipe } from '../graphql/recipe'
import RecipeForm from '../screens/recipe/components/RecipeForm'

export default compose(createRecipe)(RecipeForm)
