// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Themes
import { COLORS } from '../../themes'

// Components
import Icon from '.'

// Helper
import { wInfo } from '../../../.storybook/utils';

storiesOf('Icon', module)
  .addDecorator(wInfo())
  .add('Default', () => (
    <Icon
      onPress={action('clicked')}
      color={COLORS.icon.default}
      name="add-a-photo"
    />
  ))
  .add('Disabled', () => (
    <Icon
      onPress={action('clicked')}
      color={COLORS.icon.default}
      name="add-a-photo"
      disabled
    />
  ))
