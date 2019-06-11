import { compose } from 'react-apollo'

// graphQL query + component
import { getCategory } from '../graphql/category'
import { userToggleRecipe } from '../graphql/recipe'
import { getRecipes } from '../graphql/recipe'

// component
import Category from '../screens/category'

export default compose(getCategory, userToggleRecipe, getRecipes)(Category)
