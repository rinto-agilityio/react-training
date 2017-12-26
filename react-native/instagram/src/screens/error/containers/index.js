// Libs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Helpers
import { Creators as ErrorActionCreators } from '../actions'

// Components
import ErrorComponent from '../components/ErrorComponent'

const mapDispatchToProps = dispatch => bindActionCreators(
    {
      ...ErrorActionCreators
    },
    dispatch
  ),
  mapStateToProps = state => ({
    error: state.error
  })

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComponent)
