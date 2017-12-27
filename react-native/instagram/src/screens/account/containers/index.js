// Libs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Helpers
import { Creators as AccountActionCreators } from '../actions'

// Components
import AccountScreen from '../components/AccountScreen'

const mapDispatchToProps = dispatch => bindActionCreators(
    {
      ...AccountActionCreators
    },
    dispatch
  ),
  mapStateToProps = state => ({
    accountData: state.account,
    allPhotos: state.home.data
  })

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen)
