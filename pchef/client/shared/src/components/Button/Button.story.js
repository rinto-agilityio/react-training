// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Helper
import { wInfo } from '../../../.storybook/utils';

// Component
import Button from './index'

storiesOf('Button', module)
  .addDecorator(wInfo())
  .add('Default', () => (
    <Button
      title="Click me"
      onPress={action('clicked')}
      buttonStyle={{
        width: 100,
      }}
    />
  ))

  .add('Success', () => (
    <Button
      type="success"
      title="Click me"
      onPress={action('clicked')}
      buttonStyle={{
        width: 100,
      }}
    />
  ))

  .add('Danger', () => (
    <Button
      type="danger"
      title="Click me"
      onPress={action('clicked')}
      buttonStyle={{
        width: 100,
      }}
    />
  ))

  .add('Warning', () => (
    <Button
      type="warning"
      title="Click me"
      onPress={action('clicked')}
      buttonStyle={{
        width: 100,
      }}
    />
  ))

  .add('Info', () => (
    <Button
      type="info"
      title="Click me"
      onPress={action('clicked')}
      buttonStyle={{
        width: 100,
      }}
    />
  ))
