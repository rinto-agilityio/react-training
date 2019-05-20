// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import TabHeaderItem from '.'

storiesOf('Profile tab', module).add('tab item', () => (
  <TabHeaderItem
    totalOfItem={10}
    name="recipes"
    active
    handlePressTab={action('press on tab')}
  />
))
