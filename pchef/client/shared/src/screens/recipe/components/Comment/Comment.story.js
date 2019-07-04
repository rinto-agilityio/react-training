// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Comment from '.'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

storiesOf('Comment', module)
  .addDecorator(wInfo())
  .add('Primary', () => (
    <Comment
      name="Andy"
      publishedAt={Date.now()}
      text="Yummy"
    />
  ))
  .add('Secondary', () => (
    <Comment
      type="secondary"
      name="Andy"
      publishedAt={Date.now()}
      text="Yummy"
    />
  ))
