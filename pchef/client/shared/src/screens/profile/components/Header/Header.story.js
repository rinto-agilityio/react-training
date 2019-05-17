// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import Header from '.'

// Mock
import { user } from '../../../../mocks'

storiesOf('Profile header', module).add('medium', () => (
  <Header
    size="medium"
    user={user}
    handleToSetting={action('direct to Setting')}
  />
))
