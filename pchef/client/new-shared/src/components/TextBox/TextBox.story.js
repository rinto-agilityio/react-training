// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import TextBox from '.'

const refInput = {
  current: null,
}

storiesOf('TextBox', module)
  .add('default', () => (
    <TextBox
      placeholder="Default"
      refInput={refInput}
    />
  ))
  .add('multiline', () => (
    <TextBox
      placeholder="Multiline"
      multiline
      refInput={refInput}
    />
  ))
