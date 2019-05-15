import { MockedProvider } from 'react-apollo/test-utils';
import { CREATE_POST } from '../../graphql/post/mutations';
import { Form } from 'react-bootstrap';
import CreatePost from './CreatePost';
import Indicator from '../../components/commons/Indicator';
import waitForExpect from 'wait-for-expect';

const mocks = [
  {
    request: {
      query: CREATE_POST,
      variables: {
        id: '1557799396370',
        title: 'title123',
        content: 'content123',
        authorId: '1557377599679'
      }
    },
    result: {
      data: {
        createPost: {
          id: '1557799396370',
          title: 'title123',
          content: 'content123',
          author: {
            name: 'rinto'
          }
        }
      }
    }
  }
];

const props = {
  history: {
    push: jest.fn()
  },
  handleCloseModal: jest.fn()
};

describe('Test CreatePost', () => {

  it('Testing CreatePost Loading state:', () => {
    const renderComponent = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CreatePost {...props}/>
      </MockedProvider>
    );

    renderComponent.find(Form).simulate('submit', {
      preventDefault: jest.fn()
    });

    expect(renderComponent.find(Indicator).length).toEqual(1);
  });

  it.skip('Testing CreatePost final state:', async () => {
    const renderComponent = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CreatePost {...props} />
      </MockedProvider>
    );

    renderComponent.find(Form).simulate('submit', {
      preventDefault: jest.fn()
    });

    await waitForExpect(() => {
      renderComponent.update();

      expect(renderComponent.find(Form).exists()).toBeTruthy();
    });
  });

  it('Testing CreatePost Erorr state:', async () => {
    const mocksClient = [
    {
      request: {
        query: CREATE_POST,
        variables: {
          id: '1557799396370',
          title: 'title123',
          content: 'content123',
          authorId: '1557377599679'
        }
      },
      error: new Error(),
    }];

    const props = {
      history: {
        push: jest.fn()
      },
      handleCloseModal: jest.fn(),

    };

    const renderComponent = mount(
      <MockedProvider mocks={mocksClient} addTypename={false}>
        <CreatePost {...props} />
      </MockedProvider>
    );

    renderComponent.find(Form).simulate('submit', {
      preventDefault: jest.fn()
    });

    await waitForExpect(() => {
      expect(renderComponent.text()).toContain('Error!');
    });
  });

});
