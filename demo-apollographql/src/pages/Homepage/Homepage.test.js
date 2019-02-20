import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// GraphQL
import { QUERY_LATEST_POST_AND_TOP_AUTHORS } from './Homepage.graphql'

// Components
import Loading from '../../components/Loading'
import Homepage from './index'
import LatestPosts from './components/LatestPosts'
import TopAuthors from './components/TopAuthors'

// Mocking data
import * as MockData from '../../../server/db'

const mockRequest = {
  query: QUERY_LATEST_POST_AND_TOP_AUTHORS,
  variables: {}
}

const mockRequestSuccess = [
  {
    request: mockRequest,
    result: {
      data: {
        posts: MockData.posts,
        authors: MockData.authors
      }
    }
  }
]

const mockRequestError = [
  {
    request: mockRequest,
    error: new Error('This is error')
  }
]

describe('Screen', () => {
  describe('Homepage', () => {
    it('Render <Loading /> for the first time', () => {
      const wrapper = mount(
        <MockedProvider mocks={[]}>
          <Homepage />
        </MockedProvider>
      )

      expect(wrapper.find(Loading).length).toEqual(1)
    })

    it('Render without error', () => {
      mount(
        <MemoryRouter>
          <MockedProvider mocks={mockRequestSuccess} addTypename={false}>
            <Homepage />
          </MockedProvider>
        </MemoryRouter>
      )
    })

    it('Render correctly 2 sections for LatestPosts and TopAuthors', async () => {

      const wrapper = mount(
        <MemoryRouter>
          <MockedProvider mocks={mockRequestSuccess} addTypename={false}>
            <Homepage />
          </MockedProvider>
        </MemoryRouter>
      )

      await new Promise(resolve => setTimeout(resolve))

      wrapper.update()

      expect(wrapper.find(LatestPosts).length).toEqual(1)
      expect(wrapper.find(TopAuthors).length).toEqual(1)
    })

    it('Should show error on UI', async () => {
      const wrapper = mount(
        <MockedProvider mocks={mockRequestError} addTypename={false}>
          <Homepage />
        </MockedProvider>
      )

      await new Promise(resolve => setTimeout(resolve))

      wrapper.update()

      expect(wrapper.html()).toContain('Error !!!')
    })
  })
})
