import React from 'react'
import { render, wait } from 'react-testing-library'

// Components
import App from './App'

describe('Components', () => {
  describe('<App />', () => {
    it('Render with Supense and Lazy components without error', async () => {

      render(<App />)

      await wait()
    })
  })
})
