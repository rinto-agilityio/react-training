import React from 'react'
import { Text } from 'react-native'

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
      <Layout type="row" >
        <Layout flexGrow={1}>
          <Text> item 1</Text>
          <Text> item 2</Text>
          <Text> item 3</Text>
        </Layout>
        <Layout flexGrow={3} type="row" position="spaceAround">
          <Text> item a</Text>
          <Text> item b</Text>
          <Text> item c</Text>
        </Layout>
      </Layout>
    <AppComponent />
    <Button title="Click me" size="small" />
  </>
)

export default App
