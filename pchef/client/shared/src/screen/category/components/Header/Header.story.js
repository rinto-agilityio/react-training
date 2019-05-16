// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Header from '.'

// Mock
import { category } from '../../../../mocks'

storiesOf('Header', module).add('default', () => (
  <Header category={category} isGrid sizeType="large" />
))
