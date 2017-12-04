// Libs
import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Components
import CommentList from './CommentList'

// Mocking data
import { comments } from '@test/__mocks__/sample-data'

storiesOf('Components', module).add('Comment List', () => (
  <CommentList comments={comments} />
))
