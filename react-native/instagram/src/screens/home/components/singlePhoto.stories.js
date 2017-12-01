import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Mocking
import { photos } from '@test/__mocks__/sample-data'

// Component
import SinglePhoto from './SinglePhoto'

storiesOf('Screens', module).add('Home', () => <SinglePhoto item={photos[0]} />)
