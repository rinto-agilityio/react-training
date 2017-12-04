// Libs
import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Mocking data
import { users } from '@test/__mocks__/sample-data'

// Components
import Comment from './Comment'

storiesOf('Components', module).add('Comment', () => (
  <Comment owner={users[0]} />
))
