import React from 'react'

// Components
import AppComponent from 'shared/src/components/App'
import Counting from 'shared/src/components/Counting'
import Button from 'shared/src/components/Button'
import Icon from 'shared/src/components/Icon'
import Layout from 'shared/src/components/Layout'

const App = () => (
  <>
    <Counting />
    <Icon />
    <Layout type='row' />
    <AppComponent />
    <Button title="Click me" size="small" />
  </>
)

export default App
