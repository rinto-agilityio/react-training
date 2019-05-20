// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Component
import Category from '.'

// Mock
import { categories } from '../../../../mocks'

storiesOf('Profile category', module).add('default', () => (
  <Category category={categories[0]} />
))
