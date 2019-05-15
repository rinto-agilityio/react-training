// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Component
import LoginForm from 'shared/src/screens/Login/LoginForm'

storiesOf('LoginForm', module)
  .add('LoginForm mobile', () => <LoginForm />)
  .add('LoginForm web', () => <LoginForm customStyle={{ width: '40%', padding: 30 }} />)
