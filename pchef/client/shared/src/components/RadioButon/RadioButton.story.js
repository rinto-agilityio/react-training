// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import RadioButton from './index'

// Helper
import { wInfo } from '../../../.storybook/utils';

const group = [
  {
    id: '1',
    name: 'First',
  },
  {
    id: '2',
    name: 'Second',
  },
]

type Props = {
  groups: Array,
}

const StoryBookRadio = ({
  groups = [],
}: Props) => (
  <RadioButton
    value={group[0].id}
    onPress={action('checked')}
    label="First"
    status
    group={groups}
  />
)

storiesOf('Radio Button', module)
  .addDecorator(wInfo())
  .add('Checked', () => (
    <StoryBookRadio />
  ))

  .add('Unchecked', () => (
    <RadioButton
      value="second"
      onPress={action('checked')}
      label="Second"
      status={false}
      group={group}
    />
  ))

  .add('Disabled', () => (
    <RadioButton
      value="second"
      onPress={action('checked')}
      label="Disabled"
      disabled
      group={group}
    />
  ))
