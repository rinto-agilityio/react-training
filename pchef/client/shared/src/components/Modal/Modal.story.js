// Libs
import React from 'react'
import { Text } from 'react-native'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Modal from '.'

// Helper
import { wInfo } from '../../../.storybook/utils';

storiesOf('Modal', module)
  .addDecorator(wInfo())
  .add('Have title', () => (
    <Modal
      onDismiss={action('clicked')}
      visible
      onSubmit={action('clicked')}
      title="Modal"
    >
      <Text>Modal content</Text>
    </Modal>
  ))
  .add('No title', () => (
    <Modal
      onDismiss={action('clicked')}
      visible
      onSubmit={action('clicked')}
    >
      <Text>Modal content</Text>
    </Modal>
  ))
  .add('Have dismiss button', () => (
    <Modal
      onDismiss={action('clicked')}
      visible
      onSubmit={action('clicked')}
      dismissBtn
    >
      <Text>Modal content</Text>
    </Modal>
  ))
