import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

// Component
import PostFooter from './PostFooter'

// Mocking data
import { photos } from '@test/__mocks__/sample-data'

const { id, comments, owner, likes } = photos[0],
  isLiked = false,
  showComment = false

storiesOf('Components', module).add('PostFooter', () => (
  <PostFooter
    isLiked={isLiked}
    showComment={showComment}
    postId={id}
    likeCounting={likes.length}
    comments={comments}
    owner={owner}
    toggleLike={action('toggleLike')}
    toggleCommentBox={action('toggleCommentBox')}
  />
))
