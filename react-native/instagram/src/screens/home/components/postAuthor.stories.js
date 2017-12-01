import React from 'react'
import { Text } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import { users } from '@test/__mocks__/sample-data'
import PostAuthor from './PostAuthor'

storiesOf('SinglePost', module).add('PostAuthor', () => (
  <Text>Todo storybook</Text>
))
