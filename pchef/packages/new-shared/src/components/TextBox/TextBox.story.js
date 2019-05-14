// Libs
import React, { useRef } from 'react'
import { storiesOf } from '@storybook/react'

// Components
import TextBox from '.'

const refInput = useRef(null)

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
