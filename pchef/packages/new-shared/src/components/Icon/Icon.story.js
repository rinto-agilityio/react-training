// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Themes
import { COLORS } from '../../themes'

// Components
import Icon from '.'

storiesOf('Icon', module)
  .add('default', () => (
    <Icon
      onPress={action('clicked')}
      color={COLORS.baseBlue}
      name="add-a-photo"
    />
  ))
  .add('disabled', () => (
    <Icon
      onPress={action('clicked')}
      color={COLORS.baseBlue}
      name="add-a-photo"
      disabled
    />
  ))
