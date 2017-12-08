// Libs
import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Helpers
import { getAccountPhotos } from '@helpers/account-data'
import { Creators as AccountActionCreators } from '../actions'

// Components
import AccountScreen from '../components/AccountScreen'
import Icon from '@common/components/Icon'

// Styles
import CommonStyles from '@themes/common'
import Icons from '@themes/icons'

class AccountContainer extends React.Component {
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

    return <AccountScreen owner={accountData} photos={myPhotos} />
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
