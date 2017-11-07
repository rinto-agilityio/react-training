import React from 'react'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './navigation/HomeScreen'
import ProfileScreen from './navigation/ProfileScreen'
import ModalExample from './components/Modal'

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
})

export default class AppBasic extends React.Component {
  render() {
    return <ModalExample />
    // return <SimpleApp />
  }
}
