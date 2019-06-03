// Libs
import { createStackNavigator } from 'react-navigation'

// Components
import Login from '@screen/Login'

// Define public navigation
const PublicNav = createStackNavigator(
  { Login },
  {
    navigationOptions: {
      header: null,
    },
    headerMode: 'none',
  },
)

export default PublicNav
