import React from 'react'

// Components
import AppComponent from 'shared/src/components/App'
import Counting from 'shared/src/components/Counting'
import Button from 'shared/src/components/Button'
import Icon from 'shared/src/components/Icon'

const App = () => (
  <>
    <Counting />
    <Icon />
    <AppComponent />
    <Button title="Click me" size="small" />
  </>
)

export default App
