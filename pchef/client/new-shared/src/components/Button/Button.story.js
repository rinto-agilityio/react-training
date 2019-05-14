// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import Button from './index'

storiesOf('Button', module)
  .add('default', () => (
    <Button
      title="Click me"
      onPress={action('clicked')}
      buttonStyle={{
        width: 100,
      }}
    />
  ))

  .add('success', () => (
    <Button
      type="success"
      title="Click me"
      onPress={action('clicked')}
      buttonStyle={{
        width: 100,
      }}
    />
  ))

  .add('danger', () => (
    <Button
      type="danger"
      title="Click me"
      onPress={action('clicked')}
      buttonStyle={{
        width: 100,
      }}
    />
  ))

  .add('warning', () => (
    <Button
      type="warning"
      title="Click me"
      onPress={action('clicked')}
      buttonStyle={{
        width: 100,
      }}
    />
  ))

  .add('info', () => (
    <Button
      type="info"
      title="Click me"
      onPress={action('clicked')}
      buttonStyle={{
        width: 100,
      }}
    />
  ))
