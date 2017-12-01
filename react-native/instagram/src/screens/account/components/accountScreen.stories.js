import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { users, photos } from '@test/__mocks__/sample-data'
import AccountScreen from './AccountScreen'

storiesOf('Screens', module).add('Account', () => (
  <AccountScreen accountData={users[0]} myPhotos={photos} />
))
