import { compose } from 'react-apollo'

// GraphQL
import { getAllCategories } from '../graphql/recipe'
import Classify from '../screens/recipe/components/RecipeForm/Classify'

export default compose(getAllCategories)(Classify)
