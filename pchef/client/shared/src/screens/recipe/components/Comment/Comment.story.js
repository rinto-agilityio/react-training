// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Comment from '.'

storiesOf('Comment', module)
  .add('primary', () => (
    <Comment
      avatarUri="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
      name="Andy"
    />
  ))
  .add('secondary', () => (
    <Comment
      avatarUri="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
      name="Andy"
      type="secondary"
    />
  ))
