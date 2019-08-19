import React from 'react'
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  // Tabs,
  Tab,
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { darken } from '@material-ui/core/styles/colorManipulator'
import { FuseAnimate } from '@fuse'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import FirebaseLoginForm from './FirebaseLoginForm'

const styles = theme => ({
  root: {
    background:
      'linear-gradient(to right, ' +
      theme.palette.primary.dark +
      ' 0%, ' +
      darken(theme.palette.primary.dark, 0.5) +
      ' 100%)',
    color: theme.palette.primary.contrastText,
  },
})

const Login = ({ classes, loginWithFirebase, error }) => (
  <div
    className={classNames(
      classes.root,
      'flex flex-col flex-1 flex-no-shrink p-24 md:flex-row md:p-0',
    )}
  >
    <div className="flex flex-col flex-no-grow items-center text-white p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left">
      <FuseAnimate animation="transition.expandIn">
        <img
          className="w-128 mb-32"
          src="assets/images/logos/fuse.svg"
          alt="logo"
        />
      </FuseAnimate>

      <FuseAnimate animation="transition.slideUpIn" delay={300}>
        <Typography variant="h3" color="inherit" className="font-light">
          Welcome to the FUSE!
        </Typography>
      </FuseAnimate>

      <FuseAnimate delay={400}>
        <Typography
          variant="subtitle1"
          color="inherit"
          className="max-w-512 mt-16"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ullamcorper nisl erat, vel convallis elit fermentum pellentesque.
          Sed mollis velit facilisis facilisis.
        </Typography>
      </FuseAnimate>
    </div>

    <FuseAnimate animation={{ translateX: [0, '100%'] }}>
      <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>
        <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">
          <Typography variant="h6" className="text-center md:w-full mb-48">
            LOGIN TO YOUR ACCOUNT
          </Typography>
          <Tab
            icon={(
              <img
                className="h-40"
                src="assets/images/logos/firebase.svg"
                alt="firebase"
              />
            )}
            className="min-w-0"
            label="Firebase"
          />
          <FirebaseLoginForm
            submitLoginWithFireBase={loginWithFirebase}
            error={error}
          />
          <div className="flex flex-col items-center justify-center pt-32">
            <span className="font-medium">Don't have an account?</span>
            <Link className="font-medium" to="/register">
              Create an account
            </Link>
          </div>
        </CardContent>
      </Card>
    </FuseAnimate>
  </div>
)

Login.propTypes = {
  classes: PropTypes.object,
  loginWithFirebase: PropTypes.func,
  error: PropTypes.object,
}

Login.defaultProps = {
  classes: {},
  loginWithFirebase: () => {},
  error: {},
}

export default withStyles(styles, { withTheme: true })(withRouter(Login))
