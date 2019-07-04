// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import Header from '.'

// Mock
import { user } from '../../../../mocks'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

storiesOf('Profile header', module)
  .addDecorator(wInfo())
  .add('Medium', () => (
    <Header
      size="medium"
      user={user}
      handleToSetting={action('direct to Setting')}
    />
  ))
