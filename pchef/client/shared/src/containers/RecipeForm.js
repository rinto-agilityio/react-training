import { compose } from 'react-apollo'

// GraphQL
import { createRecipe, publishRecipe } from '../graphql/recipe'
import RecipeForm from '../screens/recipe/components/RecipeForm'

export default compose(createRecipe, publishRecipe)(RecipeForm)
