import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// Components
import Loading from '../../components/Loading'
import Post from './index'
import SinglePost from './components/SinglePost'

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

describe('Pages', () => {
  describe('Post', () => {

    // Mocking match props for router
    const props = {
            match: {
              params: {
                slug: mockRequest.variables.slug
              }
            }
          }

    it('Show <Loading /> for the first time page init', () => {
      const wrapper = mount(
        <MockedProvider mocks={[]}>
          <Post {...props} />
        </MockedProvider>
      )

      expect(wrapper.find(Loading).length).toEqual(1)
    })

    it('Show error component on UI', async () => {
      const PostPage = mount(
        <MockedProvider mocks={mockRequestError} addTypename={false}>
          <Post {...props} />
        </MockedProvider>
      )

      await new Promise(resolve => setTimeout(resolve))

      PostPage.update()

      expect(PostPage.html()).toContain('Error !!!')
    })

    describe('API without error', () => {
      const PostPage = mount(
        <MockedProvider mocks={mockRequestSuccess} addTypename={false}>
          <Post {...props} />
        </MockedProvider>
      )

      it('Render without error', () => {
        mount(
          <MockedProvider mocks={mockRequestSuccess} addTypename={false}>
            <Post {...props} />
          </MockedProvider>
        )
      })

      it('Render correctly SinglePost component', async () => {
        await new Promise(resolve => setTimeout(resolve))

        PostPage.update()

        expect(PostPage.find(SinglePost).length).toEqual(1)
      })
    })
  })
})
