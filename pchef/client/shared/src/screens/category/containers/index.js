import { compose } from 'react-apollo'

// graphQL query + component
import { getCategory } from '../../../graphql/category'
import { userToggleRecipe, getRecipes } from '../../../graphql/recipe'
import { userToggleCategory } from '../../../graphql/user'

// component
import Category from '../index'

export default compose(getCategory, userToggleRecipe, getRecipes, userToggleCategory)(Category)
