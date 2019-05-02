import { createStackNavigator } from 'react-navigation';
import ROUTES from '@constants/routes';
import RecipeDetail from '@recipeDetailScreen/index';
import Login from '@loginScreen/index';
import Home from '@homeScreen/index';
import Category from '@categoryScreen/index';

export default createStackNavigator(
  {
    Login: {
      screen: Login,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },
    Category: {
      screen: Category,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },
    RecipeDetail: {
      screen: RecipeDetail,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: ROUTES.LOGIN,
  }
);
