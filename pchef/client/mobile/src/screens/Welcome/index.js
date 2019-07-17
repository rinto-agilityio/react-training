// Libs
import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

// Components
import WelcomeContainer from 'pchef-shared/src/screens/welcome/containers'

// Themes
import { METRICS } from 'pchef-shared/src/themes'

// Constants
import ROUTES from '@constants/routes'

const styles = StyleSheet.create({
  button: {
    top: METRICS.extraLargeMargin + METRICS.smallMargin,
  },
})

type Props = {
  navigation: NavigationScreenProps,
}

const Welcome = ({ navigation }: Props) => (
  <WelcomeContainer
    customButtonStyle={styles.button}
    handleSkipCategories={() => navigation.navigate(ROUTES.HOME)}
    handleRedirectHome={() => navigation.navigate(ROUTES.HOME)}
    handleRedirectLogin={() => navigation.navigate(ROUTES.LOGIN)}
  />
)

export default Welcome
