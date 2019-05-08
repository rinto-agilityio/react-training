// Libs
import React from 'react'
import { Text } from 'react-native'

// Components
import AppComponent from 'shared/src/components/App'
import Counting from 'shared/src/components/Counting'
import Button from 'shared/src/components/Button'
import Icon from 'shared/src/components/Icon'
import Wrapper from 'shared/src/layout/Wrapper'
import Login from 'shared/src/screens/Login'

const App = () => (
  <>
    <Counting />
    <Icon name="thermometer" />
    <Wrapper direction="row" >
      <Wrapper flexGrow={1}>
        <Text> item 1</Text>
        <Text> item 2</Text>
        <Text> item 3</Text>
      </Wrapper>
      <Wrapper flexGrow={3} direction="row" childPosition="spaceAround">
        <Text> item a</Text>
        <Text> item b</Text>
        <Text> item c</Text>
      </Wrapper>
    </Wrapper>
    <AppComponent size="large"/>
    <Wrapper>
      <Button title="Click me" size="small" />
    </Wrapper>
    <Login customStyle={{ width: '40%', padding: 30 }}/>
  </>
)

export default App
