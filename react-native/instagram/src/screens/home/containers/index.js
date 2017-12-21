// Libs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Helpers
import { Creators as HomeActionCreators } from '../actions'

// Components
import HomeScreen from '../components/HomeScreen'

const mapDispatchToProps = dispatch => bindActionCreators(
    {
      ...HomeActionCreators
    },
    dispatch
  ),
  mapStateToProps = state => ({
    homeData: state.home.data
  })

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
