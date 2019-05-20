import { MockedProvider } from 'react-apollo/test-utils';
import { CREATE_USER } from '../../../graphql/author/mutations';
import { Form } from 'react-bootstrap';
import SignUp from './SignUp';
import Indicator from '../../../components/commons/indicator/Indicator';
import waitForExpect from 'wait-for-expect';
import { BrowserRouter} from 'react-router-dom';

const mocks = [
  {
    request: {
      query: CREATE_USER,
      variables: {
        id: '1557799396370',
        email: 'rinto0503@gmail.com',
        password: '123456',
        name: 'rin to'
      }
    },
    result: {
      data: {
        signUp: {
          success: true,
          message: 'signup success',
          author: {
            id: '1557799396370',
            email: 'rinto0503@gmail.com',
            password: '123456',
            name: 'rin to'
          }
        }
      }
    }
  }
];

describe('Test SignUp', () => {

  it('Testing SignUp Loading state:', () => {

    const renderComponent = mount(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <SignUp />
        </MockedProvider>
      </BrowserRouter>
    );

    renderComponent.find(Form).simulate('submit', {
      preventDefault: jest.fn()
    });

    expect(renderComponent.find(Indicator).length).toEqual(1);
  });

  it('Testing SignUp Final state:', async () => {

    const renderComponent = mount(
      <BrowserRouter>
        <MockedProvider mocks={mocks} addTypename={false}>
          <SignUp />
        </MockedProvider>
      </BrowserRouter>
    );

    renderComponent.find(Form).simulate('submit', {
      preventDefault: jest.fn()
    });

    await waitForExpect(() => {
      renderComponent.update();
      expect(renderComponent.find(Form).exists()).toBeTruthy();
    });
  });

  it('Testing SignUp Final state:', async () => {
    const mocksError = [
      {
        request: {
          query: CREATE_USER,
          variables: {
            id: '1557799396370',
            email: 'rinto0503@gmail.com',
            password: '123456',
            name: 'rin to'
          }
        },
        error:  new Error('error')
      }
    ];
    const renderComponent = mount(
      <BrowserRouter>
        <MockedProvider mocks={mocksError} addTypename={false}>
          <SignUp />
        </MockedProvider>
      </BrowserRouter>
    );

    renderComponent.find(Form).simulate('submit', {
      preventDefault: jest.fn()
    });

    await waitForExpect(() => {
      renderComponent.update();

      expect(renderComponent.find(Form).exists()).toBeTruthy();
    });
  });

});
