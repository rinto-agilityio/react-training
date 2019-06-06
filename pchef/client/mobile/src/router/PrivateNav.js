// Libs
import { createStackNavigator } from 'react-navigation'

// Components
import RecipeDetail from '@screen/RecipeDetail'
import Home from '@screen/Home'
import Category from '@screen/Category'
import Welcome from '@screen/Welcome'
import RecipeStep from '@screen/RecipeStep'

const PrivateNav = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Category,
    RecipeDetail,
    RecipeStep,
  },
)

export default PrivateNav
