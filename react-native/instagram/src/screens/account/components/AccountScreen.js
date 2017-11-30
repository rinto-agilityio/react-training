// Third party libs
import React from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

// Components
import Info from './Info'
import Photos from './Photos'

// Styles
import CommonStyles from '@themes/common'
import { styles } from './styles/AccountScreenStyles'

const AccountScreen = ({ accountData, myPhotos }) => (
  <View style={CommonStyles.layoutColumn}>
    <View style={styles.info}>
      <Info data={accountData} />
    </View>
    <Photos data={myPhotos} />
  </View>
)

AccountScreen.defaultProps = {
  accountData: {},
  myPhotos: []
}

AccountScreen.propTypes = {
  accountData: PropTypes.object.isRequired,
  myPhotos: PropTypes.array.isRequired
}

export default AccountScreen
