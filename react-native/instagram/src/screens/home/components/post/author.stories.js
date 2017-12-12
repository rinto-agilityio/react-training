// Libs
import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Mocking data
import { users } from '@test/__mocks__/sample-data'

// Components
import PostAuthor from './Author'

const { profile_pic_url, username } = users[0]

storiesOf('Components', module).add('PostAuthor', () => (
  <PostAuthor profile_pic_url={profile_pic_url} username={username} />
))
