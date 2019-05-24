import { compose } from 'react-apollo'

// GraphQL
import { getAllCookingTypes } from '../graphql/recipe'
import Classify from '../screens/recipe/components/RecipeForm/Classify'

export default compose(getAllCookingTypes)(Classify)
