import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Mocking
import { users } from '@test/__mocks__/sample-data'

// Component
import Info from './Info'

storiesOf('Components', module).add('AccountInfo', () => (
  <Info data={users[0]} />
))
