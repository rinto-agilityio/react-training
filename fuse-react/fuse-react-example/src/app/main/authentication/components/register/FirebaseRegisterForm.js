import React, { useState, useEffect, useRef } from 'react'
import Formsy from 'formsy-react'
import { TextFieldFormsy } from '@fuse'
import { Button, InputAdornment, Icon } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const FirebaseRegisterForm = ({ registerWithFirebase, register }) => {
  const [canSubmit, setCanSubmit] = useState(false)
  const formEl = useRef(null)

  useEffect(() => {
    if (
      register.error &&
      (register.error.username ||
        register.error.password ||
        register.error.email)
    ) {
      formEl.current.updateInputsWithError({
        ...register.error,
      })
    }
  }, [register.error])

  const disableButton = () => {
    setCanSubmit(false)
  }

  const enableButton = () => {
    setCanSubmit(true)
  }

  const onSubmit = model => {
    registerWithFirebase(model)
  }

  return (
    <div className="w-full">
      <Formsy
        onValidSubmit={onSubmit}
        onValid={enableButton}
        onInvalid={disableButton}
        ref={formEl}
        className="flex flex-col justify-center w-full"
      >
        <TextFieldFormsy
          className="mb-16"
          type="text"
          name="displayName"
          label="Display name"
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
                  person
                </Icon>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          required
        />

        <TextFieldFormsy
          className="mb-16"
          type="text"
          name="email"
          label="Email"
          validations="isEmail"
          validationErrors={{
            isEmail: 'Please enter a valid email',
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
          validations="equalsField:password-confirm"
          validationErrors={{
            equalsField: 'Passwords do not match',
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

        <TextFieldFormsy
          className="mb-16"
          type="password"
          name="password-confirm"
          label="Confirm Password"
          validations="equalsField:password"
          validationErrors={{
            equalsField: 'Passwords do not match',
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
          className="w-full mx-auto mt-16 normal-case"
          aria-label="REGISTER WITH FIREBASE"
          disabled={!canSubmit}
        >
          Register with Firebase
        </Button>
      </Formsy>
    </div>
  )
}

export default withRouter(FirebaseRegisterForm)
