import React, { useRef } from 'react'
import { Button, InputAdornment, Icon } from '@material-ui/core'
import { TextFieldFormsy } from '@fuse'
import Formsy from 'formsy-react'
import { withRouter } from 'react-router-dom'

const FirebaseLoginForm = ({ submitLoginWithFireBase }) => {
  const formEl = useRef('')
  const onSubmit = model => {
    submitLoginWithFireBase(model)
  }
  return (
    <div className="w-full">
      <Formsy
        onValidSubmit={onSubmit}
        // onValid={this.enableButton}
        // onInvalid={this.disableButton}
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
          // ref={inputEmailEl}
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
          // ref={inputPassEl}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-full mx-auto normal-case mt-16"
          aria-label="LOG IN"
          // disabled={!canSubmit}
          value="firebase"
        >
          Log in with Firebase
        </Button>
      </Formsy>
    </div>
  )
}

export default withRouter(FirebaseLoginForm)
