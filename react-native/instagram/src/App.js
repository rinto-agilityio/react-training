import React from 'react'
import { Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import configureStore from './config/store'
import HomeContainer from './screens/home/HomeContainer'
import AccountContainer from './screens/account/AccountContainer'
import UploadContainer from './screens/upload/UploadContainer'
import AppHeader from './components/AppHeader'
import { styles } from './styles/App'
import { Themes } from './themes'

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
      activeTintColor: Themes.tapBarTextActiveColor
    }
  }
)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <AppHeader />
            <MainApp screenProps={this.state} />
          </View>
        </PersistGate>
      </Provider>
    )
  }
}
