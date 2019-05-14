import { MockedProvider } from 'react-apollo/test-utils';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { GET_POST } from '../../graphql/post/queries';
import waitForExpect from 'wait-for-expect';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import HomePage from './HomePage';

const loggedUser = {
  id: '1557377599679',
  email: 'rin.to@gmail.com',
  password: '123456',
  name: 'rinto'
};

const cache = new InMemoryCache();

const link = withClientState({
  resolvers: {
    Query: {
      loggedUser: () => {
        return loggedUser;
      }
    }
  },
  defaults: {
    loggedUser: {
      __typename: 'loggedUser',
      name: 'rinto',
      email: 'rin.to@gmail.com',
      id: '1557377599679',
      password: '123456',
      avatar: ''
    }
  },
  cache
});


const client = new ApolloClient({
  link,
  cache
});

describe('Test HomePage', () => {

  it('Test HomePage Loading State:', async () => {
    const mockClient = [
      {
        request: {
          query: GET_POST,
          variables: {authorId: '1557377599679',first: 3}
        },
        result: {
          data: {
            getPostsByAuthor: {
              message: 'get posts success',
              success: true,
              posts: [
                {
                  'id': '1557394571405',
                  'title': '33',
                  'content': '3',
                  'authorId': '1557377599679',
                  'author': {
                    'id': '1557377599679',
                    'email': 'rin.to@gmail.com',
                    'password': '123456',
                    'name': 'rinto'
                  }
                },
                {
                  'id': '1557394571405',
                  'title': '33',
                  'content': '3',
                  'authorId': '1557377599679',
                  'author': {
                    'id': '1557377599679',
                    'email': 'rin.to@gmail.com',
                    'password': '123456',
                    'name': 'rinto'
                  }
                },
                {
                  'id': '1557394571405',
                  'title': '33',
                  'content': '3',
                  'authorId': '1557377599679'
                },
                {
                  'id': '1557394571405',
                  'title': '33',
                  'content': '3',
                  'authorId': '1557377599679',
                  'author': {
                    'id': '1557377599679',
                    'email': 'rin.to@gmail.com',
                    'password': '123456',
                    'name': 'rinto'
                  }
                }
              ]
            }
          }
        }
      }
    ];

    const cache = {
      readQuery: jest.fn(() => ({
        posts: [
          {
            name: 'rinto',
            email: 'rin.to@gmail.com',
            id: '1557377599679',
            password: '123456',
            avatar: ''
          }
        ]
      })),
      writeQuery: jest.fn()
    };

    const renderComponent = mount(
      <BrowserRouter>
        <MockedProvider mocks={mockClient} cache={cache} addTypename={false} >
          <HomePage accessClient={client}/>
        </MockedProvider>
      </BrowserRouter>
    );

    expect(renderComponent.find('.spinner-border').exists()).toEqual(true);
  });

  it.skip('Test HomePage render final state:', async () => {
    const mockClient = [
      {
        request: {
          query: GET_POST,
          variables: {authorId: '1557377599679',first: 3}
        },
        result: {
          data: {
            getPostsByAuthor: {
              message: 'get posts success',
              success: true,
              posts: [
                {
                  'id': '1557394571405',
                  'title': '33',
                  'content': '3',
                  'authorId': '1557377599679',
                  'author': {
                    'id': '1557377599679',
                    'email': 'rin.to@gmail.com',
                    'password': '123456',
                    'name': 'rinto'
                  }
                },
                {
                  'id': '1557394571405',
                  'title': '33',
                  'content': '3',
                  'authorId': '1557377599679',
                  'author': {
                    'id': '1557377599679',
                    'email': 'rin.to@gmail.com',
                    'password': '123456',
                    'name': 'rinto'
                  }
                },
                {
                  'id': '1557394571405',
                  'title': '33',
                  'content': '3',
                  'authorId': '1557377599679'
                },
                {
                  'id': '1557394571405',
                  'title': '33',
                  'content': '3',
                  'authorId': '1557377599679',
                  'author': {
                    'id': '1557377599679',
                    'email': 'rin.to@gmail.com',
                    'password': '123456',
                    'name': 'rinto'
                  }
                }
              ]
            }
          }
        }
      }
    ];

    const cache = {
      readQuery: jest.fn(() => ({
        posts: [
          {
            name: 'rinto',
            email: 'rin.to@gmail.com',
            id: '1557377599679',
            password: '123456',
            avatar: ''
          }
        ]
      })),
      writeQuery: jest.fn()
    };

    const renderComponent = mount(
      <MockedProvider mocks={mockClient} cache={cache} addTypename={false} >
        <HomePage accessClient={client}/>
      </MockedProvider>
    );

    await waitForExpect(() => {
      renderComponent.update();
    });
  });
});
