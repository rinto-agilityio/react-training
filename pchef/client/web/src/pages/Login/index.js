import React from 'react'

// Containers
import LoginContainer from 'pchef-shared/src/screens/login/containers'

type Props = {
  history: Object
}

const Login = ({ history }: Props) => {
  const handlingLoginSuccess = (token: string) => {
    localStorage.setItem('token', token)
    history.push('/')
  }

  return (
    <LoginContainer
      handlingLoginSuccess={handlingLoginSuccess}
      handleNavigateHome={() => history.push('/')}
      handleNavigateWelcome={() => history.push('/welcome')}
    />
  )
}

export default Login
