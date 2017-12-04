// Libs
import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Mocking
import { photos } from '@test/__mocks__/sample-data'

// Components
import Photo from './Photos'

storiesOf('Components', module).add('AccountPhotos', () => (
  <Photo data={photos} />
))
