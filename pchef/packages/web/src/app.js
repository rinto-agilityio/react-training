import React from 'react'

// Components
import AppComponent from 'shared/src/components/App'
import Counting from 'shared/src/components/Counting'
import Button from 'shared/src/components/Button'
import Icon from 'shared/src/components/Icon'
import Wrapper from 'shared/src/components/Wrapper'

const App = () => (
  <>
    <Counting />
    <Icon name="hourglass" />
    <AppComponent />
    <Wrapper>
      <Button title="Click me" size="small" />
    </Wrapper>
  </>
)

export default App
