// Third party libs
import React from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Helpers
import { getAccountPhotos } from '@helpers/account-data'
import { Creators as AccountActionCreators } from './actions'

// Components
import AccountScreen from './components/AccountScreen'

// Styles
import CommonStyles from '@themes/common'

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
    const { accountData, allPhotos } = this.props
    const myPhotos = getAccountPhotos(allPhotos, accountData)

    return <AccountScreen accountData={accountData} myPhotos={myPhotos} />
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
