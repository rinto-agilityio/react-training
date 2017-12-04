import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Component
import Info from './Info'

// Mocking
import { users } from '@test/__mocks__/sample-data'

storiesOf('Components', module).add('AccountInfo', () => (
  <Info data={users[0]} />
))
