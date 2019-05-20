// Libs
import { MockedProvider } from 'react-apollo/test-utils';
import { BrowserRouter } from 'react-router-dom';

// Components
import PrivateRoute from './PrivateRoute';
import { LOGGED_USER } from '../graphql/author/queries';

it.skip('Return PrivateRoute snapshots', () => {
  const loggedUser = {
    id: '1557377599679',
    email: 'rin.to@gmail.com',
    password: '123456',
    name: 'rinto'
  };

  const mocks = [
    {
      request: {
        query: LOGGED_USER
      },
      result: {
        data: {
          loggedUser: loggedUser
        }
      }
    }
  ];
  const component = mount(
    <BrowserRouter>
      <MockedProvider mocks={mocks}>
        <PrivateRoute />
      </MockedProvider>
    </BrowserRouter>
  );

  expect(component).toMatchSnapshot();
});
