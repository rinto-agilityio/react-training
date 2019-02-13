import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils'
import { mount } from 'enzyme'

// GraphQL Query
import { QUERY_AUTHOR } from './graphql'

// Components
import Author from './index'

// Mocking data response from for GraphQL server
const author = {
  "id": 1,
  "name": "Jake Prins",
  "photo": "https://cdn-images-1.medium.com/fit/c/100/100/1*_SiS1xvFOqiK6TnkiGcZ2A.jpeg",
  "desc": "Maker of things",
  "posts": []
}

const mocks = [
  {
    request: {
      query: QUERY_AUTHOR,
      variables: {
        id: author.id,
      },
    },
    result: {
      data: {
        author: author
      }
    }
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
    it('Render without error', () => {
      mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Author match={mockProps} />
        </MockedProvider>
      )
    })

    it('Render correct author name from graph query: QUERY_AUTHOR', async () => {
      const wrapper = mount(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Author match={mockProps} />
        </MockedProvider>
      )

      await new Promise(resolve => setTimeout(resolve))

      wrapper.update()

      expect(wrapper.find('h1').text()).toEqual(author.name)
    })
  })
})
