import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../../components/login'
import { withRouter } from 'react-router-dom'
import * as authActions from 'app/auth/store/actions'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      submitLoginWithFireBase: authActions.submitLoginWithFireBase,
    },
    dispatch
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
