import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Creators } from 'app/auth/redux/login'
import Login from '../../components/login'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loginWithFirebase: Creators.loginWithFirebaseProcessing,
    },
    dispatch,
  )
}

function mapStateToProps({ auth }) {
  return {
    login: auth.login,
    user: auth.user,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
