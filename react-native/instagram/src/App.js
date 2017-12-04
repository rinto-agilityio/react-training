// Third party libs
import React from 'react'
import { Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

// App Store config
import configureStore from '@configs/store'

// Containers and components
import HomeContainer from '@screens/home/HomeContainer'
import AccountContainer from '@screens/account/AccountContainer'
import UploadContainer from '@screens/upload/UploadContainer'
import AppHeader from '@common/components/AppHeader'

// Styles
import { styles } from './styles/AppStyles'
import Themes from '@themes'

const { persistor, store } = configureStore()

const MainApp = TabNavigator(
  {
    Home: { screen: HomeContainer },
    Upload: { screen: UploadContainer },
    Account: { screen: AccountContainer }
  },
  {
    tabBarPosition: Themes.tabBarPosition,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: Themes.tabBarTextActiveColor
    }
  }
)

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <View style={styles.container}>
        <AppHeader />
        <MainApp />
      </View>
    </PersistGate>
  </Provider>
)

export default App
