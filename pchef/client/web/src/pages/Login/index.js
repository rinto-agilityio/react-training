import React from 'react'

// Containers
import LoginContainer from 'pchef-shared/src/containers/Login'

type Props = {
  history: Object
}

const Login = ({ history }: Props) => {
  const handlingLoginSuccess = (token: string) => {
    localStorage.setItem('token', token)
    history.push('/')
  }

  return (
    <>
      <h3>Login page</h3>
      <LoginContainer
        handlingLoginSuccess={handlingLoginSuccess}
      />
    </>
  )
}

export default Login
