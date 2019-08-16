import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { Creators } from 'app/auth/redux/register'
import Register from '../../components/register'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      registerWithFirebase: Creators.registerWithFirebaseProcessing,
    },
    dispatch,
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
    mapDispatchToProps,
  )(Register),
)
