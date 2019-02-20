import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

// Components
import ListAuthor from './ListAuthor'

// Mock data
import authors from './__mocks/db'

storiesOf('List', module)
  .add('Authors', () => (
    <MemoryRouter>
      <ListAuthor authors={authors} />
    </MemoryRouter>
  ))
