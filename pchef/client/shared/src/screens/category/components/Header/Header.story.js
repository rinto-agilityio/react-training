// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Header from '.'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

// Mock
import { categories } from '../../../../mocks'

storiesOf('Header', module)
  .addDecorator(wInfo())
  .add('Default', () => (
    <Header category={categories[0]} isGrid size="large" />
  ))
