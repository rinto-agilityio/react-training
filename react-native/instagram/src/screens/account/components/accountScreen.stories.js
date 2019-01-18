// Libs
import React from 'react'
import { storiesOf } from '@storybook/react-native'

// Components
import AccountScreen from './AccountScreen'

// Mocking data
import { users, photos } from '@test/__mocks__/sample-data'

storiesOf('Screens', module)
  .add('Account', () => (
    <AccountScreen accountData={users[0]} myPhotos={photos} />
  ))
