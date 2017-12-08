// Libs
import React from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

// Components
import Info from './Info'
import Photos from './Photos'
import Icon from '@common/components/Icon'

// Helpers
import { getAccountPhotos } from '@helpers/account-data'

// Styles
import CommonStyles from '@themes/common'
import Icons from '@themes/icons'
import { styles } from './styles/AccountScreenStyles'

// TODO: Change to function/stateless component and add defaultProps, PropTypes
class AccountScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon
        style={CommonStyles.tabBarIcon}
        source={Icons.avatar}
      />
    )
  }

  /**
   * Update data for current user
   * Filter photos of current user from all photos in the system of all users
   */
  componentDidMount() {
    this.props.loadAccountData()
  }

  render() {
    const { accountData, allPhotos } = this.props
    const myPhotos = getAccountPhotos(allPhotos, accountData)

    return (
      <View style={CommonStyles.layoutColumn}>
        <View style={styles.info}>
          <Info owner={accountData} />
        </View>
        <Photos photos={myPhotos} />
      </View>
    )
  }
}

export default AccountScreen
