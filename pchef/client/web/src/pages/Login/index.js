import React from 'react'

// Containers
import LoginContainer from 'pchef-shared/src/containers/Login'

const Login = ({ history }) => {
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
