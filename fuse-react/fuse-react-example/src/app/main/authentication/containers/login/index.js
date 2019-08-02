import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../../components/login'
import { withRouter } from 'react-router-dom'
import authReducer from '../../store/reducers'
import * as Actions from '../../store/actions'

import withReducer from 'app/store/withReducer'

function mapDispatchToProps(dispatch) {
  console.log('loginWithFirebase', Actions.loginWithFirebase)
  return bindActionCreators(
    {
      loginWithFirebase: Actions.loginWithFirebase
    },
    dispatch
  );
}

function mapStateToProps({ auth }) {
  return {
    login: auth.login,
    user: auth.user
  };
}

export default withReducer('auth', authReducer)(
  withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Login)
  )
)
