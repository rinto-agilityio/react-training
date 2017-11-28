import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { photos } from '../../../test/__mocks__/sample-data'
import Photo from './Photos'

storiesOf('AccountScreen', module).add('Photo', () => <Photo data={photos} />)
