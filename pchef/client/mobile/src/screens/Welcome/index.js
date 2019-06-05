// Libs
import React from 'react'
import { StyleSheet } from 'react-native'

// Components
import WelcomeContainer from 'pchef-shared/src/containers/Welcome'

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
  navigation: {
    navigate: (name: string) => void,
  },
}

const Welcome = ({ navigation }: Props) => (
  <WelcomeContainer
    customButtonStyle={styles.button}
    handleSkipCategories={() => navigation.navigate(ROUTES.HOME)}
  />
)

export default Welcome
