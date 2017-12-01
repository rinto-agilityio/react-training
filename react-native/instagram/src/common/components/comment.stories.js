import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { users } from '@test/__mocks__/sample-data'
import Comment from './Comment'

storiesOf('Components', module).add('Comment', () => (
  <Comment owner={users[0]} />
))
