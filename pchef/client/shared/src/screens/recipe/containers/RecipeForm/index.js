import { compose } from 'react-apollo'

// GraphQL
import { createRecipe, publishRecipe } from '../../../../graphql/recipe'
import RecipeForm from '../../components/RecipeForm'

export default compose(createRecipe, publishRecipe)(RecipeForm)
