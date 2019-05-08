import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import PropTypes from 'prop-types'
import styles from '../styles'

// Container
const Container = ({ children }) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>{children}</View>
  </View>
)

Container.propTypes = {
  children: PropTypes.node.isRequired
}

storiesOf('Common Components: Input', module).add('Default', () => (
  <Container>
    <Text>testtttttttttttttttttttttttt</Text>
  </Container>
))
