// Libs
import { createStackNavigator } from 'react-navigation'

// Components
import RecipeDetail from '@screen/RecipeDetail'
import Home from '@screen/Home'
import Category from '@screen/Category'

const PrivateNav = createStackNavigator(
  {
    Home,
    Category,
    RecipeDetail,
  },
)

export default PrivateNav
