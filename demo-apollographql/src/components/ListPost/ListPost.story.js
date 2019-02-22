import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

// Components
import ListPost from './ListPost'

// Mock data
import posts from './__mocks/db'

storiesOf('List', module)
  .add('ListPost', () => (
    <MemoryRouter>
      <ListPost posts={posts} />
    </MemoryRouter>
  ))
