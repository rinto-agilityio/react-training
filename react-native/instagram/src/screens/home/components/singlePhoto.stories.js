// Libs
import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Component
import SinglePhoto from './SinglePhoto'

// Mocking data
import { photos } from '@test/__mocks__/sample-data'

storiesOf('Screens', module).add('Home', () => <SinglePhoto item={photos[0]} />)
