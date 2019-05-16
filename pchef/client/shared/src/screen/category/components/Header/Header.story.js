// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Header from '.'

// Mock
import { categories } from '../../../../mocks'

storiesOf('Header', module).add('default', () => (
  <Header category={categories[0]} isGrid sizeType="large" />
))
