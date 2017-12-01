import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Config
import { photos } from '@test/__mocks__/sample-data'

// Component
import PostPhoto from './PostPhoto'

storiesOf('Components', module).add('PostPhoto', () => (
  <PostPhoto display_url={photos[0].display_url} />
))
