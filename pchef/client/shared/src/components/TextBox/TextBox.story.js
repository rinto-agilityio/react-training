// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

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
    />
  ))
  .add('Multiline', () => (
    <TextBox
      placeholder="Multiline"
      multiline
      refInput={refInput}
    />
  ))
