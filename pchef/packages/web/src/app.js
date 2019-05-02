import React from 'react'

// Components
import AppComponent from 'components/src/App'
import Counting from 'components/src/Counting'
import Button from 'components/src/Button'

const App = () => (
  <>
    <Counting />
    <AppComponent />
    <Button isWeb title="Click me" size="small" />
  </>
)

export default App
