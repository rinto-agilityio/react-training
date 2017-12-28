// Libs
import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Component
import Feed from './Feed'

// Mocking data
import { photos } from '@test/__mocks__/sample-data'

storiesOf('Screens', module).add('Home', () => <Feed item={photos[0]} />)
