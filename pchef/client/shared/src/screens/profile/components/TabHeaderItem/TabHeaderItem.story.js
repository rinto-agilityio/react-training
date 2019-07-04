// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import TabHeaderItem from '.'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

storiesOf('Profile tab', module)
  .addDecorator(wInfo())
  .add('Tab item', () => (
    <TabHeaderItem
      totalOfItem={10}
      name="recipes"
      active
      handlePressTab={action('press on tab')}
    />
  ))
