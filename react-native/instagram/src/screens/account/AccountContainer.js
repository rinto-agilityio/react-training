// Third party libs
import React from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Helpers
import { getAccountPhotos } from '@helpers/account-data'
import { Creators as AccountActionCreators } from './actions'

// Components
import Info from './components/Info'
import Photos from './components/Photos'

// Styles
import CommonStyles from '@themes/common'
import { styles } from './styles/AccountContainerStyles'

class AccountContainer extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('@assets/icons/avatar.png')}
        style={CommonStyles.tabBarIcon}
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
    const { accountData, allPhotos } = this.props,
      myPhotos = getAccountPhotos(allPhotos, accountData)

    return (
      <View style={CommonStyles.layoutColumn}>
        <View style={styles.info}>
          <Info data={accountData} />
        </View>
        <Photos data={myPhotos} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...AccountActionCreators
    },
    dispatch
  )
}

const mapStateToProps = state => {
  return {
    accountData: state.account,
    allPhotos: state.home.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)
