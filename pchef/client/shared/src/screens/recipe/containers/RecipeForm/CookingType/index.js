import { compose } from 'react-apollo'

// GraphQL
import { getAllCookingTypes } from '../../../../../graphql/recipe'

import Classify from '../../../components/RecipeForm/Classify'

export default compose(getAllCookingTypes)(Classify)
