import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'

// Components
import Header from './index'

storiesOf('Layout', module)
  .add('Header', () => (
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ))
