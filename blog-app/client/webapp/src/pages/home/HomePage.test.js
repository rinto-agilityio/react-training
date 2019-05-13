import { MockedProvider } from 'react-apollo/test-utils';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { GET_POST } from '../../graphql/post/queries';
import { LOGGED_USER } from '../../graphql/author/queries';
import { createHttpLink } from 'apollo-link-http';
import wait from 'waait';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

//components
import HomePage from './HomePage';
import PostList from '../../components/Posts/PostList';
import CreatePost from './CreatePost';
import Indicator from '../../components/commons/Indicator';

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

const loggedUser = {
  id: '1557377599679',
  email: 'rin.to@gmail.com',
  password: '123456',
  name: 'rinto'
};

const cache = new InMemoryCache();

// Create http link
const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
  fetch: fetch
});

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

  it.skip('Test HomePage render with client props:', async () => {
    expect(client.readQuery({query: LOGGED_USER})).toEqual(
      expect.objectContaining({
        loggedUser: {
          __typename: 'loggedUser',
          name: 'rinto',
          email: 'rin.to@gmail.com',
          id: '1557377599679',
          password: '123456',
          avatar: ''
        }
      })
    );

    const wrapper = mount(
      <MockedProvider mocks={mockClient} addTypename={false} >
        <BrowserRouter>
          <Switch>
            <HomePage accessClient={client}/>
          </Switch>
         </BrowserRouter>
      </MockedProvider>
    );

    await wait(101);

    expect(wrapper.find(Button).length).toBe(1);
  });

  it.skip('Test HomePage render with query GET_POST:', async () => {
    const renderComponent = renderer.create(
      <MockedProvider mocks={mockClient} addTypename={false} >
        <BrowserRouter>
          <Switch>
            <HomePage accessClient={client}/>
          </Switch>
         </BrowserRouter>
      </MockedProvider>
    );
    await wait(100);
    // renderComponent.update();
    expect(renderComponent.root.findByType('PostList')).toHaveLength(1);
  });
});
