// Libs
import { TabNavigator } from 'react-navigation'

// Containers and components
import HomeContainer from '@screens/home/containers'
import AccountContainer from '@screens/account/containers'
import UploadContainer from '@screens/upload/containers'

// Styles
import Themes from '@themes'

const MainNavigator = TabNavigator(
  {
    Home: { screen: HomeContainer },
    Upload: { screen: UploadContainer },
    Account: { screen: AccountContainer }
  },
  {
    initialRouteName: 'Home',
    tabBarPosition: Themes.tabBarPosition,
    animationEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: Themes.tabBarTextActiveColor
    }
  }
)

export default MainNavigator
