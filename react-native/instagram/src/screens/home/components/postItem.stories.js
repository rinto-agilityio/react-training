// Libs
import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Component
import PostItem from './PostItem'

// Mocking data
import { photos } from '@test/__mocks__/sample-data'

storiesOf('Screens', module).add('Home', () => <PostItem item={photos[0]} />)
