import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// Components
import Post from './index'
import Loading from '../../components/Loading'

// Mocking data
import * as MockData from '../../../server/db'
import { QUERY_POST } from './graphql'

const mockRequest = {
  query: QUERY_POST,
  variables: {
    slug: MockData.posts[0].slug
  }
}

const mockRequestSuccess = [
  {
    request: mockRequest,
    result: {
      data: {
        post: {
          ...MockData.posts[0],
          author: MockData.authors[0]
        }
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
// Mocking match props for router

const mockProps = {
  params: {
    slug: mockRequest.variables.slug
  }
}

describe('Pages', () => {
  describe('Post', () => {
    it('Show <Loading /> for the first time page init', () => {
      const wrapper = mount(
        <MockedProvider mocks={[]}>
          <Post match={mockProps} />
        </MockedProvider>
      )

      expect(wrapper.find(Loading).length).toEqual(1)
    })

    it('Render without error', () => {
      mount(
        <MockedProvider mocks={mockRequestSuccess} addTypename={false}>
          <Post match={mockProps} />
        </MockedProvider>
      )
    })

    it('Show correct Post title', async () => {
      const postTitle = mockRequestSuccess[0].result.data.post.title

      const wrapper = mount(
        <MockedProvider mocks={mockRequestSuccess} addTypename={false}>
          <Post match={mockProps} />
        </MockedProvider>
      )

      await new Promise(resolve => setTimeout(resolve))

      wrapper.update()

      expect(wrapper.find('h1').render().text()).toEqual(postTitle)
    })

    it('Show error component on UI', async () => {
      const wrapper = mount(
        <MockedProvider mocks={mockRequestError} addTypename={false}>
          <Post match={mockProps} />
        </MockedProvider>
      )

      await new Promise(resolve => setTimeout(resolve))

      wrapper.update()

      expect(wrapper.html()).toContain('Error !!!')
    })
  })
})
