import { createStackNavigator, createAppContainer } from 'react-navigation';
import ROUTES from '@constants/routes';
import RecipeDetail from '@screen/RecipeDetail';
import Login from '@screen/Login';
import Home from '@screen/Home';
import Category from '@screen/Category';

const appRouter = createStackNavigator(
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

export default createAppContainer(appRouter);
