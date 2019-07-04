// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Themes
import { COLORS } from '../../themes'

// Components
import Loading from '.'

// Helper
import { wInfo } from '../../../.storybook/utils';

storiesOf('Loading', module)
  .addDecorator(wInfo())
  .add('Small', () => (
    <Loading size="small" />
  ))
  .add('Large', () => (
    <Loading size="large" color={COLORS.blue} />
  ))
