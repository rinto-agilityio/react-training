// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Tag from '.'

// Helper
import { wInfo } from '../../../.storybook/utils';

storiesOf('Tag', module)
  .addDecorator(wInfo())
  .add('Default', () => (
    <Tag
      onClose={action('clicked')}
    >
      Test
    </Tag>
  ))
  .add('Disabled', () => (
    <Tag
      onClose={action('clicked')}
      disabled="true"
    >
      Test
    </Tag>
  ))
