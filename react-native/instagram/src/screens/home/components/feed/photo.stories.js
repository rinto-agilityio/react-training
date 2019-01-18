import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Components
import PostPhoto from './Photo'

// Mocking data
import { photos } from '@test/__mocks__/sample-data'

storiesOf('Components', module).add('PostPhoto', () => (
  <PostPhoto display_url={photos[0].display_url} />
))
