import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Config
import { users } from '@test/__mocks__/sample-data'

// Component
import PostAuthor from './PostAuthor'

const { profile_pic_url, username } = users[0]

storiesOf('Components', module).add('PostAuthor', () => (
  <PostAuthor profile_pic_url={profile_pic_url} username={username} />
))
