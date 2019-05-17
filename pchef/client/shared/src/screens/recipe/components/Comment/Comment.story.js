// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Comment from '.'

storiesOf('Comment', module)
  .add('primary', () => (
    <Comment
      name="Andy"
      publishedAt={Date.now()}
      text="Yummy"
    />
  ))
  .add('secondary', () => (
    <Comment
      type="secondary"
      name="Andy"
      publishedAt={Date.now()}
      text="Yummy"
    />
  ))
