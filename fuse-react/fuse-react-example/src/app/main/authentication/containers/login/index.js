import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Creators } from 'app/auth/redux/login'
import Login from '../../components/login'


const dispatchToProps = {
  loginWithFirebase: Creators.loginWithFirebaseProcessing,
}

const mapStateToProps = ({ auth }) => ({
  login: auth.login,
  user: auth.user,
})

export default withRouter(
  connect(
    mapStateToProps,
    dispatchToProps,
  )(Login),
)
