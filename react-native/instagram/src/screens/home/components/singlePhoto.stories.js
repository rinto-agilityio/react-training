import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { photos } from '@test/__mocks__/sample-data'
import SinglePhoto from './SinglePhoto'

storiesOf('HomeScreen', module).add('SinglePhoto', () => (
  <SinglePhoto item={photos[0]} />
))
