import React, { useRef } from 'react'
import { Button, InputAdornment, Icon } from '@material-ui/core'
import { TextFieldFormsy } from '@fuse'
import Formsy from 'formsy-react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const FirebaseLoginForm = ({ submitLoginWithFireBase }) => {
  const formEl = useRef('')

  const onSubmit = model => {
    submitLoginWithFireBase(model)
  }

  return (
    <div className="w-full">
      <Formsy
        onValidSubmit={onSubmit}
        className="flex flex-col justify-center w-full"
        ref={formEl}
      >
        <TextFieldFormsy
          className="mb-16"
          type="text"
          name="username"
          label="User Name"
          validations={{
            minLength: 4,
          }}
          validationErrors={{
            minLength: 'Min character length is 4',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon className="text-20" color="action">
                  email
                </Icon>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          required
        />

        <TextFieldFormsy
          className="mb-16"
          type="password"
          name="password"
          label="Password"
          validations={{
            minLength: 4,
          }}
          validationErrors={{
            minLength: 'Min character length is 4',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon className="text-20" color="action">
                  vpn_key
                </Icon>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full mx-auto normal-case mt-16"
          aria-label="LOG IN"
          value="firebase"
        >
          Log in with Firebase
        </Button>
      </Formsy>
    </div>
  )
}

FirebaseLoginForm.propTypes = {
  submitLoginWithFireBase: PropTypes.func,
}

FirebaseLoginForm.defaultProps = {
  submitLoginWithFireBase: () => {},
}

export default withRouter(FirebaseLoginForm)
