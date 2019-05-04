// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import Button from 'components/src/components/Button'

storiesOf('Modal', module)
  .add('Size small', () => (
    <Button
      title="Click me"
      size="small"
      onClick={action('clicked')}
      customStyle={{
        width: 100,
      }}
    />
  ))

  .add('Size medium', () => (
    <Button
      title="Click me"
      size="medium"
      onClick={action('clicked')}
      customStyle={{
        width: 200,
      }}
    />
  ))

  .add('Size large', () => (
    <Button
      title="Click me"
      size="large"
      onClick={action('clicked')}
      customStyle={{
        width: 400,
      }}
    />
  ))
