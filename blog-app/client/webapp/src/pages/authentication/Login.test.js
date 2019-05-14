import Login from './Login';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import { BrowserRouter} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { SIGN_IN } from '../../graphql/author/queries';

describe('Login Component', () => {
  const props = {
    history: {
      push: jest.fn()
    }
  };

  const mocks = [
    {
      request: {
        query: SIGN_IN,
        variables: {
          email: 'rin.to@gmail.com',
          password: '123456'
        }
      },
      result: {
        data: {
          signIn: {
            success: true,
            message: 'login success',
            author: {
              id: '1557377599679',
              name: 'rinto',
              email: 'rin.to@gmail.com',
              password: '123456',
              avatar: ''
            }
          }
        }
      }
    }
  ];

  it('Test Login snapshot', () => {
    const renderComponent = renderer
      .create(
        <BrowserRouter>
          <MockedProvider mocks={mocks}>
            <Login />
          </MockedProvider>
        </BrowserRouter>
      )
      .toJSON();
    expect(renderComponent).toMatchSnapshot();
  });

  it('Test Login button should be clicked', async () => {
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn()
    };

    const component = mount(
      <BrowserRouter>
        <MockedProvider>
          <Login {...props} />
        </MockedProvider>
      </BrowserRouter>
    );
    component.find(Form).simulate('submit', {
      preventDefault: jest.fn()
    });
    await wait(10);
    expect(localStorageMock.setItem).toHaveBeenCalled();
  });

});
