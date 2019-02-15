import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

// Components
import ListAuthor from './index'

// Mock data
import { authors } from '../../../server/db'

storiesOf('List', module)
  .add('Authors', () => (
    <MemoryRouter>
      <ListAuthor authors={authors} />
    </MemoryRouter>
  ))
