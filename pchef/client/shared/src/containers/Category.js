import { compose } from 'react-apollo'

// import graphQL query + component
import { getCategory } from '../graphql/category'
import { userToggleRecipe } from '../graphql/recipe'
import { getRecipes } from '../graphql/recipe'

// import component
import CategoryScreen from '../screens/category'

export default compose(getCategory, userToggleRecipe, getRecipes)(CategoryScreen)
