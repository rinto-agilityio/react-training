// Libs
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

// Components
import PostAction from './PostAction'

storiesOf('Components', module).add('PostAction', () => (
  <PostAction
    toggleLike={action('toggleLike')}
    toggleCommentBox={action('toggleCommentBox')}
  />
))
