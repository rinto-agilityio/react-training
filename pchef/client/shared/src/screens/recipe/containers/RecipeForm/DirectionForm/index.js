import { compose } from 'react-apollo'

// GraphQL
import { createRecipeStep } from '../../../../../graphql/recipe'
import DirectionForm from '../../../components/RecipeForm/DirectionForm'

export default compose(createRecipeStep)(DirectionForm)
