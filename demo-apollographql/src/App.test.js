import React from 'react'
import { render, wait } from 'react-testing-library'

// Components
import App from './App'

/**
 * Note: This use other test lib
 * For Enzyme package, check this issue: https://github.com/airbnb/enzyme/issues/1917
 */
describe('Components', () => {
  describe('<App />', () => {
    it('Render with Supense and Lazy components without error', async () => {

      render(<App />)

      await wait()
    })
  })
})
