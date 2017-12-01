import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { comments } from '@test/__mocks__/sample-data'
import CommentList from './CommentList'

storiesOf('Components', module).add('Comment List', () => (
  <CommentList comments={comments} />
))
