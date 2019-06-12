// Libs
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

// Components
import RecipeDetail from '@screen/RecipeDetail'
import Home from '@screen/Home'
import Category from '@screen/Category'
import Welcome from '@screen/Welcome'
import RecipeStep from '@screen/RecipeStep'
import RecipeForm from '@screen/RecipeForm'
import Profile from '@screen/Profile'

const stackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Category,
  RecipeDetail,
  RecipeStep,
})

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: stackNavigator,
  },
  RecipeForm,
  Profile,
})

const PrivateNav = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
      },
    },
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      },
    },
  },
)

export default PrivateNav
