import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Creators } from 'app/auth/redux/actions/RegisterAction'
import Register from '../../components/register'

const dispatchToProps = {
  registerWithFirebase: Creators.registerWithFirebaseProcessing,
}

const mapStateToProps = ({ auth }) => ({
  register: auth.register,
  user: auth.user,
  login: auth.login,
})

export default withRouter(
  connect(
    mapStateToProps,
    dispatchToProps,
  )(Register),
)
