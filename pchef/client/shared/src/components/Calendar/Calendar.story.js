// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Helper
import { wInfo } from '../../../.storybook/utils';

// Components
import Calendar from '.'

storiesOf('Calendar', module)
  .addDecorator(wInfo())
  .add('Default', () => (
    <Calendar
      selectedDay="2019-05-15"
      dayRange={{ minDate: '2019-01-01', maxDate: '2019-12-20' }}
      onSelectDay={action('clicked')}
    />
  ))
