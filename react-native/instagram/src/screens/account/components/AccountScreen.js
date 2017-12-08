// Libs
import React from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

// Components
import Info from './Info'
import Photos from './Photos'

// Styles
import CommonStyles from '@themes/common'
import { styles } from './styles/AccountScreenStyles'

const AccountScreen = ({ owner, photos }) => (
  <View style={CommonStyles.layoutColumn}>
    <View style={styles.info}>
      <Info owner={owner} />
    </View>
    <Photos photos={photos} />
  </View>
)

AccountScreen.defaultProps = {
  owner: {},
  photos: []
}

AccountScreen.propTypes = {
  owner: PropTypes.object.isRequired,
  photos: PropTypes.array.isRequired
}

export default AccountScreen
