import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Register from '../../components/register'
import { withRouter } from 'react-router-dom'
import * as authActions from 'app/auth/store/actions'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      registerWithFirebase: authActions.registerWithFirebase,
    },
    dispatch
  )
}

function mapStateToProps({ auth }) {
  return {
    register: auth.register,
    user: auth.user,
    login: auth.login,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
)
