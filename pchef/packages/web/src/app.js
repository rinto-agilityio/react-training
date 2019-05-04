import React from 'react'

// Components
import AppComponent from 'components/src/components/App'
import Counting from 'components/src/components/Counting'
import Button from 'components/src/components/Button'
import Icon from 'components/src/components/Icon'

const App = () => (
  <>
    <Counting />
    <Icon />
    <AppComponent />
    <Button title="Click me" size="small" />
  </>
)

export default App
