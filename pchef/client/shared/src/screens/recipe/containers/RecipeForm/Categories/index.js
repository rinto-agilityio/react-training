import { compose } from 'react-apollo'

// GraphQL
import { getAllCategories } from '../../../../../graphql/recipe'

import Classify from '../../../components/RecipeForm/Classify'

export default compose(getAllCategories)(Classify)
