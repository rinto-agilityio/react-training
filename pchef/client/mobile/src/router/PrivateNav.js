// Libs
import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

// Components
import RecipeDetail from '@screen/RecipeDetail'
import Home from '@screen/Home'
import Category from '@screen/Category'
import Welcome from '@screen/Welcome'
import RecipeStep from '@screen/RecipeStep'
import RecipeForm from '@screen/RecipeForm'
import Profile from '@screen/Profile'
import WishList from '@screen/WishList'
import WishListForm from '@screen/WishListForm'
import { Button } from 'react-native-paper'

// Constants
import ROUTES from '@constants/routes'
import { COLORS } from 'pchef-shared/src/themes'

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        headerBackTitleVisible: false,
      },
    },
    Category,
    RecipeDetail,
    RecipeStep,
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
    },
  },
)

const stackWishListNav = createStackNavigator(
  {
    WishList: {
      screen: WishList,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <Button
            color={COLORS.baseBlue}
            onPress={() => navigation.navigate(ROUTES.WISHLIST_FORM)}
          >
            Add
          </Button>
        ),
      }),
    },
    WishListForm: {
      screen: WishListForm,
      navigationOptions: ({ navigation }) => ({
        headerRight: (
          <Button
            color={COLORS.baseBlue}
            onPress={() => navigation.setParams({ status: true })}
          >
            Save
          </Button>
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
    },
  },
)

const RecipeFormNav = createStackNavigator({
  RecipeForm: {
    screen: RecipeForm,
    navigationOptions: ({ navigation }) => ({
      headerRight: (
        <Button
          color={COLORS.baseBlue}
          onPress={() => navigation.setParams({ status: true })}
        >
          Publish
        </Button>
      ),
    }),
  },
})

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: stackNavigator,
  },
  RecipeForm: {
    screen: RecipeFormNav,
  },
  Profile,
  WishList: {
    screen: stackWishListNav,
  },
})

const PrivateNav = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
        headerBackTitleVisible: false,
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
