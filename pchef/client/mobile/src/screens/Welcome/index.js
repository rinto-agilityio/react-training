// Libs
import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

// Components
import WelcomeContainer from 'pchef-shared/src/containers/Welcome'

// Themes
import { METRICS } from 'pchef-shared/src/themes'

// Constants
import ROUTES from '@constants/routes'
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
  button: {
    top: METRICS.extraLargeMargin + METRICS.smallMargin,
  },
})

type Props = {
  navigation: NavigationScreenProps,
}

const Welcome = ({ navigation }: Props) => (
  <>
    <WelcomeContainer
      customButtonStyle={styles.button}
      handleSkipCategories={() => navigation.navigate(ROUTES.HOME)}
    />
    <Button onPress={() => AsyncStorage.removeItem('token')}>Logout</Button>
    <Button onPress={() => navigation.navigate(ROUTES.HOME)}>Logout</Button>
  </>
)

export default Welcome
