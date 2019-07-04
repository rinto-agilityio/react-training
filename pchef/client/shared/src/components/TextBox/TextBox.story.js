/* eslint no-console: "off" */
// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import TextBox from '.'

// Helper
import { wInfo } from '../../../.storybook/utils';

const refInput = {
  current: null,
}

storiesOf('TextBox', module)
  .addDecorator(wInfo())
  .add('Default', () => (
    <TextBox
      placeholder="Default"
      refInput={refInput}
      onBlur={action(value => value.target.value)}
      onChangeText={action(value => value)}
    />
  ))
  .add('Multiline', () => (
    <TextBox
      placeholder="Multiline"
      multiline
      refInput={refInput}
      onBlur={action(value => value)}
      onChangeText={action(value => value)}
    />
  ))
