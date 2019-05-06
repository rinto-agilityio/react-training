import { createStackNavigator, createAppContainer } from 'react-navigation';
import ROUTES from '@constants/routes';
import RecipeDetail from '@screen/RecipeDetail';
import Login from '@screen/Login';
import Home from '@screen/Home';
import Category from '@screen/Category';

// app router
const appRouter = createStackNavigator(
  {
    Login: {
      screen: Login,
      headerMode: 'none',
    },
    Home: {
      screen: Home,
      headerMode: 'none',
    },
    Category: {
      screen: Category,
      headerMode: 'none',
    },
    RecipeDetail: {
      screen: RecipeDetail,
      headerMode: 'none',
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    headerMode: 'none',
    initialRouteName: ROUTES.LOGIN,
  }
);

export default createAppContainer(appRouter);
