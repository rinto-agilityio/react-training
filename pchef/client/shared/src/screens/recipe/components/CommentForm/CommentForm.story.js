// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import CommentForm from '.'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

storiesOf('CommentForm', module)
  .addDecorator(wInfo())
  .add('Primary', () => (
    <CommentForm avatarUri="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg" />
  ))
  .add('Secondary', () => (
    <CommentForm
      avatarUri="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
      type="secondary"
    />
  ))
