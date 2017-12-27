// Libs
import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

// App config
import configureStore from '@configs/store'
import MainNavigator from '@configs/navigator'

// Components
import AppHeader from '@common/components/AppHeader'
import ErrorContainer from '@screens/error/containers'

// Styles
import styles from './styles/AppStyles'

const { persistor, store } = configureStore(),
  App = () => (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <AppHeader />
          <ErrorContainer />
          <MainNavigator />
        </View>
      </PersistGate>
    </Provider>
  )

export default App
