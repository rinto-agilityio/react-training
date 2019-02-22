import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { mount } from 'enzyme'

// GraphQL Query
import { QUERY_AUTHOR } from './Author.graphql'

// Components
import Author from './Author'
import Loading from '../../components/Loading'

// Mocking data response from for GraphQL server
const author = {
  "id": 1,
  "name": "Jake Prins",
  "photo": "https://cdn-images-1.medium.com/fit/c/100/100/1*_SiS1xvFOqiK6TnkiGcZ2A.jpeg",
  "desc": "Maker of things",
  "posts": []
}

const mockRequest = {
  query: QUERY_AUTHOR,
  variables: {
    id: author.id,
  },
}

const mockRequestSuccess = [
  {
    request: mockRequest,
    result: {
      data: {
        author: author
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
    id: author.id
  }
}

describe('Container', () => {
  describe('Author', () => {
    it('Render <Loading /> for the first time', () => {
      const wrapper = mount(
        <MockedProvider mocks={[]}>
          <Author match={mockProps} />
        </MockedProvider>
      )

      expect(wrapper.find(Loading).length).toEqual(1)
    })

    it('Render without error', () => {
      mount(
        <MockedProvider mocks={mockRequestSuccess} addTypename={false}>
          <Author match={mockProps} />
        </MockedProvider>
      )
    })

    it('Render correct author name from graph query: QUERY_AUTHOR', async () => {
      const wrapper = mount(
        <MockedProvider mocks={mockRequestSuccess} addTypename={false}>
          <Author match={mockProps} />
        </MockedProvider>
      )

      await new Promise(resolve => setTimeout(resolve))

      wrapper.update()

      expect(wrapper.find('h1').text()).toEqual(author.name)
    })

    it('Should show error on UI', async () => {
      const wrapper = mount(
        <MockedProvider mocks={mockRequestError} addTypename={false}>
          <Author match={mockProps} />
        </MockedProvider>
      )

      await new Promise(resolve => setTimeout(resolve))

      wrapper.update()

      expect(wrapper.html()).toContain('Error !!!')
    })
  })
})
