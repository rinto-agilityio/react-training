import { compose } from 'react-apollo'

// GraphQL
import { createRecipeStep } from '../graphql/recipe'
import DirectionForm from '../screens/recipe/components/RecipeForm/DirectionForm'

export default compose(createRecipeStep)(DirectionForm)
