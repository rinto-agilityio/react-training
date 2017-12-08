// Libs
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Helpers
import { Creators as UploadActionCreators } from '../actions'

// Components
import UploadScreen from '../components/UploadScreen'

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...UploadActionCreators
    },
    dispatch
  )
}

const mapStateToProps = state => {
  return {
    uploadData: state.upload,
    accountData: state.account
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadScreen)
