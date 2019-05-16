// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import CommentForm from '.'

storiesOf('CommentForm', module)
  .add('primary', () => (
    <CommentForm avatarUri="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg" />
  ))
  .add('secondary', () => (
    <CommentForm
      avatarUri="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
      type="secondary"
    />
  ))
