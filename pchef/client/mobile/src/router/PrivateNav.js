// Libs
import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Button } from 'react-native-paper'

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
import Icon from 'pchef-shared/src/components/Icon'

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
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: (
        <Icon
          name="home"
          onPress={() => navigation.navigate(ROUTES.HOME)}
        />
      ),
    }),
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
    },
  },
  RecipeForm: {
    screen: RecipeFormNav,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: (
        <Icon
          name="add-circle-outline"
          onPress={() => navigation.navigate(ROUTES.RECIPE_FORM)}
        />
      ),
    }),
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: (
        <Icon
          name="account-circle"
          onPress={() => navigation.navigate(ROUTES.PROFILE)}
        />
      ),
    }),
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
    },
  },
  WishList: {
    screen: stackWishListNav,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: (
        <Icon
          name="playlist-add-check"
          onPress={() => navigation.navigate(ROUTES.WISHLIST)}
        />
      ),
    }),
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
    },
  },
})

const PrivateNav = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    Welcome: {
      screen: Welcome,
      navigationOptions: {
        header: null,
        headerBackTitleVisible: false,
      },
    },
  },
)

export default PrivateNav
