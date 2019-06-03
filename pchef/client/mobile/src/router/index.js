// Libs
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// Navigations
import PrivateNav from './PrivateNav'
import PublicNav from './PublicNav'
import AuthLoading from './AuthLoading'

const appRoute = createSwitchNavigator(
  {
    AuthLoading,
    PrivateNav,
    PublicNav,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

export default createAppContainer(appRoute)
